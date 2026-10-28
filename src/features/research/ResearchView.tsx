import React, { useState } from 'react';
import {
  seasonalGroundwaterMetrics,
  districtTuningData,
  aqiBenchmarkMetrics
} from '../../data/researchMetrics';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import {
  Cpu,
  TrendingUp,
  FileText,
  Layers,
  MapPin,
  Calendar,
  CheckCircle2,
  ExternalLink,
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
        <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1">
          <Cpu className="w-4 h-4" />
          <span>Atmospheric Modeling & Environmental AI Hub</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
          Empirical Research & Hydro-Climatic Intelligence
        </h1>
        <p className="text-sm text-slate-400 font-mono mt-1 max-w-3xl">
          Deep-dive analysis of machine learning frameworks developed at the National Institute of Hydrology (NIH) Roorkee and CSIR-CBRI, verified by official dissertations and empirical benchmark registers.
        </p>
      </div>

      {/* Flagship Research 1: NIH Roorkee JAL-SETU */}
      <Card className="border-cyan-900/60 bg-gradient-to-br from-slate-900/90 to-[#0c1424]">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-4 pb-6 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Badge status="Verified" size="sm" />
              <span className="text-xs font-mono text-cyan-300">National Institute of Hydrology (NIH), Roorkee</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              JAL-SETU: Seasonal Groundwater Forecasting & RAG Framework
            </h2>
            <p className="text-xs font-mono text-slate-400 mt-1">
              Supervised by Dr. Sushindra Kumar Gupta (Scientist 'C', NIH Roorkee) • Enrolment No: 230103001
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono px-3 py-1.5 rounded-lg bg-cyan-950/70 text-cyan-300 border border-cyan-800">
              Peak R²: 0.9467 (Cubist)
            </span>
            <span className="text-xs font-mono px-3 py-1.5 rounded-lg bg-emerald-950/70 text-emerald-300 border border-emerald-800">
              WI: 0.9851
            </span>
          </div>
        </div>

        {/* Narrative & Methodology */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 py-6 border-b border-slate-800 text-xs text-slate-300 leading-relaxed">
          <div className="space-y-2">
            <span className="font-mono text-slate-400 uppercase text-[10px] block">Problem & Coverage</span>
            <p>
              Addresses persistent aquifer depletion across 7 arid and semi-arid districts in Rajasthan (Ajmer, Barmer, Jalore, Jodhpur, Pali, Rajsamand, Sirohi). Integrates multi-decadal CGWB piezometer data with satellite remote sensing.
            </p>
          </div>
          <div className="space-y-2">
            <span className="font-mono text-slate-400 uppercase text-[10px] block">Multi-Spectral Remote Sensing</span>
            <p>
              Coupled USGS Landsat 8/9 Level-2 reflectance (NDVI, NDWI, NDMI) with ERA5-Land layered soil moisture (10cm, 40cm, 100cm) and FAO-56 Penman-Monteith evapotranspiration with 5-lag water level history.
            </p>
          </div>
          <div className="space-y-2">
            <span className="font-mono text-slate-400 uppercase text-[10px] block">Leakage Prevention</span>
            <p>
              Utilized strictly sequential temporal train/validation/test partitions to prevent temporal lookahead bias, paired with Leave-One-Feature-Out (LOFO) sensitivity scoring.
            </p>
          </div>
        </div>

        {/* Interactive Seasonal Benchmark Visualizer */}
        <div className="pt-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4">
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-cyan-400" />
                Seasonal Algorithm Performance (Table 19, NIH Dissertation)
              </h3>
              <p className="text-xs text-slate-400 font-mono mt-0.5">
                Comparing test R² and error metrics across hydrological seasons
              </p>
            </div>

            {/* Season Selector Tabs */}
            <div className="flex items-center gap-1.5 p-1 rounded-lg bg-slate-950 border border-slate-800 text-xs font-mono">
              {seasons.map((season) => (
                <button
                  key={season}
                  onClick={() => setSelectedSeason(season)}
                  className={`px-3 py-1 rounded-md transition-colors ${
                    selectedSeason === season
                      ? 'bg-blue-600 text-white font-semibold shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {season}
                </button>
              ))}
            </div>
          </div>

          {/* Chart */}
          <div className="h-64 w-full mb-6">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={filteredSeasonalData} margin={{ top: 10, right: 10, left: -15, bottom: 20 }}>
                <XAxis dataKey="model" stroke="#94A3B8" fontSize={11} angle={-15} textAnchor="end" height={40} />
                <YAxis domain={[0, 1.0]} stroke="#64748B" fontSize={11} tickFormatter={(v) => v.toFixed(2)} />
                <Tooltip
                  formatter={(val: any) => [`${Number(val).toFixed(4)}`, 'R² Score']}
                  contentStyle={{ backgroundColor: '#0F172A', borderColor: '#334155', borderRadius: '8px' }}
                  itemStyle={{ color: '#E2E8F0', fontSize: '12px' }}
                />
                <Bar dataKey="r2" fill="#06B6D4" radius={[4, 4, 0, 0]}>
                  {filteredSeasonalData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={entry.r2 > 0.9 ? '#10B981' : entry.r2 > 0.75 ? '#06B6D4' : '#3B82F6'}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Data Table */}
          <div className="overflow-x-auto rounded-xl border border-slate-800">
            <table className="w-full text-left text-xs font-mono">
              <thead className="bg-slate-950 text-slate-400 border-b border-slate-800">
                <tr>
                  <th className="p-3">Model</th>
                  <th className="p-3">Test R²</th>
                  <th className="p-3">Test RMSE (m)</th>
                  <th className="p-3">Test MAE (m)</th>
                  <th className="p-3">Pearson r</th>
                  <th className="p-3">Willmott's Index (WI)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 bg-slate-900/40">
                {filteredSeasonalData.map((row, i) => (
                  <tr key={i} className="hover:bg-slate-800/30">
                    <td className="p-3 font-semibold text-white">{row.model}</td>
                    <td className="p-3 text-emerald-400 font-bold">{row.r2.toFixed(4)}</td>
                    <td className="p-3 text-cyan-300">{row.rmse.toFixed(4)}</td>
                    <td className="p-3 text-slate-300">{row.mae.toFixed(4)}</td>
                    <td className="p-3 text-slate-400">{row.pearsonR.toFixed(4)}</td>
                    <td className="p-3 text-purple-300">{row.wi.toFixed(4)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* District Hyperparameter Tuning Matrix (Table 21) */}
        <div className="mt-8 pt-6 border-t border-slate-800">
          <div className="flex items-center gap-2 mb-3">
            <Sliders className="w-4 h-4 text-purple-400" />
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
              Optimal District Hyperparameters (Table 21, NIH Dissertation)
            </h4>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {districtTuningData.map((dt) => (
              <div key={dt.district} className="p-3 rounded-lg bg-slate-950/80 border border-slate-800 text-xs font-mono">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-cyan-300">{dt.district} District</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-300">{dt.bestModel}</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-snug">{dt.hyperparameters}</p>
              </div>
            ))}
          </div>
        </div>
      </Card>

      {/* Flagship Research 2: CSIR-CBRI Multi-Hybrid AQI */}
      <Card className="border-blue-900/60 bg-gradient-to-br from-slate-900/90 to-[#0a1224]">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-4 pb-6 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Badge status="Verified" size="sm" />
              <span className="text-xs font-mono text-cyan-300">Central Building Research Institute (CSIR-CBRI), Roorkee</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2">
              <Wind className="w-6 h-6 text-cyan-400" />
              Multi-Hybrid Air Quality Index & PM2.5 Prediction System
            </h2>
            <p className="text-xs font-mono text-slate-400 mt-1">
              Atmospheric Modeling & Environmental Science Division • Verified Research Internship (June–August 2025)
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono px-3 py-1.5 rounded-lg bg-emerald-950/70 text-emerald-300 border border-emerald-800">
              SuperBlend R²: 0.9180
            </span>
            <span className="text-xs font-mono px-3 py-1.5 rounded-lg bg-blue-950/70 text-blue-300 border border-blue-800">
              5-Year Projections (2023–2028)
            </span>
          </div>
        </div>

        {/* Multi-Hybrid Architecture Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-6 border-b border-slate-800 text-xs">
          <div className="p-3.5 rounded-lg bg-slate-950 border border-slate-800">
            <span className="font-mono text-cyan-400 font-bold block mb-1">Hybrid 1: CatBoost + ARIMA</span>
            <p className="text-slate-400 text-[11px] leading-relaxed">
              CatBoost captures non-linear feature maps; an ARIMA(1,0,1) model learns residual autocorrelation. Test R²: 0.9161.
            </p>
          </div>
          <div className="p-3.5 rounded-lg bg-slate-950 border border-slate-800">
            <span className="font-mono text-blue-400 font-bold block mb-1">Hybrid 2: SARIMAX + LightGBM</span>
            <p className="text-slate-400 text-[11px] leading-relaxed">
              SARIMAX seasonal trend decomposition paired with fast gradient boosting on exogenous atmospheric shocks.
            </p>
          </div>
          <div className="p-3.5 rounded-lg bg-slate-950 border border-slate-800">
            <span className="font-mono text-purple-400 font-bold block mb-1">Hybrid 3: Stacking Meta-Ensemble</span>
            <p className="text-slate-400 text-[11px] leading-relaxed">
              RidgeCV regularized meta-regressor combining Level-0 predictions from 6 distinct model families. Test R²: 0.9121.
            </p>
          </div>
          <div className="p-3.5 rounded-lg bg-slate-950 border border-emerald-800/80 bg-emerald-950/20">
            <span className="font-mono text-emerald-300 font-bold block mb-1">Hybrid 4: Bayesian SuperBlend</span>
            <p className="text-slate-300 text-[11px] leading-relaxed">
              SLSQP-optimized convex combination (57.8% CatBoost + 42.2% XGBoost) minimizing out-of-sample RMSE. Test R²: 0.9180.
            </p>
          </div>
        </div>

        {/* CSIR-CBRI Benchmark Table */}
        <div className="pt-6">
          <h3 className="text-base font-bold text-white mb-3 flex items-center gap-2 font-mono">
            <TrendingUp className="w-4 h-4 text-emerald-400" />
            CSIR-CBRI Model Benchmark Register (Visakhapatnam CPCB Station 260)
          </h3>
          <div className="overflow-x-auto rounded-xl border border-slate-800">
            <table className="w-full text-left text-xs font-mono">
              <thead className="bg-slate-950 text-slate-400 border-b border-slate-800">
                <tr>
                  <th className="p-3">Model Architecture</th>
                  <th className="p-3">Type</th>
                  <th className="p-3">Test R²</th>
                  <th className="p-3">Test RMSE (µg/m³)</th>
                  <th className="p-3">Test MAE (µg/m³)</th>
                  <th className="p-3">Key Characteristics</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 bg-slate-900/40">
                {aqiBenchmarkMetrics.map((row, i) => (
                  <tr key={i} className={`hover:bg-slate-800/30 ${row.type === 'Hybrid Model' ? 'bg-cyan-950/10' : ''}`}>
                    <td className="p-3 font-semibold text-white">{row.model}</td>
                    <td className="p-3">
                      <span className={`px-2 py-0.5 rounded text-[10px] ${
                        row.type === 'Hybrid Model'
                          ? 'bg-emerald-950 text-emerald-300 border border-emerald-800'
                          : row.type === 'Target AQI'
                          ? 'bg-purple-950 text-purple-300 border border-purple-800'
                          : 'bg-slate-800 text-slate-300'
                      }`}>
                        {row.type}
                      </span>
                    </td>
                    <td className="p-3 text-emerald-400 font-bold">{row.testR2.toFixed(4)}</td>
                    <td className="p-3 text-cyan-300">{row.testRMSE.toFixed(4)}</td>
                    <td className="p-3 text-slate-300">{row.testMAE.toFixed(4)}</td>
                    <td className="p-3 text-slate-400 text-[11px]">{row.characteristics}</td>
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
