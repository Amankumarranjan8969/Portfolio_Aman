import { Experience } from '../types/experience';

export const experienceData: Experience[] = [
  {
    id: "nih-roorkee-dissertation",
    role: "B.Tech Dissertation Research Fellow",
    organization: "National Institute of Hydrology (NIH), Roorkee",
    location: "Roorkee, Uttarakhand, India",
    period: "2025 – 2026",
    type: "Research Internship",
    supervisors: [
      "Dr. Sushindra Kumar Gupta (Scientist 'C', Ground Water Hydrology Division)",
      "Dr. Y. R. S. Rao (Director, NIH Roorkee)"
    ],
    description: "Conducted intensive academic dissertation research on data-driven seasonal groundwater depth forecasting across 7 hyper-arid and semi-arid districts in Rajasthan.",
    contributions: [
      "Formulated the JAL-SETU framework pairing satellite remote sensing (Landsat 8/9 NDVI, NDWI, NDMI) with multi-decadal borehole monitoring.",
      "Engineered temporal lag structures (t-1 to t-5) and implemented block time-series cross-validation to prevent temporal lookahead leakage.",
      "Tuned Cubist committee models, CatBoost, XGBoost, and Extra Trees, achieving peak Post-Monsoon R² of 0.9467 (RMSE 2.63m, MAE 1.83m).",
      "Engineered an explainable, deterministic TF-IDF RAG assistant module for contextual hydrological stakeholder interaction.",
      "Authored a comprehensive 100+ page institutional dissertation report with 30 empirical evaluation tables."
    ],
    skills: ["CatBoost", "Cubist", "XGBoost", "Hydrological Modeling", "Remote Sensing", "TF-IDF RAG", "Python", "GIS Analysis"],
    verifiedEvidence: "Institutional dissertation writeup `D:\\AMAN REPORT NIH ROORKEE222222.docx` and empirical district data in `D:\\results ms words\\`.",
    status: "Verified"
  },
  {
    id: "csir-cbri-internship",
    role: "AI/ML Research Intern (On-site)",
    organization: "CSIR–Central Building Research Institute (CBRI)",
    location: "Roorkee, Uttarakhand, India",
    period: "June 2025 – August 2025",
    type: "Research Internship",
    supervisors: ["Environmental Science & Atmospheric Modeling Division Scientists"],
    description: "Developed and benchmarked high-accuracy multi-hybrid machine learning architectures for ambient air quality index (AQI) and PM2.5 particulate concentration forecasting.",
    contributions: [
      "Benchmarked 8 base models including CatBoost, LightGBM, XGBoost, Random Forest, ExtraTrees, Deep MLP, and SARIMAX on Visakhapatnam Station 260 data.",
      "Architected 4 distinct hybrid combinations, highlighting CatBoost + ARIMA residual error modeling and Bayesian SuperBlending.",
      "Achieved top test R² of 0.9180 (RMSE 7.2997 µg/m³, MAE 5.2234 µg/m³) with SLSQP-optimized convex ensemble blending.",
      "Generated 5-year (1,825-day) multi-year environmental forecasts with 95% confidence intervals benchmarked against India NAAQS limits.",
      "Published reproducible code, serialized model weights (`.cbm`, `.h5`), and an extensive technical report."
    ],
    skills: ["CatBoost", "SARIMAX", "ARIMA", "Time-Series Forecasting", "Bayesian SLSQP", "Deep Learning", "Environmental Science"],
    verifiedEvidence: "Complete internship repository and verified artifacts in `D:\\CBRI_project - Copy`.",
    status: "Verified"
  },
  {
    id: "certed-technologies-internship",
    role: "Data Science Intern (On-site)",
    organization: "CertED Technologies",
    location: "Roorkee, Uttarakhand, India",
    period: "June 2025 – July 2025",
    type: "Industrial Internship",
    description: "Engineered robust financial machine learning pipelines focused on detecting fraudulent credit card transactions under severe class imbalance.",
    contributions: [
      "Processed 284,807 transaction records with 492 verified frauds (0.17% minority prevalence).",
      "Applied SMOTE (Synthetic Minority Over-sampling Technique) strictly within cross-validation folds to prevent synthetic data leakage.",
      "Evaluated models via PR-AUC, cost-weighted confusion matrices, and ROC-AUC (achieving 0.95 ROC-AUC with Random Forest).",
      "Formulated automated anomaly detection filters for real-time transaction screening."
    ],
    skills: ["Python", "Scikit-learn", "SMOTE (imbalanced-learn)", "Classification", "Fraud Analytics", "Pandas"],
    verifiedEvidence: "Documented in candidate verified resume filings and public GitHub repository `credit_card_fraud_detection_models`.",
    status: "Verified"
  },
  {
    id: "techsangram-2026-competition",
    role: "Hardware & AI Project Lead (2nd Runner-Up)",
    organization: "TechSangram 2026, Haridwar University",
    location: "Roorkee, Uttarakhand, India",
    period: "April 2026",
    type: "Honor & Competition",
    description: "Competed in the annual inter-university engineering innovation symposium, presenting HydroSense to an academic and industrial judging panel.",
    contributions: [
      "Fabricated a physical multi-sensor plumbing test apparatus with ESP8266 microcontroller and pulse flow meters.",
      "Demonstrated live differential water balance monitoring and autonomous leak detection.",
      "Won 2nd Runner-Up in the competitive IoT and Hardware Systems track."
    ],
    skills: ["ESP8266", "Embedded C++", "Hardware Demonstration", "Technical Pitching", "Sensors"],
    verifiedEvidence: "Hardware codebase, serial telemetry logs, and competition photography in `D:\\water_leak_detector\\` and `D:\\TECHSANGRAM\\`.",
    status: "Verified"
  }
];
