# Workspace & Environment Audit Report

**Candidate**: Aman Kumar Ranjan  
**GitHub**: [Amankumarranjan8969](https://github.com/Amankumarranjan8969)  
**Date of Audit**: October 28, 2026  
**Auditor**: Senior Software Architect / Autonomous Audit Agent  

---

## 1. Executive Summary

An exhaustive inspection of the local workspace environment (`d:\Portfolio_AMAN`), host filesystem (`D:\`), and public GitHub presence (`https://github.com/Amankumarranjan8969`) was conducted to evaluate existing projects, codebases, empirical research data, institutional dissertations, and official certifications.

The workspace `d:\Portfolio_AMAN` is an uninitialized project folder designated for the standalone engineering portfolio. Surrounding local directories on `D:\` contain primary evidence for multiple research projects, hardware/IoT implementations, full-stack web platforms, and academic documents.

---

## 2. Environment & Tooling Verification

| Component | Detected Version / Status | Operational Notes |
| :--- | :--- | :--- |
| **Operating System** | Windows 11 / Windows PowerShell | Host OS for development |
| **Node.js** | `v24.21.0` | Active modern LTS environment |
| **npm** | `v11.19.0` | Invoked via `npm.cmd` to bypass PowerShell script execution policy |
| **npx** | `v11.19.0` | Invoked via `npx.cmd` |
| **Git** | `git version 2.53.0.windows.2` | Clean local git installation |
| **Python** | `Python 3.10.10` | Located at `C:\Users\amank\AppData\Local\Programs\Python\Python310` |
| **Python Libraries** | PyTorch 2.13 (CUDA 12.6), CatBoost, XGBoost, LightGBM, Scikit-learn, FastAPI, Streamlit, python-docx, pypdf | Robust ML & data science host environment |
| **GitHub CLI (`gh`)** | Not installed | REST API queries executed directly via authenticated/user-agent HTTPS |

---

## 3. Remote GitHub Audit (`Amankumarranjan8969`)

Inspection of the GitHub REST API (`https://api.github.com/users/Amankumarranjan8969`) confirmed an authentic profile created on `2025-02-03` with **14 public repositories**:

1. **`Amankumarranjan8969`**: Personal profile repository (Python/SVG animation workflows).
2. **`Groundwater-RAG-forecast`**: Python, RAG-based explainable seasonal groundwater forecasting system. Source contains `rag/retriever.py` (TF-IDF), `rag/context.py`, `rag/llm_provider.py`, `rag/smalltalk.py`, `rag/assistant.py`, Streamlit `app.py`.
3. **`Groundwater-Level-Prediction-Using-Machine-Learning-and-Remote-Sensing-Data`**: Jupyter Notebooks, multi-source hydro-climatic preprocessing and modeling for semi-arid Rajasthan.
4. **`aqi_prediction_using-hybrid_models`**: CatBoost + ARIMA/SARIMAX hybrid models for AQI and $PM_{2.5}$ forecasting.
5. **`credit_card_fraud_detection_models`**: Classification on 284K+ imbalanced transactions with SMOTE and evaluation metrics.
6. **`Brain-tumor-detection-`**: Neuro Scanner — DenseNet121 + Dual CBAM attention network with FastAPI backend and Grad-CAM visualizer.
7. **`SLM-`**: Self-learning language model architectures and experiments.
8. **`building-data-genome-project-2`**: Great Energy Predictor III competition hourly meter analysis.
9. **`app-yolo-factory`**: AI Agent task orchestration platform.
10. **`Brain`**: Python research code.
11. **`PRODIGY_WD_01`**: Stopwatch application.
12. **`PRODIGY_WD_02`**: Tic-Tac-Toe application.
13. **`PRODIGY_WD_03`**: Responsive navigation bar.
14. **`PRODIGY_WD_04`**: Personal web portfolio baseline.

---

## 4. Local Filesystem & Physical Project Audit (`D:\`)

Primary source artifacts were discovered and inspected on disk:

1. **National Institute of Hydrology (NIH), Roorkee**:
   - Official B.Tech Dissertation Writeup: `D:\AMAN REPORT NIH ROORKEE222222.docx` & `D:\DISSERTATION WRITEUP Aman.docx`.
   - Title: *JAL-SETU: A Retrieval-Augmented, Explainable AI Framework for Conversational Seasonal Groundwater Level Forecasting Using Multi-Source Hydro-Climatic Data in Semi-Arid Rajasthan*.
   - Institutional Supervisor: Dr. Sushindra Kumar Gupta (Scientist 'C', Groundwater Hydrology Division, NIH Roorkee).
   - Institutional Director: Dr. Y.R.S. Rao (Director, NIH Roorkee).
   - Degree: B.Tech Computer Science & Engineering (Data Science), Haridwar University Roorkee (Enrolment No: 230103001).
   - Empirical experiment results across 7 districts (Ajmer, Barmer, Jalore, Jodhpur, Pali, Rajsamand, Sirohi) in `D:\results ms words\`.

2. **CSIR–Central Building Research Institute (CBRI), Roorkee**:
   - Verified Internship (June 2025 – August 2025) in `D:\CBRI_project - Copy`.
   - Title: *CSIR-CBRI Multi-Hybrid Air Quality Index (AQI) & PM2.5 Prediction System*.
   - Models: CatBoost (Test $R^2 = 0.9161$), XGBoost (Test $R^2 = 0.9144$), Hybrid 4 SuperBlend Learner (Test $R^2 = 0.9180$, RMSE = 7.2997 $\mu g/m^3$, MAE = 5.2234 $\mu g/m^3$).

3. **HydroSense (Smart Water Leakage & Monitoring)**:
   - Verified project in `D:\water_leak_detector`, `D:\AURDINO_water`, and `D:\TECHSANGRAM`.
   - Hardware: ESP8266 microcontroller, multiple water flow sensors, real-time serial calibration, rule-based & ML leakage severity classification.
   - Award: 2nd Runner-Up at TechSangram 2026, Haridwar University.

4. **Grandmaster Arena (Chess Platform)**:
   - Verified complete monorepo in `D:\chess`.
   - Subpackages: `@chess/core` (FIDE rules engine, Monotonic ChessClock, KiwiPete perft suite, Minimax AI with Alpha-Beta pruning & piece-square tables), `apps/web` (React 19 + TypeScript + Vite + Tailwind CSS), `apps/server` (Node.js, Express, Socket.IO, PostgreSQL schema with Prisma ORM).

5. **CertED Technologies**:
   - Data Science Internship (June 2025 – July 2025) on imbalanced fraud detection (SMOTE, 0.95 ROC-AUC).

6. **ATS Resume Analyzer**:
   - Full-stack MERN + Python ML application discovered in `D:\CREDIT_CARD_FRAUD_DETECTION.zip`.

7. **Punpun River Basin Digital Twin**:
   - Research pipeline in `D:\NIH_Suhani` (`punpun_et_pipeline.py`, `Punpun_Merged_Dataset_New.csv`). Collaborative simulation project.

8. **Blue Alert (Flood Alert)**:
   - Prototype backend script `bluealertblockchain.js` in `D:\blockchain\backend`.

9. **FitMove**:
   - No source files located locally or on GitHub. Categorized as *Needs Verification*.

---

## 5. Security & Isolation Guarantee

Per Section 2.1 and 2.3 of the Master Implementation Prompt:
- External directories (`D:\Groundwater-level-Prediction`, `D:\CBRI_project - Copy`, `D:\chess`, `D:\water_leak_detector`, `D:\NIH_roorkee`, etc.) are held strictly **READ-ONLY**.
- No modifications, deletions, or staging of files in external directories will occur.
- No personal identity documents (Aadhar, caste certificates found in `D:\Aman_Important_files`) or secrets (`credentials.json`) will ever be copied, staged, or exposed.
- All code for the new professional engineering portfolio will reside strictly inside `d:\Portfolio_AMAN`.
