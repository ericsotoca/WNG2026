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
          className={`pointer-events-auto p-3 rounded-full glass hover:bg-white/10 transition-all ${currentSlide === 0 ? 'opacity-0' : 'opacity-100'}`}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <div className="glass px-4 py-2 rounded-full text-xs font-medium tracking-widest text-white/50 uppercase flex items-center gap-3">
          <span>{String(currentSlide + 1).padStart(2, '0')}</span> / <span>{String(totalSlides).padStart(2, '0')}</span>
          <div className="tricolore-strip rounded-full"></div>
        </div>
        <button 
          onClick={nextSlide}
          className="pointer-events-auto p-3 rounded-full bg-[#0055A4] hover:bg-blue-700 text-white transition-all shadow-lg shadow-blue-900/40"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Background Decorative Elements */}
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
          <div className="flex-1 space-y-6 text-left">
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
      case 3: return (
        <section className="slide-enter flex flex-col items-center max-w-5xl text-center">
          <h2 className="text-4xl font-bold mb-12 text-white">Résultats Historiques 2024</h2>
          <div className="w-full relative py-12 px-8 glass rounded-[3rem] border-white/10">
            <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
              <div className="w-32 h-32 rounded-full border-4 border-[#EF4135] p-1 overflow-hidden flex-shrink-0">
                <img src="https://picsum.photos/seed/clara/200" className="w-full h-full object-cover rounded-full" />
              </div>
              <div className="text-left">
                <h3 className="text-3xl font-bold text-white">Clara Sotoca</h3>
                <p className="text-xl font-medium text-[#0055A4] uppercase tracking-widest">5<sup>ème</sup> Place Mondiale en Awalé</p>
                <p className="text-slate-400 mt-2 font-light">Exploit réalisé face à 40 nations à Astana, Kazakhstan.</p>
              </div>
            </div>
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white text-black px-8 py-2 rounded-full text-sm font-black">SÉLECTION OFFICIELLE</div>
          </div>
        </section>
      );
      case 4: return (
        <section className="slide-enter flex flex-col items-center max-w-6xl text-center w-full">
          <h2 className="text-4xl font-bold mb-4 text-white">Ils nous font déjà confiance</h2>
          <div className="tricolore-strip mx-auto mb-12"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
            <div className="glass p-10 rounded-[2.5rem] border-l-8 border-[#0055A4] text-left">
              <Building2 className="text-[#0055A4] w-10 h-10 mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-white">Mairie de La Saulce</h3>
              <p className="text-slate-400 leading-relaxed font-light">Soutien institutionnel historique et base arrière de préparation technique régionale.</p>
            </div>
            <div className="glass p-10 rounded-[2.5rem] border-r-8 border-[#EF4135] text-left">
              <Globe2 className="text-[#EF4135] w-10 h-10 mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-white">WNG Organizers 2026</h3>
              <p className="text-slate-400 leading-relaxed font-light">Reconnaissance par le comité d'organisation international comme délégation officielle française.</p>
            </div>
          </div>
        </section>
      );
      case 5: return (
        <section className="slide-enter flex flex-col items-center max-w-6xl w-full">
          <h2 className="text-4xl font-bold mb-4 text-white">La Délégation 2026</h2>
          <div className="tricolore-strip mx-auto mb-12"></div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 w-full">
            {[
              { n: "Hélène Mimenza", r: "Coach", c: "#0055A4" },
              { n: "Clara Sotoca", r: "Athlète Élite", c: "#FFF" },
              { n: "Bénédicte V.O.", r: "Joueuse", c: "#EF4135" },
              { n: "Colette Gueirard", r: "Joueuse", c: "#0055A4" },
              { n: "Éric Sotoca", r: "Dir. Technique", c: "#EF4135" }
            ].map((m, i) => (
              <div key={i} className="flex flex-col items-center group">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl glass p-1 mb-4 overflow-hidden" style={{borderBottom: `4px solid ${m.c}`}}>
                  <img src={`https://picsum.photos/seed/${m.n}/200`} className="w-full h-full object-cover rounded-xl grayscale group-hover:grayscale-0 transition-all" />
                </div>
                <p className="font-bold text-sm text-white">{m.n}</p>
                <p className="text-[10px] uppercase text-slate-500 font-bold tracking-widest">{m.r}</p>
              </div>
            ))}
          </div>
        </section>
      );
      case 6: return (
        <section className="slide-enter flex flex-col items-center max-w-6xl w-full">
          <h2 className="text-4xl font-bold mb-10 text-white">Les 3 Disciplines Maîtresses</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front glass border-[#0055A4]/30">
                  <LayoutGrid className="w-12 h-12 text-[#0055A4] mb-4" />
                  <h3 className="text-2xl font-bold text-white">Awalé</h3>
                  <p className="text-xs text-slate-400 mt-2 uppercase font-bold">Afrique de l'Ouest</p>
                </div>
                <div className="flip-card-back bg-[#0055A4] rounded-2xl p-6 text-white text-center">
                  <p className="text-sm font-light leading-relaxed">Jeu de stratégie millénaire basé sur le calcul mental et l'anticipation. Notre fer de lance pour 2026.</p>
                </div>
              </div>
            </div>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front glass border-white/30">
                  <Layers className="w-12 h-12 text-white mb-4" />
                  <h3 className="text-2xl font-bold text-white">Togyz Qumalaq</h3>
                  <p className="text-xs text-slate-400 mt-2 uppercase font-bold">Kazakhstan</p>
                </div>
                <div className="flip-card-back bg-slate-200 rounded-2xl p-6 text-black text-center">
                  <p className="text-sm font-light leading-relaxed">Considéré comme l'un des jeux de mancala les plus complexes au monde. Discipline reine des WNG.</p>
                </div>
              </div>
            </div>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front glass border-[#EF4135]/30">
                  <Grid className="w-12 h-12 text-[#EF4135] mb-4" />
                  <h3 className="text-2xl font-bold text-white">Mangala</h3>
                  <p className="text-xs text-slate-400 mt-2 uppercase font-bold">Turquie</p>
                </div>
                <div className="flip-card-back bg-[#EF4135] rounded-2xl p-6 text-white text-center">
                  <p className="text-sm font-light leading-relaxed">Jeu tactique ottoman symbole de sagesse et de partage. Inscrit au patrimoine mondial de l'UNESCO.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
      case 7: return (
        <section className="slide-enter flex flex-col items-center max-w-6xl w-full">
          <h2 className="text-4xl font-bold mb-12 text-white">Nos Objectifs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            <div className="p-8 glass rounded-2xl border-l-4 border-[#0055A4] flex gap-6 text-left">
              <Trophy className="text-[#0055A4] w-10 h-10 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-xl mb-1 text-white">Sportif : Top 10 Mondial</h4>
                <p className="text-sm text-slate-400 font-light">Maintenir la France parmi les nations d'élite en stratégie.</p>
              </div>
            </div>
            <div className="p-8 glass rounded-2xl border-l-4 border-[#EF4135] flex gap-6 text-left">
              <Languages className="text-[#EF4135] w-10 h-10 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-xl mb-1 text-white">Culturel : Rayonnement</h4>
                <p className="text-sm text-slate-400 font-light">Porter les valeurs de la francophonie sur la scène nomade.</p>
              </div>
            </div>
          </div>
        </section>
      );
      case 8: return (
        <section className="slide-enter flex flex-col items-center max-w-6xl w-full">
          <h2 className="text-4xl font-bold mb-12 text-white">Timeline 2025 - 2026</h2>
          <div className="relative w-full py-12">
            <div className="absolute h-1 bg-white/10 w-full top-1/2 left-0 hidden md:block"></div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { t: "2025", s: "Structuration", d: "Ateliers régionaux & PACA" },
                { t: "H1-2026", s: "Excellence", d: "Tournois préparatoires" },
                { t: "Août 26", s: "Activation", d: "Événements de promotion" },
                { t: "Sept 26", s: "WNG 2026", d: "Compétition au Kirghizistan" }
              ].map((s, i) => (
                <div key={i} className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-[#0055A4] rounded-full flex items-center justify-center mb-4 text-xs font-bold shadow-lg shadow-blue-900/40">{s.t}</div>
                  <h4 className="font-bold text-white mb-1">{s.s}</h4>
                  <p className="text-xs text-slate-500">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
      case 9: return (
        <section className="slide-enter flex flex-col items-center max-w-6xl w-full">
          <h2 className="text-4xl font-bold mb-8 text-white">Budget Global : 5 640 €</h2>
          <div className="w-full max-w-3xl glass p-10 rounded-[2.5rem] border-l-8 border-[#0055A4] text-left">
            <div className="flex justify-between items-end mb-4">
              <p className="text-5xl font-bold text-white">À lever : 4 100 €</p>
              <div className="text-right">
                <p className="text-xs uppercase text-slate-500 mb-1 tracking-widest">Partenaires</p>
                <p className="text-2xl font-bold text-[#EF4135]">73% requis</p>
              </div>
            </div>
            <div className="h-4 bg-white/5 rounded-full overflow-hidden flex border border-white/10">
              <div className="h-full bg-[#0055A4] w-[27%]"></div>
              <div className="h-full bg-[#EF4135]/40 w-[73%]"></div>
            </div>
            <p className="mt-6 text-slate-400 font-light leading-relaxed">
              Ce budget couvre le transport aérien (Gap/Marseille -> Manas), l'équipement tricolore officiel et la logistique technique de l'équipe sur place.
            </p>
          </div>
        </section>
      );
      case 10: return (
        <section className="slide-enter flex flex-col items-center max-w-6xl text-center w-full">
          <h2 className="text-4xl font-bold mb-12 text-white">Pourquoi nous soutenir ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full">
            {[
              { i: Eye, t: "Visibilité", d: "Audience mondiale de 50M+." },
              { i: HandMetal, t: "Prestige", d: "Valeurs d'excellence et de stratégie." },
              { i: MapPinned, t: "Ancrage", d: "Rayonnement en région PACA." },
              { i: Users2, t: "Impact RSE", d: "Patrimoine culturel mondial." }
            ].map((p, i) => (
              <div key={i} className="glass p-8 rounded-2xl border-b-4 border-white/10 group hover:border-[#0055A4] transition-all">
                <p.i className="w-10 h-10 mx-auto mb-4 text-[#0055A4]" />
                <h4 className="font-bold text-white mb-2">{p.t}</h4>
                <p className="text-xs text-slate-500">{p.d}</p>
              </div>
            ))}
          </div>
        </section>
      );
      case 11: return (
        <section className="slide-enter flex flex-col items-center max-w-6xl w-full">
          <h2 className="text-4xl font-bold mb-10 text-white">Packs Sponsor</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full text-center">
            <div className="glass p-8 rounded-3xl border border-white/10 flex flex-col h-full">
              <h3 className="text-2xl font-bold mb-4 text-white">Bronze : 500 €</h3>
              <ul className="text-sm text-slate-400 space-y-3 mb-8 flex-grow">
                <li className="flex gap-2"><Check className="w-4 h-4 text-[#0055A4]" /> Logo sur site web</li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-[#0055A4]" /> Réseaux sociaux</li>
              </ul>
              <div className="text-[10px] uppercase font-bold tracking-widest text-[#0055A4]">Soutien Territorial</div>
            </div>
            <div className="glass p-8 rounded-3xl border-2 border-white scale-105 shadow-2xl flex flex-col h-full">
              <h3 className="text-2xl font-bold mb-4 text-white">Argent : 1 500 €</h3>
              <ul className="text-sm text-slate-300 space-y-3 mb-8 flex-grow">
                <li className="flex gap-2 font-bold"><Check className="w-4 h-4 text-[#0055A4]" /> Logo sur tenue officielle</li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-[#0055A4]" /> Branding compétitions</li>
              </ul>
              <div className="text-[10px] uppercase font-bold tracking-widest text-white">Partenaire Élite</div>
            </div>
            <div className="glass p-8 rounded-3xl border border-[#EF4135]/30 flex flex-col h-full">
              <h3 className="text-2xl font-bold mb-4 text-white">Or : 3 000 €+</h3>
              <ul className="text-sm text-slate-400 space-y-3 mb-8 flex-grow">
                <li className="flex gap-2 font-bold"><Check className="w-4 h-4 text-[#EF4135]" /> Partenaire Majeur</li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-[#EF4135]" /> Team Building Awalé</li>
              </ul>
              <div className="text-[10px] uppercase font-bold tracking-widest text-[#EF4135]">Partenaire Historique</div>
            </div>
          </div>
        </section>
      );
      case 12: return (
        <section className="slide-enter flex flex-col items-center max-w-6xl text-center w-full">
          <h2 className="text-4xl font-bold mb-12 text-white">Le Club des Partenaires</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="glass p-10 rounded-2xl w-56 border-t-4 border-[#0055A4] flex flex-col items-center">
              <Landmark className="w-12 h-12 text-white/30 mb-4" />
              <p className="font-bold text-white text-sm">Mairie de <br/>La Saulce</p>
            </div>
            <div className="glass p-10 rounded-2xl w-56 border-t-4 border-[#EF4135] flex flex-col items-center">
              <Shield className="w-12 h-12 text-white/30 mb-4" />
              <p className="font-bold text-white text-sm">Comité WNG <br/>International</p>
            </div>
            <div className="glass p-10 rounded-2xl w-56 border-dashed border-2 border-white/10 flex flex-col items-center opacity-50">
              <PlusCircle className="w-12 h-12 text-white/10 mb-4" />
              <p className="font-bold text-white/30 text-xs uppercase tracking-widest">Votre Logo <br/>Ici</p>
            </div>
          </div>
        </section>
      );
      case 13: return (
        <section className="slide-enter flex flex-col md:flex-row items-center gap-12 max-w-6xl w-full text-left">
          <div className="flex-1 space-y-6">
            <h2 className="text-5xl font-bold leading-tight text-white">Portons haut <span className="text-[#0055A4]">nos couleurs</span> ensemble.</h2>
            <p className="text-xl text-slate-400 font-light italic">« L'aventure commence ici, au cœur des Alpes, pour briller en Asie Centrale. »</p>
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glass p-4 rounded-xl flex items-center gap-4">
                <Phone className="text-[#0055A4] w-5 h-5" />
                <p className="text-sm font-bold">06 16 08 01 74</p>
              </div>
              <div className="glass p-4 rounded-xl flex items-center gap-4">
                <Globe className="text-[#EF4135] w-5 h-5" />
                <p className="text-sm font-bold">contact@wng-france.fr</p>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full glass p-8 rounded-[2rem] border-white/20 text-white">
            <h3 className="text-2xl font-bold mb-6">Demande de Mécénat</h3>
            <form className="space-y-4" onSubmit={e => {e.preventDefault(); alert("Demande enregistrée. Nous vous recontacterons sous 48h.");}}>
              <input type="text" placeholder="Organisation / Entreprise" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 outline-none focus:border-[#0055A4] transition-all" required />
              <input type="email" placeholder="Email professionnel" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 outline-none focus:border-[#0055A4] transition-all" required />
              <button className="w-full bg-gradient-to-r from-[#0055A4] to-[#EF4135] py-4 rounded-xl text-white font-black uppercase tracking-widest shadow-xl hover:scale-[1.02] transition-transform">Valider</button>
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