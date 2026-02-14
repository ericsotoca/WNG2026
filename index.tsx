import React, { useState, useEffect, useCallback } from 'react';
import { createRoot } from 'react-dom/client';
import { 
  ChevronRight, ChevronLeft, MapPin, Award, Globe, Users, Tv, Check, 
  Building2, Globe2, Trophy, Languages, GraduationCap, Flag, Flame, 
  ShieldCheck, ArrowRight, Eye, HandMetal, MapPinned, Users2, PlusCircle, 
  Landmark, Shield, Phone, LayoutGrid, Layers, Grid
} from 'lucide-react';

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 14;

  const nextSlide = useCallback(() => {
    setCurrentSlide(prev => (prev < totalSlides - 1 ? prev + 1 : 0));
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide(prev => (prev > 0 ? prev - 1 : prev));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const progress = ((currentSlide + 1) / totalSlides) * 100;

  return (
    <div className="h-screen w-full flex flex-col bg-[#020617] text-slate-100 overflow-hidden">
      <div className="fixed top-0 left-0 w-full z-50">
        <div className="w-full bg-white/5 h-1">
          <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        </div>
      </div>

      <div className="fixed bottom-8 left-0 w-full z-40 px-8 flex justify-between items-center pointer-events-none">
        <button onClick={prevSlide} className={`pointer-events-auto p-3 rounded-full glass hover:bg-white/10 transition-all ${currentSlide === 0 ? 'opacity-0' : 'opacity-100'}`}>
          <ChevronLeft className="w-6 h-6" />
        </button>
        <div className="glass px-4 py-2 rounded-full text-xs font-medium tracking-widest text-white/50 uppercase flex items-center gap-3">
          <span>{String(currentSlide + 1).padStart(2, '0')}</span> / <span>{String(totalSlides).padStart(2, '0')}</span>
          <div className="tricolore-strip rounded-full"></div>
        </div>
        <button onClick={nextSlide} className="pointer-events-auto p-3 rounded-full bg-[#0055A4] hover:bg-blue-700 text-white transition-all shadow-lg shadow-blue-900/40">
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      <div className="absolute inset-0 -z-10 opacity-10 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-[#0055A4] rounded-full blur-[150px]"></div>
        <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-[#EF4135] rounded-full blur-[150px]"></div>
      </div>

      <main className="flex-grow flex items-center justify-center p-4 md:p-8 relative">
        {renderSlide(currentSlide)}
      </main>
    </div>
  );

  function renderSlide(index: number) {
    switch(index) {
      case 0: return (
        <section className="slide-enter flex flex-col items-center text-center max-w-5xl">
          <div className="flex items-center gap-2 mb-4 text-white/60 font-semibold tracking-widest uppercase text-sm">
            <div className="w-3 h-3 rounded-full bg-[#0055A4]"></div>
            <div className="w-3 h-3 rounded-full bg-white"></div>
            <div className="w-3 h-3 rounded-full bg-[#EF4135]"></div>
            <span className="ml-2">Fierté Nationale</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">Représenter la France aux <br/><span className="gradient-text-fr">World Nomad Games 2026</span></h1>
          <p className="text-xl md:text-2xl text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
            Une opportunité de visibilité internationale unique pour porter les couleurs tricolores au cœur des traditions nomades.
          </p>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="glass p-6 rounded-2xl flex items-center gap-4 border-l-4 border-[#0055A4]">
              <MapPin className="text-[#0055A4]" />
              <div className="text-left">
                <p className="text-xs uppercase text-slate-500">Destination</p>
                <p className="font-medium text-white">Kirghizistan</p>
              </div>
            </div>
            <div className="glass p-6 rounded-2xl flex items-center gap-4 border-l-4 border-[#EF4135]">
              <Award className="text-[#EF4135]" />
              <div className="text-left">
                <p className="text-xs uppercase text-slate-500">Discipline</p>
                <p className="font-medium text-white">Jeux de Stratégie</p>
              </div>
            </div>
          </div>
        </section>
      );
      case 1: return (
        <section className="slide-enter flex flex-col items-center text-center max-w-6xl w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Un Événement de Dimension Mondiale</h2>
          <div className="tricolore-strip mx-auto mb-12"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            <div className="glass p-8 rounded-3xl border-t-4 border-[#0055A4]">
              <Globe className="text-[#0055A4] w-12 h-12 mx-auto mb-6" />
              <div className="text-4xl font-bold text-white mb-2">80+</div>
              <p className="text-slate-400">Nations participantes</p>
            </div>
            <div className="glass p-8 rounded-3xl border-t-4 border-white/50">
              <Users className="text-white w-12 h-12 mx-auto mb-6" />
              <div className="text-4xl font-bold text-white mb-2">50M+</div>
              <p className="text-slate-400">Audience mondiale</p>
            </div>
            <div className="glass p-8 rounded-3xl border-t-4 border-[#EF4135]">
              <Tv className="text-[#EF4135] w-12 h-12 mx-auto mb-6" />
              <div className="text-4xl font-bold text-white mb-2">3000+</div>
              <p className="text-slate-400">Athlètes d'élite</p>
            </div>
          </div>
        </section>
      );
      case 2: return (
        <section className="slide-enter flex flex-col md:flex-row items-center gap-12 max-w-6xl">
          <div className="flex-1 space-y-6">
            <h2 className="text-4xl font-bold text-white">Jeux Nomades France</h2>
            <p className="text-lg text-slate-300 leading-relaxed border-l-4 border-[#EF4135] pl-6 italic font-light">
              « Porter le drapeau français lors de cet événement mondial, c'est affirmer notre attachement à la diversité culturelle et à l'excellence stratégique. »
            </p>
            <div className="pt-4 flex items-center gap-4">
              <p className="font-medium text-white/80">— Hélène Mimenza, Présidente</p>
              <div className="tricolore-strip"></div>
            </div>
          </div>
          <div className="flex-1 w-full md:w-auto">
            <div className="glass p-4 rounded-[2rem]">
              <img src="https://picsum.photos/seed/france-nomad/800/600" alt="Jeux Nomades" className="rounded-2xl grayscale w-full" />
            </div>
          </div>
        </section>
      );
      case 13: return (
        <section className="slide-enter flex flex-col md:flex-row items-center gap-12 max-w-6xl w-full">
          <div className="flex-1 space-y-6">
            <h2 className="text-5xl font-bold leading-tight text-white">Portons haut <span className="text-[#0055A4]">nos couleurs</span> ensemble.</h2>
            <p className="text-xl text-slate-400">Contactez-nous pour rejoindre l'aventure.</p>
          </div>
          <div className="flex-1 w-full glass p-8 rounded-[2rem] border-white/20 text-white">
            <h3 className="text-2xl font-bold mb-6">Demande de Mécénat</h3>
            <form className="space-y-4" onSubmit={e => e.preventDefault()}>
              <input type="text" placeholder="Organisation" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 outline-none focus:border-[#0055A4]" />
              <button className="w-full bg-gradient-to-r from-[#0055A4] to-[#EF4135] py-4 rounded-xl text-white font-black uppercase tracking-widest shadow-xl">Valider</button>
            </form>
          </div>
        </section>
      );
      default: return (
        <div className="text-center text-white p-20 glass rounded-3xl">
          <h2 className="text-3xl font-bold mb-4">Slide {index + 1}</h2>
          <p className="text-slate-400 italic">Contenu en cours de déploiement...</p>
        </div>
      );
    }
  }
};

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(<App />);
}