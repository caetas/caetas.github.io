export type PublicationLink = {
  label: string;
  href: string;
};

export type Publication = {
  title: string;
  authors: string;
  venue: string;
  image: string;
  imageAlt: string;
  highlight?: string;
  links: PublicationLink[];
};

export const featuredPublications: Publication[] = [
  {
    title:
      'DisCoPatch: Taming Adversarially-driven Batch Statistics for Improved Out-of-Distribution Detection',
    authors:
      'Francisco Caetano, C. Viviers, L. Mondragon, P.H.N. de With, F. van der Sommen',
    venue: 'ICCV 2025',
    image: '/publications/disco.png',
    imageAlt: 'DisCoPatch visual abstract',
    links: [
      { label: 'Project Page', href: '/discopatch.html' },
      { label: 'Paper', href: 'https://openaccess.thecvf.com/content/ICCV2025/html/Caetano_DisCoPatch_Taming_Adversarially-driven_Batch_Statistics_for_Improved_Out-of-Distribution_Detection_ICCV_2025_paper.html' },
      { label: 'Code', href: 'https://github.com/caetas/DisCoPatch' },
    ],
  },
  {
    title: 'MedShift: Implicit Conditional Transport for X-Ray Domain Adaptation',
    authors: 'Francisco Caetano, C. Viviers, P.H.N. de With, F. van der Sommen',
    venue: 'ICCV 2025 Workshop',
    image: '/publications/medshift.jpg',
    imageAlt: 'MedShift visual abstract',
    links: [
      { label: 'Project Page', href: '/medshift.html' },
      { label: 'Paper', href: 'https://openaccess.thecvf.com/content/ICCV2025W/AIM/html/Caetano_MedShift_Implicit_Conditional_Transport_for_X-Ray_Domain_Adaptation_ICCVW_2025_paper.html' },
      { label: 'Code', href: 'https://github.com/caetas/MedShift' },
    ],
  },
  {
    title:
      'MedSymmFlow: Bridging Generative Modeling and Classification in Medical Imaging through Symmetrical Flow Matching',
    authors:
      'Francisco Caetano, L. Abdi, C. Viviers, A. Valiuddin, F. van der Sommen',
    venue: 'MICCAI 2025 Workshop',
    image: '/publications/MSF.jpg',
    imageAlt: 'MedSymmFlow visual abstract',
    links: [
      { label: 'Project Page', href: '/medsymmflow.html' },
      { label: 'Paper', href: 'https://link.springer.com/chapter/10.1007/978-3-032-05472-2_4' },
      { label: 'Code', href: 'https://github.com/caetas/MedSymmFlow' },
    ],
  },
  {
    title:
      'AdverX-Ray: Ensuring X-Ray Integrity Through Frequency-Sensitive Adversarial VAEs',
    authors: 'Francisco Caetano, C. Viviers, L. Filatova, P.H.N. de With, F. van der Sommen',
    venue: 'SPIE Medical Imaging 2025',
    image: '/publications/AdverXRay.png',
    imageAlt: 'AdverX-Ray visual abstract',
    highlight: 'Runner-up · Robert F. Wagner All-Conference Best Student Paper Award',
    links: [
      { label: 'Project Page', href: '/adverx.html' },
      { label: 'Paper', href: 'https://www.spiedigitallibrary.org/conference-proceedings-of-spie/13406/134060I/AdverX-Ray--ensuring--x-ray-integrity-through-frequency/10.1117/12.3045893.short' },
      { label: 'Code', href: 'https://github.com/caetas/AdverX' },
    ],
  },
  {
    title: 'Can Your Generative Model Detect Out-of-Distribution Covariate Shift?',
    authors:
      'C. Viviers, A. Valiuddin, Francisco Caetano, L. Abdi, L. Filatova, P.H.N. de With, F. van der Sommen',
    venue: 'ECCV 2024 Workshop',
    image: '/publications/covar_flow.png',
    imageAlt: 'Covariate Flow visual abstract',
    links: [
      {
        label: 'Paper',
        href: 'https://link.springer.com/chapter/10.1007/978-3-031-91585-7_12',
      },
      { label: 'Code', href: 'https://github.com/cviviers/CovariateFlow' },
    ],
  },
  {
    title: 'Zero-Shot Image Anomaly Detection Using Generative Foundation Models',
    authors: 'L. Abdi, A. Valiuddin, Francisco Caetano, C. Viviers, F. van der Sommen',
    venue: 'ICCV 2025 Workshop',
    image: '/publications/diffpathv2.png',
    imageAlt: 'DiffPath illustration',
    links: [
      { label: 'Paper', href: 'https://openaccess.thecvf.com/content/ICCV2025W/ADFM/html/Abdi_Zero-Shot_Image_Anomaly_Detection_Using_Generative_Foundation_Models_ICCVW_2025_paper.html' },
    ],
  },
  {
    title: 'Robust Early Detection of Barrett’s Neoplasia: Addressing Low-Prevalence Challenges with Generative Modeling',
    authors:
      'T.J.M. Jaspers, Francisco Caetano, C.H.B. Claessens, C.H.J. Kusters, H. Middeljans, M.R. Jong, R.A.H. van Eijck van Heslinga, F. Slooter, A.J. de Groof, J.J. Bergman, P.H.N. De With, F. van der Sommen ',
    venue: 'MICCAI 2025 Workshop',
    image: '/publications/robust_early.png',
    imageAlt: 'Experimental setup',
    links: [
      { label: 'Paper', href: 'https://link.springer.com/chapter/10.1007/978-3-032-08009-7_17' },
    ],
  },
  {
    title: 'Out-of-Distribution Detection in Medical Imaging via Diffusion Trajectories',
    authors:
      'L. Abdi, Francisco Caetano, A. Valiuddin, C. Viviers, H. Joudeh, F. van der Sommen',
    venue: 'MICCAI 2025 Workshop',
    image: '/publications/ood_traj.png',
    imageAlt: 'Diffusion trajectory visualization',
    links: [
      { label: 'Paper', href: 'https://link.springer.com/chapter/10.1007/978-3-032-06593-3_9' },
    ],
  },
];

