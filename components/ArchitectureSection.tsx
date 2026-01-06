
import React from 'react';
import { Database, Zap, Cpu, ArrowRight, Share2 } from 'lucide-react';

const ArchitectureSection: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-5xl font-extrabold tracking-tighter">Arquitectura del Sistema</h2>
        <p className="text-zinc-400 text-lg">Core escalable con GHL + Orquestación n8n + Agentes IA</p>
      </div>

      <div className="relative flex flex-col items-center gap-12 mt-20">
        {/* Architecture Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full relative">
          
          {/* GHL Card */}
          <div className="bg-zinc-900 border-l-4 border-lime-500 p-8 rounded-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-10">
              <Database size={120} />
            </div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-lime-500/10 rounded-lg">
                <Database className="text-lime-500" size={24} />
              </div>
              <h3 className="text-2xl font-bold">GoHighLevel Core</h3>
            </div>
            <ul className="space-y-4 text-zinc-400">
              <li className="flex items-center gap-3"><Zap className="text-lime-500" size={16} /> Sub-cuentas automatizadas</li>
              <li className="flex items-center gap-3"><Zap className="text-lime-500" size={16} /> Snapshots por nicho fitness</li>
              <li className="flex items-center gap-3"><Zap className="text-lime-500" size={16} /> Funnels & Pipelines integrados</li>
            </ul>
          </div>

          {/* AI / n8n Card */}
          <div className="bg-zinc-900 border-l-4 border-purple-500 p-8 rounded-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 p-6 opacity-10 text-purple-500">
              <Cpu size={120} />
            </div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-purple-500/10 rounded-lg text-purple-500">
                <Cpu size={24} />
              </div>
              <h3 className="text-2xl font-bold">Motor de Leads (IA)</h3>
            </div>
            <ul className="space-y-4 text-zinc-400">
              <li className="flex items-center gap-3"><Zap className="text-purple-500" size={16} /> Distribución algorítmica</li>
              <li className="flex items-center gap-3"><Zap className="text-purple-500" size={16} /> Agentes de Bienvenida & Inbound</li>
              <li className="flex items-center gap-3"><Zap className="text-purple-500" size={16} /> Round Robin avanzado</li>
            </ul>
            <div className="mt-6 inline-block px-3 py-1 bg-purple-500/10 text-purple-500 text-[10px] font-bold uppercase rounded border border-purple-500/20">
              Fase 4 / Scale
            </div>
          </div>
        </div>

        {/* Wizard Card - The Bridge */}
        <div className="bg-zinc-900 border-l-4 border-orange-500 p-8 rounded-2xl max-w-2xl w-full">
          <div className="flex items-center gap-3 mb-4">
             <div className="p-3 bg-orange-500/10 rounded-lg text-orange-500">
              <Share2 size={24} />
            </div>
            <h3 className="text-2xl font-bold">Customizador (Wizard)</h3>
          </div>
          <p className="text-zinc-500 mb-6">Capa de diferenciación UX. Interfaz simplificada para inyectar datos del agente directamente a los Custom Values de GHL.</p>
          <div className="flex items-center gap-2 text-zinc-300 font-mono text-xs">
            <span>--- JSON/API ---</span>
            <div className="flex-1 border-t border-dashed border-zinc-700"></div>
            <ArrowRight size={14} className="text-zinc-600" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArchitectureSection;
