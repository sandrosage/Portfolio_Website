// ============================================================
// PORTFOLIO DATA — Edit this file to update your content
// ============================================================

export const personalInfo = {
  name: "Sandro Sage",
  roles: ["AI Engineer", "Agentic AI Developer", "Generative AI Engineer", "Machine Learning Engineer"],
  bio: "AI/ML engineer with 5+ years of Python-based development across generative AI, computer vision, NLP, and embedded ML. Currently building a production multi-agent GenAI system (LangChain, LangGraph, RAG, FastAPI) at ARRK Engineering for a large-scale BMW initiative — with a research background spanning diffusion models, computer vision, and TinyML. M.Sc. in Artificial Intelligence (FAU, grade 1.3).",
  email: "sandro-sage@gmx.de",
  github: "https://github.com/sandrosage",
  linkedin: "https://www.linkedin.com/in/sandro-sage-b40899225/",
  resumeUrl:
    "https://sandro-portfolio-website-cv-207224907952-eu-central-1-an.s3.eu-central-1.amazonaws.com/Sandro_Sage_Resume_08_07_26.pdf",
  profileImage: "/profile.jpg",
};

export const skills = [
  {
    category: "Agent, LLM & NLP",
    items: ["LangChain", "LangGraph", "LangFuse", "Multi-agent systems", "AgentOps/MLOps", "RAG pipelines", "Prompt & context engineering", "Weaviate (vector DB)"],
  },
  {
    category: "AI & Machine Learning",
    items: ["PyTorch", "PyTorch Lightning", "TensorFlow", "Keras", "Hugging Face", "scikit-learn", "OpenCV", "World Models", "Latent Space Modeling"],
  },
  {
    category: "Infrastructure & DevOps",
    items: ["FastAPI", "Docker", "Docker Compose", "Kubernetes", "Helm", "Celery", "GitHub Actions", "PostgreSQL", "AWS (CDK)", "CI/CD"],
  },
  {
    category: "Languages",
    items: ["Python", "C", "C++", "SQL", "Git", "LaTeX"],
  },
];

export const experience = [
  {
    title: "AI Engineer",
    company: "ARRK Engineering GmbH",
    companyUrl: "https://www.arrk-engineering.com",
    date: "December 2025 – Present",
    location: "Munich, Germany",
    description:
      "Design and develop a production multi-agent Generative AI system (orchestrator plus specialized subagents) serving 10+ active users on a large-scale BMW initiative, using LangChain, LangGraph, and LangFuse for orchestration, tracing, and evaluation. Built a RAG pipeline with Weaviate and PostgreSQL, scalable FastAPI backends containerized via Docker, and Kubernetes/Helm deployments with GitHub Actions CI/CD. Core contributor on a 5-person team, running stakeholder demos and serving as go-to resource for agent design and LLM integration — alongside exploratory research on world models for driving scenarios.",
  },
  {
    title: "Working Student – AI & Machine Learning",
    company: "Fraunhofer IIS",
    companyUrl: "https://www.iis.fraunhofer.de",
    date: "October 2023 – November 2025",
    location: "Tennenlohe, Bavaria",
    description:
      "Built and optimized computer vision pipelines across two applied research projects (SyNaKI, GAIA) using TensorFlow/TFLite, model compression and quantization, and custom OpenCV algorithms — deploying models on embedded hardware. Implemented a distributed AI tool using evolutionary algorithms and supported AI research funding applications.",
  },
  {
    title: "Research Assistant",
    company: "DIT Lab for Digitalization of AI in Electrical Engineering",
    companyUrl: "https://www.th-deg.de",
    date: "March 2022 – March 2023",
    location: "Deggendorf, Bavaria",
    description:
      "Led sensor-based data acquisition on DC-DC converters for predictive maintenance. Engineered meta-statistical features over sliding time windows, applied classical ML models (scikit-learn, GridSearch-tuned) for anomaly detection, and deployed compressed CNNs on resource-constrained TinyML devices. Conducted Bachelor's thesis at the lab.",
  },
  {
    title: "Internship – IoT Edge Computing & Machine Learning (AWS)",
    company: "T-Systems Multimedia Solutions GmbH",
    companyUrl: "https://www.t-systems-mms.com",
    date: "October 2021 – February 2022",
    location: "Dresden, Saxony",
    description:
      "Independently designed and deployed scalable cloud services and data engineering pipelines using AWS CDK. Contributed to predictive maintenance projects and gained hands-on SCRUM and CI/CD experience.",
  },
  {
    title: "Research Assistant – Embedded Systems",
    company: "DIT Project Lab for Hardware-Related Digitization",
    companyUrl: "https://www.th-deg.de",
    date: "October 2020 – July 2021",
    location: "Deggendorf, Bavaria",
    description:
      "Developed a GUI application for sensor communication via UART, SPI, and I²C protocols using the PICkit Serial Analyzer. Bridged hardware and software integration in embedded systems projects.",
  },
];

