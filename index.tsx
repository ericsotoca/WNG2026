import React, { useState, useEffect, useCallback } from 'react';
import { createRoot } from 'react-dom/client';
import { 
  ChevronRight, ChevronLeft, MapPin, Award, Globe, Users, Tv, Check, 
  Building2, Globe2, LayoutGrid, Layers, Grid, Trophy, Languages, 
  GraduationCap, Flag, Flame, ShieldCheck, ArrowRight, Eye, HandMetal, 
  MapPinned, Users2, PlusCircle, Landmark, Shield, Phone 
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
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-[#0055A4]"></div>
            <div className="w-3 h-3 rounded-full bg-white"></div>
            <div className="w-3 h-3 rounded-full bg-[#EF4135]"></div>
            <span className="text-white/60 font-semibold tracking-widest uppercase text-sm ml-2">Fierté Nationale</span>
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
                <p className="font-medium">Kirghizistan</p>
              </div>
            </div>
            <div className="glass p-6 rounded-2xl flex items-center gap-4 border-l-4 border-[#EF4135]">
              <Award className="text-[#EF4135]" />
              <div className="text-left">
                <p className="text-xs uppercase text-slate-500">Discipline</p>
                <p className="font-medium">Jeux de Stratégie</p>
              </div>
            </div>
          </div>
        </section>
      );
      case 1: return (
        <section className="slide-enter flex flex-col items-center text-center max-w-6xl w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Un Événement de Dimension Mondiale</h2>
          <div className="tricolore-strip mx-auto mb-12"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            <div className="glass p-8 rounded-3xl border-t-4 border-[#0055A4] group hover:bg-white/5 transition-all text-center">
              <Globe className="text-[#0055A4] w-12 h-12 mx-auto mb-6" />
              <div className="text-4xl font-bold text-white mb-2">80+</div>
              <p className="text-slate-400">Nations participantes</p>
            </div>
            <div className="glass p-8 rounded-3xl border-t-4 border-white/50 group hover:bg-white/5 transition-all text-center">
              <Users className="text-white w-12 h-12 mx-auto mb-6" />
              <div className="text-4xl font-bold text-white mb-2">50M+</div>
              <p className="text-slate-400">Audience mondiale</p>
            </div>
            <div className="glass p-8 rounded-3xl border-t-4 border-[#EF4135] group hover:bg-white/5 transition-all text-center">
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
            <h2 className="text-4xl font-bold">Jeux Nomades France</h2>
            <p className="text-lg text-slate-300 leading-relaxed border-l-4 border-[#EF4135] pl-6 italic font-light">
              « Porter le drapeau français lors de cet événement mondial, c'est affirmer notre attachement à la diversité culturelle et à l'excellence stratégique. »
            </p>
            <div className="pt-4 flex items-center gap-4">
              <p className="font-medium text-white/80">— Hélène Mimenza, Présidente</p>
              <div className="tricolore-strip"></div>
            </div>
          </div>
          <div className="flex-1 w-full md:w-auto relative">
            <div className="glass p-4 rounded-[2rem] overflow-hidden">
              <img src="https://picsum.photos/seed/france-nomad/800/600" alt="Jeux Nomades" className="rounded-2xl grayscale w-full" />
            </div>
          </div>
        </section>
      );
      case 3: return (
        <section className="slide-enter flex flex-col items-center max-w-5xl text-center">
          <h2 className="text-4xl font-bold mb-12">Résultats Historiques 2024</h2>
          <div className="w-full relative py-12 px-8 glass rounded-[3rem] border-white/10">
            <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
              <div className="w-32 h-32 rounded-full border-4 border-[#EF4135] p-1 overflow-hidden flex-shrink-0">
                <img src="https://picsum.photos/seed/clara/200" className="w-full h-full object-cover rounded-full" />
              </div>
              <div className="text-left">
                <h3 className="text-3xl font-bold text-white">Clara Sotoca</h3>
                <p className="text-xl font-medium text-[#0055A4] uppercase tracking-widest">5<sup>ème</sup> Place Mondiale en Awalé</p>
              </div>
            </div>
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white text-black px-8 py-2 rounded-full text-sm font-black">SÉLECTION OFFICIELLE</div>
          </div>
        </section>
      );
      case 4: return (
        <section className="slide-enter flex flex-col items-center max-w-6xl text-center w-full">
          <h2 className="text-4xl font-bold mb-12">Ils nous font déjà confiance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
            <div className="glass p-10 rounded-[2.5rem] border-l-8 border-[#0055A4] text-left">
              <Building2 className="text-[#0055A4] w-10 h-10 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Mairie de La Saulce</h3>
              <p className="text-slate-400">Soutien institutionnel historique de la délégation.</p>
            </div>
            <div className="glass p-10 rounded-[2.5rem] border-r-8 border-[#EF4135] text-left">
              <Globe2 className="text-[#EF4135] w-10 h-10 mb-6" />
              <h3 className="text-2xl font-bold mb-4">WNG Organizers 2026</h3>
              <p className="text-slate-400">Reconnaissance par le comité d'organisation international.</p>
            </div>
          </div>
        </section>
      );
      case 5: return (
        <section className="slide-enter flex flex-col items-center max-w-6xl w-full">
          <h2 className="text-4xl font-bold mb-12">La Délégation 2026</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 w-full">
            {["Hélène Mimenza", "Clara Sotoca", "Bénédicte V.O.", "Colette Gueirard", "Éric Sotoca"].map((name, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl glass p-1 mb-4 overflow-hidden">
                  <img src={`https://picsum.photos/seed/${name}/200`} className="w-full h-full object-cover rounded-xl" />
                </div>
                <p className="font-bold text-sm">{name}</p>
              </div>
            ))}
          </div>
        </section>
      );
      case 6: return (
        <section className="slide-enter flex flex-col items-center max-w-6xl w-full">
          <h2 className="text-4xl font-bold mb-10">Les 3 Disciplines Maîtresses</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {[{t: "Awalé", c: "#0055A4"}, {t: "Togyz Qumalaq", c: "#FFF"}, {t: "Mangala", c: "#EF4135"}].map((d, i) => (
              <div key={i} className="glass p-8 rounded-3xl text-center border-t-4" style={{borderColor: d.c}}>
                <h3 className="text-2xl font-bold">{d.t}</h3>
                <p className="text-sm text-slate-400 mt-4">Compétition de haut niveau stratégique.</p>
              </div>
            ))}
          </div>
        </section>
      );
      case 7: return (
        <section className="slide-enter flex flex-col items-center max-w-6xl w-full">
          <h2 className="text-4xl font-bold mb-12">Nos Objectifs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            <div className="p-6 glass rounded-2xl border-l-4 border-[#0055A4] flex gap-4">
              <Trophy className="text-[#0055A4]" />
              <p className="font-bold">Sportif : Top 10 Mondial</p>
            </div>
            <div className="p-6 glass rounded-2xl border-l-4 border-[#EF4135] flex gap-4">
              <Languages className="text-[#EF4135]" />
              <p className="font-bold">Culturel : Rayonnement</p>
            </div>
          </div>
        </section>
      );
      case 8: return (
        <section className="slide-enter flex flex-col items-center max-w-5xl w-full">
          <h2 className="text-4xl font-bold mb-12">Parcours 2025 - 2026</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {["2025 : Structuration", "H1-26 : Excellence", "Août : Activation", "WNG 2026 : Kirghizistan"].map((s, i) => (
              <div key={i} className="glass p-6 rounded-xl border border-white/10 w-48 text-center">
                <p className="font-bold text-sm">{s}</p>
              </div>
            ))}
          </div>
        </section>
      );
      case 9: return (
        <section className="slide-enter flex flex-col items-center max-w-6xl w-full">
          <h2 className="text-4xl font-bold mb-8">Budget Global : 5 640 €</h2>
          <div className="w-full glass p-10 rounded-[2.5rem] border-l-8 border-[#0055A4]">
             <p className="text-xl mb-4 text-[#EF4135] font-bold">À lever : 4 100 €</p>
             <p className="text-slate-400">Pour assurer le transport et la logistique de la délégation.</p>
          </div>
        </section>
      );
      case 10: return (
        <section className="slide-enter flex flex-col items-center max-w-6xl text-center w-full">
          <h2 className="text-4xl font-bold mb-12">Pourquoi nous soutenir ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full">
            {["Visibilité", "Prestige", "Ancrage PACA", "Impact RSE"].map((t, i) => (
              <div key={i} className="glass p-6 rounded-2xl border-b-4 border-white/20">
                <h4 className="font-bold">{t}</h4>
              </div>
            ))}
          </div>
        </section>
      );
      case 11: return (
        <section className="slide-enter flex flex-col items-center max-w-6xl w-full">
          <h2 className="text-4xl font-bold mb-10">Packs Sponsor</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full text-center">
            <div className="glass p-8 rounded-3xl border border-white/10">
              <h3 className="text-2xl font-bold mb-4">Bronze : 500 €</h3>
              <p className="text-sm">Logo sur site web & réseaux.</p>
            </div>
            <div className="glass p-8 rounded-3xl border-2 border-white scale-105">
              <h3 className="text-2xl font-bold mb-4">Argent : 1 500 €</h3>
              <p className="text-sm font-bold text-[#0055A4]">Logo sur la tenue officielle.</p>
            </div>
            <div className="glass p-8 rounded-3xl border border-[#EF4135]/30">
              <h3 className="text-2xl font-bold mb-4">Or : 3 000 €+</h3>
              <p className="text-sm">Partenaire Majeur & Team Building.</p>
            </div>
          </div>
        </section>
      );
      case 12: return (
        <section className="slide-enter flex flex-col items-center max-w-6xl text-center w-full">
          <h2 className="text-4xl font-bold mb-12">Le Club des Partenaires</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="glass p-8 rounded-2xl w-48 border-t-4 border-[#0055A4]">Mairie de La Saulce</div>
            <div className="glass p-8 rounded-2xl w-48 border-t-4 border-[#EF4135]">Comité WNG</div>
          </div>
        </section>
      );
      case 13: return (
        <section className="slide-enter flex flex-col md:flex-row items-center gap-12 max-w-6xl w-full">
          <div className="flex-1 space-y-6">
            <h2 className="text-5xl font-bold leading-tight">Portons haut <span className="text-[#0055A4]">nos couleurs</span> ensemble.</h2>
            <p className="text-xl text-slate-400">Contactez-nous pour rejoindre l'aventure.</p>
          </div>
          <div className="flex-1 w-full glass p-8 rounded-[2rem] border-white/20">
            <h3 className="text-2xl font-bold mb-6">Demande de Mécénat</h3>
            <form className="space-y-4" onSubmit={e => e.preventDefault()}>
              <input type="text" placeholder="Organisation" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 outline-none focus:border-[#0055A4]" />
              <button className="w-full bg-gradient-to-r from-[#0055A4] to-[#EF4135] py-4 rounded-xl text-white font-black uppercase tracking-widest shadow-xl">Valider</button>
            </form>
          </div>
        </section>
      );
      default: return null;
    }
  }
};

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<React.StrictMode><App /></React.StrictMode>);
}