export const otherPublications: Publication[] = [
  {
    title:
      'Diffusion-based Lung Nodule Synthesis for Advanced Evaluation of Deep Learning Models',
    authors:
      'C.H.B. Claessens, Francisco Caetano, K. van der Wulp, L.J.S. Ewals, F. van der Sommen',
    venue: 'SPIE Medical Imaging 2025',
    image: '/publications/magicnod.png',
    imageAlt: 'MagicNod illustration',
    links: [
      {
        label: 'Paper',
        href: 'https://www.spiedigitallibrary.org/conference-proceedings-of-spie/13406/134061J/Diffusion-based-lung-nodule-synthesis-for-advanced-evaluation-of-deep/10.1117/12.3046681.full',
      },
      { label: 'Code', href: 'https://github.com/cclaess/MagicNod' },
    ],
  },
  {
    title: 'Visual Data Processing for Anomaly Detection',
    authors: 'Francisco Caetano',
    venue: 'Master Thesis',
    image: '/publications/thesis.png',
    imageAlt: 'Thesis cover',
    links: [
      {
        label: 'Paper',
        href: 'https://repositorio-aberto.up.pt/handle/10216/148119',
      },
    ],
  },
  {
    title:
      'Enhancing Weakly-Supervised Video Anomaly Detection with Temporal Constraints',
    authors: 'Francisco Caetano, P. Carvalho, C. Mastralexi, J. Cardoso',
    venue: 'IEEE Access',
    image: '/publications/enhancing.gif',
    imageAlt: 'Temporal constraints visualization',
    links: [
      {
        label: 'Paper',
        href: 'https://ieeexplore.ieee.org/abstract/document/10965669',
      },
    ],
  },
  {
    title:
      'Unveiling the Performance of Video Anomaly Detection Models — a Benchmark-based Review',
    authors: 'Francisco Caetano, P. Carvalho, J. Cardoso',
    venue: 'Intelligent Systems with Applications',
    image: '/publications/unv.jpg',
    imageAlt: 'Benchmark review cover',
    links: [
      {
        label: 'Paper',
        href: 'https://www.sciencedirect.com/science/article/pii/S2667305323000613',
      },
    ],
  },
  {
    title: 'Deep Anomaly Detection for In-Vehicle Monitoring — An Application-Oriented Review',
    authors: 'Francisco Caetano, P. Carvalho, J. Cardoso',
    venue: 'Applied Sciences (MDPI)',
    image: '/publications/deep_auto.png',
    imageAlt: 'In-vehicle monitoring illustration',
    links: [
      {
        label: 'Paper',
        href: 'https://www.mdpi.com/2076-3417/12/19/10011',
      },
    ],
  },
];
