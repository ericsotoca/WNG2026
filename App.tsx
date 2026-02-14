import React, { useState, useEffect, useCallback } from 'react';
import { 
  ChevronRight, 
  ChevronLeft, 
  MapPin, 
  Award, 
  Globe, 
  Users, 
  Tv, 
  Check, 
  Building2, 
  Globe2, 
  LayoutGrid, 
  Layers, 
  Grid, 
  Trophy, 
  Languages, 
  GraduationCap, 
  Flag, 
  Flame, 
  ShieldCheck, 
  ArrowRight, 
  Eye, 
  HandMetal, 
  MapPinned, 
  Users2, 
  PlusCircle, 
  Landmark, 
  Shield, 
  Phone
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

  // Mobile Swipe handling
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const handleTouchStart = (e: React.TouchEvent) => setTouchStart(e.touches[0].clientX);
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (Math.abs(diff) > 50) {
      if (diff > 0) nextSlide();
      else prevSlide();
    }
    setTouchStart(null);
  };

  const progress = ((currentSlide + 1) / totalSlides) * 100;

  return (
    <div 
      className="h-screen w-full flex flex-col bg-[#020617] text-slate-100 overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Progress Top Bar */}
      <div className="fixed top-0 left-0 w-full z-50">
        <div className="w-full bg-white/5 h-1">
          <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        </div>
      </div>

      {/* Navigation Overlay */}
      <div className="fixed bottom-8 left-0 w-full z-40 px-8 flex justify-between items-center pointer-events-none">
        <button 
          onClick={prevSlide}
          className={`pointer-events-auto p-3 rounded-full glass hover:bg-white/10 transition-all active:scale-95 group ${currentSlide === 0 ? 'opacity-0' : 'opacity-100'}`}
        >
          <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
        </button>
        <div className="glass px-4 py-2 rounded-full text-xs font-medium tracking-widest text-white/50 uppercase flex items-center gap-3">
          <span>{String(currentSlide + 1).padStart(2, '0')}</span> / <span>{String(totalSlides).padStart(2, '0')}</span>
          <div className="tricolore-strip rounded-full"></div>
        </div>
        <button 
          onClick={nextSlide}
          className="pointer-events-auto p-3 rounded-full bg-[#0055A4] hover:bg-blue-700 text-white transition-all active:scale-95 group shadow-lg shadow-blue-900/40"
        >
          <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 opacity-10 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-[#0055A4] rounded-full blur-[150px]"></div>
        <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-[#EF4135] rounded-full blur-[150px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-white rounded-full blur-[200px] opacity-20"></div>
      </div>

      {/* Main Slider Content */}
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
            <div className="glass p-8 rounded-3xl border-t-4 border-[#0055A4] group hover:bg-white/5 transition-all">
              <div className="w-16 h-16 bg-[#0055A4]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Globe className="text-[#0055A4] w-8 h-8" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">80+</div>
              <p className="text-slate-400">Nations participantes à travers les 5 continents</p>
            </div>
            <div className="glass p-8 rounded-3xl border-t-4 border-white/50 group hover:bg-white/5 transition-all">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="text-white w-8 h-8" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">50M+</div>
              <p className="text-slate-400">Audience mondiale estimée (médias & réseaux)</p>
            </div>
            <div className="glass p-8 rounded-3xl border-t-4 border-[#EF4135] group hover:bg-white/5 transition-all">
              <div className="w-16 h-16 bg-[#EF4135]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Tv className="text-[#EF4135] w-8 h-8" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">3000+</div>
              <p className="text-slate-400">Athlètes d'élite en compétition</p>
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
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-[#0055A4]/20 flex items-center justify-center flex-shrink-0">
                  <Check className="text-[#0055A4] w-5 h-5" />
                </div>
                <p>Promotion et transmission des jeux de société traditionnels</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-[#EF4135]/20 flex items-center justify-center flex-shrink-0">
                  <Check className="text-[#EF4135] w-5 h-5" />
                </div>
                <p>Valorisation culturelle et éducative du patrimoine ludique</p>
              </div>
            </div>
            <div className="pt-4 flex items-center gap-4">
              <p className="font-medium text-white/80">— Hélène Mimenza, Présidente</p>
              <div className="tricolore-strip"></div>
            </div>
          </div>
          <div className="flex-1 w-full md:w-auto relative">
            <div className="glass p-4 rounded-[2rem] overflow-hidden relative z-10">
              <img src="https://picsum.photos/seed/france-nomad/800/600" alt="Jeux Nomades" className="rounded-2xl grayscale hover:grayscale-0 transition-all duration-700 w-full" />
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 border-t-8 border-r-8 border-[#0055A4] rounded-tr-[3rem]"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-8 border-l-8 border-[#EF4135] rounded-bl-[3rem]"></div>
          </div>
        </section>
      );
      case 3: return (
        <section className="slide-enter flex flex-col items-center max-w-5xl text-center">
          <h2 className="text-4xl font-bold mb-12">Résultats Historiques 2024</h2>
          <div className="w-full relative py-12 px-8 glass rounded-[3rem] border-white/10">
            <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
              <div className="w-32 h-32 rounded-full border-4 border-white p-1 overflow-hidden flex-shrink-0 relative">
                <img src="https://picsum.photos/seed/clara/200" alt="Clara Sotoca" className="w-full h-full object-cover rounded-full" />
                <div className="absolute inset-0 border-2 border-[#EF4135] rounded-full scale-110"></div>
                <div className="absolute inset-0 border-2 border-[#0055A4] rounded-full scale-125"></div>
              </div>
              <div className="text-left">
                <h3 className="text-3xl font-bold text-white mb-1">Clara Sotoca</h3>
                <p className="text-xl font-medium text-[#0055A4] uppercase tracking-widest">5<sup>ème</sup> Place Mondiale en Awalé</p>
                <p className="text-slate-400 mt-2 font-light">Exploit réalisé face à 40 compétiteurs internationaux d'élite à Astana, Kazakhstan.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div className="bg-[#0055A4]/10 p-4 rounded-xl border border-[#0055A4]/20">
                <p className="text-xs uppercase text-[#0055A4] font-bold mb-1">Éric Sotoca</p>
                <p className="font-medium">22<sup>ème</sup> mondial / Top Européen</p>
              </div>
              <div className="bg-[#EF4135]/10 p-4 rounded-xl border border-[#EF4135]/20">
                <p className="text-xs uppercase text-[#EF4135] font-bold mb-1">Impact Médiatique</p>
                <p className="font-medium">Reportages BFM DICI & Presse locale</p>
              </div>
            </div>
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#0055A4] via-white to-[#EF4135] text-black px-8 py-2 rounded-full text-sm font-black shadow-xl">
                SÉLECTION OFFICIELLE FRANCE
            </div>
          </div>
        </section>
      );
      case 4: return (
        <section className="slide-enter flex flex-col items-center max-w-6xl text-center w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Ils nous font déjà confiance</h2>
          <div className="tricolore-strip mx-auto mb-12"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
            <div className="glass p-10 rounded-[2.5rem] border-l-8 border-[#0055A4] relative group hover:bg-white/5 transition-all text-left">
              <div className="w-20 h-20 bg-[#0055A4]/10 rounded-3xl flex items-center justify-center mb-6">
                <Building2 className="text-[#0055A4] w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Mairie de La Saulce</h3>
              <p className="text-slate-400 mb-6 leading-relaxed font-light">
                Soutien institutionnel historique de la délégation. La Saulce constitue la base arrière de préparation technique et de rayonnement territorial de nos athlètes.
              </p>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#0055A4]/20 text-[#0055A4] text-xs font-bold uppercase tracking-widest">
                Partenaire Territorial
              </div>
            </div>
            <div className="glass p-10 rounded-[2.5rem] border-r-8 border-[#EF4135] relative group hover:bg-white/5 transition-all text-left">
              <div className="w-20 h-20 bg-[#EF4135]/10 rounded-3xl flex items-center justify-center mb-6">
                <Globe2 className="text-[#EF4135] w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">WNG Organizers 2026</h3>
              <p className="text-slate-400 mb-6 leading-relaxed font-light">
                Reconnaissance officielle par le comité d'organisation international des World Nomad Games comme structure légitime représentant les couleurs de la France.
              </p>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#EF4135]/20 text-[#EF4135] text-xs font-bold uppercase tracking-widest">
                Partenaire Institutionnel
              </div>
            </div>
          </div>
          <p className="mt-12 text-slate-500 italic">Un socle solide pour une ambition mondiale.</p>
        </section>
      );
      case 5: return (
        <section className="slide-enter flex flex-col items-center max-w-6xl w-full">
          <h2 className="text-4xl font-bold mb-4">La Délégation 2026</h2>
          <div className="tricolore-strip mx-auto mb-12"></div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 w-full">
            {[
              { name: "Hélène Mimenza", role: "Coach & Joueuse", c: "border-[#0055A4]", id: "h1" },
              { name: "Clara Sotoca", role: "Joueuse Élite", c: "border-white", id: "h2" },
              { name: "Bénédicte V.O.", role: "Joueuse", c: "border-[#EF4135]", id: "h3" },
              { name: "Colette Gueirard", role: "Joueuse", c: "border-[#0055A4]", id: "h4" },
              { name: "Éric Sotoca", role: "Dir. Technique", c: "border-[#EF4135]", id: "h5" }
            ].map((m, i) => (
              <div key={i} className="flex flex-col items-center group">
                <div className={`w-24 h-24 md:w-32 md:h-32 rounded-2xl glass p-1 mb-4 border-b-4 ${m.c} group-hover:scale-105 transition-all duration-300 overflow-hidden`}>
                  <img src={`https://picsum.photos/seed/${m.id}/200`} className="w-full h-full object-cover rounded-xl grayscale group-hover:grayscale-0 transition-all" alt={m.name} />
                </div>
                <p className="font-bold text-sm">{m.name}</p>
                <p className={`text-[10px] uppercase font-bold tracking-tighter ${m.c === 'border-white' ? 'text-white/70' : m.c.replace('border-', 'text-')}`}>{m.role}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 glass p-6 rounded-2xl text-center max-w-2xl border-l-4 border-[#0055A4] border-r-4 border-[#EF4135]">
            <p className="text-sm font-medium tracking-wide">Une équipe structurée pour porter l'excellence française sur le plateau mondial.</p>
          </div>
        </section>
      );
      case 6: return (
        <section className="slide-enter flex flex-col items-center max-w-6xl w-full">
          <h2 className="text-4xl font-bold mb-10">Les 3 Disciplines Maîtresses</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front glass border-[#0055A4]/30">
                  <LayoutGrid className="w-12 h-12 text-[#0055A4] mb-4" />
                  <h3 className="text-2xl font-bold">Awalé</h3>
                  <p className="text-xs text-[#0055A4] mt-4 uppercase font-bold">Origine : Afrique de l'Ouest</p>
                </div>
                <div className="flip-card-back bg-[#0055A4] rounded-2xl p-6 text-white">
                  <h4 className="font-bold mb-2">Stratégie Millénaire</h4>
                  <p className="text-sm font-light">Jeu de semailles africain. Demande calcul mental rapide et anticipation. Clara est 5<sup>ème</sup> mondiale.</p>
                </div>
              </div>
            </div>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front glass border-white/30">
                  <Layers className="w-12 h-12 text-white mb-4" />
                  <h3 className="text-2xl font-bold">Togyz Qumalaq</h3>
                  <p className="text-xs text-white/70 mt-4 uppercase font-bold">Origine : Kazakhstan</p>
                </div>
                <div className="flip-card-back bg-slate-100 rounded-2xl p-6 text-black">
                  <h4 className="font-bold mb-2">Mathématique Nomade</h4>
                  <p className="text-sm font-light">Un des plus complexes jeux de la famille Mancala. Discipline reine au Kirghizistan.</p>
                </div>
              </div>
            </div>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front glass border-[#EF4135]/30">
                  <Grid className="w-12 h-12 text-[#EF4135] mb-4" />
                  <h3 className="text-2xl font-bold">Mangala</h3>
                  <p className="text-xs text-[#EF4135] mt-4 uppercase font-bold">Origine : Turquie</p>
                </div>
                <div className="flip-card-back bg-[#EF4135] rounded-2xl p-6 text-white">
                  <h4 className="font-bold mb-2">Tactique Ancestrale</h4>
                  <p className="text-sm font-light">Jeu stratégique ottoman symbole d'échange et de sagesse. Inscrit à l'UNESCO.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
      case 7: return (
        <section className="slide-enter flex flex-col items-center max-w-6xl w-full">
          <h2 className="text-4xl font-bold mb-12">Nos Objectifs Stratégiques</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full text-left">
            <div className="flex gap-4 p-6 glass rounded-2xl border-l-4 border-[#0055A4] hover:bg-white/5 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#0055A4]/20 flex items-center justify-center flex-shrink-0">
                <Trophy className="text-[#0055A4]" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Sportif : Top 10 Mondial</h4>
                <p className="text-sm text-slate-400 font-light">Maintenir et améliorer notre rang parmi les meilleures nations mondiales.</p>
              </div>
            </div>
            <div className="flex gap-4 p-6 glass rounded-2xl border-l-4 border-[#EF4135] hover:bg-white/5 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#EF4135]/20 flex items-center justify-center flex-shrink-0">
                <Languages className="text-[#EF4135]" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Culturel : Rayonnement</h4>
                <p className="text-sm text-slate-400 font-light">Faire connaître le patrimoine ludique africain et asiatique en France.</p>
              </div>
            </div>
            <div className="flex gap-4 p-6 glass rounded-2xl border-l-4 border-white hover:bg-white/5 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                <GraduationCap className="text-white" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Éducatif : Sensibilisation</h4>
                <p className="text-sm text-slate-400 font-light">Échanges intergénérationnels à travers des ateliers régionaux (PACA, Gap).</p>
              </div>
            </div>
            <div className="flex gap-4 p-6 glass rounded-2xl border-l-4 border-[#0055A4] hover:bg-white/5 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#0055A4]/20 flex items-center justify-center flex-shrink-0">
                <Flag className="text-[#0055A4]" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Diplomatie Sportive</h4>
                <p className="text-sm text-slate-400 font-light">Renforcer l'image de la France comme carrefour des cultures ludiques.</p>
              </div>
            </div>
          </div>
        </section>
      );
      case 8: return (
        <section className="slide-enter flex flex-col items-center max-w-5xl w-full">
          <h2 className="text-4xl font-bold mb-12">Parcours vers la Victoire</h2>
          <div className="relative w-full py-8">
            <div className="absolute h-1 bg-gradient-to-r from-[#0055A4] via-white to-[#EF4135] w-full top-1/2 left-0 -translate-y-1/2 hidden md:block opacity-30"></div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { y: "2025", t: "Structuration", d: "Ateliers régionaux & sessions techniques intensives.", c: "bg-[#0055A4]" },
                { y: "H1-26", t: "Excellence", d: "Tournois préparatoires internationaux.", c: "bg-white" },
                { y: "Août", t: "Activation", d: "Événements publics de promotion tricolore.", c: "bg-[#EF4135]" },
                { y: "KIRG", t: "WNG 2026", d: "World Nomad Games au Kirghizistan.", c: "bg-gold", isSpecial: true }
              ].map((s, i) => (
                <div key={i} className="relative flex flex-col items-center text-center">
                  <div className={`w-12 h-12 ${s.isSpecial ? 'bg-gold' : s.c} rounded-full flex items-center justify-center z-10 mb-4 shadow-lg`}>
                    {s.isSpecial ? <Flame className="text-black w-5 h-5" /> : <span className={`font-bold text-sm ${s.c === 'bg-white' ? 'text-black' : 'text-white'}`}>{s.y}</span>}
                  </div>
                  <h4 className={`font-bold text-sm mb-2 ${s.isSpecial ? 'text-gold' : ''}`}>{s.t}</h4>
                  <p className="text-xs text-slate-400 font-light">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
      case 9: return (
        <section className="slide-enter flex flex-col items-center max-w-6xl w-full">
          <h2 className="text-4xl font-bold mb-8">Budget & Financement</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full items-center text-left">
            <div className="space-y-6">
              <div className="glass p-6 rounded-3xl border-l-8 border-[#0055A4]">
                <div className="flex justify-between items-end mb-4">
                  <div>
                    <p className="text-xs uppercase text-slate-400">Budget Global</p>
                    <p className="text-5xl font-bold text-white">5 640 €</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs uppercase text-[#0055A4] font-bold">Objectif Sponsor</p>
                    <p className="text-2xl font-bold text-[#EF4135]">4 100 €</p>
                  </div>
                </div>
                <div className="h-4 bg-white/10 rounded-full overflow-hidden flex border border-white/5">
                  <div className="h-full bg-[#0055A4] w-[27%]"></div>
                  <div className="h-full bg-[#EF4135]/40 w-[73%]"></div>
                </div>
                <div className="flex gap-6 mt-4 text-[10px] uppercase font-bold tracking-widest opacity-60">
                  <span className="flex items-center gap-1"><span className="w-3 h-1 bg-[#0055A4] rounded-full"></span> Acquis (27%)</span>
                  <span className="flex items-center gap-1"><span className="w-3 h-1 bg-[#EF4135]/40 rounded-full"></span> À lever (73%)</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#0055A4]/5 p-4 rounded-xl border border-[#0055A4]/10">
                  <p className="text-xs text-slate-400 uppercase">Transport</p>
                  <p className="font-bold text-xl">2 500 €</p>
                </div>
                <div className="bg-[#EF4135]/5 p-4 rounded-xl border border-[#EF4135]/10">
                  <p className="text-xs text-slate-400 uppercase">Logistique</p>
                  <p className="font-bold text-xl">1 000 €</p>
                </div>
              </div>
            </div>
            <div className="glass p-8 rounded-[2.5rem] border-white/20">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <ShieldCheck className="text-[#0055A4]" />
                Engagement Institutionnel
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <ArrowRight className="text-[#EF4135] w-5 h-5 flex-shrink-0 mt-1" />
                  <p className="text-sm font-light">Soutien direct à une délégation officielle française</p>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="text-[#EF4135] w-5 h-5 flex-shrink-0 mt-1" />
                  <p className="text-sm font-light">Transparence budgétaire totale (Jeux Nomades France)</p>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="text-[#EF4135] w-5 h-5 flex-shrink-0 mt-1" />
                  <p className="text-sm font-light">Déduction fiscale possible selon statut du partenaire</p>
                </li>
              </ul>
              <button onClick={() => setCurrentSlide(11)} className="w-full mt-8 bg-[#0055A4] py-4 rounded-xl text-white font-bold hover:scale-[1.02] transition-transform shadow-xl shadow-blue-900/40 uppercase tracking-widest text-sm">
                Choisir un Package Sponsor
              </button>
            </div>
          </div>
        </section>
      );
      case 10: return (
        <section className="slide-enter flex flex-col items-center max-w-6xl text-center w-full">
          <h2 className="text-4xl font-bold mb-4">Pourquoi porter nos couleurs ?</h2>
          <div className="tricolore-strip mx-auto mb-12"></div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full">
            {[
              { i: Eye, t: "Visibilité", d: "Audience de 50M+ sur une scène internationale d'exception.", c: "border-[#0055A4]" },
              { i: HandMetal, t: "Prestige", d: "Associez votre image à l'élite sportive et intellectuelle française.", c: "border-white" },
              { i: MapPinned, t: "Ancrage", d: "Rayonnement local fort en région PACA et Hautes-Alpes.", c: "border-[#EF4135]" },
              { i: Users2, t: "Impact RSE", d: "Soutien à la préservation du patrimoine immatériel mondial.", c: "border-[#0055A4]" }
            ].map((p, i) => (
              <div key={i} className={`glass p-6 rounded-2xl border-b-4 ${p.c} group cursor-pointer hover:bg-white/5 transition-all`}>
                <p.i className={`w-10 h-10 mx-auto mb-4 ${p.c === 'border-white' ? 'text-white' : p.c.replace('border-', 'text-')}`} />
                <h4 className="font-bold mb-2">{p.t}</h4>
                <p className="text-xs text-slate-400 leading-relaxed font-light">{p.d}</p>
              </div>
            ))}
          </div>
        </section>
      );
      case 11: return (
        <section className="slide-enter flex flex-col items-center max-w-6xl w-full">
          <h2 className="text-4xl font-bold mb-10">Grille de Partenariat</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full text-left">
            <div className="glass p-8 rounded-3xl border border-white/10 relative overflow-hidden group hover:border-[#0055A4]/30 transition-all flex flex-col h-full">
              <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Soutien</div>
              <h3 className="text-3xl font-bold mb-4">Bronze</h3>
              <div className="text-2xl font-bold text-[#0055A4] mb-8">500 €</div>
              <ul className="space-y-3 text-sm text-slate-300 mb-8 flex-grow">
                <li className="flex gap-2"><Check className="text-[#0055A4] w-4 h-4" /> Logo sur site web</li>
                <li className="flex gap-2"><Check className="text-[#0055A4] w-4 h-4" /> Mention réseaux sociaux</li>
                <li className="flex gap-2"><Check className="text-[#0055A4] w-4 h-4" /> Certificat de mécénat</li>
              </ul>
              <button onClick={() => setCurrentSlide(13)} className="w-full py-3 rounded-xl border border-white/10 hover:bg-white/5 transition-all uppercase text-[10px] font-bold tracking-widest">Nous contacter</button>
            </div>
            <div className="glass p-8 rounded-3xl border-2 border-white relative overflow-hidden scale-105 shadow-2xl bg-white/5 flex flex-col h-full">
              <div className="absolute top-4 right-4 bg-gradient-to-r from-[#0055A4] to-[#EF4135] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">Insigne Tricolore</div>
              <div className="text-sm font-bold text-white uppercase tracking-widest mb-2">Partenaire Argent</div>
              <h3 className="text-4xl font-bold mb-4">1 500 €</h3>
              <ul className="space-y-3 text-sm text-slate-100 mb-8 flex-grow">
                <li className="flex gap-2 font-bold"><Check className="text-[#0055A4] w-4 h-4" /> Pack Bronze inclus</li>
                <li className="flex gap-2"><Check className="text-[#0055A4] w-4 h-4" /> Logo sur la tenue officielle</li>
                <li className="flex gap-2"><Check className="text-[#0055A4] w-4 h-4" /> Branding lors des tournois</li>
              </ul>
              <button onClick={() => setCurrentSlide(13)} className="w-full py-3 rounded-xl bg-white text-black hover:bg-white/90 transition-all uppercase text-[10px] font-bold tracking-widest">Devenir Partenaire</button>
            </div>
            <div className="glass p-8 rounded-3xl border border-[#EF4135]/30 relative overflow-hidden group hover:bg-[#EF4135]/5 transition-all flex flex-col h-full">
              <div className="text-sm font-bold text-[#EF4135] uppercase tracking-widest mb-2">Majeur</div>
              <h3 className="text-3xl font-bold mb-4 text-white">OR / Platine</h3>
              <div className="text-2xl font-bold text-[#EF4135] mb-8">3 000 € +</div>
              <ul className="space-y-3 text-sm text-slate-300 mb-8 flex-grow">
                <li className="flex gap-2 font-bold"><Check className="text-[#EF4135] w-4 h-4" /> Pack Argent inclus</li>
                <li className="flex gap-2"><Check className="text-[#EF4135] w-4 h-4" /> Atelier Corporate (Team building)</li>
                <li className="flex gap-2"><Check className="text-[#EF4135] w-4 h-4" /> Logo Principal (Poitrine)</li>
              </ul>
              <button onClick={() => setCurrentSlide(13)} className="w-full py-3 rounded-xl border border-[#EF4135]/30 hover:bg-[#EF4135]/10 transition-all uppercase text-[10px] font-bold tracking-widest text-[#EF4135]">Discuter du projet</button>
            </div>
          </div>
        </section>
      );
      case 12: return (
        <section className="slide-enter flex flex-col items-center max-w-6xl text-center w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Le Club des Partenaires 2026</h2>
          <div className="tricolore-strip mx-auto mb-12"></div>
          <p className="text-slate-400 mb-12 max-w-2xl mx-auto font-light">Ils ont déjà choisi de porter haut nos couleurs nationales. Pourquoi pas vous ?</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full items-center">
            <div className="glass p-8 rounded-[2rem] flex flex-col items-center justify-center border-t-4 border-[#0055A4] h-48 group hover:scale-105 transition-all">
              <div className="text-xs font-bold text-[#0055A4] uppercase mb-4 tracking-widest">Soutien Local</div>
              <Landmark className="w-12 h-12 text-white/40 mb-2" />
              <p className="font-bold text-sm">Mairie de <br/>La Saulce</p>
            </div>
            <div className="glass p-8 rounded-[2rem] flex flex-col items-center justify-center border-t-4 border-[#EF4135] h-48 group hover:scale-105 transition-all">
              <div className="text-xs font-bold text-[#EF4135] uppercase mb-4 tracking-widest">Organisateur</div>
              <Shield className="w-12 h-12 text-white/40 mb-2" />
              <p className="font-bold text-sm">Comité WNG <br/>Officiel</p>
            </div>
            <div className="glass p-8 rounded-[2rem] flex flex-col items-center justify-center border-dashed border-2 border-white/10 h-48 group cursor-pointer hover:border-gold/30 transition-all" onClick={() => setCurrentSlide(13)}>
              <PlusCircle className="w-10 h-10 text-white/10 group-hover:text-gold transition-colors mb-2" />
              <p className="text-xs uppercase font-bold text-white/20 group-hover:text-gold">Votre Logo <br/>Ici</p>
            </div>
            <div className="glass p-8 rounded-[2rem] flex flex-col items-center justify-center border-dashed border-2 border-white/10 h-48 group cursor-pointer hover:border-gold/30 transition-all" onClick={() => setCurrentSlide(13)}>
              <PlusCircle className="w-10 h-10 text-white/10 group-hover:text-gold transition-colors mb-2" />
              <p className="text-xs uppercase font-bold text-white/20 group-hover:text-gold">Rejoindre le <br/>Club</p>
            </div>
          </div>
          <div className="mt-16 flex justify-center gap-8 opacity-40">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-white"></div>
            <div className="w-2 h-2 rounded-full bg-white"></div>
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-white"></div>
          </div>
        </section>
      );
      case 13: return (
        <section className="slide-enter flex flex-col md:flex-row items-center gap-12 max-w-6xl w-full text-left">
          <div className="flex-1 space-y-8">
            <div className="tricolore-strip mb-4"></div>
            <h2 className="text-5xl font-bold leading-tight">Portons haut <br/><span className="text-[#0055A4]">nos couleurs</span> ensemble.</h2>
            <p className="text-xl text-slate-400 font-light">Rejoignez une aventure humaine, culturelle et sportive sans précédent.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a href="tel:0616080174" className="flex items-center gap-4 glass p-4 rounded-2xl hover:border-[#0055A4] transition-all">
                <div className="w-10 h-10 bg-[#0055A4]/20 rounded-xl flex items-center justify-center">
                  <Phone className="text-[#0055A4] w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 uppercase font-bold">Hélène Mimenza</p>
                  <p className="font-bold text-sm">06 16 08 01 74</p>
                </div>
              </a>
              <a href="tel:0651332209" className="flex items-center gap-4 glass p-4 rounded-2xl hover:border-[#EF4135] transition-all">
                <div className="w-10 h-10 bg-[#EF4135]/20 rounded-xl flex items-center justify-center">
                  <Phone className="text-[#EF4135] w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 uppercase font-bold">Éric Sotoca</p>
                  <p className="font-bold text-sm">06 51 33 22 09</p>
                </div>
              </a>
            </div>
          </div>
          <div className="flex-1 w-full md:w-auto">
            <div className="glass p-8 rounded-[3rem] border-white/20 relative">
              <div className="absolute -top-3 left-8 bg-white text-black text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-tighter">Engagement</div>
              <h3 className="text-2xl font-bold mb-6">Demande de Mécénat</h3>
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Message envoyé ! Notre bureau reprendra contact avec vous.'); }}>
                <input type="text" placeholder="Entreprise / Organisation" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:border-[#0055A4] outline-none transition-all placeholder:text-slate-600" />
                <input type="email" placeholder="Email professionnel" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:border-[#0055A4] outline-none transition-all placeholder:text-slate-600" />
                <textarea rows={3} placeholder="Votre message..." className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:border-[#0055A4] outline-none transition-all placeholder:text-slate-600"></textarea>
                <button className="w-full bg-gradient-to-r from-[#0055A4] to-[#EF4135] py-4 rounded-xl text-white font-black text-lg hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-red-900/20 uppercase tracking-[0.2em]">
                  Valider ma demande
                </button>
              </form>
            </div>
          </div>
        </section>
      );
      default: return null;
    }
  }
};

export default App;