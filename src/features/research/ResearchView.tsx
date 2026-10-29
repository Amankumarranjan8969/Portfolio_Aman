import React, { useState } from 'react';
import {
  seasonalGroundwaterMetrics,
  districtTuningData,
  aqiBenchmarkMetrics
} from '../../data/researchMetrics';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import {
  Cpu,
  TrendingUp,
  Sliders,
  Wind
} from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell
} from 'recharts';

export const ResearchView: React.FC = () => {
  const [selectedSeason, setSelectedSeason] = useState<string>('Post-Monsoon');

  const seasons = ['Pre-Monsoon', 'Monsoon', 'Post-Monsoon', 'Non-Monsoon'];

  const filteredSeasonalData = seasonalGroundwaterMetrics.filter(
    (m) => m.season === selectedSeason
  );

  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-mono text-blue-600 dark:text-cyan-400 uppercase tracking-wider mb-1">
          <Cpu className="w-4 h-4" />
          <span>Atmospheric Modeling & Environmental AI</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
          Empirical Research & Hydrological Intelligence
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-mono mt-1 max-w-3xl">
          Deep-dive analysis of machine learning frameworks developed at the National Institute of Hydrology (NIH) Roorkee and CSIR-CBRI, verified by official dissertations.
        </p>
      </div>

      {/* Flagship Research 1: NIH Roorkee NAYA-PANI */}
      <Card>
        <div className="flex flex-col lg:flex-row items-start justify-between gap-4 pb-5 border-b border-slate-100 dark:border-slate-800">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <Badge status="Verified" size="sm" />
              <span className="text-xs font-mono text-blue-600 dark:text-cyan-400 font-semibold">National Institute of Hydrology (NIH), Roorkee</span>
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white tracking-tight">
              NAYA-PANI: Seasonal Groundwater Forecasting & RAG Framework
            </h2>
            <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-0.5">
              Supervised by Dr. Sushindra Kumar Gupta (Scientist 'C', NIH Roorkee) • Enrolment No: 230103001
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono">
            <span className="px-2.5 py-1 rounded bg-blue-50 dark:bg-cyan-950/70 text-blue-800 dark:text-cyan-300 border border-blue-200 dark:border-cyan-800 font-semibold">
              Peak R²: 0.9467 (Cubist)
            </span>
            <span className="px-2.5 py-1 rounded bg-emerald-50 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 font-semibold">
              WI: 0.9851
            </span>
          </div>
        </div>

        {/* Narrative & Methodology */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 py-5 border-b border-slate-100 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
          <div className="space-y-1.5">
            <span className="font-mono text-slate-400 dark:text-slate-500 uppercase text-[10px] block">Problem & Coverage</span>
            <p>
              Addresses persistent aquifer depletion across 7 arid and semi-arid districts in Rajasthan (Ajmer, Barmer, Jalore, Jodhpur, Pali, Rajsamand, Sirohi). Integrates multi-decadal CGWB piezometer data with satellite remote sensing.
            </p>
          </div>
          <div className="space-y-1.5">
            <span className="font-mono text-slate-400 dark:text-slate-500 uppercase text-[10px] block">Multi-Spectral Remote Sensing</span>
            <p>
              Coupled USGS Landsat 8/9 Level-2 reflectance (NDVI, NDWI, NDMI) with ERA5-Land layered soil moisture (10cm, 40cm, 100cm) and FAO-56 Penman-Monteith evapotranspiration with 5-lag water level history.
            </p>
          </div>
          <div className="space-y-1.5">
            <span className="font-mono text-slate-400 dark:text-slate-500 uppercase text-[10px] block">Leakage Prevention</span>
            <p>
              Utilized strictly sequential temporal train/validation/test partitions to prevent temporal lookahead bias, paired with Leave-One-Feature-Out (LOFO) sensitivity scoring.
            </p>
          </div>
        </div>

        {/* Seasonal Benchmark Visualizer */}
        <div className="pt-5">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4">
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-blue-600 dark:text-cyan-400" />
                Seasonal Algorithm Performance (Table 19, NIH Dissertation)
              </h3>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-mono mt-0.5">
                Comparing test R² and error metrics across hydrological seasons
              </p>
            </div>

            {/* Season Selector Tabs */}
            <div className="flex items-center gap-1 p-1 rounded-lg bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs font-mono">
              {seasons.map((season) => (
                <button
                  key={season}
                  onClick={() => setSelectedSeason(season)}
                  className={`px-3 py-1 rounded-md transition-colors ${
                    selectedSeason === season
                      ? 'bg-blue-600 text-white font-semibold shadow-sm'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {season}
                </button>
              ))}
            </div>
          </div>

          {/* Chart */}
          <div className="h-56 w-full mb-5">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={filteredSeasonalData} margin={{ top: 10, right: 10, left: -15, bottom: 20 }}>
                <XAxis dataKey="model" stroke="#64748B" fontSize={11} angle={-15} textAnchor="end" height={35} />
                <YAxis domain={[0, 1.0]} stroke="#94A3B8" fontSize={11} tickFormatter={(v) => v.toFixed(2)} />
                <Tooltip
                  formatter={(val: any) => [`${Number(val).toFixed(4)}`, 'R² Score']}
                  contentStyle={{ backgroundColor: '#0F172A', borderColor: '#334155', borderRadius: '8px', color: '#fff' }}
                />
                <Bar dataKey="r2" radius={[4, 4, 0, 0]}>
                  {filteredSeasonalData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={entry.r2 > 0.9 ? '#059669' : entry.r2 > 0.75 ? '#2563EB' : '#0284C7'}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Data Table */}
          <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800">
            <table className="w-full text-left text-xs font-mono">
              <thead className="bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800">
                <tr>
                  <th className="p-2.5">Model</th>
                  <th className="p-2.5">Test R²</th>
                  <th className="p-2.5">Test RMSE (m)</th>
                  <th className="p-2.5">Test MAE (m)</th>
                  <th className="p-2.5">Pearson r</th>
                  <th className="p-2.5">Willmott's Index</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 bg-white dark:bg-slate-900/40">
                {filteredSeasonalData.map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-800/30">
                    <td className="p-2.5 font-semibold text-slate-900 dark:text-white">{row.model}</td>
                    <td className="p-2.5 text-emerald-600 dark:text-emerald-400 font-bold">{row.r2.toFixed(4)}</td>
                    <td className="p-2.5 text-blue-600 dark:text-cyan-300">{row.rmse.toFixed(4)}</td>
                    <td className="p-2.5 text-slate-600 dark:text-slate-300">{row.mae.toFixed(4)}</td>
                    <td className="p-2.5 text-slate-500 dark:text-slate-400">{row.pearsonR.toFixed(4)}</td>
                    <td className="p-2.5 text-purple-600 dark:text-purple-300">{row.wi.toFixed(4)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* District Hyperparameters */}
        <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2 mb-3">
            <Sliders className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            <h4 className="text-xs font-bold text-slate-800 dark:text-white uppercase tracking-wider font-mono">
              Optimal District Hyperparameters (Table 21, NIH Dissertation)
            </h4>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
            {districtTuningData.map((dt) => (
              <div key={dt.district} className="p-3 rounded-lg bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 text-xs font-mono">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-blue-700 dark:text-cyan-300">{dt.district} District</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-200/80 dark:bg-slate-800 text-slate-700 dark:text-slate-300">{dt.bestModel}</span>
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug">{dt.hyperparameters}</p>
              </div>
            ))}
          </div>
        </div>
      </Card>

      {/* Flagship Research 2: CSIR-CBRI Multi-Hybrid AQI */}
      <Card>
        <div className="flex flex-col lg:flex-row items-start justify-between gap-4 pb-5 border-b border-slate-100 dark:border-slate-800">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <Badge status="Verified" size="sm" />
              <span className="text-xs font-mono text-blue-600 dark:text-cyan-400 font-semibold">Central Building Research Institute (CSIR-CBRI), Roorkee</span>
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
              <Wind className="w-5 h-5 text-blue-600 dark:text-cyan-400" />
              Multi-Hybrid Air Quality Index & PM2.5 Prediction System
            </h2>
            <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-0.5">
              Environmental Science & Atmospheric Modeling Division • Verified Research Internship (June–August 2025)
            </p>
          </div>
          <div className="flex items-center gap-2 font-mono text-xs">
            <span className="px-2.5 py-1 rounded bg-emerald-50 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 font-semibold">
              SuperBlend R²: 0.9180
            </span>
          </div>
        </div>

        {/* Multi-Hybrid Architecture Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 py-5 border-b border-slate-100 dark:border-slate-800 text-xs">
          <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
            <span className="font-mono text-blue-700 dark:text-cyan-400 font-bold block mb-1">Hybrid 1: CatBoost + ARIMA</span>
            <p className="text-slate-500 dark:text-slate-400 text-[11px] leading-relaxed">
              CatBoost non-linear mapping + ARIMA(1,0,1) residual error autocorrelation. Test R²: 0.9161.
            </p>
          </div>
          <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
            <span className="font-mono text-blue-700 dark:text-blue-400 font-bold block mb-1">Hybrid 2: SARIMAX + LightGBM</span>
            <p className="text-slate-500 dark:text-slate-400 text-[11px] leading-relaxed">
              SARIMAX seasonal trend decomposition paired with fast gradient boosting on exogenous atmospheric shocks.
            </p>
          </div>
          <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
            <span className="font-mono text-purple-700 dark:text-purple-400 font-bold block mb-1">Hybrid 3: Stacking Meta-Ensemble</span>
            <p className="text-slate-500 dark:text-slate-400 text-[11px] leading-relaxed">
              RidgeCV regularized meta-regressor combining Level-0 predictions from 6 model families. Test R²: 0.9121.
            </p>
          </div>
          <div className="p-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800/80">
            <span className="font-mono text-emerald-800 dark:text-emerald-300 font-bold block mb-1">Hybrid 4: Bayesian SuperBlend</span>
            <p className="text-slate-600 dark:text-slate-300 text-[11px] leading-relaxed">
              SLSQP convex blend (57.8% CatBoost + 42.2% XGBoost) minimizing out-of-sample RMSE. Test R²: 0.9180.
            </p>
          </div>
        </div>

        {/* CSIR-CBRI Benchmark Table */}
        <div className="pt-5">
          <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2 font-mono">
            <TrendingUp className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            CSIR-CBRI Model Benchmark Register (Visakhapatnam CPCB Station 260)
          </h3>
          <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800">
            <table className="w-full text-left text-xs font-mono">
              <thead className="bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800">
                <tr>
                  <th className="p-2.5">Model Architecture</th>
                  <th className="p-2.5">Type</th>
                  <th className="p-2.5">Test R²</th>
                  <th className="p-2.5">Test RMSE (µg/m³)</th>
                  <th className="p-2.5">Test MAE (µg/m³)</th>
                  <th className="p-2.5">Key Characteristics</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 bg-white dark:bg-slate-900/40">
                {aqiBenchmarkMetrics.map((row, i) => (
                  <tr key={i} className={`hover:bg-slate-50 dark:hover:bg-slate-800/30 ${row.type === 'Hybrid Model' ? 'bg-blue-50/40 dark:bg-cyan-950/10' : ''}`}>
                    <td className="p-2.5 font-semibold text-slate-900 dark:text-white">{row.model}</td>
                    <td className="p-2.5">
                      <span className={`px-2 py-0.5 rounded text-[10px] ${
                        row.type === 'Hybrid Model'
                          ? 'bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800'
                          : row.type === 'Target AQI'
                          ? 'bg-purple-50 dark:bg-purple-950 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                      }`}>
                        {row.type}
                      </span>
                    </td>
                    <td className="p-2.5 text-emerald-600 dark:text-emerald-400 font-bold">{row.testR2.toFixed(4)}</td>
                    <td className="p-2.5 text-blue-600 dark:text-cyan-300">{row.testRMSE.toFixed(4)}</td>
                    <td className="p-2.5 text-slate-600 dark:text-slate-300">{row.testMAE.toFixed(4)}</td>
                    <td className="p-2.5 text-slate-500 dark:text-slate-400 text-[11px]">{row.characteristics}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Card>
    </div>
  );
};
