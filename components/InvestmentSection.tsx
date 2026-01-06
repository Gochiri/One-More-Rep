
import React, { useState } from 'react';
import { CreditCard, TrendingUp, CheckCircle2, Zap, Clock } from 'lucide-react';

const InvestmentSection: React.FC = () => {
  const [toggleFull, setToggleFull] = useState(false);

  // MVP: 12500
  // Bolsa de Leads: 7500
  // Proyecto Completo: (12500 + 7500) * 0.9 = 18000
  const mvpPrice = 12500;
  const fullPrice = 18000;

  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row justify-between items-end gap-6">
        <div className="space-y-4">
          <h2 className="text-5xl font-extrabold tracking-tighter uppercase italic">Propuesta de Inversión</h2>
          <p className="text-zinc-400 text-lg">ONE MORE REP Training - Plan de Escalabilidad</p>
        </div>
        <div className="bg-zinc-900 p-1.5 rounded-full border border-zinc-800 flex items-center gap-2">
          <button 
            onClick={() => setToggleFull(false)}
            className={`px-6 py-2 rounded-full text-[10px] font-black uppercase transition-all ${!toggleFull ? 'bg-lime-500 text-black shadow-lg shadow-lime-500/20' : 'text-zinc-500 hover:text-white'}`}
          >
            MVP Básico
          </button>
          <button 
            onClick={() => setToggleFull(true)}
            className={`px-6 py-2 rounded-full text-[10px] font-black uppercase transition-all ${toggleFull ? 'bg-zinc-100 text-black' : 'text-zinc-500 hover:text-white'}`}
          >
            Proyecto Completo (Bonus 10%)
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Investment Card */}
        <div className="lg:col-span-2 bg-zinc-900 rounded-3xl border border-zinc-800 p-10 relative overflow-hidden group">
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-lime-500/5 rounded-full blur-3xl group-hover:bg-lime-500/10 transition-all"></div>
          
          <div className="relative space-y-10">
            <div className="flex justify-between items-start">
               <div className="space-y-2">
                 <span className="text-[10px] font-black uppercase tracking-widest text-lime-500">Inversión Llave en Mano</span>
                 <h3 className="text-7xl font-black italic">€{toggleFull ? fullPrice.toLocaleString() : mvpPrice.toLocaleString()}</h3>
                 <div className="space-y-1">
                   <p className="text-zinc-500 text-sm">{toggleFull ? 'Sistema Integral + Bolsa de Leads' : 'Validación de concepto + Ejecución técnica'}</p>
                   <div className="flex items-center gap-2 text-lime-500 text-[10px] font-black uppercase tracking-widest">
                     <Clock size={12} />
                     TIEMPO DE IMPLEMENTACIÓN: {toggleFull ? '11-13 SEMANAS' : '8-10 SEMANAS'}
                   </div>
                 </div>
                 {toggleFull && <div className="mt-2 inline-block px-3 py-1 bg-lime-500/10 border border-lime-500/20 rounded-md text-lime-500 text-[10px] font-bold uppercase tracking-widest animate-pulse">Ahorro de €2.000 aplicado</div>}
               </div>
               <div className="bg-zinc-950 p-5 rounded-3xl border border-zinc-800 text-center shadow-xl">
                  <p className="text-2xl font-black text-lime-500 italic">2.2 Meses</p>
                  <p className="text-[9px] uppercase font-bold text-zinc-500 tracking-widest mt-1">Payback Period</p>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-6">
              <div className="space-y-4">
                <h5 className="text-[10px] font-black uppercase tracking-widest text-zinc-500 border-b border-zinc-800 pb-2">Entregables Clave</h5>
                <ul className="space-y-4">
                  {[
                    'GHL Snapshot (14 etapas)', 
                    '2 Agentes IA (OpenAI API)', 
                    '30 Videos Tutoriales', 
                    toggleFull ? 'Sistema de Bolsa de Leads (FULL)' : null,
                    '30 días soporte post-lanzamiento'
                  ].filter(Boolean).map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-xs text-zinc-300 font-medium">
                      <CheckCircle2 size={16} className="text-lime-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <h5 className="text-[10px] font-black uppercase tracking-widest text-zinc-500 border-b border-zinc-800 pb-2">Plan de Pagos</h5>
                <div className="space-y-3">
                   <div className="bg-zinc-950/80 p-4 rounded-2xl border border-zinc-800/50 flex justify-between items-center">
                     <span className="text-xs text-zinc-400 font-bold">40% INICIO</span>
                     <span className="text-sm font-black text-white">€{(toggleFull ? fullPrice * 0.4 : mvpPrice * 0.4).toLocaleString()}</span>
                   </div>
                   <div className="bg-zinc-950/80 p-4 rounded-2xl border border-zinc-800/50 flex justify-between items-center">
                     <span className="text-xs text-zinc-400 font-bold">40% FASE 3</span>
                     <span className="text-sm font-black text-white">€{(toggleFull ? fullPrice * 0.4 : mvpPrice * 0.4).toLocaleString()}</span>
                   </div>
                   <div className="bg-zinc-950/80 p-4 rounded-2xl border border-zinc-800/50 flex justify-between items-center">
                     <span className="text-xs text-zinc-400 font-bold">20% FINAL</span>
                     <span className="text-sm font-black text-white">€{(toggleFull ? fullPrice * 0.2 : mvpPrice * 0.2).toLocaleString()}</span>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ARR / Profit Card */}
        <div className="bg-lime-500 rounded-3xl p-10 flex flex-col justify-between text-black relative overflow-hidden group shadow-2xl shadow-lime-500/20">
           <div className="absolute top-0 right-0 p-8 opacity-10">
              <TrendingUp size={160} />
           </div>
           <div className="relative space-y-8">
              <span className="text-[10px] font-black uppercase tracking-widest opacity-60">Revenue con 20 clientes</span>
              <div className="space-y-2">
                <h4 className="text-6xl font-black italic">€5.800</h4>
                <p className="text-[10px] font-black opacity-80 uppercase tracking-tighter">Mensual Recurrente (MRR)</p>
              </div>
              
              <div className="pt-8 border-t border-black/10 space-y-4">
                <div className="flex justify-between items-center text-xs font-black uppercase">
                  <span>Revenue Anual (ARR)</span>
                  <span>€69.600</span>
                </div>
                <div className="flex justify-between items-center text-xs font-black uppercase">
                  <span>Costo IA OpenAI</span>
                  <span>~$400/mes</span>
                </div>
              </div>
           </div>

           <div className="relative pt-10">
             <button className="w-full bg-black text-white py-5 rounded-2xl font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-2 hover:bg-zinc-900 transition-all shadow-xl">
                Aceptar Propuesta <Zap size={16} className="text-lime-500" />
             </button>
           </div>
        </div>
      </div>

      {/* Bonos Section */}
      <div className="bg-zinc-900/40 border border-zinc-800 rounded-3xl p-10 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 space-y-4">
          <div className="inline-block px-3 py-1 bg-lime-500/10 text-lime-500 rounded-full text-[9px] font-black border border-lime-500/20 uppercase tracking-widest">Oferta Early Action</div>
          <h4 className="text-3xl font-extrabold tracking-tight uppercase italic">Garantía y Bonos</h4>
          <p className="text-zinc-400 text-sm">Firma antes de 7 días y obtén un 5% de descuento adicional sobre el pago de contado. Si nos retrasamos &gt; 2 semanas, aplicamos un 10% de descuento automático por cada semana.</p>
        </div>
        <div className="w-full md:w-64">
           <div className="p-6 bg-zinc-950 rounded-3xl border border-zinc-800 text-center shadow-inner">
              <p className="text-3xl font-black text-white italic">€{(toggleFull ? fullPrice * 0.95 : mvpPrice * 0.95).toLocaleString()}</p>
              <p className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest mt-1">Con Pronto Pago (-5%)</p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentSection;
