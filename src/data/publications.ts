export interface Publication {
  id: string;
  title: string;
  type: 'Conference Paper' | 'Academic Dissertation' | 'Technical Report';
  venue: string;
  year: number;
  authors: string[];
  status: 'Published / Presented' | 'Institutional Thesis' | 'Completed Report';
  verificationUrl?: string;
  certificateId?: string;
  abstract: string;
  keywords: string[];
}

export const publicationsData: Publication[] = [
  {
    id: "sdmel-2025-voice-ai",
    title: "Inclusive Voice-AI for Rural India: A Deep Learning Framework",
    type: "Conference Paper",
    venue: "International Conference on Sustainable Development, Management and E-Learning (SDMEL 2025)",
    year: 2025,
    authors: ["Aman Kumar Ranjan (Co-Author)"],
    status: "Published / Presented",
    certificateId: "SDMEL0335",
    verificationUrl: "https://sdmel2025.vercel.app/v?id=SDMEL0335",
    abstract: "Presents an acoustic deep learning architecture tailored for phonetically diverse, low-resource rural Indian languages and dialects. The model combines convolutional spectral frontends with recurrent attention mechanisms to improve voice query comprehension for non-literate agricultural communities.",
    keywords: ["Voice AI", "Acoustic Modeling", "Rural Telephony", "Deep Learning", "Inclusive Technology"]
  },
  {
    id: "naya-pani-nih-dissertation",
    title: "NAYA-PANI: A Retrieval-Augmented, Explainable AI Framework for Conversational Seasonal Groundwater Level Forecasting Using Multi-Source Hydro-Climatic Data in Semi-Arid Rajasthan",
    type: "Academic Dissertation",
    venue: "National Institute of Hydrology (NIH), Roorkee & Haridwar University",
    year: 2026,
    authors: [
      "Aman Kumar Ranjan (Enrolment No: 230103001)",
      "Dr. Sushindra Kumar Gupta (Scientist 'C', Ground Water Hydrology Division, NIH Roorkee, Supervisor)"
    ],
    status: "Institutional Thesis",
    abstract: "A rigorous 100+ page dissertation evaluating standalone and hybrid machine learning models (Cubist, CatBoost, Extra Trees, XGBoost, AdaBoost) coupled with multi-spectral Landsat 8/9 remote sensing indices (NDVI, NDWI, NDMI) and meteorology to predict seasonal groundwater depth across 7 hyper-arid and semi-arid districts in Rajasthan. Integrates a deterministic TF-IDF RAG assistant for transparent stakeholder querying.",
    keywords: ["Groundwater Hydrology", "Remote Sensing", "CatBoost", "Cubist", "Explainable AI", "RAG", "Rajasthan Aquifers"]
  },
  {
    id: "cbri-aqi-technical-report",
    title: "CSIR-CBRI Multi-Hybrid Air Quality Index (AQI) & PM2.5 Prediction System: Model Benchmarking & Multi-Year Projections",
    type: "Technical Report",
    venue: "Central Building Research Institute (CSIR-CBRI), Roorkee",
    year: 2025,
    authors: ["Aman Kumar Ranjan (AI/ML Research Intern)"],
    status: "Completed Report",
    abstract: "Documents the engineering and empirical validation of 8 base models and 4 multi-hybrid ensemble architectures for ambient air quality monitoring (Visakhapatnam APPCB/CPCB Station 260). Details the Bayesian SLSQP SuperBlend achieving Test R² = 0.9180 and provides continuous 1,825-day future projections with 95% confidence intervals.",
    keywords: ["Air Quality Index", "PM2.5", "Hybrid Forecasting", "CatBoost", "SARIMAX", "Bayesian Optimization"]
  }
];
