---
permalink: /
title: "About"
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

Welcome! I'm a Postdoctoral Research Fellow at Lawrence Berkeley National Lab at the National Energy Research Scientific Computing Center [(NERSC)](https://www.nersc.gov/). I'm interested in the intersection between Machine Learning and the Natural Sciences. More specifically, what can we learn about nature by leveraging modern  algorithms powered by scientific knowledge? These include anomaly detection of new physics processes, detector deconvolution/unfolding, and large surrogate models for detector simulation.

As a physicist by trade, my [PhD Thesis](https://cds.cern.ch/record/2781479/files/CERN-THESIS-2021-138.pdf) involved the development and application of new machine learning methods to data collected by the CMS Experiment at the Large Hadron Collider. There, I explored particle collisions with messy signatures, such as all-hadronic final states, and used machine learning to distinguish rare signal processes from large background contamination, as well for object reconstruction and pileup mitigation.

Recent Publications
======

<img style="float: right;padding: 10px 10px 10px 10px;" src="http://ViniciusMikuni.github.io/images/FPCD.png" width=300>
[Fast Point Cloud Generation with Diffusion Models in High Energy Physics](https://arxiv.org/pdf/2304.01266.pdf)
------
Many particle physics datasets like those generated at colliders are described by continuous coordinates (in contrast to grid points like in an image), respect a number of symmetries (like permutation invariance), and have a stochastic dimensionality.  For this reason, standard deep generative models that produce images or at least a fixed set of features are limiting.  We introduce a new neural network simulation based on a diffusion model that addresses these limitations named Fast Point Cloud Diffusion (FPCD).  We show that our approach can reproduce the complex properties of hadronic jets from proton-proton collisions with competitive precision to other recently proposed models.  Additionally, we use a procedure called progressive distillation to accelerate the generation time of our method, which is typically a significant challenge for diffusion models despite their state-of-the-art precision.


<img style="float: left;padding: 10px 10px 10px 10px;" src="http://ViniciusMikuni.github.io/images/paper_rarenotuniversal.png" width=300>
[Anomaly detection under coordinate transformations](https://journals.aps.org/prd/abstract/10.1103/PhysRevD.107.015009)
------
There is a growing need for machine learning-based anomaly detection strategies to broaden the search for Beyond-the-Standard-Model (BSM) physics at the Large Hadron Collider (LHC) and elsewhere.
The first step of any anomaly detection approach is to specify observables and then use them to decide on a set of anomalous events.  One common choice is to select events that have low probability density.  It is a well-known fact that probability densities are not invariant under coordinate transformations, so the sensitivity can depend on the initial choice of coordinates.  The broader machine learning community has recently connected coordinate sensitivity with anomaly detection and our goal is to bring awareness of this issue to the growing high energy physics literature on anomaly detection.
In addition to analytical explanations, we provide numerical examples from simple random variables and from the LHC Olympics Dataset that show how using probability density as an anomaly score can lead to events being classified as anomalous or not depending on the coordinate frame.


<img style="float: right;padding: 10px 10px 10px 10px;" src="http://ViniciusMikuni.github.io/images/paper_CaloScore.png" width=300>
[Score-based generative models for calorimeter shower simulation](https://journals.aps.org/prd/abstract/10.1103/PhysRevD.106.092009)
------
Score-based generative models are a new class of generative algorithms that have been shown to produce realistic images even in high dimensional spaces, currently surpassing other state-of-the-art models for different benchmark categories and applications. In this work we introduce caloscore, a score-based generative model for collider physics applied to calorimeter shower generation. Three different diffusion models are investigated using the Fast Calorimeter Simulation Challenge 2022 dataset. caloscore is the first application of a score-based generative model in collider physics and is able to produce high-fidelity calorimeter images for all datasets, providing an alternative paradigm for calorimeter shower simulation.