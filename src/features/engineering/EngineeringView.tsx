import React from 'react';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import {
  Radio,
  Layers,
  Terminal,
  Activity,
  CheckCircle2,
  AlertTriangle,
  Server
} from 'lucide-react';

export const EngineeringView: React.FC = () => {
  const chessFideRules = [
    "Full standard 8x8 Board & starting FEN notation",
    "Special Pawn moves: double step & En Passant (strictly within next ply)",
    "Castling validation: Kingside & Queenside (disallowed through check or if moved)",
    "Pawn promotion to Queen, Rook, Bishop, or Knight",
    "Checkmate & Stalemate detection with pin validation",
    "Threefold repetition (claimable) & Fivefold repetition (automatic FIDE draw)",
    "Fifty-move rule (claimable) & Seventy-five-move rule (automatic FIDE draw)",
    "Insufficient material dead positions (King vs King, King+Bishop vs King, etc.)",
    "Monotonic lag-compensated server clocks preventing client timer drift"
  ];

  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-mono text-blue-600 dark:text-cyan-400 uppercase tracking-wider mb-1">
          <Radio className="w-4 h-4" />
          <span>Hardware Systems, Embedded IoT & Systems Engineering</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
          Engineering & Embedded Systems Hub
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-mono mt-1 max-w-3xl">
          Showcase of physical embedded hardware systems, telemetry pipelines, and authoritative full-stack software architectures with passed test suites.
        </p>
      </div>

      {/* Project 1: HydroSense */}
      <Card>
        <div className="flex flex-col lg:flex-row items-start justify-between gap-4 pb-5 border-b border-slate-100 dark:border-slate-800">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <Badge status="Verified" size="sm" />
              <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-amber-50 dark:bg-amber-950/70 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800/80 font-semibold">
                🏆 2nd Runner-Up • TechSangram 2026
              </span>
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
              <Activity className="w-5 h-5 text-blue-600 dark:text-cyan-400" />
              HydroSense: IoT Water Monitoring & Leak Detection
            </h2>
            <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-0.5">
              Microcontroller Firmware • Multi-Sensor Pulse Telemetry • Dual Physical-Rule & ML Arbitration
            </p>
          </div>
          <div className="flex items-center gap-2 font-mono text-xs">
            <span className="px-3 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300">
              ESP8266 + 3x Flow Sensors
            </span>
          </div>
        </div>

        {/* System Architecture Flow */}
        <div className="py-5 border-b border-slate-100 dark:border-slate-800 space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 font-mono flex items-center gap-2">
            <Layers className="w-4 h-4 text-blue-600 dark:text-cyan-400" />
            Hardware & Telemetry Architecture
          </h3>
          <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 font-mono text-xs text-slate-700 dark:text-slate-300 leading-relaxed overflow-x-auto">
            <div className="text-blue-600 dark:text-cyan-400 font-bold mb-1">[Physical Apparatus Flow]</div>
            Water Source &rarr; Sensor 1 (YF-S201) &rarr; Zone A &rarr; Sensor 2 (YF-S201) &rarr; Zone B &rarr; Sensor 3 (YF-S201)
            <div className="mt-2 text-indigo-600 dark:text-blue-400 font-bold">[Telemetry & Processing Pipeline]</div>
            Interrupt Pulse Counters (ESP8266 @ 80MHz) &rarr; Serial UART (COM3, 9600 Baud) &rarr; Host Python Daemon (`main3.py`) &rarr; 
            Delta Calculation (`diff12_cal`, `diff23_cal`) &rarr; Physical Conservation Rules + Scikit-Learn ML Classifier &rarr; 
            Real-Time Google Sheets Cloud Sync & Failsafe Relay Trip.
          </div>
        </div>

        {/* Physical vs Simulated Capabilities Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-5 border-b border-slate-100 dark:border-slate-800 text-xs">
          <div className="p-4 rounded-xl bg-emerald-50/40 dark:bg-slate-950/60 border border-emerald-200 dark:border-emerald-900/40">
            <h4 className="font-bold text-emerald-800 dark:text-emerald-400 font-mono uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" />
              Verified Physical Hardware Features
            </h4>
            <ul className="space-y-1.5 text-slate-700 dark:text-slate-300">
              <li>• ESP8266 microcontroller flashed with interrupt-driven pulse counting (`water_leak_detector.ino`).</li>
              <li>• Real-time serial telemetry streaming across 3 calibrated inline hall-effect flow meters.</li>
              <li>• Differential calibration offsets (`flow1_cal`, `flow2_cal`, `flow3_cal`) neutralizing sensor bias.</li>
              <li>• Continuous 900KB+ data logging (`data.csv`) during controlled burst and trickle test runs.</li>
              <li>• Demonstrated live in person at TechSangram 2026, winning 2nd Runner-Up.</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800">
            <h4 className="font-bold text-slate-600 dark:text-slate-400 font-mono uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4 text-amber-500" />
              Engineering Constraints & Planned Iterations
            </h4>
            <ul className="space-y-1.5 text-slate-500 dark:text-slate-400">
              <li>• Physical prototype spans 3 test zones; municipal city-scale deployment requires LoRaWAN nodes.</li>
              <li>• Laminar flow required: sensors need straight run piping without immediate 90-degree elbows.</li>
              <li>• Cloud logging via Google Sheets is optimal for academic triage; MQTT broker planned for v2.</li>
            </ul>
          </div>
        </div>

        {/* Reproduction Box */}
        <div className="pt-5">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 font-mono mb-2 flex items-center gap-2">
            <Terminal className="w-3.5 h-3.5 text-slate-400" />
            Firmware & Host Daemon Execution
          </h4>
          <div className="p-3 rounded-lg bg-slate-900 dark:bg-black border border-slate-800 space-y-1 font-mono text-xs text-emerald-400">
            <div><span className="text-slate-500 select-none">$</span> # 1. Flash firmware via Arduino IDE to ESP8266 (COM port 3, 9600 baud)</div>
            <div><span className="text-slate-500 select-none">$</span> python -m pip install -r requirements.txt (pyserial, gspread, joblib, pandas)</div>
            <div><span className="text-slate-500 select-none">$</span> python D:\water_leak_detector\main3.py --port COM3 --baud 9600</div>
          </div>
        </div>
      </Card>

      {/* Project 2: Grandmaster Arena */}
      <Card>
        <div className="flex flex-col lg:flex-row items-start justify-between gap-4 pb-5 border-b border-slate-100 dark:border-slate-800">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <Badge status="Verified" size="sm" />
              <span className="text-xs font-mono text-blue-600 dark:text-cyan-400 font-semibold">Monorepo Software Engineering</span>
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
              <Server className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              Grandmaster Arena: Authoritative Full-Stack Chess Platform
            </h2>
            <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-0.5">
              Pure TypeScript FIDE Rules Engine • Minimax Alpha-Beta AI • WebSocket Game Server • React 19 Frontend
            </p>
          </div>
          <div className="flex items-center gap-2 font-mono text-xs">
            <span className="px-2.5 py-1 rounded bg-emerald-50 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 font-semibold">
              15/15 Tests Passed
            </span>
          </div>
        </div>

        {/* Monorepo Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 py-5 border-b border-slate-100 dark:border-slate-800 text-xs font-mono">
          <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
            <span className="text-blue-700 dark:text-cyan-400 font-bold block mb-1">1. @chess/core</span>
            <p className="text-slate-500 dark:text-slate-400 text-[11px] leading-relaxed">
              Authoritative rules wrapper, Perft KiwiPete test validator, monotonic clock with lag compensation, and search-based Minimax AI with alpha-beta cutoffs.
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
            <span className="text-blue-700 dark:text-blue-400 font-bold block mb-1">2. @chess/server</span>
            <p className="text-slate-500 dark:text-slate-400 text-[11px] leading-relaxed">
              Node.js + Express + Socket.IO authoritative game server managing private matchmaking rooms, turns, monotonic clocks, and Prisma PostgreSQL schema.
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
            <span className="text-purple-700 dark:text-purple-400 font-bold block mb-1">3. @chess/web</span>
            <p className="text-slate-500 dark:text-slate-400 text-[11px] leading-relaxed">
              React 19 + TypeScript + Vite + Tailwind CSS featuring click-to-move, drag-and-drop, Web Audio API sound synthesizer, and SAN move notation.
            </p>
          </div>
        </div>

        {/* FIDE Checklist */}
        <div className="py-5 border-b border-slate-100 dark:border-slate-800">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 font-mono mb-3 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            Authoritative FIDE Rules Engine Verification Checklist
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 text-xs text-slate-700 dark:text-slate-300 font-mono">
            {chessFideRules.map((rule, idx) => (
              <div key={idx} className="flex items-start gap-2 p-2 rounded-lg bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800/80">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span className="text-[11px] leading-snug">{rule}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Reproduction Box */}
        <div className="pt-5">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 font-mono mb-2 flex items-center gap-2">
            <Terminal className="w-3.5 h-3.5 text-slate-400" />
            Monorepo Test & Run Commands
          </h4>
          <div className="p-3 rounded-lg bg-slate-900 dark:bg-black border border-slate-800 space-y-1 font-mono text-xs text-emerald-400">
            <div><span className="text-slate-500 select-none">$</span> npm run test --workspace=@chess/core  # Runs all 15 FIDE unit tests & Perft benchmarks</div>
            <div><span className="text-slate-500 select-none">$</span> npm run dev:server  # Launches Socket.IO real-time backend on Port 4000</div>
            <div><span className="text-slate-500 select-none">$</span> npm run dev:web     # Launches React 19 web frontend on Port 3000</div>
          </div>
        </div>
      </Card>
    </div>
  );
};
