export interface Profile {
  name: string;
  headline: string;
  bio: string;
  about: string[];
  education: {
    degree: string;
    major: string;
    institution: string;
    location: string;
    period: string;
    score: string;
    enrolmentNo: string;
  };
  contact: {
    email: string;
    location: string;
    github: string;
    githubUsername: string;
    linkedin: string;
  };
  skillsByCategory: {
    category: string;
    skills: string[];
  }[];
}

export const candidateProfile: Profile = {
  name: "Aman Kumar Ranjan",
  headline: "Computer Science Engineering Student | AI/ML | Data Science | Software Systems",
  bio: "B.Tech Computer Science (Data Science) undergraduate at Haridwar University with verified research experience at the National Institute of Hydrology (NIH) Roorkee and CSIR-CBRI. Specialized in time-series forecasting, explainable AI, hybrid ML architectures, and full-stack software development.",
  about: [
    "I design and build data-driven systems, applied machine learning pipelines, and robust full-stack software applications. My research emphasizes hydro-climatic forecasting, atmospheric modeling, and explainable AI.",
    "During my dissertation research at the National Institute of Hydrology (NIH) Roorkee under Dr. Sushindra Kumar Gupta, I developed NAYA-PANI, an explainable AI and RAG-driven seasonal groundwater forecasting framework across 7 semi-arid districts in Rajasthan.",
    "At CSIR–Central Building Research Institute (CBRI), I engineered multi-hybrid predictive systems combining gradient boosting (CatBoost, LightGBM, XGBoost) and autoregressive time-series models (ARIMA/SARIMAX), achieving high R² scores and 5-year environmental projections."
  ],
  education: {
    degree: "Bachelor of Technology (B.Tech)",
    major: "Computer Science & Engineering (Data Science)",
    institution: "Haridwar University",
    location: "Roorkee, Uttarakhand, India",
    period: "September 2023 – 2027 (Expected)",
    score: "CGPA: 6.96 / 10.0",
    enrolmentNo: "230103001"
  },
  contact: {
    email: "amankumar89669@gmail.com",
    location: "Roorkee, Uttarakhand, India",
    github: "https://github.com/Amankumarranjan8969",
    githubUsername: "Amankumarranjan8969",
    linkedin: "https://www.linkedin.com/in/aman-kumar-ranjan-518a50305/"
  },
  skillsByCategory: [
    {
      category: "Machine Learning & AI",
      skills: ["CatBoost", "XGBoost", "LightGBM", "Scikit-learn", "TensorFlow / Keras", "PyTorch", "Time-Series Forecasting", "SARIMAX", "ARIMA", "GRU", "Ensemble Stacking", "SHAP / Explainability"]
    },
    {
      category: "Computer Vision & NLP / GenAI",
      skills: ["DenseNet121", "Dual CBAM Attention", "Grad-CAM", "TF-IDF Retrieval", "RAG Pipelines", "LLM Integration", "OpenCV", "Hugging Face"]
    },
    {
      category: "Software & Web Development",
      skills: ["React 19 / 18", "TypeScript", "JavaScript (ES6+)", "Node.js", "Express.js", "Tailwind CSS", "Vite", "Socket.IO", "REST APIs", "Prisma ORM", "HTML5/CSS3"]
    },
    {
      category: "Databases & Cloud",
      skills: ["PostgreSQL", "MongoDB", "MySQL", "SQLite", "Google Sheets API", "Docker", "Git / GitHub", "Jupyter"]
    },
    {
      category: "IoT & Hardware Prototyping",
      skills: ["Arduino", "ESP8266 Microcontroller", "Water Flow Sensors (YF-S201)", "Serial UART Communication", "Embedded C++"]
    }
  ]
};
