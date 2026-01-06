
import React, { useState } from 'react';
import { 
  Dumbbell, 
  Settings, 
  Map, 
  CreditCard, 
  CheckCircle2, 
  Cpu, 
  PlayCircle,
  LayoutDashboard,
  ChevronRight,
  TrendingUp,
  MessageSquare,
  Users
} from 'lucide-react';
import VisionSection from './components/VisionSection';
import RoadmapSection from './components/RoadmapSection';
import InvestmentSection from './components/InvestmentSection';
import TechnicalSection from './components/TechnicalSection';
import OnboardingSection from './components/OnboardingSection';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('vision');

  const navItems = [
    { id: 'vision', label: 'Resumen Ejecutivo', icon: <LayoutDashboard size={20} /> },
    { id: 'tecnico', label: 'Desglose Técnico', icon: <Settings size={20} /> },
    { id: 'onboarding', label: 'Videos y Soporte', icon: <PlayCircle size={20} /> },
    { id: 'roadmap', label: 'Cronograma', icon: <Map size={20} /> },
    { id: 'inversion', label: 'Inversión y ROI', icon: <CreditCard size={20} /> }
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'vision': return <VisionSection />;
      case 'tecnico': return <TechnicalSection />;
      case 'onboarding': return <OnboardingSection />;
      case 'roadmap': return <RoadmapSection />;
      case 'inversion': return <InvestmentSection />;
      default: return <VisionSection />;
    }
  };

  const LOGO_URL = "https://storage.googleapis.com/msgsndr/0wU8TEPnQYaDjxaaOoxk/media/6925d10ac57318d59bd4b2d0.png";

  return (
    <div className="flex min-h-screen bg-zinc-950 text-zinc-100 overflow-hidden font-['Inter']">
      {/* Sidebar */}
      <aside className="w-72 bg-zinc-900/50 border-r border-zinc-800 flex flex-col hidden md:flex">
        <div className="p-8 flex flex-col items-center">
          <img src={LOGO_URL} alt="GHL TEAM LATAM" className="w-48 h-auto mb-6" />
          <div className="w-full h-px bg-zinc-800 mb-6"></div>
          <div className="flex items-center gap-2 bg-lime-500/10 px-3 py-1.5 rounded-md border border-lime-500/20 w-full justify-center">
            <Dumbbell className="text-lime-500" size={16} />
            <span className="text-[10px] font-bold text-lime-500 uppercase tracking-widest">SaaS GYM AI</span>
          </div>
        </div>

        <nav className="flex-1 px-4 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                activeSection === item.id 
                  ? 'bg-lime-500 text-black font-bold shadow-lg shadow-lime-500/20' 
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
              }`}
            >
              {item.icon}
              <span className="text-sm">{item.label}</span>
              {activeSection === item.id && <ChevronRight size={16} className="ml-auto" />}
            </button>
          ))}
        </nav>

        <div className="p-6 border-t border-zinc-800 bg-zinc-900/80">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center border border-zinc-700">
              <Users size={18} className="text-lime-500" />
            </div>
            <div>
              <p className="text-[10px] font-bold text-zinc-500 uppercase">Preparado para:</p>
              <p className="text-xs font-bold text-white">ONE MORE REP Training</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto relative bg-gradient-to-br from-zinc-950 via-zinc-900/50 to-zinc-950">
        <header className="sticky top-0 z-10 flex items-center justify-between px-10 py-6 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
          <div className="flex items-center gap-2">
            <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">PROPUESTA COMERCIAL</span>
            <span className="mx-2 text-zinc-700">/</span>
            <span className="text-[10px] uppercase tracking-widest text-lime-500 font-bold">{activeSection}</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">V 1.0</span>
            <div className="h-4 w-px bg-zinc-800"></div>
            <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold italic">6 DE ENERO 2026</span>
          </div>
        </header>

        <div className="p-10 pb-32 max-w-6xl mx-auto animate-fade-in">
          {renderContent()}
        </div>

        {/* Footer Navigation (Mobile) */}
        <div className="fixed bottom-10 right-10 flex gap-4">
           <button 
             onClick={() => {
                const idx = navItems.findIndex(i => i.id === activeSection);
                if (idx > 0) setActiveSection(navItems[idx-1].id);
             }}
             className="w-12 h-12 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center hover:bg-zinc-700 transition-colors shadow-2xl"
           >
             <ChevronRight className="rotate-180" size={24} />
           </button>
           <button 
             onClick={() => {
                const idx = navItems.findIndex(i => i.id === activeSection);
                if (idx < navItems.length - 1) setActiveSection(navItems[idx+1].id);
             }}
             className="w-12 h-12 rounded-full bg-lime-500 text-black flex items-center justify-center shadow-xl shadow-lime-500/30 hover:bg-lime-400 transition-colors"
           >
             <ChevronRight size={24} />
           </button>
        </div>
      </main>
    </div>
  );
};

export default App;
