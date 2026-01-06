
import React from 'react';
import { Layout, MessageSquare, ListTodo, Users, Repeat, Cpu, Database } from 'lucide-react';

const TechnicalSection: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-5xl font-extrabold tracking-tighter uppercase italic">Desglose Técnico</h2>
        <p className="text-zinc-400 text-lg">Infraestructura GoHighLevel + Inteligencia Artificial</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* GHL Config */}
        <div className="bg-zinc-900 rounded-3xl p-10 border border-zinc-800 space-y-6 relative overflow-hidden">
          <div className="absolute -right-8 -top-8 opacity-5 text-lime-500">
            <Database size={160} />
          </div>
          <div className="flex items-center gap-4 relative">
            <Layout className="text-lime-500" size={32} />
            <h3 className="text-2xl font-bold">Arquitectura GHL</h3>
          </div>
          <div className="space-y-4 relative">
            {[
              { label: "Custom Fields", val: "40" },
              { label: "Tags Organizados", val: "40" },
              { label: "Workflows Automatizados", val: "14" },
              { label: "Plantillas de Mensajes", val: "20+" }
            ].map((stat, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-zinc-950/50 rounded-2xl border border-zinc-800">
                <span className="text-zinc-400 text-sm font-medium">{stat.label}</span>
                <span className="text-lime-500 font-bold">{stat.val}</span>
              </div>
            ))}
          </div>
        </div>

        {/* AI Agents Config */}
        <div className="bg-zinc-900 rounded-3xl p-10 border border-zinc-800 space-y-6 relative overflow-hidden">
          <div className="absolute -right-8 -top-8 opacity-5 text-purple-500">
            <Cpu size={160} />
          </div>
          <div className="flex items-center gap-4 relative">
            <MessageSquare className="text-purple-500" size={32} />
            <h3 className="text-2xl font-bold">Agentes IA</h3>
          </div>
          <div className="space-y-4 relative">
            <div className="p-4 bg-zinc-950/50 rounded-2xl border border-zinc-800 space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-zinc-100 text-sm font-bold uppercase tracking-widest text-[10px]">Agente Outbound (Bienvenida)</span>
                <span className="text-purple-500 text-[10px] font-bold uppercase border border-purple-500/30 px-2 py-0.5 rounded">Instagram</span>
              </div>
              <p className="text-zinc-500 text-xs">Contacta seguidores, califica leads (scoring 1-100) y responde en &lt; 2 min de forma natural.</p>
            </div>
            <div className="p-4 bg-zinc-950/50 rounded-2xl border border-zinc-800 space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-zinc-100 text-sm font-bold uppercase tracking-widest text-[10px]">Agente Inbound (Consultas)</span>
                <span className="text-purple-500 text-[10px] font-bold uppercase border border-purple-500/30 px-2 py-0.5 rounded">WhatsApp/DM</span>
              </div>
              <p className="text-zinc-500 text-xs">Responde 24/7, maneja objeciones técnicas/precios y agenda llamadas automáticamente.</p>
            </div>
            <div className="pt-2">
               <p className="text-[10px] text-zinc-600 uppercase font-black tracking-widest">Costo Operativo IA: &lt; $20/mes por cliente</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {[
          {
            title: "2 Pipelines (14 Etapas)",
            items: ["Setter - Conversión (7 etapas)", "Gestión Activos (7 etapas)"],
            icon: <ListTodo className="text-lime-500" />
          },
          {
            title: "Onboarding Inteligente",
            items: ["Cuestionario Inicial (30 campos)", "Calendarios Zoom/Meet", "Formularios Calificación"],
            icon: <Users className="text-lime-500" />
          },
          {
            title: "Retención Proactiva",
            items: ["Check-in cada 14 días", "Alertas vencimiento 15/7d", "Secuencia Reactivación Post-Venc."],
            icon: <Repeat className="text-lime-500" />
          }
        ].map((box, idx) => (
          <div key={idx} className="bg-zinc-900/40 p-8 rounded-3xl border border-zinc-800 space-y-6 hover:bg-zinc-900/60 transition-colors group">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-zinc-800 rounded-lg group-hover:bg-lime-500/10 transition-colors">{box.icon}</div>
              <h4 className="font-bold uppercase italic text-sm">{box.title}</h4>
            </div>
            <ul className="space-y-3">
              {box.items.map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-zinc-500 text-sm">
                   <div className="w-1 h-1 rounded-full bg-lime-500"></div>
                   {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnicalSection;
