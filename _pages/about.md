---
layout: research
permalink: /
title: "AI for the physical sciences"
excerpt: "Vinicius Mikuni develops machine learning methods for the physical sciences at KMI, Nagoya University."
redirect_from:
  - /about/
  - /about.html
---
<section class="hero wrap" aria-labelledby="hero-title">
  <div><p class="eyebrow">Vinicius Mikuni · Physicist</p>
    <h1 id="hero-title">Learning from data.<br><em>Exploring the Universe.</em></h1>
    <p class="intro">I'm an Associate Professor at the <a href="https://www.kmi.nagoya-u.ac.jp/eng/">Kobayashi–Maskawa Institute</a>, Nagoya University. My group develops machine learning methods to understand the physical world, from particle collisions to the cosmos.</p>
    <div class="hero-actions"><a class="button" href="#highlights">Explore the research <span aria-hidden="true"></span></a><a class="text-link" href="mailto:vinicius.mikuni@gmail.com">Get in touch</a></div>
  </div>
  <figure class="portrait"><img src="{{ '/images/vinicius-mikuni.png' | relative_url }}" alt="Vinicius Mikuni speaking at a lectern" width="400" height="400" fetchpriority="high"><figcaption><strong>Associate Professor · KMI</strong><span>Nagoya, Japan</span></figcaption></figure>
</section>
<section class="section wrap" id="research" aria-labelledby="research-title">
  <div class="section-heading"><div><p class="eyebrow">Research directions</p><h2 id="research-title">AI for the physical sciences</h2></div></div>
  <div class="research-grid">
    <article class="research-area"><span class="number">01 / Representations</span><h3>Foundation models</h3><p>Learning transferable representations of scientific data, and investigating how knowledge from one experiment can support another.</p></article>
    <article class="research-area"><span class="number">02 / Simulation</span><h3>Generative models</h3><p>Building fast, faithful simulations of particles, detectors, and physical systems using diffusion models and scientific structure.</p></article>
    <article class="research-area"><span class="number">03 / Inference</span><h3>Measurements & discovery</h3><p>Developing methods for unfolding, uncertainty quantification, and anomaly detection to extract more information from experimental data.</p></article>
  </div>
</section>
<section class="section wrap" id="highlights" aria-labelledby="highlights-title">
  <div class="section-heading"><div><p class="eyebrow">Selected work</p><h2 id="highlights-title">Research highlights</h2></div><a class="text-link" href="{{ '/publications/' | relative_url }}">All publications</a></div>
  <div class="highlights">{% for paper in site.data.highlights %}
    <article class="highlight"><a class="highlight-figure" href="https://arxiv.org/abs/{{ paper.arxiv }}" aria-label="Read {{ paper.title | escape }}"><img src="{{ '/images/' | append: paper.image | relative_url }}" alt="{{ paper.alt | escape }}" loading="lazy" decoding="async"></a><span class="eyebrow">{{ paper.tag }} · {{ paper.year }}</span><h3><a href="https://arxiv.org/abs/{{ paper.arxiv }}">{{ paper.title }}</a></h3><p>{{ paper.summary }}</p><a class="text-link" href="https://arxiv.org/abs/{{ paper.arxiv }}">Read the paper</a></article>
  {% endfor %}</div>
</section>
<section class="section wrap about-grid" aria-labelledby="about-title">
  <div><p class="eyebrow">Background</p><h2 id="about-title">From experiments<br>to algorithms</h2></div>
  <div class="about-copy"><p>My research connects high-energy physics, astrophysics, nuclear physics, and fluid dynamics through shared challenges in learning from complex data.</p><p>Before joining Nagoya University, I was a postdoctoral research fellow at Lawrence Berkeley National Laboratory's <a href="https://www.nersc.gov/">NERSC</a>, working on anomaly detection, unfolding, and surrogate models for detector simulation.</p><p>My <a href="https://cds.cern.ch/record/2781479/files/CERN-THESIS-2021-138.pdf">PhD research with the CMS experiment</a> used machine learning to distinguish rare signals in particle collisions, reconstruct objects, and mitigate pileup.</p><a class="text-link" href="{{ '/cv/' | relative_url }}">View my CV</a></div>
</section>
<section class="contact wrap" aria-labelledby="contact-title"><div><h2 id="contact-title">Let's work together.</h2><p>Students, postdocs, and researchers interested in AI for the physical sciences are welcome to get in touch. Send me an introduction and tell me about your interests.</p></div><a class="button" href="mailto:vinicius.mikuni@gmail.com">Say hello <span aria-hidden="true"></span></a></section>
