
import React from 'react';
import { ShieldCheck, TrendingUp, Zap, Users, MessageSquare, Clock } from 'lucide-react';

const VisionSection: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="flex flex-col items-center text-center space-y-6">
        <div className="w-20 h-20 bg-lime-500/10 rounded-3xl flex items-center justify-center border border-lime-500/20 mb-4 shadow-inner">
          <Zap className="text-lime-500" size={40} />
        </div>
        <h2 className="text-6xl font-extrabold tracking-tighter max-w-4xl uppercase italic">
          SaaS <span className="text-lime-500">GYM</span> AUTOMATION
        </h2>
        <p className="text-xl text-zinc-400 max-w-2xl font-light leading-relaxed">
          Sistema de IA para Entrenadores Personales. 
          <span className="text-white font-semibold"> 2.5x más clientes, 75% menos tiempo de gestión.</span>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
        {[
          {
            title: "Captación 24/7",
            desc: "Contacta automáticamente nuevos seguidores de Instagram en < 2 minutos.",
            icon: <MessageSquare className="text-lime-500" />
          },
          {
            title: "Cero Olvidos",
            desc: "Alertas automáticas de vencimiento a los 15 y 7 días. Seguimientos perfectos.",
            icon: <Clock className="text-lime-500" />
          },
          {
            title: "Escalabilidad",
            desc: "Capacidad para gestionar 100+ clientes simultáneos sin equipo humano adicional.",
            icon: <TrendingUp className="text-lime-500" />
          }
        ].map((item, idx) => (
          <div key={idx} className="bg-zinc-900/50 p-8 rounded-3xl border border-zinc-800 hover:border-lime-500/50 transition-all group relative overflow-hidden">
            <div className="w-12 h-12 bg-zinc-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-lime-500/10 transition-colors">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
            <p className="text-zinc-500 leading-relaxed text-sm">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-zinc-900/40 p-10 rounded-3xl border border-zinc-800 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 space-y-4">
          <h4 className="text-2xl font-bold uppercase italic tracking-tighter">¿Por qué ONE MORE REP necesita esto?</h4>
          <p className="text-zinc-400">Sin el sistema, el tiempo de respuesta es de 4-6h y se pierde el 60% de los seguimientos. Con esta arquitectura, la retención sube al 90% y la conversión al 30%.</p>
        </div>
        <div className="grid grid-cols-2 gap-4 w-full md:w-auto">
          <div className="bg-zinc-800/50 p-6 rounded-2xl text-center border border-zinc-700/50">
            <p className="text-3xl font-black text-lime-500">2.2m</p>
            <p className="text-[10px] uppercase font-bold text-zinc-500 tracking-widest mt-1">Recuperación ROI</p>
          </div>
          <div className="bg-zinc-800/50 p-6 rounded-2xl text-center border border-zinc-700/50">
            <p className="text-3xl font-black text-lime-500">€5.8k</p>
            <p className="text-[10px] uppercase font-bold text-zinc-500 tracking-widest mt-1">MRR Proyectado</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionSection;
