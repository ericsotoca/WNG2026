import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { createRoot } from 'react-dom/client';
import { 
  ChevronRight, ChevronLeft, MapPin, Award, Globe, Users, Tv, Check, 
  Building2, Globe2, Trophy, Languages, GraduationCap, Flag, Flame, 
  ShieldCheck, ArrowRight, Eye, HandMetal, MapPinned, Users2, PlusCircle, 
  Landmark, Shield, Phone, LayoutGrid, Layers, Grid, Sparkles, Zap, 
  History, Target, PlayCircle, ExternalLink, RefreshCw, Play, Quote
} from 'lucide-react';

const VideoPlayer: React.FC = () => {
  const videoId = "iN7yDLqXqdQ";
  const youtubeUrl = `https://www.youtube.com/watch?v=${videoId}`;
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <section className="slide-enter flex flex-col items-center max-w-5xl w-full text-center">
      <div className="flex items-center gap-3 mb-6 text-[#D4AF37] font-black tracking-[0.3em] uppercase text-xs">
        <Tv className="w-6 h-6 animate-pulse" />
        <span>Reportage Vidéo</span>
      </div>
      
      <h2 className="text-4xl md:text-5xl font-black mb-10 text-white uppercase italic tracking-tighter leading-none">
         L'atmosphère des Jeux <br/><span className="text-[#D4AF37]">en haute définition</span>
      </h2>

      <div className="w-full flex flex-col items-center gap-12">
        <a 
          href={youtubeUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="group relative block w-full glass p-2 rounded-[2.5rem] border-[#D4AF37]/30 border shadow-[0_0_100px_rgba(212,175,55,0.15)] overflow-hidden transition-all hover:scale-[1.01]"
        >
          <div className="aspect-video overflow-hidden rounded-[1.8rem] relative">
            <img 
              src={thumbnailUrl} 
              alt="Miniature Vidéo" 
              className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/20 group-hover:bg-[#EF4135] group-hover:border-[#EF4135] transition-all duration-500 shadow-2xl">
                <Play className="w-10 h-10 text-white fill-current ml-1" />
              </div>
            </div>

            <div className="absolute bottom-8 left-10 text-left">
              <p className="text-white font-black text-sm uppercase tracking-[0.3em]">Astana • 2024</p>
              <p className="text-white/60 text-xs uppercase font-bold tracking-widest mt-1">Délégation France</p>
            </div>
          </div>
        </a>

        <div className="flex flex-col md:flex-row gap-6 items-center">
          <a 
            href={youtubeUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center gap-6 bg-[#EF4135] px-12 py-6 rounded-full border border-white/10 hover:bg-[#D32F2F] transition-all shadow-2xl shadow-red-900/40 transform active:scale-95"
          >
            <PlayCircle className="w-8 h-8 text-white" />
            <span className="text-white font-black text-xl uppercase tracking-tighter">Regarder sur YouTube</span>
            <ExternalLink className="w-5 h-5 text-white/50 group-hover:text-white transition-colors" />
          </a>
          <div className="flex items-center gap-4 opacity-50">
            <div className="tricolore-strip w-8 h-0.5"></div>
            <p className="text-[10px] text-white uppercase font-black tracking-widest">Plein Écran Garanti</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 16;

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

  const progress = useMemo(() => ((currentSlide + 1) / totalSlides) * 100, [currentSlide, totalSlides]);

  const renderSlide = (index: number) => {
    switch(index) {
      case 0: return (
        <section className="slide-enter flex flex-col items-center text-center max-w-5xl">
          <div className="flex items-center gap-2 mb-4 text-[#D4AF37] font-bold tracking-widest uppercase text-sm">
            <Sparkles className="w-4 h-4" />
            <span>L'Excellence Française en Terre Nomade</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight tracking-tight text-white">
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
              <div className="text-left text-white">
                <p className="text-xs uppercase text-slate-500">Destination</p>
                <p className="font-bold">Kirghizistan</p>
              </div>
            </div>
            <div className="glass p-6 rounded-2xl flex items-center gap-4 border-l-4 border-[#D4AF37]">
              <Flame className="text-[#D4AF37]" />
              <div className="text-left text-white">
                <p className="text-xs uppercase text-slate-500">Esprit</p>
                <p className="font-bold">Culture & Compétition</p>
              </div>
            </div>
          </div>
        </section>
      );
      case 1: return (
        <section className="slide-enter flex flex-col items-center text-center max-w-6xl w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white uppercase tracking-tighter">Un Événement Mondial</h2>
          <div className="tricolore-strip mx-auto mb-12"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            <div className="glass p-8 rounded-3xl border-t-4 border-[#0055A4] group hover:bg-white/5 transition-all">
              <Globe className="text-[#0055A4] w-12 h-12 mx-auto mb-6" />
              <div className="text-5xl font-black text-white mb-2">89</div>
              <p className="text-slate-400 font-medium uppercase text-xs tracking-widest">Nations représentées</p>
            </div>
            <div className="glass p-8 rounded-3xl border-t-4 border-white/40 group hover:bg-white/5 transition-all scale-105 bg-white/5">
              <Zap className="text-[#D4AF37] w-12 h-12 mx-auto mb-6" />
              <div className="text-5xl font-black text-white mb-2">50M+</div>
              <p className="text-slate-400 font-medium uppercase text-xs tracking-widest">Audience Cumulée</p>
            </div>
            <div className="glass p-8 rounded-3xl border-t-4 border-[#EF4135] group hover:bg-white/5 transition-all">
              <Users className="text-[#EF4135] w-12 h-12 mx-auto mb-6" />
              <div className="text-5xl font-black text-white mb-2">2500</div>
              <p className="text-slate-400 font-medium uppercase text-xs tracking-widest">Athlètes d'élite</p>
            </div>
          </div>
        </section>
      );
      case 2: return (
        <section className="slide-enter flex flex-col md:flex-row items-center gap-12 max-w-6xl w-full text-left">
          <div className="flex-1 space-y-6">
            <h2 className="text-4xl font-bold text-white uppercase italic tracking-tighter">Immersion Culturelle</h2>
            <p className="text-lg text-slate-300 leading-relaxed border-l-4 border-[#D4AF37] pl-6 font-light">
              Les World Nomad Games fusionnent la compétition sportive et l'Ethno-Village : un carrefour vibrant de 200 yourtes, d'artisanat et de traditions millénaires.
            </p>
            <div className="flex items-center gap-4">
               <History className="text-[#0055A4]" />
               <p className="text-sm text-slate-400">Patrimoine Mondial de l'UNESCO</p>
            </div>
          </div>
          <div className="flex-1">
             <img src="https://images.unsplash.com/photo-1540963168233-a80082f42079?auto=format&fit=crop&q=80&w=800" className="rounded-[2rem] glass p-2 grayscale hover:grayscale-0 transition-all duration-700 w-full" alt="Culture" />
          </div>
        </section>
      );
      case 3: return (
        <section className="slide-enter flex flex-col items-center max-w-6xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full items-stretch">
            {/* Texte à gauche (2/3 colonnes logiques) */}
            <div className="lg:col-span-8 flex flex-col justify-center text-left space-y-10">
              <div>
                <div className="flex items-center gap-3 mb-4 text-[#D4AF37] font-black tracking-[0.3em] uppercase text-xs">
                  <Quote className="w-5 h-5" />
                  <span>La Voix de la Présidente</span>
                </div>
                <h2 className="text-5xl md:text-6xl font-black text-white leading-none uppercase italic tracking-tighter">
                  Une Vision pour <br/><span className="text-[#D4AF37]">la France</span>
                </h2>
              </div>
              
              <div className="glass p-8 md:p-12 rounded-[3rem] border-[#D4AF37]/20 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                  <Quote className="w-24 h-24 text-white" />
                </div>
                <p className="text-2xl md:text-3xl text-white italic font-light leading-relaxed relative z-10">
                  « Porter le drapeau français lors de cet événement mondial, c'est affirmer notre attachement à la diversité culturelle et à l'excellence stratégique. »
                </p>
                <div className="mt-10 flex flex-col items-start relative z-10">
                  <div className="tricolore-strip mb-4 w-24"></div>
                  <p className="font-black text-[#D4AF37] uppercase tracking-widest text-lg">Hélène Mimenza</p>
                  <p className="text-slate-500 text-xs uppercase font-black mt-1 tracking-widest">Présidente Jeux Nomades France</p>
                </div>
              </div>

              <div className="flex gap-4">
                 <div className="px-6 py-3 glass rounded-full flex items-center gap-3 border-[#0055A4]/30">
                    <Check className="text-[#0055A4] w-4 h-4" />
                    <span className="text-[10px] uppercase font-black text-slate-400">Patrimoine UNESCO</span>
                 </div>
                 <div className="px-6 py-3 glass rounded-full flex items-center gap-3 border-[#EF4135]/30">
                    <Check className="text-[#EF4135] w-4 h-4" />
                    <span className="text-[10px] uppercase font-black text-slate-400">Ambition Mondiale</span>
                 </div>
              </div>
            </div>

            {/* Photo à droite (1/3 colonne logique) en hauteur */}
            <div className="lg:col-span-4 relative group rounded-[3rem] overflow-hidden glass p-2 border-white/10">
              <div className="w-full h-full min-h-[500px] overflow-hidden rounded-[2.5rem] relative bg-white/5">
                <img 
                  src="https://image.jimcdn.com/cdn-cgi/image/width=186%2Cheight=1024%2Cfit=contain%2Cformat=jpg%2C/app/cms/storage/image/path/sb3e54bbe27069320/image/i7f88ff879ac2f804/version/1771070643/image.jpg" 
                  alt="Hélène Mimenza - Portrait" 
                  className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-8 left-0 w-full text-center">
                   <p className="text-white/40 text-[9px] font-black uppercase tracking-[0.4em]">Excellence • Tradition • Avenir</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
      case 4: return (
        <section className="slide-enter flex flex-col items-center max-w-6xl w-full text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-8 text-white uppercase italic tracking-tighter">
            Résultats <span className="text-[#D4AF37]">Historiques 2024</span>
          </h2>
          
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Image de presse immersive */}
            <div className="lg:col-span-8 relative group overflow-hidden rounded-[2.5rem] glass p-2 border-[#D4AF37]/20 border">
              <div className="w-full h-full overflow-hidden rounded-[2.2rem] relative bg-white/5">
                <img 
                  src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXeC2JDBmioqG3ZQAnWBQvY-m9DRJ2_2hsGneA1SNwgny551XeauuxCkoJu2nKDMCNAjxDan4CTnxYf_2bxf3N0UYpnHPjOw0dtsFj252gcQiPkMz5aI1NemiXrQozwG8ptYPP72CdswPaOgr4SgNysTnS4?key=4Mj4bJk_67OZUgFqKr5Mhw" 
                  alt="Délégation France Press" 
                  className="w-full h-full object-contain grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/80 via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-6 left-8 right-8 text-left">
                  <div className="tricolore-strip mb-3"></div>
                  <h3 className="text-xl font-black text-white uppercase italic tracking-tighter">Une Synergie Historique</h3>
                  <p className="text-white/60 text-[10px] font-bold uppercase tracking-[0.2em] mt-1">Délégation Officielle France • World Nomad Games</p>
                </div>
              </div>
            </div>

            {/* Détails du palmarès */}
            <div className="lg:col-span-4 flex flex-col gap-6 text-left">
              <div className="glass p-6 rounded-[2rem] border-t-4 border-[#D4AF37] flex-grow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full border-2 border-[#D4AF37] p-0.5 overflow-hidden">
                    <img src="https://picsum.photos/seed/clara/100" className="w-full h-full object-cover rounded-full" />
                  </div>
                  <div>
                    <h4 className="font-black text-white text-lg leading-tight">Clara Sotoca</h4>
                    <p className="text-[#D4AF37] text-[10px] font-black uppercase">5<sup>ème</sup> Place Mondiale</p>
                  </div>
                </div>
                <p className="text-slate-400 text-xs font-light leading-relaxed">
                  Exploit réalisé à Astana face à l'élite mondiale de l'Awalé. Performance historique pour une délégation française.
                </p>
              </div>

              <div className="glass p-6 rounded-[2rem] border-t-4 border-[#0055A4] flex-grow">
                <h4 className="font-black text-white text-sm uppercase mb-2">Éric Sotoca</h4>
                <div className="flex justify-between items-baseline mb-2">
                  <p className="text-[#0055A4] text-xs font-black uppercase">22<sup>ème</sup> Mondial</p>
                  <p className="text-slate-500 text-[10px] font-bold">Top Européen</p>
                </div>
                <p className="text-slate-400 text-xs font-light leading-relaxed">
                  Confirmation du rang de la France au sommet de la compétition internationale.
                </p>
              </div>

              <div className="glass p-4 rounded-[2rem] border-t-4 border-[#EF4135] bg-white/5">
                <div className="flex items-center gap-3">
                  <Tv className="w-5 h-5 text-[#EF4135]" />
                  <div>
                    <p className="text-white text-[10px] font-black uppercase">Impact Médias</p>
                    <p className="text-slate-500 text-[9px] font-bold">BFM DICI • Presse Régionale</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
      case 5: return (
        <section className="slide-enter flex flex-col items-center max-w-6xl w-full text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-12 text-white uppercase italic tracking-tighter">
            Ils nous <span className="text-[#D4AF37]">soutiennent</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
            <div className="glass p-10 rounded-[2.5rem] border-l-8 border-[#0055A4] text-left group hover:bg-white/5 transition-all">
              <Building2 className="text-[#0055A4] w-12 h-12 mb-6" />
              <h3 className="text-2xl font-black text-white mb-2 uppercase italic tracking-tighter">Mairie de La Saulce</h3>
              <p className="text-slate-400 font-light leading-relaxed">
                Base arrière stratégique de préparation technique et soutien institutionnel historique de notre délégation en région PACA.
              </p>
            </div>
            <div className="glass p-10 rounded-[2.5rem] border-r-8 border-[#EF4135] text-left group hover:bg-white/5 transition-all">
              <Globe2 className="text-[#EF4135] w-12 h-12 mb-6" />
              <h3 className="text-2xl font-black text-white mb-2 uppercase italic tracking-tighter">Comité WNG 2026</h3>
              <p className="text-slate-400 font-light leading-relaxed">
                Reconnaissance internationale comme unique structure officielle représentant les couleurs de la France lors de la compétition.
              </p>
            </div>
          </div>
          <div className="mt-12 flex justify-center">
            <button 
              onClick={() => setCurrentSlide(14)}
              className="group flex items-center gap-4 px-8 py-4 border-2 border-dashed border-white/10 rounded-full hover:border-[#D4AF37]/40 transition-all"
            >
              <PlusCircle className="w-6 h-6 text-white group-hover:text-[#D4AF37]" />
              <span className="text-xs uppercase font-black tracking-[0.3em] text-white/50 group-hover:text-white">Devenir Partenaire</span>
            </button>
          </div>
        </section>
      );
      case 6: return (
        <section className="slide-enter flex flex-col items-center max-w-6xl w-full">
          <h2 className="text-4xl font-bold mb-12 text-white uppercase tracking-tighter">La Délégation 2026</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 w-full">
            {[
              { name: "Hélène Mimenza", role: "Coach & Joueuse", c: "#0055A4", id: "h1" },
              { name: "Clara Sotoca", role: "Joueuse Élite", c: "#D4AF37", id: "h2" },
              { name: "Bénédicte V.O.", role: "Joueuse", c: "#EF4135", id: "h3" },
              { name: "Colette Gueirard", role: "Joueuse", c: "#0055A4", id: "h4" },
              { name: "Éric Sotoca", role: "Dir. Technique", c: "#EF4135", id: "h5" }
            ].map((m, i) => (
              <div key={i} className="flex flex-col items-center group">
                <div className={`w-28 h-28 md:w-36 md:h-36 rounded-2xl glass p-1 mb-4 border-b-4 transition-all group-hover:scale-105`} style={{borderColor: m.c}}>
                  <img src={`https://picsum.photos/seed/${m.id}/300`} className="w-full h-full object-cover rounded-xl grayscale group-hover:grayscale-0 transition-all" alt={m.name} />
                </div>
                <p className="font-bold text-sm text-white">{m.name}</p>
                <p className={`text-[10px] uppercase font-black tracking-widest mt-1 opacity-60`} style={{color: m.c}}>{m.role}</p>
              </div>
            ))}
          </div>
        </section>
      );
      case 7: return (
        <section className="slide-enter flex flex-col items-center max-w-6xl w-full">
          <h2 className="text-4xl font-bold mb-12 text-white uppercase italic tracking-tighter">Les 3 Disciplines Maîtresses</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front glass border-[#0055A4]/30 overflow-hidden flex flex-col">
                  <div className="flex-grow flex items-center justify-center p-4">
                    <img 
                      src="https://image.jimcdn.com/cdn-cgi/image/width=305%2Cheight=10000%2Cfit=contain%2Cformat=jpg%2C/app/cms/storage/image/path/sb3e54bbe27069320/image/i39f5f589a56e954a/version/1726758240/image.jpg" 
                      className="max-w-full max-h-[180px] object-contain rounded-lg shadow-xl" 
                      alt="Awalé" 
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-6 uppercase italic">Awalé</h3>
                </div>
                <div className="flip-card-back bg-[#0055A4] text-white p-8">
                  <h4 className="font-bold mb-3 uppercase tracking-widest">Le jeu des semailles</h4>
                  <p className="text-sm leading-relaxed font-light">Stratégie millénaire d'origine africaine. Demande un calcul mental rapide et une vision tactique à long terme. Clara Sotoca y brille au niveau mondial.</p>
                </div>
              </div>
            </div>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front glass border-[#D4AF37]/30 overflow-hidden flex flex-col">
                  <div className="flex-grow flex items-center justify-center p-4">
                    <img 
                      src="https://image.jimcdn.com/cdn-cgi/image/width=287%2Cheight=10000%2Cfit=contain%2Cformat=jpg%2C/app/cms/storage/image/path/sb3e54bbe27069320/image/i0ddc98f4df305c1c/version/1726758236/image.jpg" 
                      className="max-w-full max-h-[180px] object-contain rounded-lg shadow-xl" 
                      alt="Togyz Qumalaq" 
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-6 uppercase italic">Togyz Qumalaq</h3>
                </div>
                <div className="flip-card-back bg-[#D4AF37] text-black p-8">
                  <h4 className="font-bold mb-3 uppercase tracking-widest text-black/80">Les 9 billes</h4>
                  <p className="text-sm leading-relaxed font-medium">Jeu mathématique royal du Kazakhstan. Considéré comme l'un des mancalas les plus complexes au monde, véritable épreuve pour l'intellect.</p>
                </div>
              </div>
            </div>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front glass border-[#EF4135]/30 overflow-hidden flex flex-col">
                  <div className="flex-grow flex items-center justify-center p-4">
                    <img 
                      src="https://image.jimcdn.com/cdn-cgi/image/width=259%2Cheight=10000%2Cfit=contain%2Cformat=png%2C/app/cms/storage/image/path/sb3e54bbe27069320/image/i0bc3a07451d7b742/version/1732526950/image.png" 
                      className="max-w-full max-h-[180px] object-contain rounded-lg shadow-xl" 
                      alt="Mangala" 
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-6 uppercase italic">Mangala</h3>
                </div>
                <div className="flip-card-back bg-[#EF4135] text-white p-8">
                  <h4 className="font-bold mb-3 uppercase tracking-widest">Héritage Ottoman</h4>
                  <p className="text-sm leading-relaxed font-light">Inscrit au patrimoine mondial de l'UNESCO. Symbole de sagesse et de partage, ce jeu tactique turc favorise la réflexion croisée.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
      case 8: return (
        <section className="slide-enter flex flex-col items-center max-w-5xl w-full text-left">
           <h2 className="text-4xl font-bold mb-12 text-white text-center uppercase italic tracking-tighter">Objectifs 2026</h2>
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
      case 9: return (
        <section className="slide-enter flex flex-col items-center max-w-5xl w-full text-center">
          <h2 className="text-4xl font-bold mb-12 text-white uppercase italic tracking-tighter">Calendrier Opérationnel</h2>
          <div className="relative w-full py-8 grid grid-cols-1 md:grid-cols-4 gap-8">
             {[
               { date: "2025", label: "Préparation", desc: "Entraînements intensifs et ateliers PACA." },
               { date: "H1 2026", label: "Excellence", desc: "Tournois préparatoires internationaux." },
               { date: "Été 2026", label: "Activation", desc: "Démonstrations publiques tricolores." },
               { date: "Sept 2026", label: "Kirghizistan", desc: "World Nomad Games - La Compétition." }
             ].map((s, i) => (
               <div key={i} className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full glass border border-white/20 flex items-center justify-center font-black text-xs text-[#D4AF37] mb-4">{s.date}</div>
                  <h4 className="font-bold text-white text-sm mb-1 uppercase tracking-widest">{s.label}</h4>
                  <p className="text-[10px] text-slate-500 font-medium px-4">{s.desc}</p>
               </div>
             ))}
          </div>
        </section>
      );
      case 10: return (
        <section className="slide-enter flex flex-col items-center max-w-5xl w-full">
           <h2 className="text-4xl font-bold mb-10 text-white uppercase italic tracking-tighter">Budget & Investissement</h2>
           <div className="w-full glass p-10 rounded-[3rem] grid grid-cols-1 md:grid-cols-2 gap-12 text-left items-center">
              <div>
                 <div className="mb-6">
                    <p className="text-xs uppercase text-slate-500 font-black tracking-[0.2em] mb-1">Besoin Global</p>
                    <p className="text-6xl font-black text-white">5 640 <span className="text-2xl">€</span></p>
                 </div>
                 <div className="space-y-3">
                    <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-slate-400"><span>Transport Aérien</span><span>2 500 €</span></div>
                    <div className="h-2 bg-white/5 rounded-full"><div className="h-full bg-[#0055A4] rounded-full w-[44%]"></div></div>
                    <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-slate-400"><span>Logistique & Vie</span><span>1 500 €</span></div>
                    <div className="h-2 bg-white/5 rounded-full"><div className="h-full bg-[#EF4135] rounded-full w-[26%]"></div></div>
                 </div>
              </div>
              <div className="space-y-6">
                 <h4 className="text-xl font-bold text-[#D4AF37] italic uppercase">Une opportunité RSE forte</h4>
                 <p className="text-slate-400 text-sm leading-relaxed font-light">Soutenir Jeux Nomades France, c'est investir dans un projet à haute valeur culturelle, humaine et éducative avec une visibilité mondiale unique.</p>
                 <div className="inline-flex gap-4 items-center px-6 py-3 bg-white/5 rounded-full text-[10px] font-black uppercase text-white tracking-[0.3em]">
                    <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                    Transparence Totale
                 </div>
              </div>
           </div>
        </section>
      );
      case 11: return (
        <section className="slide-enter flex flex-col items-center max-w-6xl w-full text-center">
          <h2 className="text-4xl font-bold mb-12 text-white uppercase italic tracking-tighter">Pourquoi nous rejoindre ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full">
            {[
              { icon: Eye, title: "Visibilité", desc: "Audience internationale de 50 millions de personnes." },
              { icon: Award, title: "Prestige", desc: "Associez votre marque à l'excellence et l'histoire." },
              { icon: MapPinned, title: "Territoire", desc: "Rayonnement fort en région PACA et Hautes-Alpes." },
              { icon: Users2, title: "Impact", desc: "Soutien à la diversité et au patrimoine de l'UNESCO." }
            ].map((item, i) => (
              <div key={i} className="glass p-6 rounded-2xl group hover:bg-white/5 transition-all">
                 <item.icon className="w-10 h-10 text-[#D4AF37] mx-auto mb-4" />
                 <h4 className="text-lg font-bold text-white mb-2 uppercase italic">{item.title}</h4>
                 <p className="text-[10px] text-slate-500 leading-relaxed font-black uppercase tracking-widest">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      );
      case 12: return (
        <section className="slide-enter flex flex-col items-center max-w-6xl w-full">
          <h2 className="text-4xl font-bold mb-12 text-white uppercase italic tracking-tighter">Offres de Partenariat</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full text-left">
            <div className="glass p-8 rounded-3xl flex flex-col h-full border border-white/10">
               <h3 className="text-xl font-black text-slate-400 uppercase mb-2 tracking-widest">Bronze</h3>
               <p className="text-4xl font-black text-white mb-8">500 €</p>
               <ul className="text-xs space-y-4 text-slate-400 mb-10 flex-grow">
                 <li className="flex gap-3"><Check className="text-[#0055A4]" /> Logo sur site web officiel</li>
                 <li className="flex gap-3"><Check className="text-[#0055A4]" /> Mentions réseaux sociaux</li>
                 <li className="flex gap-3"><Check className="text-[#0055A4]" /> Certificat de Mécénat</li>
               </ul>
               <button onClick={() => setCurrentSlide(14)} className="w-full py-3 rounded-xl border border-white/10 hover:bg-white/5 uppercase text-[10px] font-black tracking-widest">Choisir</button>
            </div>
            <div className="glass p-8 rounded-3xl flex flex-col h-full border-2 border-[#D4AF37] scale-105 bg-white/5 shadow-2xl">
               <div className="bg-[#D4AF37] text-black text-[10px] font-black px-4 py-1 rounded-full w-fit mb-4 uppercase tracking-tighter">Le plus populaire</div>
               <h3 className="text-xl font-black text-white uppercase mb-2 tracking-widest">Argent</h3>
               <p className="text-4xl font-black text-white mb-8">1 500 €</p>
               <ul className="text-xs space-y-4 text-white/80 mb-10 flex-grow">
                 <li className="flex gap-3"><Check className="text-[#D4AF37]" /> Pack Bronze Inclus</li>
                 <li className="flex gap-3"><Check className="text-[#D4AF37]" /> Logo sur la Tenue Officielle</li>
                 <li className="flex gap-3"><Check className="text-[#D4AF37]" /> Branding lors des tournois</li>
               </ul>
               <button onClick={() => setCurrentSlide(14)} className="w-full py-3 rounded-xl bg-[#D4AF37] text-black uppercase text-[10px] font-black tracking-widest hover:scale-105 transition-transform">Devenir Partenaire</button>
            </div>
            <div className="glass p-8 rounded-3xl flex flex-col h-full border border-white/5">
               <h3 className="text-xl font-black text-[#EF4135] uppercase mb-2 tracking-widest">Or / Platine</h3>
               <p className="text-4xl font-black text-white mb-8">3 000 € +</p>
               <ul className="text-xs space-y-4 text-slate-400 mb-10 flex-grow">
                 <li className="flex gap-3"><Check className="text-[#EF4135]" /> Pack Argent Inclus</li>
                 <li className="flex gap-3"><Check className="text-[#EF4135]" /> Atelier Team Building Offert</li>
                 <li className="flex gap-3"><Check className="text-[#EF4135]" /> Logo Principal (Cœur)</li>
               </ul>
               <button onClick={() => setCurrentSlide(14)} className="w-full py-3 rounded-xl border border-[#EF4135] text-[#EF4135] uppercase text-[10px] font-black tracking-widest hover:bg-[#EF4135]/10">Contact direct</button>
            </div>
          </div>
        </section>
      );
      case 13: return (
        <section className="slide-enter flex flex-col items-center max-w-6xl w-full text-center">
          <h2 className="text-4xl font-bold mb-4 text-white uppercase italic tracking-tighter">Le Club des Partenaires</h2>
          <div className="tricolore-strip mx-auto mb-12"></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full text-left">
            <div className="glass p-8 rounded-[2rem] flex flex-col items-center justify-center border-t-4 border-[#0055A4] h-48 group hover:scale-105 transition-all">
              <div className="text-xs font-bold text-[#0055A4] uppercase mb-4 tracking-widest">Soutien Local</div>
              <Landmark className="w-12 h-12 text-white/40 mb-2" />
              <p className="font-bold text-sm text-center">Mairie de <br/>La Saulce</p>
            </div>
            <div className="glass p-8 rounded-[2rem] flex flex-col items-center justify-center border-t-4 border-[#EF4135] h-48 group hover:scale-105 transition-all">
              <div className="text-xs font-bold text-[#EF4135] uppercase mb-4 tracking-widest">Organisateur</div>
              <Shield className="w-12 h-12 text-white/40 mb-2" />
              <p className="font-bold text-sm text-center">Comité WNG <br/>Officiel</p>
            </div>
            <div className="glass p-8 rounded-[2rem] flex flex-col items-center justify-center border-dashed border-2 border-white/10 h-48 group cursor-pointer hover:border-[#D4AF37]/30 transition-all" onClick={() => setCurrentSlide(14)}>
              <PlusCircle className="w-10 h-10 text-white/10 group-hover:text-[#D4AF37] transition-colors mb-2" />
              <p className="text-xs uppercase font-bold text-white/20 group-hover:text-[#D4AF37] text-center">Votre Logo <br/>Ici</p>
            </div>
            <div className="glass p-8 rounded-[2rem] flex flex-col items-center justify-center border-dashed border-2 border-white/10 h-48 group cursor-pointer hover:border-[#D4AF37]/30 transition-all" onClick={() => setCurrentSlide(14)}>
              <PlusCircle className="w-10 h-10 text-white/10 group-hover:text-[#D4AF37] transition-colors mb-2" />
              <p className="text-xs uppercase font-bold text-white/20 group-hover:text-[#D4AF37] text-center">Rejoindre le <br/>Club</p>
            </div>
          </div>
        </section>
      );
      case 14: return (
        <section className="slide-enter flex flex-col md:flex-row items-center gap-12 max-w-6xl w-full text-left">
          <div className="flex-1 space-y-8 text-left">
            <div className="tricolore-strip mb-4"></div>
            <h2 className="text-5xl font-black text-white leading-tight uppercase italic tracking-tighter">Écrivons l'histoire <br/><span className="text-[#D4AF37]">ensemble.</span></h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a href="tel:0616080174" className="flex items-center gap-4 glass p-4 rounded-2xl hover:border-[#0055A4] transition-all">
                <div className="w-10 h-10 bg-[#0055A4]/20 rounded-xl flex items-center justify-center"><Phone className="text-[#0055A4] w-5 h-5" /></div>
                <div><p className="text-[10px] text-slate-500 uppercase font-black tracking-widest">Hélène Mimenza</p><p className="font-black text-white text-sm tracking-tighter">06 16 08 01 74</p></div>
              </a>
              <a href="tel:0651332209" className="flex items-center gap-4 glass p-4 rounded-2xl hover:border-[#EF4135] transition-all">
                <div className="w-10 h-10 bg-[#EF4135]/20 rounded-xl flex items-center justify-center"><Phone className="text-[#EF4135] w-5 h-5" /></div>
                <div><p className="text-[10px] text-slate-500 uppercase font-black tracking-widest">Éric Sotoca</p><p className="font-black text-white text-sm tracking-tighter">06 51 33 22 09</p></div>
              </a>
            </div>
          </div>
          <div className="flex-1 w-full md:w-auto">
            <div className="glass p-8 rounded-[3rem] border-white/20 relative">
              <h3 className="text-2xl font-black text-white mb-6 uppercase italic tracking-widest">Demande de Mécénat</h3>
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Message envoyé ! Nous reviendrons vers vous très vite.'); }}>
                <input type="text" placeholder="Organisation / Entreprise" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:border-[#D4AF37] outline-none text-sm transition-all focus:bg-white/10" />
                <input type="email" placeholder="Email professionnel" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:border-[#D4AF37] outline-none text-sm transition-all focus:bg-white/10" />
                <textarea rows={3} placeholder="Votre projet de soutien..." className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:border-[#D4AF37] outline-none text-sm transition-all focus:bg-white/10"></textarea>
                <button className="w-full bg-gradient-to-r from-[#0055A4] via-white to-[#EF4135] py-4 rounded-xl text-black font-black uppercase text-lg hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-red-900/10 tracking-widest">
                  Valider ma demande
                </button>
              </form>
            </div>
          </div>
        </section>
      );
      case 15: return <VideoPlayer />;
      default: return null;
    }
  };

  return (
    <div className="h-screen w-full flex flex-col bg-[#020617] text-slate-100 overflow-hidden nomad-pattern relative">
      <div className="fixed top-0 left-0 w-full z-50">
        <div className="w-full bg-white/5 h-1">
          <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        </div>
      </div>

      <div className="fixed bottom-8 left-0 w-full z-40 px-8 flex justify-between items-center pointer-events-none">
        <button 
          onClick={prevSlide}
          className={`pointer-events-auto p-4 rounded-full glass hover:bg-white/10 transition-all ${currentSlide === 0 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <div className="glass px-6 py-2 rounded-full text-xs font-black tracking-[0.3em] text-white flex items-center gap-4 pointer-events-auto">
          <span className="text-[#D4AF37]">{String(currentSlide + 1).padStart(2, '0')}</span>
          <div className="tricolore-strip rounded-full w-8"></div>
          <span className="opacity-40">{String(totalSlides).padStart(2, '0')}</span>
        </div>
        <button 
          onClick={nextSlide}
          className="pointer-events-auto p-4 rounded-full bg-gradient-to-r from-[#0055A4] to-[#EF4135] text-white transition-all shadow-xl shadow-blue-900/40 hover:scale-110 active:scale-90"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      <div className="absolute inset-0 -z-10 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-[#0055A4] rounded-full blur-[180px]"></div>
        <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-[#EF4135] rounded-full blur-[180px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#D4AF37] rounded-full blur-[200px] opacity-10"></div>
      </div>

      <main className="flex-grow flex items-center justify-center p-4 md:p-12 relative overflow-y-auto md:overflow-hidden">
        {renderSlide(currentSlide)}
      </main>
    </div>
  );
};

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<App />);
}
