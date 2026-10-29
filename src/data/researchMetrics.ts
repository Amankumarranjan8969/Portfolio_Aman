export interface DistrictTuning {
  district: string;
  bestModel: string;
  hyperparameters: string;
}

export interface SeasonalMetric {
  season: string;
  model: string;
  rmse: number;
  mae: number;
  r2: number;
  pearsonR: number;
  wi: number; // Willmott's Index of Agreement
}

export interface AQIModelMetric {
  model: string;
  type: 'Base Model' | 'Hybrid Model' | 'Target AQI';
  testR2: number;
  testRMSE: number;
  testMAE: number;
  characteristics: string;
}

// Extracted directly from Table 19 of NIH Roorkee Dissertation
export const seasonalGroundwaterMetrics: SeasonalMetric[] = [
  // Pre-Monsoon
  { season: "Pre-Monsoon", model: "Cubist", rmse: 5.0756, mae: 3.0808, r2: 0.8038, pearsonR: 0.9007, wi: 0.9490 },
  { season: "Pre-Monsoon", model: "M5 Model Tree", rmse: 5.1529, mae: 3.2891, r2: 0.7978, pearsonR: 0.9029, wi: 0.9372 },
  { season: "Pre-Monsoon", model: "AdaBoost + CART", rmse: 5.3833, mae: 3.7181, r2: 0.7793, pearsonR: 0.8852, wi: 0.9352 },
  { season: "Pre-Monsoon", model: "Random Forest", rmse: 6.3741, mae: 4.6761, r2: 0.6905, pearsonR: 0.8387, wi: 0.9033 },
  { season: "Pre-Monsoon", model: "Extra Trees", rmse: 6.4695, mae: 4.8152, r2: 0.6812, pearsonR: 0.8335, wi: 0.9024 },
  { season: "Pre-Monsoon", model: "CatBoost", rmse: 7.1003, mae: 5.6974, r2: 0.6160, pearsonR: 0.8221, wi: 0.8969 },
  { season: "Pre-Monsoon", model: "XGBoost", rmse: 7.2116, mae: 5.2356, r2: 0.6039, pearsonR: 0.8085, wi: 0.8840 },

  // Monsoon
  { season: "Monsoon", model: "M5 Model Tree", rmse: 5.3764, mae: 4.0133, r2: 0.7945, pearsonR: 0.8914, wi: 0.9397 },
  { season: "Monsoon", model: "Extra Trees", rmse: 5.4671, mae: 3.6130, r2: 0.7875, pearsonR: 0.8893, wi: 0.9363 },
  { season: "Monsoon", model: "Random Forest", rmse: 5.5812, mae: 3.3374, r2: 0.7786, pearsonR: 0.8900, wi: 0.9379 },
  { season: "Monsoon", model: "Cubist", rmse: 5.6475, mae: 3.4192, r2: 0.7733, pearsonR: 0.8805, wi: 0.9358 },
  { season: "Monsoon", model: "CatBoost", rmse: 5.7612, mae: 4.3620, r2: 0.7641, pearsonR: 0.9021, wi: 0.9158 },
  { season: "Monsoon", model: "XGBoost", rmse: 5.9446, mae: 4.2068, r2: 0.7488, pearsonR: 0.8702, wi: 0.9298 },
  { season: "Monsoon", model: "AdaBoost + CART", rmse: 6.1692, mae: 4.4797, r2: 0.7295, pearsonR: 0.8679, wi: 0.9209 },

  // Post-Monsoon (Peak Performance)
  { season: "Post-Monsoon", model: "Cubist", rmse: 2.6328, mae: 1.8326, r2: 0.9467, pearsonR: 0.9762, wi: 0.9851 },
  { season: "Post-Monsoon", model: "Extra Trees", rmse: 3.2492, mae: 2.6415, r2: 0.9189, pearsonR: 0.9670, wi: 0.9758 },
  { season: "Post-Monsoon", model: "AdaBoost + CART", rmse: 3.4734, mae: 2.7845, r2: 0.9073, pearsonR: 0.9604, wi: 0.9742 },
  { season: "Post-Monsoon", model: "CatBoost", rmse: 3.5334, mae: 2.6390, r2: 0.9041, pearsonR: 0.9807, wi: 0.9691 },
  { season: "Post-Monsoon", model: "Random Forest", rmse: 4.1346, mae: 3.3449, r2: 0.8686, pearsonR: 0.9451, wi: 0.9590 },
  { season: "Post-Monsoon", model: "M5 Model Tree", rmse: 4.7135, mae: 3.3942, r2: 0.8293, pearsonR: 0.9129, wi: 0.9536 },
  { season: "Post-Monsoon", model: "XGBoost", rmse: 5.2128, mae: 3.7837, r2: 0.7912, pearsonR: 0.9101, wi: 0.9450 },

  // Non-Monsoon
  { season: "Non-Monsoon", model: "Cubist", rmse: 3.8927, mae: 2.8875, r2: 0.8878, pearsonR: 0.9486, wi: 0.9674 },
  { season: "Non-Monsoon", model: "M5 Model Tree", rmse: 4.7373, mae: 3.6104, r2: 0.8338, pearsonR: 0.9199, wi: 0.9479 },
  { season: "Non-Monsoon", model: "XGBoost", rmse: 5.0928, mae: 3.9964, r2: 0.8080, pearsonR: 0.9283, wi: 0.9323 },
  { season: "Non-Monsoon", model: "CatBoost", rmse: 5.6659, mae: 4.3435, r2: 0.7623, pearsonR: 0.9328, wi: 0.9054 },
  { season: "Non-Monsoon", model: "Extra Trees", rmse: 6.7064, mae: 5.0602, r2: 0.6670, pearsonR: 0.8360, wi: 0.8744 },
  { season: "Non-Monsoon", model: "Random Forest", rmse: 10.5161, mae: 6.8757, r2: 0.1813, pearsonR: 0.5284, wi: 0.6738 }
];

