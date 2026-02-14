import React, { useState, useEffect, useCallback } from 'react';
import { createRoot } from 'react-dom/client';
import { 
  ChevronRight, ChevronLeft, MapPin, Award, Globe, Users, Tv, Check, 
  Building2, Globe2, Trophy, Languages, GraduationCap, Flag, Flame, 
  ShieldCheck, ArrowRight, Eye, HandMetal, MapPinned, Users2, PlusCircle, 
  Landmark, Shield, Phone, LayoutGrid, Layers, Grid, Sparkles, Zap, 
  History, Target
} from 'lucide-react';

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 15;

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
    <div className="h-screen w-full flex flex-col bg-[#020617] text-slate-100 overflow-hidden nomad-pattern">
      {/* Barre de progression supérieure */}
      <div className="fixed top-0 left-0 w-full z-50">
        <div className="w-full bg-white/5 h-1">
          <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        </div>
      </div>

      {/* Navigation et Compteur */}
      <div className="fixed bottom-8 left-0 w-full z-40 px-8 flex justify-between items-center pointer-events-none">
        <button 
          onClick={prevSlide}
          className={`pointer-events-auto p-3 rounded-full glass hover:bg-white/10 transition-all ${currentSlide === 0 ? 'opacity-0' : 'opacity-100'}`}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <div className="glass px-6 py-2 rounded-full text-xs font-bold tracking-widest text-white flex items-center gap-4">
          <span className="text-[#D4AF37]">{String(currentSlide + 1).padStart(2, '0')}</span>
          <div className="tricolore-strip rounded-full"></div>
          <span className="opacity-40">{String(totalSlides).padStart(2, '0')}</span>
        </div>
        <button 
          onClick={nextSlide}
          className="pointer-events-auto p-4 rounded-full bg-gradient-to-r from-[#0055A4] to-[#EF4135] text-white transition-all shadow-xl shadow-blue-900/40 hover:scale-110"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Effets de lumière d'arrière-plan */}
      <div className="absolute inset-0 -z-10 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-[#0055A4] rounded-full blur-[180px]"></div>
        <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-[#EF4135] rounded-full blur-[180px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#D4AF37] rounded-full blur-[200px] opacity-10"></div>
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
          <div className="flex items-center gap-2 mb-4 text-[#D4AF37] font-bold tracking-widest uppercase text-sm">
            <Sparkles className="w-4 h-4" />
            <span>L'Excellence Française en Terre Nomade</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight tracking-tight">
            WORLD NOMAD <br/>
            <span className="gradient-text-fr">GAMES 2026</span>
          </h1>
          <div className="tricolore-strip mx-auto mb-8 w-32 h-1"></div>
          <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
            Une épopée moderne où la stratégie française rencontre les traditions ancestrales de la Route de la Soie.
          </p>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="glass p-6 rounded-2xl flex items-center gap-4 border-l-4 border-[#0055A4]">
              <MapPin className="text-[#0055A4]" />
              <div className="text-left">
                <p className="text-xs uppercase text-slate-500">Destination</p>
                <p className="font-bold text-white">Kirghizistan</p>
              </div>
            </div>
            <div className="glass p-6 rounded-2xl flex items-center gap-4 border-l-4 border-[#D4AF37]">
              <Flame className="text-[#D4AF37]" />
              <div className="text-left">
                <p className="text-xs uppercase text-slate-500">Esprit</p>
                <p className="font-bold text-white">Culture & Compétition</p>
              </div>
            </div>
          </div>
        </section>
      );
      case 1: return (
        <section className="slide-enter flex flex-col items-center text-center max-w-6xl w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Un Spectacle de Dimension Olympique</h2>
          <p className="text-[#D4AF37] mb-12 uppercase tracking-widest text-sm font-bold">Le plus grand événement de culture traditionnelle au monde</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            <div className="glass p-8 rounded-3xl border-t-4 border-[#0055A4] group hover:bg-white/5 transition-all">
              <Globe className="text-[#0055A4] w-12 h-12 mx-auto mb-6" />
              <div className="text-5xl font-black text-white mb-2">89</div>
              <p className="text-slate-400 font-medium uppercase text-xs tracking-tighter">Nations représentées en 2024</p>
            </div>
            <div className="glass p-8 rounded-3xl border-t-4 border-[#D4AF37] scale-110 shadow-2xl shadow-[#D4AF37]/10">
              <Zap className="text-[#D4AF37] w-12 h-12 mx-auto mb-6" />
              <div className="text-5xl font-black text-white mb-2">50M+</div>
              <p className="text-slate-400 font-medium uppercase text-xs tracking-tighter">Spectateurs & Audience TV</p>
            </div>
            <div className="glass p-8 rounded-3xl border-t-4 border-[#EF4135] group hover:bg-white/5 transition-all">
              <Users className="text-[#EF4135] w-12 h-12 mx-auto mb-6" />
              <div className="text-5xl font-black text-white mb-2">2500</div>
              <p className="text-slate-400 font-medium uppercase text-xs tracking-tighter">Athlètes Internationaux</p>
            </div>
          </div>
        </section>
      );
      case 2: return (
        <section className="slide-enter flex flex-col items-center max-w-6xl w-full text-center">
          <h2 className="text-4xl font-bold mb-8 text-white">L'Esprit des WNG : Immersion Culturelle</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full items-center">
            <div className="relative group">
               <div className="absolute -inset-1 bg-gradient-to-r from-[#D4AF37] to-transparent rounded-[2.5rem] blur opacity-25"></div>
               <img src="https://images.unsplash.com/photo-1540963168233-a80082f42079?auto=format&fit=crop&q=80&w=800" className="rounded-[2.5rem] glass p-2 grayscale group-hover:grayscale-0 transition-all duration-700" alt="Culture Nomade" />
            </div>
            <div className="text-left space-y-6 p-6">
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#D4AF37]/20 flex items-center justify-center">
                    <History className="text-[#D4AF37]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">L'Ethno-Village</h3>
                    <p className="text-slate-400 text-sm">Plus de 200 yourtes, artisanat vivant et festivals de musique traditionnelle.</p>
                  </div>
               </div>
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#0055A4]/20 flex items-center justify-center">
                    <Target className="text-[#0055A4]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Sport & Spectacle</h3>
                    <p className="text-slate-400 text-sm">De l'archerie sur cheval aux jeux de plateau millénaires, une fusion unique.</p>
                  </div>
               </div>
               <p className="italic text-slate-500 border-l-2 border-[#D4AF37] pl-4">"Les World Nomad Games ne sont pas qu'un tournoi, c'est le carrefour des civilisations."</p>
            </div>
          </div>
        </section>
      );
      case 3: return (
        <section className="slide-enter flex flex-col md:flex-row items-center gap-12 max-w-6xl">
          <div className="flex-1 space-y-6 text-left">
            <h2 className="text-4xl font-bold text-white uppercase tracking-tighter italic">Jeux Nomades France</h2>
            <p className="text-lg text-slate-300 leading-relaxed border-l-4 border-[#EF4135] pl-6 italic font-light">
              « Porter le drapeau français lors de cet événement mondial, c'est affirmer notre attachement à la diversité culturelle et à l'excellence stratégique. »
            </p>
            <div className="pt-4 flex items-center gap-4">
              <p className="font-medium text-white/80">— Hélène Mimenza, Présidente</p>
              <div className="tricolore-strip"></div>
            </div>
          </div>
          <div className="flex-1 w-full md:w-auto">
            <div className="glass p-4 rounded-[2rem] border-[#D4AF37]/30 border-2">
              <img src="https://picsum.photos/seed/france-nomad/800/600" alt="Jeux Nomades" className="rounded-2xl grayscale w-full" />
            </div>
          </div>
        </section>
      );
      case 4: return (
        <section className="slide-enter flex flex-col items-center max-w-5xl text-center">
          <h2 className="text-4xl font-bold mb-12 text-white">Une Légende en Marche</h2>
          <div className="w-full relative py-12 px-8 glass rounded-[3rem] border-[#D4AF37]/20 border-2 shadow-2xl shadow-[#D4AF37]/5">
            <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
              <div className="w-40 h-40 rounded-full border-4 border-[#D4AF37] p-2 overflow-hidden flex-shrink-0 relative">
                <img src="https://picsum.photos/seed/clara/300" className="w-full h-full object-cover rounded-full" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#D4AF37]/20 to-transparent"></div>
              </div>
              <div className="text-left">
                <h3 className="text-4xl font-bold text-white">Clara Sotoca</h3>
                <p className="text-2xl font-medium text-[#D4AF37] uppercase tracking-widest">5<sup>ème</sup> Place Mondiale en Awalé</p>
                <p className="text-slate-400 mt-2 font-light text-lg">Héroïne tricolore à Astana 2024, prête pour le sacre en 2026.</p>
              </div>
            </div>
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#D4AF37] text-black px-10 py-3 rounded-full text-sm font-black tracking-widest uppercase shadow-xl">
               SÉLECTION OFFICIELLE FRANCE
            </div>
          </div>
        </section>
      );
      case 5: return (
        <section className="slide-enter flex flex-col items-center max-w-6xl text-center w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white uppercase tracking-tighter">Ils nous font déjà confiance</h2>
          <div className="tricolore-strip mx-auto mb-12"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
            <div className="glass p-10 rounded-[2.5rem] border-l-8 border-[#0055A4] text-left">
              <Building2 className="text-[#0055A4] w-12 h-12 mb-6" />
              <h3 className="text-3xl font-bold mb-4 text-white">Mairie de La Saulce</h3>
              <p className="text-slate-400 leading-relaxed font-light text-lg">Soutien institutionnel historique et base arrière de préparation technique régionale pour nos athlètes.</p>
            </div>
            <div className="glass p-10 rounded-[2.5rem] border-r-8 border-[#EF4135] text-left">
              <Globe2 className="text-[#EF4135] w-12 h-12 mb-6" />
              <h3 className="text-3xl font-bold mb-4 text-white">WNG Organizers 2026</h3>
              <p className="text-slate-400 leading-relaxed font-light text-lg">Reconnaissance par le comité d'organisation international comme délégation officielle française.</p>
            </div>
          </div>
        </section>
      );
      case 6: return (
        <section className="slide-enter flex flex-col items-center max-w-6xl w-full">
          <h2 className="text-4xl font-bold mb-4 text-white uppercase">La Délégation 2026</h2>
          <p className="text-[#D4AF37] mb-12 uppercase tracking-widest text-sm font-bold">Unie par la stratégie et la passion</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 w-full">
            {[
              { n: "Hélène Mimenza", r: "Coach & Présidente", c: "#0055A4" },
              { n: "Clara Sotoca", r: "Athlète Élite", c: "#D4AF37" },
              { n: "Bénédicte V.O.", r: "Joueuse Pro", c: "#EF4135" },
              { n: "Colette Gueirard", r: "Joueuse", c: "#0055A4" },
              { n: "Éric Sotoca", r: "Dir. Technique", c: "#EF4135" }
            ].map((m, i) => (
              <div key={i} className="flex flex-col items-center group">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-3xl glass p-1 mb-4 overflow-hidden shadow-lg group-hover:scale-105 transition-transform" style={{borderBottom: `6px solid ${m.c}`}}>
                  <img src={`https://picsum.photos/seed/${m.n}/200`} className="w-full h-full object-cover rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
                <p className="font-bold text-sm text-white mb-1">{m.n}</p>
                <p className="text-[10px] uppercase text-slate-500 font-black tracking-[0.2em]">{m.r}</p>
              </div>
            ))}
          </div>
        </section>
      );
      case 7: return (
        <section className="slide-enter flex flex-col items-center max-w-6xl w-full">
          <h2 className="text-4xl font-bold mb-10 text-white uppercase tracking-widest">Le Mental au Combat</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {[
              { t: "Awalé", i: LayoutGrid, c: "#0055A4", d: "Afrique - 'Semailles stratégiques'. Jeu de calcul pur.", s: "UNESCO" },
              { t: "Togyz Qumalaq", i: Layers, c: "#D4AF37", d: "Kazakhstan - 162 boules, complexité mathématique extrême.", s: "ROI DES JEUX" },
              { t: "Mangala", i: Grid, c: "#EF4135", d: "Turquie - Rapidité et fraternité tactique millénaire.", s: "HISTOIRE" }
            ].map((item, i) => (
              <div key={i} className="flip-card group">
                <div className="flip-card-inner">
                  <div className="flip-card-front glass border-2" style={{borderColor: `${item.c}40`}}>
                    <item.i className="w-16 h-16 mb-4" style={{color: item.c}} />
                    <h3 className="text-3xl font-black text-white uppercase italic">{item.t}</h3>
                    <div className="mt-4 px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest" style={{backgroundColor: `${item.c}20`, color: item.c}}>{item.s}</div>
                  </div>
                  <div className="flip-card-back rounded-3xl p-8 flex items-center justify-center text-center" style={{background: `linear-gradient(135deg, ${item.c}, #000)`}}>
                    <p className="text-xl font-light italic leading-relaxed text-white">"{item.d}"</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      );
      case 8: return (
        <section className="slide-enter flex flex-col items-center max-w-6xl w-full">
          <h2 className="text-4xl font-bold mb-12 text-white uppercase">Objectifs de Rayonnement</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full text-left">
            <div className="p-8 glass rounded-[2.5rem] border-l-8 border-[#0055A4] flex gap-6 items-center">
              <Trophy className="text-[#0055A4] w-16 h-16 flex-shrink-0" />
              <div>
                <h4 className="font-black text-2xl mb-2 text-white">Top 10 Mondial</h4>
                <p className="text-slate-400 font-light">Maintenir et consolider la place de la France parmi l'élite des nations de stratégie.</p>
              </div>
            </div>
            <div className="p-8 glass rounded-[2.5rem] border-l-8 border-[#EF4135] flex gap-6 items-center">
              <Globe className="text-[#EF4135] w-16 h-16 flex-shrink-0" />
              <div>
                <h4 className="font-black text-2xl mb-2 text-white">Francophonie Nomade</h4>
                <p className="text-slate-400 font-light">Porter les valeurs culturelles françaises au cœur de l'Ethno-Village mondial.</p>
              </div>
            </div>
          </div>
        </section>
      );
      case 9: return (
        <section className="slide-enter flex flex-col items-center max-w-6xl w-full">
          <h2 className="text-4xl font-bold mb-12 text-white uppercase">Timeline 2025 - 2026</h2>
          <div className="relative w-full py-12 flex flex-col md:flex-row gap-8">
            <div className="absolute h-1 bg-white/10 w-full top-1/2 left-0 hidden md:block"></div>
            {[
              { y: "2025", s: "Structuration", d: "Ateliers Gap & PACA", i: ShieldCheck },
              { y: "H1-26", s: "Préparation", d: "Tournois Européens", i: Zap },
              { y: "Août 26", s: "Mobilisation", d: "Événements Médias", i: Sparkles },
              { y: "Sept 26", s: "KIRGHIZISTAN", d: "World Nomad Games", i: Trophy, special: true }
            ].map((step, i) => (
              <div key={i} className="relative z-10 flex-1 flex flex-col items-center text-center">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-2xl transition-all ${step.special ? 'bg-[#D4AF37] scale-125' : 'glass'}`}>
                  <step.i className={step.special ? 'text-black w-8 h-8' : 'text-[#0055A4] w-6 h-6'} />
                </div>
                <h4 className="font-black text-white mb-2">{step.y}</h4>
                <p className="font-bold text-sm text-[#D4AF37] mb-1">{step.s}</p>
                <p className="text-[10px] text-slate-500 uppercase font-black">{step.d}</p>
              </div>
            ))}
          </div>
        </section>
      );
      case 10: return (
        <section className="slide-enter flex flex-col items-center max-w-6xl w-full">
          <h2 className="text-4xl font-bold mb-8 text-white uppercase tracking-tighter">Budget Global : 5 640 €</h2>
          <div className="w-full max-w-4xl glass p-12 rounded-[3rem] border-l-8 border-[#0055A4]">
            <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-8">
              <div className="text-left">
                <p className="text-6xl font-black text-white mb-2">À lever : 4 100 €</p>
                <p className="text-[#D4AF37] text-lg font-bold">Investissement territorial et visibilité internationale</p>
              </div>
              <div className="text-right">
                <p className="text-xs uppercase text-slate-500 mb-2 tracking-widest">Besoin Partenaire</p>
                <div className="text-4xl font-black text-[#EF4135] bg-[#EF4135]/10 px-6 py-2 rounded-2xl">73%</div>
              </div>
            </div>
            <div className="h-6 bg-white/5 rounded-full overflow-hidden flex border border-white/10 shadow-inner">
              <div className="h-full bg-[#0055A4] w-[27%] relative">
                 <div className="absolute inset-0 bg-white/10 animate-pulse"></div>
              </div>
              <div className="h-full bg-[#EF4135]/30 w-[73%]"></div>
            </div>
            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
               <div className="glass p-4 rounded-2xl border-white/5"><p className="text-[10px] text-slate-500 uppercase font-black">Transport</p><p className="font-bold">2 500€</p></div>
               <div className="glass p-4 rounded-2xl border-white/5"><p className="text-[10px] text-slate-500 uppercase font-black">Logistique</p><p className="font-bold">1 000€</p></div>
               <div className="glass p-4 rounded-2xl border-white/5"><p className="text-[10px] text-slate-500 uppercase font-black">Tenues Offic.</p><p className="font-bold">600€</p></div>
               <div className="glass p-4 rounded-2xl border-white/5"><p className="text-[10px] text-slate-500 uppercase font-black">Communication</p><p className="font-bold">1 540€</p></div>
            </div>
          </div>
        </section>
      );
      case 11: return (
        <section className="slide-enter flex flex-col items-center max-w-6xl w-full text-center">
          <h2 className="text-4xl font-bold mb-12 text-white uppercase">Pourquoi nous soutenir ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full">
            {[
              { i: Eye, t: "Visibilité", d: "Audience mondiale de 50M+ sur 5 continents.", c: "#0055A4" },
              { i: HandMetal, t: "Prestige", d: "Valeurs d'excellence et de stratégie millénaire.", c: "#D4AF37" },
              { i: MapPinned, t: "Ancrage", d: "Rayonnement fort en Région PACA & Hautes-Alpes.", c: "#EF4135" },
              { i: Users2, t: "Impact RSE", d: "Soutien au patrimoine immatériel mondial.", c: "#FFF" }
            ].map((p, i) => (
              <div key={i} className="glass p-8 rounded-3xl group hover:scale-105 transition-all cursor-pointer" style={{borderBottom: `6px solid ${p.c}`}}>
                <p.i className="w-12 h-12 mx-auto mb-6" style={{color: p.c}} />
                <h4 className="font-black text-white text-xl mb-3">{p.t}</h4>
                <p className="text-xs text-slate-500 leading-relaxed uppercase font-black tracking-tighter">{p.d}</p>
              </div>
            ))}
          </div>
        </section>
      );
      case 12: return (
        <section className="slide-enter flex flex-col items-center max-w-6xl w-full">
          <h2 className="text-4xl font-bold mb-10 text-white uppercase">Packs Partenaires 2026</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            <div className="glass p-10 rounded-[3rem] border-white/10 flex flex-col h-full text-left">
              <h3 className="text-3xl font-black mb-2 text-white">BRONZE</h3>
              <p className="text-[#0055A4] font-black text-2xl mb-8">500 €</p>
              <ul className="text-slate-400 space-y-4 mb-10 flex-grow text-sm">
                <li className="flex gap-3"><Check className="text-[#0055A4] w-5 h-5" /> Logo sur site web officiel</li>
                <li className="flex gap-3"><Check className="text-[#0055A4] w-5 h-5" /> Mention Réseaux Sociaux</li>
                <li className="flex gap-3"><Check className="text-[#0055A4] w-5 h-5" /> Certificat de mécénat</li>
              </ul>
              <div className="text-[10px] font-black uppercase tracking-widest text-[#0055A4]">Soutien Territorial</div>
            </div>
            <div className="glass p-10 rounded-[3rem] border-2 border-white scale-105 shadow-2xl flex flex-col h-full text-left relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-white text-black px-6 py-2 rounded-bl-3xl font-black text-[10px] uppercase">Recommandé</div>
              <h3 className="text-3xl font-black mb-2 text-white">ARGENT</h3>
              <p className="text-[#D4AF37] font-black text-2xl mb-8">1 500 €</p>
              <ul className="text-white space-y-4 mb-10 flex-grow text-sm">
                <li className="flex gap-3 font-bold"><Check className="text-[#D4AF37] w-5 h-5" /> Pack Bronze inclus</li>
                <li className="flex gap-3 font-bold"><Check className="text-[#D4AF37] w-5 h-5" /> Logo sur tenue de match</li>
                <li className="flex gap-3 font-bold"><Check className="text-[#D4AF37] w-5 h-5" /> Branding tournois prépa</li>
              </ul>
              <div className="text-[10px] font-black uppercase tracking-widest text-white">Partenaire Élite</div>
            </div>
            <div className="glass p-10 rounded-[3rem] border-[#EF4135]/30 flex flex-col h-full text-left">
              <h3 className="text-3xl font-black mb-2 text-white">OR / PLATINE</h3>
              <p className="text-[#EF4135] font-black text-2xl mb-8">3 000 €+</p>
              <ul className="text-slate-400 space-y-4 mb-10 flex-grow text-sm">
                <li className="flex gap-3"><Check className="text-[#EF4135] w-5 h-5" /> Pack Argent inclus</li>
                <li className="flex gap-3"><Check className="text-[#EF4135] w-5 h-5" /> Logo poitrine (principal)</li>
                <li className="flex gap-3"><Check className="text-[#EF4135] w-5 h-5" /> Atelier Team Building</li>
              </ul>
              <div className="text-[10px] font-black uppercase tracking-widest text-[#EF4135]">Partenaire Majeur</div>
            </div>
          </div>
        </section>
      );
      case 13: return (
        <section className="slide-enter flex flex-col items-center max-w-6xl w-full text-center">
          <h2 className="text-4xl font-bold mb-12 text-white uppercase">Le Club des Partenaires</h2>
          <div className="flex flex-wrap justify-center gap-10">
            <div className="glass p-12 rounded-[2.5rem] w-64 border-t-4 border-[#0055A4] flex flex-col items-center shadow-xl">
              <Landmark className="w-16 h-16 text-white/30 mb-6" />
              <p className="font-black text-white text-lg leading-tight uppercase tracking-widest">Mairie de <br/>La Saulce</p>
            </div>
            <div className="glass p-12 rounded-[2.5rem] w-64 border-t-4 border-[#EF4135] flex flex-col items-center shadow-xl">
              <Shield className="w-16 h-16 text-white/30 mb-6" />
              <p className="font-black text-white text-lg leading-tight uppercase tracking-widest">Comité WNG <br/>Officiel</p>
            </div>
            <div className="glass p-12 rounded-[2.5rem] w-64 border-dashed border-2 border-white/10 flex flex-col items-center opacity-50 hover:opacity-100 transition-opacity cursor-pointer group" onClick={() => setCurrentSlide(14)}>
              <PlusCircle className="w-16 h-16 text-[#D4AF37] mb-6 group-hover:scale-110 transition-transform" />
              <p className="font-black text-white/40 group-hover:text-[#D4AF37] text-sm uppercase tracking-widest">Rejoignez <br/>l'Équipe</p>
            </div>
          </div>
          <p className="mt-16 text-slate-500 font-black text-xs uppercase tracking-[0.5em] opacity-40">Excellence • Culture • Stratégie</p>
        </section>
      );
      case 14: return (
        <section className="slide-enter flex flex-col md:flex-row items-center gap-12 max-w-6xl w-full text-left">
          <div className="flex-1 space-y-8">
            <div className="flex items-center gap-2 text-[#D4AF37] font-black tracking-widest uppercase text-sm">
                <Sparkles className="w-6 h-6 animate-pulse" />
                <span>Rejoignez l'épopée</span>
            </div>
            <h2 className="text-7xl font-black leading-none text-white tracking-tighter uppercase italic">
               Portons <br/>
               Haut <span className="gradient-text-fr">Nos</span><br/>
               Couleurs.
            </h2>
            <p className="text-xl text-slate-400 font-light italic border-l-4 border-[#D4AF37] pl-8">
              « L'aventure commence ici, au cœur des Alpes, pour briller demain en Asie Centrale. »
            </p>
            <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="glass p-6 rounded-3xl flex items-center gap-6 border border-white/10 group hover:border-[#D4AF37] transition-all">
                <Phone className="text-[#D4AF37] w-8 h-8 group-hover:rotate-12 transition-transform" />
                <div>
                   <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Hélène Mimenza</p>
                   <p className="text-lg font-black">06 16 08 01 74</p>
                </div>
              </div>
              <div className="glass p-6 rounded-3xl flex items-center gap-6 border border-white/10 group hover:border-[#0055A4] transition-all">
                <Globe className="text-[#0055A4] w-8 h-8 group-hover:scale-110 transition-transform" />
                <div>
                   <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Email</p>
                   <p className="text-lg font-black uppercase tracking-tighter">wng-france.fr</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full glass p-12 rounded-[4rem] border-[#D4AF37]/40 border-2 shadow-2xl shadow-[#D4AF37]/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/10 blur-3xl rounded-full"></div>
            <h3 className="text-3xl font-black mb-10 text-white uppercase italic tracking-tighter">Dossier de Partenariat</h3>
            <form className="space-y-6" onSubmit={e => {e.preventDefault(); alert("Demande enregistrée. Nous vous recontacterons pour bâtir ensemble ce projet mondial.");}}>
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-black text-slate-500 tracking-widest ml-4 italic">Organisation</label>
                <input type="text" placeholder="Ex: Groupe LVMH, Région PACA..." className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 outline-none focus:border-[#D4AF37] transition-all text-white placeholder:text-slate-600 font-medium" required />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-black text-slate-500 tracking-widest ml-4 italic">Contact Direct</label>
                <input type="email" placeholder="email@votreorganisation.fr" className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 outline-none focus:border-[#D4AF37] transition-all text-white placeholder:text-slate-600 font-medium" required />
              </div>
              <button className="w-full bg-gradient-to-r from-[#D4AF37] via-[#0055A4] to-[#EF4135] py-6 rounded-2xl text-black font-black uppercase tracking-[0.3em] shadow-2xl hover:scale-[1.03] active:scale-95 transition-all text-xl mt-4">
                Écrivons le futur
              </button>
            </form>
          </div>
        </section>
      );
      default: return null;
    }
  }
};

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(<App />);
}