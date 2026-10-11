// Spotlight noise, sticky-nav border, workbench filters. No dependencies.
(() => {
  const WORDS = [
    "one more tab", "inbox (47)", "reply later", "what was I doing?", "for you", "breaking", "trending",
    "just checking", "5 min break", "rabbit hole", "ping", "context switch", "unread", "remind me", "half-done",
    "where was I", "new message", "notifications", "doomscroll", "autoplay in 3…", "someday", "snooze",
    "is it Friday?", "a quick look", "Wikipedia", "deadline", "maybe later", "you were mentioned", "sale ends",
    "seen 2h ago", "live now", "don't forget", "open loops", "later later", "→ refresh", "draft (3)",
  ];

  // Deterministic scatter so both layers line up and the layout doesn't jump between loads.
  function rng(seed) { return () => ((seed = (seed * 16807) % 2147483647) / 2147483647); }

  document.querySelectorAll("[data-spotlight]").forEach((hero, h) => {
    const soft = hero.querySelector(".noise-soft"), sharp = hero.querySelector(".noise-sharp");
    if (!soft || !sharp) return;
    const r = rng(1234 + h * 99);
    const n = window.innerWidth < 700 ? 18 : 40;
    let html = "";
    for (let i = 0; i < n; i++) {
      const w = WORDS[Math.floor(r() * WORDS.length)];
      const x = (r() * 100).toFixed(1), y = (r() * 96 + 2).toFixed(1);
      const s = (11 + r() * 9).toFixed(0), rot = ((r() - .5) * 8).toFixed(1);
      html += `<span style="left:${x}%;top:${y}%;--s:${s}px;--rot:${rot}deg">${w}</span>`;
    }
    soft.innerHTML = sharp.innerHTML = html;

    const set = (x, y) => { hero.style.setProperty("--x", x + "px"); hero.style.setProperty("--y", y + "px"); };
    let user = false;
    hero.addEventListener("pointermove", (e) => {
      const b = hero.getBoundingClientRect();
      user = true;
      set(e.clientX - b.left, e.clientY - b.top);
    });
    hero.addEventListener("pointerleave", () => { user = false; });

    // When nobody is steering, attention wanders on its own.
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t0 = performance.now();
    const drift = (t) => {
      if (!user) {
        const b = hero.getBoundingClientRect(), s = (t - t0) / 1000;
        set(b.width * (.5 + .38 * Math.sin(s * .23 + h)), b.height * (.5 + .36 * Math.sin(s * .37 + 1.3)));
      }
      requestAnimationFrame(drift);
    };
    requestAnimationFrame(drift);
  });

  const nav = document.querySelector(".nav");
  if (nav) {
    const onScroll = () => nav.classList.toggle("scrolled", scrollY > 8);
    addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  const chips = document.querySelectorAll(".chip[data-filter]");
  chips.forEach((chip) => chip.addEventListener("click", () => {
    const f = chip.dataset.filter;
    chips.forEach((c) => c.setAttribute("aria-pressed", String(c === chip)));
    document.querySelectorAll(".app[data-category]").forEach((a) => { a.hidden = f !== "all" && a.dataset.category !== f; });
  }));
})();
