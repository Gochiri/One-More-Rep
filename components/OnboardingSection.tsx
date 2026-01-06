
import React from 'react';
import { PlayCircle, CheckCircle2, Video, MessageCircle, Info } from 'lucide-react';

const OnboardingSection: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-5xl font-extrabold tracking-tighter uppercase italic">Soporte & Onboarding</h2>
        <p className="text-zinc-400 text-lg">30 Videos tutoriales (134 min total) para autonomía total del cliente</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { title: "Primeros Pasos", count: "5 videos", time: "22 min", icon: <PlayCircle size={20} /> },
          { title: "Gestión Conversaciones", count: "4 videos", time: "15 min", icon: <MessageCircle size={20} /> },
          { title: "Pipeline Oportunidades", count: "4 videos", time: "18 min", icon: <Video size={20} /> },
          { title: "Gestión de Clientes", count: "4 videos", time: "16 min", icon: <CheckCircle2 size={20} /> },
          { title: "Calendarios", count: "3 videos", time: "14 min", icon: <PlayCircle size={20} /> },
          { title: "Personalización", count: "3 videos", time: "16 min", icon: <MessageCircle size={20} /> },
          { title: "Funciones Avanzadas", count: "3 videos", time: "19 min", icon: <Video size={20} /> },
          { title: "Troubleshooting", count: "4 videos", time: "14 min", icon: <Info size={20} /> }
        ].map((cat, idx) => (
          <div key={idx} className="bg-zinc-900/60 p-6 rounded-2xl border border-zinc-800 hover:border-lime-500/30 transition-all group flex flex-col justify-between">
            <div>
              <div className="p-2 bg-zinc-800 rounded-lg group-hover:text-lime-500 transition-colors w-fit mb-4">
                {cat.icon}
              </div>
              <h4 className="font-bold text-sm mb-1 uppercase italic tracking-tighter">{cat.title}</h4>
            </div>
            <div className="mt-4 flex justify-between items-center border-t border-zinc-800 pt-3">
              <span className="text-[9px] font-bold text-zinc-600 uppercase">{cat.count}</span>
              <span className="text-[9px] text-lime-500 uppercase font-black">{cat.time}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
        <div className="bg-zinc-900 rounded-3xl p-10 border border-zinc-800 flex flex-col justify-between">
           <div>
            <h3 className="text-2xl font-bold mb-6 uppercase italic">Métricas de Éxito</h3>
            <div className="space-y-6">
                {[
                  { label: "Engagement con Videos", val: 80 },
                  { label: "Setup Completado (3 días)", val: 85 },
                  { label: "Reducción Soporte Humano", val: 65 }
                ].map((m, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-zinc-400 text-xs font-bold uppercase">{m.label}</span>
                      <span className="text-lime-500 font-bold text-xs">{m.val}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                      <div className="h-full bg-lime-500 transition-all duration-1000" style={{ width: `${m.val}%` }}></div>
                    </div>
                  </div>
                ))}
            </div>
           </div>
        </div>

        <div className="bg-zinc-900 rounded-3xl p-10 border border-zinc-800 flex flex-col justify-center space-y-6 relative overflow-hidden">
           <div className="absolute top-0 right-0 p-8 opacity-5 text-zinc-500">
              <Info size={120} />
           </div>
           <h3 className="text-2xl font-bold uppercase italic">Base de Conocimiento</h3>
           <p className="text-zinc-400 text-sm leading-relaxed">Cada cliente de ONE MORE REP tendrá acceso a 30 FAQs categorizadas con buscador en tiempo real directamente dentro de su sub-cuenta de GoHighLevel.</p>
           <div className="space-y-3">
              <div className="flex items-center gap-3 text-zinc-500 text-xs font-medium bg-zinc-950 p-3 rounded-xl border border-zinc-800">
                <CheckCircle2 size={14} className="text-lime-500" />
                Actualización dinámica de contenidos.
              </div>
              <div className="flex items-center gap-3 text-zinc-500 text-xs font-medium bg-zinc-950 p-3 rounded-xl border border-zinc-800">
                <CheckCircle2 size={14} className="text-lime-500" />
                Buscador por palabras clave.
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingSection;