// Extracted from Table 21 of NIH Roorkee Dissertation (Optimal District-wise Hyperparameters)
export const districtTuningData: DistrictTuning[] = [
  {
    district: "Ajmer",
    bestModel: "Cubist",
    hyperparameters: "n_rules 140; n_committees 1; unbiased False; extrapolation 0.15; auto True"
  },
  {
    district: "Barmer",
    bestModel: "Cubist",
    hyperparameters: "n_rules 500; n_committees 39; unbiased True; extrapolation 0.17; auto True"
  },
  {
    district: "Jalore",
    bestModel: "Cubist / CatBoost",
    hyperparameters: "CatBoost: iter 700; lr 0.1184; depth 9; l2 2.1889; border 64; bag_temp 0.7551"
  },
  {
    district: "Pali",
    bestModel: "Cubist",
    hyperparameters: "n_rules 400; n_committees 4; unbiased True; extrapolation 0.18; neighbors 9"
  },
  {
    district: "Rajsamand",
    bestModel: "Cubist",
    hyperparameters: "n_rules 100; n_committees 1; unbiased False; extrapolation 0.05; auto True"
  },
  {
    district: "Jodhpur",
    bestModel: "CatBoost (GWM-5)",
    hyperparameters: "CatBoost: iter 400; lr 0.0455; depth 6; l2 1.7968; rand_str 1.6908"
  }
];

// Extracted directly from CSIR-CBRI Multi-Hybrid AQI Research Readme
export const aqiBenchmarkMetrics: AQIModelMetric[] = [
  {
    model: "Hybrid 4: Bayesian SuperBlend",
    type: "Hybrid Model",
    testR2: 0.9180,
    testRMSE: 7.2997,
    testMAE: 5.2234,
    characteristics: "Top Performer (Optimal SLSQP blend: CatBoost 57.8% + XGBoost 42.2%)"
  },
  {
    model: "Hybrid 1: CatBoost + ARIMA",
    type: "Hybrid Model",
    testR2: 0.9161,
    testRMSE: 7.3848,
    testMAE: 5.3088,
    characteristics: "CatBoost nonlinear feature mapping + ARIMA residual autocorrelation"
  },
  {
    model: "CatBoost Regressor",
    type: "Base Model",
    testR2: 0.9161,
    testRMSE: 7.3849,
    testMAE: 5.3088,
    characteristics: "Symmetric decision trees, robust against overfitting"
  },
  {
    model: "XGBoost Regressor",
    type: "Base Model",
    testR2: 0.9144,
    testRMSE: 7.4589,
    testMAE: 5.3237,
    characteristics: "Fast histogram-based gradient boosting"
  },
  {
    model: "Hybrid 3: Stacking Meta-Ensemble",
    type: "Hybrid Model",
    testR2: 0.9121,
    testRMSE: 7.5611,
    testMAE: 5.4481,
    characteristics: "Stacks CatBoost + LightGBM + XGBoost + RF + ExtraTrees via RidgeCV"
  },
  {
    model: "CatBoost AQI Direct Regressor",
    type: "Target AQI",
    testR2: 0.9087,
    testRMSE: 14.0661,
    testMAE: 9.8568,
    characteristics: "Direct prediction of aggregate Air Quality Index"
  },
  {
    model: "LightGBM Regressor",
    type: "Base Model",
    testR2: 0.9078,
    testRMSE: 7.7401,
    testMAE: 5.6879,
    characteristics: "Leaf-wise tree growth with fast execution"
  },
  {
    model: "ExtraTrees Regressor",
    type: "Base Model",
    testR2: 0.9051,
    testRMSE: 7.8531,
    testMAE: 5.7528,
    characteristics: "Extremely randomized bagged decision trees"
  },
  {
    model: "Random Forest Regressor",
    type: "Base Model",
    testR2: 0.8959,
    testRMSE: 8.2255,
    testMAE: 5.9262,
    characteristics: "Standard bagging benchmark"
  },
  {
    model: "Deep MLP Neural Network",
    type: "Base Model",
    testR2: 0.8678,
    testRMSE: 9.2710,
    testMAE: 6.8402,
    characteristics: "Feedforward dense network with ReLU and dropout"
  }
];
