---
permalink: /
title: "About"
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

Welcome! I'm an Associate Professor at the Kobayashi-Maskawa Institute [(KMI)](https://www.kmi.nagoya-u.ac.jp/eng/) in Nagoya University. My group focus on developing algorithms in the intersection between AI and the Physical Sciences, with thrusts in High Energy Physics, Astrophysics, Nuclear Physics, and Fluid Flows.

<a href="mailto:vinicius.mikuni@gmail.com" title="If you are a student or postdoc looking for new collaborations send me an introduction!">
  <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/gmail.svg" 
       alt="Gmail" width="28" style="vertical-align:middle; margin-right:6px;">
  If you are a student or postdoc looking for new collaborations send me an introduction!
</a>

Previously I was Postdoctoral Research Fellow at Lawrence Berkeley National Lab at the National Energy Research Scientific Computing Center [(NERSC)](https://www.nersc.gov/) where I developed multiple algorithms for anomaly detection of new physics processes, detector deconvolution/unfolding, and large surrogate models for detector simulation.

As a physicist by trade, my [PhD Thesis](https://cds.cern.ch/record/2781479/files/CERN-THESIS-2021-138.pdf) involved the development and application of new machine learning methods to data collected by the CMS Experiment at the Large Hadron Collider. There, I explored particle collisions with messy signatures, such as all-hadronic final states, and used machine learning to distinguish rare signal processes from large background contamination, as well for object reconstruction and pileup mitigation.

Recent Publications
======

<img style="float: left;padding: 10px 10px 10px 10px;" src="http://ViniciusMikuni.github.io/images/top_tagging_rej30.png" width=500>
[OmniLearned: A Foundation Model Framework for All Tasks Involving Jet Physics](https://arxiv.org/abs/2510.24066)
------
Foundation models use large datasets to build an effective representation of data that can be deployed on diverse downstream tasks. Previous research developed the OmniLearn foundation model for jet physics, using unique properties of particle physics, and showed that it could significantly advance discovery potential across collider experiments. This paper introduces a major upgrade, resulting in the OmniLearned framework. This framework has three new elements: (1) updates to the model architecture and training, (2) using over one billion jets used for training, and (3) providing well-documented software for accessing all datasets and models. We demonstrate OmniLearned with three representative tasks: top-quark jet tagging with the community Delphes-based benchmark dataset, b-tagging with ATLAS full simulation, and anomaly detection with CMS experimental data. In each case, OmniLearned is the state of the art, further expanding the discovery potential of past, current, and future collider experiments.

<img style="float: right;padding: 10px 10px 10px 10px;" src="http://ViniciusMikuni.github.io/images/flex_sr.png" width=500>
[FLEX: A Backbone for Diffusion-Based Modeling of Spatio-temporal Physical Systems](https://arxiv.org/abs/2505.17351)
------
We introduce FLEX (FLow EXpert), a backbone architecture for generative modeling of spatio-temporal physical systems using diffusion models. FLEX operates in the residual space rather than on raw data, a modeling choice that we motivate theoretically, showing that it reduces the variance of the velocity field in the diffusion model, which helps stabilize training. FLEX integrates a latent Transformer into a U-Net with standard convolutional ResNet layers and incorporates a redesigned skip connection scheme. This hybrid design enables the model to capture both local spatial detail and long-range dependencies in latent space. To improve spatio-temporal conditioning, FLEX uses a task-specific encoder that processes auxiliary inputs such as coarse or past snapshots. Weak conditioning is applied to the shared encoder via skip connections to promote generalization, while strong conditioning is applied to the decoder through both skip and bottleneck features to ensure reconstruction fidelity. FLEX achieves accurate predictions for super-resolution and forecasting tasks using as few as two reverse diffusion steps. It also produces calibrated uncertainty estimates through sampling. Evaluations on high-resolution 2D turbulence data show that FLEX outperforms strong baselines and generalizes to out-of-distribution settings, including unseen Reynolds numbers, physical observables (e.g., fluid flow velocity fields), and boundary conditions. 


<img style="float: left;padding: 10px 10px 10px 10px;" src="http://ViniciusMikuni.github.io/images/paper_omnilearn.png" width=500>
[Method to simultaneously facilitate all jet physics tasks](https://arxiv.org/pdf/2502.14652)
------
Machine learning has become an essential tool in jet physics. Due to their complex, high-dimensional nature, jets can be explored holistically by neural networks in ways that are not possible manually. However, innovations in all areas of jet physics are proceeding in parallel. We show that specially constructed machine learning models trained for a specific jet classification task can improve the accuracy, precision, or speed of all other jet physics tasks. This is demonstrated by training on a particular multiclass generation and classification task and then using the learned representation for different generation and classification tasks, for datasets with a different (full) detector simulation, for jets from a different collision system (pp versus ep), for generative models, for likelihood ratio estimation, and for anomaly detection. We consider our omnilearn approach thus as a jet-physics foundation model. It is made publicly available for use in any area where state-of-the-art precision is required for analyses involving jets and their substructure.


<img style="float: left;padding: 10px 10px 10px 10px;" src="http://ViniciusMikuni.github.io/images/paper_eic.png" width=500>
[Point cloud-based diffusion models for the Electron-Ion Collider](https://arxiv.org/pdf/2410.22421)
------
At high-energy collider experiments, generative models can be used for a wide range of tasks, including fast detector simulations, unfolding, searches of physics beyond the Standard Model, and inference tasks. In particular, it has been demonstrated that score-based diffusion models can generate high-fidelity and accurate samples of jets or collider events. This work expands on previous generative models in three distinct ways. First, our model is trained to generate entire collider events, including all particle species with complete kinematic information. We quantify how well the model learns event-wide constraints such as the conservation of momentum and discrete quantum numbers. We focus on the events at the future Electron-Ion Collider, but we expect that our results can be extended to proton-proton and heavy-ion collisions. Second, previous generative models often relied on image-based techniques. The sparsity of the data can negatively affect the fidelity and sampling time of the model. We address these issues using point clouds and a novel architecture combining edge creation with transformer modules called Point Edge Transformers. Third, we adapt the foundation model OmniLearn, to generate full collider events. This approach may indicate a transition toward adapting and fine-tuning foundation models for downstream tasks instead of training new models from scratch.


<img style="float: right;padding: 10px 10px 10px 10px;" src="http://ViniciusMikuni.github.io/images/paper_solving_key.png" width=500>
[Solving key challenges in collider physics with foundation models](https://arxiv.org/pdf/2404.16091)
------
Foundation models are neural networks that are capable of simultaneously solving many problems. Large language foundation models like ChatGPT have revolutionized many aspects of daily life, but their impact for science is not yet clear. In this paper, we use a new foundation model for hadronic jets to solve three key challenges in collider physics. In particular, we show how experiments can (1) save significant computing power when developing reconstruction algorithms, (2) perform a complete uncertainty quantification for high-dimensional measurements, and (3) search for new physics with model agnostic methods using low-level inputs. In each case, there are significant computational or methodological challenges with current methods that limit the science potential of deep learning algorithms. By solving each problem, we take jet foundation models beyond proof-of-principle studies and into the toolkit of practitioners.

<img style="float: left;padding: 10px 10px 10px 10px;" src="http://ViniciusMikuni.github.io/images/paper_full_phase_space.png" width=500>
[Full phase space resonant anomaly detection](https://arxiv.org/pdf/2310.06897)
------
Physics beyond the Standard Model that is resonant in one or more dimensions has been a longstanding focus of countless searches at colliders and beyond. Recently, many new strategies for resonant anomaly detection have been developed, where sideband information can be used in conjunction with modern machine learning, in order to generate synthetic datasets representing the Standard Model background. Until now, this approach was only able to accommodate a relatively small number of dimensions, limiting the breadth of the search sensitivity. Using recent innovations in point cloud generative models, we show that this strategy can also be applied to the full phase space, using all relevant particles for the anomaly detection. As a proof of principle, we show that the signal from the R&D dataset from the LHC Olympics is findable with this method, opening up the door to future studies that explore the interplay between depth and breadth in the representation of the data for anomaly detection.


<img style="float: right;padding: 10px 10px 10px 10px;" src="http://ViniciusMikuni.github.io/images/FPCD.png" width=500>
[Fast Point Cloud Generation with Diffusion Models in High Energy Physics](https://arxiv.org/pdf/2304.01266.pdf)
------
Many particle physics datasets like those generated at colliders are described by continuous coordinates (in contrast to grid points like in an image), respect a number of symmetries (like permutation invariance), and have a stochastic dimensionality.  For this reason, standard deep generative models that produce images or at least a fixed set of features are limiting.  We introduce a new neural network simulation based on a diffusion model that addresses these limitations named Fast Point Cloud Diffusion (FPCD).  We show that our approach can reproduce the complex properties of hadronic jets from proton-proton collisions with competitive precision to other recently proposed models.  Additionally, we use a procedure called progressive distillation to accelerate the generation time of our method, which is typically a significant challenge for diffusion models despite their state-of-the-art precision.


<img style="float: left;padding: 10px 10px 10px 10px;" src="http://ViniciusMikuni.github.io/images/paper_rarenotuniversal.png" width=500>
[Anomaly detection under coordinate transformations](https://journals.aps.org/prd/abstract/10.1103/PhysRevD.107.015009)
------
There is a growing need for machine learning-based anomaly detection strategies to broaden the search for Beyond-the-Standard-Model (BSM) physics at the Large Hadron Collider (LHC) and elsewhere.
The first step of any anomaly detection approach is to specify observables and then use them to decide on a set of anomalous events.  One common choice is to select events that have low probability density.  It is a well-known fact that probability densities are not invariant under coordinate transformations, so the sensitivity can depend on the initial choice of coordinates.  The broader machine learning community has recently connected coordinate sensitivity with anomaly detection and our goal is to bring awareness of this issue to the growing high energy physics literature on anomaly detection.
In addition to analytical explanations, we provide numerical examples from simple random variables and from the LHC Olympics Dataset that show how using probability density as an anomaly score can lead to events being classified as anomalous or not depending on the coordinate frame.


<img style="float: right;padding: 10px 10px 10px 10px;" src="http://ViniciusMikuni.github.io/images/paper_CaloScore.png" width=500>
[Score-based generative models for calorimeter shower simulation](https://journals.aps.org/prd/abstract/10.1103/PhysRevD.106.092009)
------
Score-based generative models are a new class of generative algorithms that have been shown to produce realistic images even in high dimensional spaces, currently surpassing other state-of-the-art models for different benchmark categories and applications. In this work we introduce caloscore, a score-based generative model for collider physics applied to calorimeter shower generation. Three different diffusion models are investigated using the Fast Calorimeter Simulation Challenge 2022 dataset. caloscore is the first application of a score-based generative model in collider physics and is able to produce high-fidelity calorimeter images for all datasets, providing an alternative paradigm for calorimeter shower simulation.