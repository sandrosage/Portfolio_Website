// ============================================================
// PORTFOLIO DATA — Edit this file to update your content
// ============================================================

export const personalInfo = {
  name: "Sandro Sage",
  roles: ["AI Engineer", "Agent Developer", "Machine Learning Engineer"],
  bio: "AI & ML Engineer building production-grade agentic systems at ARRK Engineering on a large-scale BMW project. Specializing in LLM orchestration, multi-agent architectures, and RAG pipelines — with a research background spanning computer vision, TinyML, and diffusion models.",
  email: "sandro-sage@gmx.de",
  github: "https://github.com/sandrosage",
  linkedin: "https://www.linkedin.com/in/sandro-sage-b40899225/",
  resumeUrl: "/resume.pdf",
  profileImage: "/profile.jpg",
};

export const skills = [
  {
    category: "Agent & LLM",
    items: ["LangChain", "LangGraph", "LangFuse", "Multi-agent systems", "AgentOps", "RAG pipelines", "Weaviate", "OpenAI API", "Anthropic API"],
  },
  {
    category: "AI & Machine Learning",
    items: ["PyTorch", "PyTorch Lightning", "TensorFlow", "Keras", "Hugging Face", "OpenCV"],
  },
  {
    category: "Infrastructure & DevOps",
    items: ["FastAPI", "Docker", "Docker Compose", "PostgreSQL", "AWS (CDK)", "Git", "CI/CD"],
  },
  {
    category: "Languages",
    items: ["Python", "C", "C++", "SQL", "LaTeX"],
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
      "Leading AI engineer on a large-scale BMW project, designing end-to-end agentic AI systems with LangChain, LangGraph, and LangFuse. Building scalable FastAPI backends with Docker, Weaviate, and PostgreSQL; driving multi-agent architecture concepts and LLM integration across OpenAI, Anthropic, and other major APIs.",
  },
  {
    title: "Working Student – AI & Machine Learning",
    company: "Fraunhofer IIS",
    companyUrl: "https://www.iis.fraunhofer.de",
    date: "October 2023 – November 2025",
    location: "Tennenlohe, Bavaria",
    description:
      "Contributed to ML pipelines with a focus on computer vision (SyNaKI, GAIA projects). Implemented a distributed AI tool using evolutionary algorithms, optimized vision models for embedded deployment, and supported AI research funding applications.",
  },
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
    title: "Research Assistant",
    company: "DIT Lab for Digitalization of AI in Electrical Engineering",
    companyUrl: "https://www.th-deg.de",
    date: "March 2022 – March 2023",
    location: "Deggendorf, Bavaria",
    description:
      "Led data acquisition for sensor-based DC-DC converters to enable predictive maintenance. Performed time series analysis and deployed statistical models and neural networks on resource-constrained devices (TinyML). Conducted Bachelor's thesis at the lab.",
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
    title: "B.Eng. Applied Computer Science",
    company: "Deggendorf Institute of Technology (DIT)",
    companyUrl: "https://www.th-deg.de",
    date: "October 2019 – March 2023",
    location: "Deggendorf, Bavaria",
    description:
      "Grade 1.4 — Focus on Embedded Systems. Bachelor thesis: \"Generation, Optimization, and Evaluation of ML/DL Models for Tiny Machine Learning (TinyML)\" — Grade 1.3.",
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

export const projects = [
  {
    title: "SMMetrDE – Segmentation-guided Monocular Metric Depth Estimation",
    description:
      "Framework combining semantic segmentation with monocular depth estimation to derive object-wise metric depth. Integrated and benchmarked MonoDepth2, MiDaS, DPT, and ZoeDepth; evaluated with RMSE and AbsRel on KITTI dataset subsets.",
    tags: ["PyTorch", "Computer Vision", "ViT", "Depth Estimation", "Python"],
    github: "https://github.com/sandrosage",
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
