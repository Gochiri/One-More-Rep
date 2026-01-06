
import React, { useState } from 'react';
import { CreditCard, TrendingUp, CheckCircle2, Zap, Clock } from 'lucide-react';

const InvestmentSection: React.FC = () => {
  const [toggleFull, setToggleFull] = useState(false);

  const mvpPrice = 12500;
  const fullPrice = 18000;

  return (
    <div className="space-y-8 md:space-y-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div className="space-y-2 md:space-y-4">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tighter uppercase italic">Propuesta de Inversión</h2>
          <p className="text-zinc-400 text-xs md:text-sm">ONE MORE REP Training - Plan de Escalabilidad</p>
        </div>
        <div className="bg-zinc-900 p-1 rounded-full border border-zinc-800 flex items-center gap-1 w-full md:w-auto">
          <button 
            onClick={() => setToggleFull(false)}
            className={`flex-1 md:flex-none px-4 py-2 rounded-full text-[8px] md:text-[9px] font-black uppercase transition-all ${!toggleFull ? 'bg-lime-500 text-black shadow-lg shadow-lime-500/20' : 'text-zinc-500 hover:text-white'}`}
          >
            MVP Básico
          </button>
          <button 
            onClick={() => setToggleFull(true)}
            className={`flex-1 md:flex-none px-4 py-2 rounded-full text-[8px] md:text-[9px] font-black uppercase transition-all ${toggleFull ? 'bg-zinc-100 text-black' : 'text-zinc-500 hover:text-white'}`}
          >
            Proyecto Completo
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
        {/* Investment Card */}
        <div className="lg:col-span-2 bg-zinc-900 rounded-3xl border border-zinc-800 p-6 md:p-8 relative overflow-hidden group">
          <div className="absolute -top-10 -right-10 w-48 h-48 md:w-64 md:h-64 bg-lime-500/5 rounded-full blur-3xl group-hover:bg-lime-500/10 transition-all"></div>
          
          <div className="relative space-y-8 md:space-y-10">
            <div className="flex flex-col sm:flex-row justify-between items-start gap-6">
               <div className="space-y-1 md:space-y-2">
                 <span className="text-[8px] md:text-[9px] font-black uppercase tracking-widest text-zinc-500 italic">Inversión Llave en Mano</span>
                 <h3 className="text-2xl md:text-4xl font-black italic tracking-tighter leading-none">€{toggleFull ? fullPrice.toLocaleString() : mvpPrice.toLocaleString()}</h3>
                 <div className="space-y-1 mt-2">
                   <p className="text-zinc-500 text-[10px] md:text-xs">{toggleFull ? 'Sistema Integral + Bolsa de Leads' : 'Validación de concepto + Ejecución técnica'}</p>
                   <div className="flex items-center gap-2 text-lime-500 text-[8px] md:text-[9px] font-black uppercase tracking-widest italic mt-1">
                     <Clock size={10} />
                     TIEMPO: {toggleFull ? '11-13 SEMANAS' : '8-10 SEMANAS'}
                   </div>
                 </div>
               </div>
               <div className="bg-zinc-950 p-3 md:p-4 rounded-2xl border border-zinc-800 text-center shadow-xl min-w-[100px] w-full sm:w-auto">
                  <p className="text-base md:text-lg font-black text-lime-500 italic leading-none">2.2 Meses</p>
                  <p className="text-[7px] md:text-[8px] uppercase font-bold text-zinc-600 tracking-widest mt-1">Payback</p>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 pt-6 border-t border-zinc-800/50">
              <div className="space-y-3">
                <h5 className="text-[8px] md:text-[9px] font-black uppercase tracking-widest text-zinc-500 border-b border-zinc-800 pb-2 italic">Entregables Clave</h5>
                <ul className="space-y-2 md:space-y-3">
                  {[
                    'GHL Snapshot (14 etapas)', 
                    '2 Agentes IA (OpenAI API)', 
                    '30 Videos Tutoriales', 
                    toggleFull ? 'Bolsa de Leads FULL System' : null,
                    '30 días soporte post-lanzamiento'
                  ].filter(Boolean).map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-[9px] md:text-[10px] text-zinc-300 font-bold uppercase italic">
                      <CheckCircle2 size={12} className="text-lime-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-3">
                <h5 className="text-[8px] md:text-[9px] font-black uppercase tracking-widest text-zinc-500 border-b border-zinc-800 pb-2 text-left md:text-right italic">Plan de Pagos</h5>
                <div className="space-y-2">
                   <div className="bg-zinc-950/80 p-2 md:p-3 rounded-xl border border-zinc-800/50 flex justify-between items-center">
                     <span className="text-[7px] md:text-[8px] text-zinc-500 font-bold uppercase italic tracking-widest">40% INICIO</span>
                     <span className="text-xs md:text-sm font-black text-white italic tracking-tighter">€{(toggleFull ? fullPrice * 0.4 : mvpPrice * 0.4).toLocaleString()}</span>
                   </div>
                   <div className="bg-zinc-950/80 p-2 md:p-3 rounded-xl border border-zinc-800/50 flex justify-between items-center">
                     <span className="text-[7px] md:text-[8px] text-zinc-500 font-bold uppercase italic tracking-widest">40% FASE 3</span>
                     <span className="text-xs md:text-sm font-black text-white italic tracking-tighter">€{(toggleFull ? fullPrice * 0.4 : mvpPrice * 0.4).toLocaleString()}</span>
                   </div>
                   <div className="bg-zinc-950/80 p-2 md:p-3 rounded-xl border border-zinc-800/50 flex justify-between items-center">
                     <span className="text-[7px] md:text-[8px] text-zinc-500 font-bold uppercase italic tracking-widest">20% FINAL</span>
                     <span className="text-xs md:text-sm font-black text-white italic tracking-tighter">€{(toggleFull ? fullPrice * 0.2 : mvpPrice * 0.2).toLocaleString()}</span>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ARR / Profit Card */}
        <div className="bg-lime-500 rounded-3xl p-6 md:p-8 flex flex-col justify-between text-black relative overflow-hidden group shadow-2xl shadow-lime-500/20">
           <div className="absolute top-0 right-0 p-4 opacity-5">
              <TrendingUp size={80} />
           </div>
           <div className="relative space-y-6 md:space-y-8">
              <span className="text-[8px] md:text-[9px] font-black uppercase tracking-widest opacity-60 italic leading-tight">Revenue con 20 clientes</span>
              <div className="space-y-1">
                <h4 className="text-2xl md:text-4xl font-black italic tracking-tighter leading-none whitespace-nowrap">€5.800</h4>
                <p className="text-[8px] md:text-[9px] font-black opacity-80 uppercase tracking-widest italic">MRR OBJETIVO</p>
              </div>
              
              <div className="pt-4 md:pt-6 border-t border-black/10 space-y-2 md:space-y-3">
                <div className="flex justify-between items-center text-[9px] md:text-[10px] font-black uppercase italic">
                  <span>Revenue Anual</span>
                  <span className="text-xs md:text-xs tracking-tighter">€69.600</span>
                </div>
                <div className="flex justify-between items-center text-[9px] md:text-[10px] font-black uppercase italic">
                  <span>Costo IA</span>
                  <span className="text-xs md:text-xs tracking-tighter">~$400/m</span>
                </div>
              </div>
           </div>

           <div className="relative pt-6 md:pt-8">
             <button className="w-full bg-black text-white py-3 md:py-4 rounded-xl font-black uppercase tracking-widest text-[8px] md:text-[9px] italic flex items-center justify-center gap-2 hover:bg-zinc-900 transition-all shadow-xl">
                Aceptar Propuesta <Zap size={12} className="text-lime-500" />
             </button>
           </div>
        </div>
      </div>

      {/* Bonos Section */}
      <div className="bg-zinc-900/40 border border-zinc-800 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 md:gap-8">
        <div className="flex-1 space-y-2 md:space-y-3">
          <div className="inline-block px-3 py-1 bg-lime-500/10 text-lime-500 rounded-full text-[7px] md:text-[8px] font-black border border-lime-500/20 uppercase tracking-widest italic">Oferta Early Action</div>
          <h4 className="text-xl md:text-2xl font-extrabold tracking-tight uppercase italic leading-none">Garantía y Bonos</h4>
          <p className="text-zinc-400 text-[10px] md:text-xs leading-relaxed italic">Firma antes de 7 días y obtén un 5% de descuento adicional.</p>
        </div>
        <div className="w-full md:w-auto shrink-0">
           <div className="p-4 md:p-6 bg-zinc-950 rounded-2xl border border-zinc-800 text-center shadow-inner min-w-full sm:min-w-[180px]">
              <p className="text-xl md:text-2xl font-black text-white italic tracking-tighter leading-none">€{(toggleFull ? fullPrice * 0.95 : mvpPrice * 0.95).toLocaleString()}</p>
              <p className="text-[7px] md:text-[8px] font-bold text-zinc-600 uppercase tracking-widest mt-1 italic">Con Pronto Pago (-5%)</p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentSection;
