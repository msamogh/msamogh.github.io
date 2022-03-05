---
layout: post
title: "Them Pesky Little Slots"
date:   2020-02-13
categories: dialogue
---
When I first came across the problem of Dialog State Tracking, visions of "models" that tracked the user's "mental state" while having a conversation floated in my head. Then I began my expedition of wanting to concretize what this actually meant.

But to my dismay, instead of encountering fancy models and theories of what the user wants, I was disappointed to find in the dialog state tracking literature little beyond mentions of slot extraction. These pesky little slots seemed to have brought down my lofty visions crashing down.

Now, as a sidenote, I wish to mention that during this whole thought-experiment, I explicitly factored away "dialog management" into a separate problem. Because there was no scenario I could think of where the information needed to answer "What to do next" could not be captured in key-value pairs. For crying out loud, I can almost feel my brain doing the exact same thing when I want to make such a decision.

But coming back to the problem of representation. I thought to myself, "Surely what I have in my head when talking to a customer service representative can't be reduced to a bunch of key-value pairs!". So I began the mental exercise of trying to find an edge-case where I had something in mind that could not be captured in slots. I was sure to find an entire ocean of data structures that would be needed here. Except I couldn't.

This made me respect the pesky little creatures a bit more. But I was still not done. Maybe key-value pairs as a data structure were general enough to capture all this information. But then there must still be something additional to tracking dialog beyond the NLU formalism of identifying one or more intent and extracting some entities. In fact, if you think about it, even the intent is just a specialized slot. You can just have a slot named "intent" and do away with the whole concept of "intents" or "dialog acts" altogether and you'd still be fine (in light of this, I will no longer separately mention the intent, and instead refer to both of them cumulatively as "slots").

Yes, there certainly was something additional to NLU at play in the dialog state tracking problem. But what was it? Before we look at the differences, let's look at the similarities. Both NLU and DST need a bunch of key-value pairs. In the former case, they are called entities. In the latter case, they are called slots. However, the former is limited to extracting strings from the user utterance as is. If the user says "Book a table for 3 adults and 2 children", NLU systems can only extract "3" and "2" as is. However, for assigning values to the slots, you can have an intermediate processing step where you convert "3" and "2" into "5" (for convenience purposes because your restaurant doesn't have specialized chairs / tables for kids).

So is the difference between entities and slots just "smart preprocessing"? Yes, but not just preprocessing that can be done on just the immediate user utterance. Nothing prevents you from using past information to inform the slot value assignment. If the user later says "Actually, make it 1 child", you now have to reason over multiple steps in the dialog to arrive at the final number you care about - 4.

To summarize, DST differs from NLU in that NLU takes as input the most recent user utterance, whereas DST takes as input the most recent NLU output, along with past NLU outputs, and performs some additional magic upon it.

But we are forgetting something important. The F-word. That's right - Frames! But before we introduce this new abstraction, we must confirm that a frame cannot be represented using our existing formalisms (we have only one - slots). A frame can be thought of as a set of slots. Multiple frames mean multiple sets of slots. So in a way, by introducing frames, we are just going from a single set of slots to multiple sets of slots. Not too bad for efficiency.

In short, we take the NLU output as an input, along with past NLU inputs, and other set of slots, perform some magic, and then update some slots. Phew!

The issue here is unknown unknowns. While I was able to reason through all this because I knew about all these abstractions beforehand, I do not have a strong argument for why there couldn't exist a conversation out there that could not be modeled even by this relatively complicated model. In my opinion, the best way to proceed is to simply assume that you have everything you need and proceed to work with it. Real life has a way of breaking models. However, until it does, I will stick with this.