export const education = [
  {
    title: "M.Sc. Artificial Intelligence",
    company: "Friedrich-Alexander-University (FAU)",
    companyUrl: "https://www.fau.de",
    date: "April 2023 – March 2026",
    location: "Erlangen, Bavaria",
    description:
      "Grade 1.3 — Focus on Advanced Deep Learning, Pattern Recognition, Statistical Learning, and Diffusion & Attention Models. Master thesis: \"K-space Latent Diffusion for Accelerated MRI\" (IdeaLab) — Grade 1.3.",
  },
  {
    title: "B.Eng. Applied Computer Science",
    company: "Deggendorf Institute of Technology (DIT)",
    companyUrl: "https://www.th-deg.de",
    date: "October 2019 – March 2023",
    location: "Deggendorf, Bavaria",
    description:
      "Grade 1.4 — Focus on Embedded Systems. Bachelor thesis: \"Generation, Optimization, and Evaluation of ML/DL Models for Tiny Machine Learning (TinyML)\" — Grade 1.3.",
  },
  {
    title: "Summer School – Deep Learning",
    company: "University of Southern Denmark (SDU)",
    companyUrl: "https://www.sdu.dk",
    date: "August 2022",
    location: "Odense, Denmark",
    description:
      "Completed a hands-on project classifying healthy vs. pneumonia-affected lungs using convolutional neural networks.",
  },
];

export const projects = [
  {
    title: "K-space Latent Diffusion for Accelerated MRI",
    description:
      "Master thesis (IdeaLab, FAU) — Grade 1.3. Proposed the kLD-MRI framework, applying latent diffusion models directly in k-space for accelerated MRI reconstruction. Designed k-space autoencoders preserving high-frequency structure in the latent domain, plus a consistency-guidance sampling method for undersampled reconstruction. Fully open-sourced for reproducible follow-on research.",
    tags: ["PyTorch", "Diffusion Models", "MRI Reconstruction", "Deep Learning", "Python"],
    github: "https://github.com/sandrosage/kspace-diffusion",
    demo: "",
  },
  {
    title: "SMMetrDE – Segmentation-guided Monocular Metric Depth Estimation",
    description:
      "Framework combining semantic segmentation with monocular depth estimation for object-wise metric prediction. Integrated and benchmarked MonoDepth2, MiDaS, DPT, and ZoeDepth (RMSE, AbsRel, inference time) on KITTI dataset subsets, working hands-on with transformer-based vision models (ViT, BEiT, Swin).",
    tags: ["PyTorch", "Computer Vision", "ViT", "Depth Estimation", "Python"],
    github: "https://github.com/sandrosage/Monocular_Depth_Estimation",
    demo: "",
  },
  {
    title: "AI Agent for Kalah – Tournament Challenge",
    description:
      "Competitive game-playing agent using minimax search, alpha-beta pruning, and heuristic evaluation to optimize gameplay decisions under strict time constraints.",
    tags: ["Python", "Search Algorithms", "AI", "Game Theory"],
    github: "https://github.com/sandrosage",
    demo: "",
  },
  {
    title: "Deep Learning from Scratch",
    description:
      "Core deep learning architectures implemented from scratch in Python — forward/backward passes for FNNs, CNNs, and RNNs, alongside custom optimizers (SGD, Adam), activation functions, and loss functions.",
    tags: ["Python", "PyTorch", "Deep Learning", "Neural Networks"],
    github: "https://github.com/sandrosage",
    demo: "",
  },
];
