---
permalink: /
title: "About Me"
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

I am highly passionate about two things: **Conversational AI** and **AI Democratization**. In my work, I try to marry these two goals wherever possible.

The direction of dialogue systems research today (even more so than other forms of AI) is controlled excessively by giant players in the industry (case in point: personal assistants like Alexa and Siri). Dialogue research, owing to its inherently interactive nature, lags behind more “well-defined” NLP tasks such as question-answering and information extraction. I see this as a problem in both the short-term as well as the long-run. Given the centrality of dialogue in our lives, I believe it is simply too risky to leave the development of these systems to third-party entities, however well-intentioned they may be.

In the short-run, I think the most amount of progress can be made by distilling (pun intended) the advances made in large language models (LLMs) to resource-poor settings (i.e., involving less data, users with low technical expertise, low compute power, and lack of easy availability of human subjects).

In the medium- to long-run, I think the ultimate way to democratize Conversational AI is by empowering individuals to build, analyze, modify, and own their own dialogue systems. Most importantly, these dialogue systems must be able to advocate for the users’ best interests.

Finally, I am a firm believer that open-source research, software frameworks, and end-products is the means through which we can achieve the above ends.

## Strand 1: Conversational AI for Low-Resource Domains

In my PhD, I am investigating ML/NLP methods that can enable people to build dialogue systems for resource-poor domains (I am advised by Kristy Boyer in my PhD, [who works on building systems for and analyzing dialogue for CS education](http://learndialogue.org/)). 

For a course project, I developed a [proof-of-concept](https://github.com/msamogh/tod-eye-gaze-ui) for an approach that leverages eye-gaze tracking to help dialogue researchers to understand the effectiveness of their experimental setup before running full-blown, expensive crowdsourcing experiments on platforms such as Amazon M-Turk.

I am currently working on extending dialogue state tracking approaches for multi-issue negotiations, which is an underserved dialogue paradigm. Negotiation is a sub-dialogue form in pair-programming, and there is currently very limited research on using SoTA NLP techniques to track information across negotiation.


## Strand 2: Open-Source Tools for ML/NLP/Dialogue

I have been fortunate to be able to engage with open-source in several roles. Most recently, I worked at Rasa, where I got to work alongside an amazing team of Conversational AI developers and researchers. Following that, I also worked on a [proof-of-concept](https://github.com/msamogh/rasa-frames) that extended Rasa’s dialogue manager with the ability to track multiple frames in a dialogue. As an individual contributor, I built [nonechucks](https://github.com/msamogh/nonechucks) (a PyTorch-based library for ML developers to deal with “messy” sources of data).

I also enjoy and have experience working on ML infrastructure during my time at Rasa, IBM Watson, and [an NLP startup](https://cruxintelligence.com/) who develop Text-to-SQL semantic-parsing. In all these places, I was heavily involved in software development for their ML-based platforms. As an individual contributor, I have also made small-scaled contributions to production-level codebases such as TensorFlow.

## Updates
### September 2022
- Attending [SIGDIAL 2022](https://2022.sigdial.org/) at Edinburgh, UK

<!-- 
A data-driven personal website
======
Like many other Jekyll-based GitHub Pages templates, academicpages makes you separate the website's content from its form. The content & metadata of your website are in structured markdown files, while various other files constitute the theme, specifying how to transform that content & metadata into HTML pages. You keep these various markdown (.md), YAML (.yml), HTML, and CSS files in a public GitHub repository. Each time you commit and push an update to the repository, the [GitHub pages](https://pages.github.com/) service creates static HTML pages based on these files, which are hosted on GitHub's servers free of charge.

Many of the features of dynamic content management systems (like Wordpress) can be achieved in this fashion, using a fraction of the computational resources and with far less vulnerability to hacking and DDoSing. You can also modify the theme to your heart's content without touching the content of your site. If you get to a point where you've broken something in Jekyll/HTML/CSS beyond repair, your markdown files describing your talks, publications, etc. are safe. You can rollback the changes or even delete the repository and start over -- just be sure to save the markdown files! Finally, you can also write scripts that process the structured data on the site, such as [this one](https://github.com/academicpages/academicpages.github.io/blob/master/talkmap.ipynb) that analyzes metadata in pages about talks to display [a map of every location you've given a talk](https://academicpages.github.io/talkmap.html).

Getting started
======
1. Register a GitHub account if you don't have one and confirm your e-mail (required!)
1. Fork [this repository](https://github.com/academicpages/academicpages.github.io) by clicking the "fork" button in the top right. 
1. Go to the repository's settings (rightmost item in the tabs that start with "Code", should be below "Unwatch"). Rename the repository "[your GitHub username].github.io", which will also be your website's URL.
1. Set site-wide configuration and create content & metadata (see below -- also see [this set of diffs](http://archive.is/3TPas) showing what files were changed to set up [an example site](https://getorg-testacct.github.io) for a user with the username "getorg-testacct")
1. Upload any files (like PDFs, .zip files, etc.) to the files/ directory. They will appear at https://[your GitHub username].github.io/files/example.pdf.  
1. Check status by going to the repository settings, in the "GitHub pages" section

Site-wide configuration
------
The main configuration file for the site is in the base directory in [_config.yml](https://github.com/academicpages/academicpages.github.io/blob/master/_config.yml), which defines the content in the sidebars and other site-wide features. You will need to replace the default variables with ones about yourself and your site's github repository. The configuration file for the top menu is in [_data/navigation.yml](https://github.com/academicpages/academicpages.github.io/blob/master/_data/navigation.yml). For example, if you don't have a portfolio or blog posts, you can remove those items from that navigation.yml file to remove them from the header. 

Create content & metadata
------
For site content, there is one markdown file for each type of content, which are stored in directories like _publications, _talks, _posts, _teaching, or _pages. For example, each talk is a markdown file in the [_talks directory](https://github.com/academicpages/academicpages.github.io/tree/master/_talks). At the top of each markdown file is structured data in YAML about the talk, which the theme will parse to do lots of cool stuff. The same structured data about a talk is used to generate the list of talks on the [Talks page](https://academicpages.github.io/talks), each [individual page](https://academicpages.github.io/talks/2012-03-01-talk-1) for specific talks, the talks section for the [CV page](https://academicpages.github.io/cv), and the [map of places you've given a talk](https://academicpages.github.io/talkmap.html) (if you run this [python file](https://github.com/academicpages/academicpages.github.io/blob/master/talkmap.py) or [Jupyter notebook](https://github.com/academicpages/academicpages.github.io/blob/master/talkmap.ipynb), which creates the HTML for the map based on the contents of the _talks directory).

**Markdown generator**

I have also created [a set of Jupyter notebooks](https://github.com/academicpages/academicpages.github.io/tree/master/markdown_generator
) that converts a CSV containing structured data about talks or presentations into individual markdown files that will be properly formatted for the academicpages template. The sample CSVs in that directory are the ones I used to create my own personal website at stuartgeiger.com. My usual workflow is that I keep a spreadsheet of my publications and talks, then run the code in these notebooks to generate the markdown files, then commit and push them to the GitHub repository.

How to edit your site's GitHub repository
------
Many people use a git client to create files on their local computer and then push them to GitHub's servers. If you are not familiar with git, you can directly edit these configuration and markdown files directly in the github.com interface. Navigate to a file (like [this one](https://github.com/academicpages/academicpages.github.io/blob/master/_talks/2012-03-01-talk-1.md) and click the pencil icon in the top right of the content preview (to the right of the "Raw | Blame | History" buttons). You can delete a file by clicking the trashcan icon to the right of the pencil icon. You can also create new files or upload files by navigating to a directory and clicking the "Create new file" or "Upload files" buttons. 

Example: editing a markdown file for a talk
![Editing a markdown file for a talk](/images/editing-talk.png)

For more info
------
More info about configuring academicpages can be found in [the guide](https://academicpages.github.io/markdown/). The [guides for the Minimal Mistakes theme](https://mmistakes.github.io/minimal-mistakes/docs/configuration/) (which this theme was forked from) might also be helpful. -->
