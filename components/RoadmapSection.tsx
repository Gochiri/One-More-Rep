
import React, { useState } from 'react';
import { CheckCircle2, Clock, Package, GraduationCap, BrainCircuit, Activity, Settings } from 'lucide-react';

const RoadmapSection: React.FC = () => {
  const [selectedPhase, setSelectedPhase] = useState(0);

  const phases = [
    {
      id: 0,
      title: "Semanas 1-2: Setup",
      time: "25-35h",
      icon: <Settings size={20} />,
      items: ["Configuración GHL Agencia", "Custom Fields y Etiquetas GYM", "Pipelines de Ventas y Gestión"]
    },
    {
      id: 1,
      title: "Semanas 3-5: IA Core",
      time: "85-110h",
      icon: <BrainCircuit size={20} />,
      items: ["Entrenamiento Agente Outbound", "Entrenamiento Agente Inbound", "Integración Webhooks n8n", "Pruebas de latencia < 2 min"]
    },
    {
      id: 2,
      title: "Semanas 6-7: Onboarding",
      time: "70-90h",
      icon: <Package size={20} />,
      items: ["Grabación de 30 Tutoriales", "Setup Base de Conocimiento", "Formularios y Calendarios"]
    },
    {
      id: 3,
      title: "Semanas 8-10: Piloto",
      time: "75-82h",
      icon: <Activity size={20} />,
      items: ["Implementación en Cliente Piloto", "Ajustes de Snapshot", "Lanzamiento Oficial"]
    }
  ];

  return (
    <div className="space-y-12">
      <div className="text-left space-y-4">
        <h2 className="text-5xl font-extrabold tracking-tighter uppercase italic">Cronograma de Entrega</h2>
        <p className="text-zinc-400 text-lg">8-10 semanas de ingeniería intensiva (aprox. 300 horas totales)</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Phases List */}
        <div className="lg:col-span-5 space-y-3">
          {phases.map((phase) => (
            <button
              key={phase.id}
              onClick={() => setSelectedPhase(phase.id)}
              className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 group flex items-center justify-between ${
                selectedPhase === phase.id 
                  ? 'bg-lime-500 border-lime-500 text-black font-bold shadow-xl shadow-lime-500/20' 
                  : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:border-zinc-700'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className={`p-2 rounded-lg ${selectedPhase === phase.id ? 'bg-black/10' : 'bg-zinc-800'}`}>
                  {phase.icon}
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-tight italic">{phase.title}</h4>
                  <p className={`text-[10px] font-bold ${selectedPhase === phase.id ? 'text-black/60' : 'text-zinc-600'}`}>FASE COMPLETADA AL 0%</p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Phase Details */}
        <div className="lg:col-span-7 bg-zinc-900/60 p-10 rounded-3xl border border-zinc-800 relative overflow-hidden backdrop-blur-sm">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <Clock size={160} />
          </div>
          <div className="space-y-8 relative">
            <div className="flex items-center gap-3 text-lime-500">
              <CheckCircle2 size={24} />
              <span className="text-[10px] font-black uppercase tracking-widest">Entregables de la Fase</span>
            </div>
            
            <h3 className="text-4xl font-extrabold uppercase italic">{phases[selectedPhase].title}</h3>
            
            <div className="space-y-4">
              <div className="space-y-3">
                {phases[selectedPhase].items.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 bg-zinc-950/80 p-5 rounded-2xl border border-zinc-800/50">
                    <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-bold text-lime-500 border border-zinc-700">
                        {idx + 1}
                    </div>
                    <span className="text-sm font-medium text-zinc-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-zinc-800 flex items-center justify-between">
              <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Esfuerzo Estimado</p>
              <span className="px-4 py-1.5 bg-lime-500/10 text-lime-500 rounded-full text-xs font-bold border border-lime-500/20">
                {phases[selectedPhase].time}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadmapSection;
