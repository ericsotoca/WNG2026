import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { createRoot } from 'react-dom/client';
import { 
  ChevronRight, ChevronLeft, MapPin, Award, Globe, Users, Tv, Check, 
  Building2, Globe2, Trophy, Languages, GraduationCap, Flag, Flame, 
  ShieldCheck, ArrowRight, Eye, HandMetal, MapPinned, Users2, PlusCircle, 
  Landmark, Shield, Phone, LayoutGrid, Layers, Grid, Sparkles, Zap, 
  History, Target, PlayCircle, ExternalLink, RefreshCw, Play, Quote, Gift,
  Facebook, Medal
} from 'lucide-react';

const VideoPlayer: React.FC = () => {
  const videoId = "iN7yDLqXqdQ";
  const youtubeUrl = `https://www.youtube.com/watch?v=${videoId}`;
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <section className="slide-enter flex flex-col items-center max-w-5xl w-full text-center py-8">
      <div className="flex items-center gap-3 mb-6 text-[#D4AF37] font-black tracking-[0.3em] uppercase text-xs">
        <Tv className="w-6 h-6 animate-pulse" />
        <span>Reportage Vidéo</span>
      </div>
      
      <h2 className="text-3xl md:text-5xl font-black mb-10 text-white uppercase italic tracking-tighter leading-none">
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
              <div className="w-20 h-20 md:w-24 md:h-24 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/20 group-hover:bg-[#EF4135] group-hover:border-[#EF4135] transition-all duration-500 shadow-2xl">
                <Play className="w-8 h-8 md:w-10 md:h-10 text-white fill-current ml-1" />
              </div>
            </div>

            <div className="absolute bottom-8 left-10 text-left">
              <p className="text-white font-black text-xs md:text-sm uppercase tracking-[0.3em]">Astana • 2024</p>
              <p className="text-white/60 text-[10px] md:text-xs uppercase font-bold tracking-widest mt-1">Délégation France</p>
            </div>
          </div>
        </a>

        <div className="flex flex-col md:flex-row gap-6 items-center">
          <a 
            href={youtubeUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center gap-6 bg-[#EF4135] px-10 md:px-12 py-5 md:py-6 rounded-full border border-white/10 hover:bg-[#D32F2F] transition-all shadow-2xl shadow-red-900/40 transform active:scale-95"
          >
            <PlayCircle className="w-6 h-6 md:w-8 md:h-8 text-white" />
            <span className="text-white font-black text-lg md:text-xl uppercase tracking-tighter">Regarder sur YouTube</span>
            <ExternalLink className="w-4 h-4 md:w-5 md:h-5 text-white/50 group-hover:text-white transition-colors" />
          </a>
        </div>
      </div>
    </section>
  );
};

const FacebookReel: React.FC = () => {
  return (
    <section className="slide-enter flex flex-col items-center max-w-6xl w-full text-center py-8">
      <div className="flex items-center gap-3 mb-6 text-[#1877F2] font-black tracking-[0.3em] uppercase text-xs">
        <Facebook className="w-6 h-6" />
        <span>Instantanés Nomades</span>
      </div>
      
      <h2 className="text-3xl md:text-5xl font-black mb-8 text-white uppercase italic tracking-tighter leading-none">
         L'aventure <br/><span className="text-[#1877F2]">en mouvement</span>
      </h2>

      <div className="flex items-center gap-3 mb-10 bg-[#1877F2]/10 border border-[#1877F2]/30 px-6 py-3 rounded-full shadow-[0_0_30px_rgba(24,119,242,0.1)]">
        <Users2 className="w-5 h-5 text-[#1877F2]" />
        <span className="text-xs md:text-sm font-black uppercase tracking-[0.2em] text-white">Stade de 30 000 places</span>
      </div>

      <div className="w-full flex justify-center">
        <div className="glass p-2 md:p-4 rounded-[2.5rem] border-white/10 shadow-2xl overflow-hidden w-full max-w-5xl">
          <div className="relative w-full aspect-video md:aspect-[16/7] overflow-hidden rounded-[2rem]">
            <iframe 
              src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F897738559885442%2F&show_text=false&width=560&t=0" 
              width="100%" 
              height="100%" 
              style={{ border: 'none', overflow: 'hidden' }} 
              scrolling="no" 
              frameBorder="0" 
              allowFullScreen={true} 
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              className="w-full h-full scale-[1.01]"
            ></iframe>
          </div>
        </div>
      </div>
      
      <p className="mt-10 text-slate-400 text-sm md:text-base font-light italic max-w-2xl mx-auto leading-relaxed">
        Découvrez la délégation française en entier, fièrement présentée lors de la cérémonie d'ouverture des World Nomad Games 2024 à Astana, parmi les nations du monde entier et devant 30 000 personnes.
      </p>
    </section>
  );
};

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 17;

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
        <section className="slide-enter flex flex-col items-center text-center max-w-5xl py-8">
          <div className="flex items-center gap-2 mb-4 text-[#D4AF37] font-bold tracking-widest uppercase text-xs md:text-sm">
            <Sparkles className="w-4 h-4" />
            <span>L'Excellence Française en Terre Nomade</span>
          </div>
          <h1 className="text-4xl md:text-8xl font-bold mb-6 leading-tight tracking-tight text-white uppercase italic">
            WORLD NOMAD <br/>
            <span className="gradient-text-fr">GAMES 2026</span>
          </h1>
          <div className="tricolore-strip mx-auto mb-8 w-32 h-1"></div>
          <p className="text-lg md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
            Une épopée moderne où la stratégie française rencontre les traditions ancestrales de la Route de la Soie.
          </p>
          <div className="flex flex-col md:flex-row gap-4 md:gap-6">
            <div className="glass p-5 md:p-6 rounded-2xl flex items-center gap-4 border-l-4 border-[#0055A4]">
              <MapPin className="text-[#0055A4]" />
              <div className="text-left text-white">
                <p className="text-[10px] uppercase text-slate-500">Destination</p>
                <p className="font-bold text-sm md:text-base">Kirghizistan</p>
              </div>
            </div>
            <div className="glass p-5 md:p-6 rounded-2xl flex items-center gap-4 border-l-4 border-[#D4AF37]">
              <Flame className="text-[#D4AF37]" />
              <div className="text-left text-white">
                <p className="text-[10px] uppercase text-slate-500">Esprit</p>
                <p className="font-bold text-sm md:text-base">Culture & Compétition</p>
              </div>
            </div>
          </div>
        </section>
      );
      case 1: return (
        <section className="slide-enter flex flex-col items-center text-center max-w-6xl w-full py-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white uppercase tracking-tighter">Un Événement Mondial</h2>
          <div className="tricolore-strip mx-auto mb-12"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full">
            <div className="glass p-8 rounded-3xl border-t-4 border-[#0055A4] group hover:bg-white/5 transition-all">
              <Globe className="text-[#0055A4] w-12 h-12 mx-auto mb-6" />
              <div className="text-4xl md:text-5xl font-black text-white mb-2">~100</div>
              <p className="text-slate-400 font-medium uppercase text-xs tracking-widest">Pays représentés attendus</p>
            </div>
            <div className="glass p-8 rounded-3xl border-t-4 border-white/40 group hover:bg-white/5 transition-all md:scale-105 bg-white/5 shadow-2xl">
              <Users className="text-[#D4AF37] w-12 h-12 mx-auto mb-6" />
              <div className="text-4xl md:text-5xl font-black text-white mb-2">~3 000</div>
              <p className="text-slate-400 font-medium uppercase text-xs tracking-widest leading-relaxed">Athlètes & Invités<br/>(Kits & Packages)</p>
            </div>
            <div className="glass p-8 rounded-3xl border-t-4 border-[#EF4135] group hover:bg-white/5 transition-all">
              <Tv className="text-[#EF4135] w-12 h-12 mx-auto mb-6" />
              <div className="text-4xl md:text-5xl font-black text-white mb-2">50M+</div>
              <p className="text-slate-400 font-medium uppercase text-xs tracking-widest">Audience Mondiale estimée</p>
            </div>
          </div>
        </section>
      );
      case 2: return <FacebookReel />;
      case 3: return (
        <section className="slide-enter flex flex-col md:flex-row items-center gap-10 max-w-6xl w-full text-left py-8">
          <div className="flex-1 space-y-6">
            <h2 className="text-2xl md:text-4xl font-bold text-white uppercase italic tracking-tighter">Immersion Culturelle</h2>
            <p className="text-base md:text-lg text-slate-300 leading-relaxed border-l-4 border-[#D4AF37] pl-6 font-light">
              Les World Nomad Games fusionnent la compétition sportive et l'Ethno-Village : un carrefour vibrant de 200 yourtes, d'artisanat et de traditions millénaires.
            </p>
            <div className="flex items-center gap-4">
               <History className="text-[#0055A4]" />
               <p className="text-sm text-slate-400">Patrimoine Mondial de l'UNESCO</p>
            </div>
          </div>
          <div className="flex-1 w-full">
             <img src="https://eurasia.travel/wp-content/uploads/2024/09/World-Nomad-Games-in-Kyrgyzstan-19.jpg" className="rounded-[2rem] glass p-2 grayscale hover:grayscale-0 transition-all duration-700 w-full object-cover aspect-video md:aspect-auto shadow-2xl" alt="Culture" />
          </div>
        </section>
      );
      case 4: return (
        <section className="slide-enter flex flex-col items-center max-w-6xl w-full py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full items-stretch">
            <div className="lg:col-span-8 flex flex-col justify-center text-left space-y-10">
              <div>
                <div className="flex items-center gap-3 mb-4 text-[#D4AF37] font-black tracking-[0.3em] uppercase text-xs">
                  <Quote className="w-5 h-5" />
                  <span>La Voix de la Présidente</span>
                </div>
                <h2 className="text-3xl md:text-6xl font-black text-white leading-none uppercase italic tracking-tighter">
                  Une Vision pour <br/><span className="text-[#D4AF37]">la France</span>
                </h2>
              </div>
              
              <div className="glass p-6 md:p-12 rounded-[2rem] md:rounded-[3rem] border-[#D4AF37]/20 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                  <Quote className="w-16 h-16 md:w-24 md:h-24 text-white" />
                </div>
                <p className="text-lg md:text-3xl text-white italic font-light leading-relaxed relative z-10">
                  « Porter le drapeau français lors de cet événement mondial, c'est affirmer notre attachement à la diversité culturelle et à l'excellence stratégique. »
                </p>
                <div className="mt-8 md:mt-10 flex flex-col items-start relative z-10">
                  <div className="tricolore-strip mb-4 w-24"></div>
                  <p className="font-black text-[#D4AF37] uppercase tracking-widest text-base md:text-lg">Hélène Mimenza</p>
                  <p className="text-slate-500 text-[10px] uppercase font-black mt-1 tracking-widest">Présidente Jeux Nomades France</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                 <div className="px-4 py-2 md:px-5 md:py-3 glass rounded-full flex items-center gap-3 border-[#0055A4]/30">
                    <Check className="text-[#0055A4] w-3 h-3 md:w-4 md:h-4" />
                    <span className="text-[10px] md:text-[11px] uppercase font-black text-slate-400 tracking-wider">Patrimoine UNESCO</span>
                 </div>
                 <div className="px-4 py-2 md:px-5 md:py-3 glass rounded-full flex items-center gap-3 border-[#EF4135]/30">
                    <Check className="text-[#EF4135] w-3 h-3 md:w-4 md:h-4" />
                    <span className="text-[10px] md:text-[11px] uppercase font-black text-slate-400 tracking-wider">Ambition Mondiale</span>
                 </div>
              </div>
            </div>

            <div className="lg:col-span-4 relative group rounded-[2rem] md:rounded-[3rem] overflow-hidden glass p-2 border-white/10 hidden lg:block">
              <div className="w-full h-full min-h-[500px] overflow-hidden rounded-[1.8rem] md:rounded-[2.5rem] relative bg-white/5">
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
      case 5: return (
        <section className="slide-enter flex flex-col items-center max-w-6xl w-full text-center py-4">
          <div className="flex items-center gap-3 mb-6 text-[#D4AF37] font-black tracking-[0.3em] uppercase text-[10px] md:text-xs">
            <Trophy className="w-5 h-5 md:w-6 md:h-6" />
            <span>Tableau d'Honneur • Excellence & Résultats</span>
          </div>
          
          <div className="w-full overflow-y-auto max-h-[85vh] pr-2 custom-scrollbar space-y-8">
            <div className="w-full relative group overflow-hidden rounded-[2.5rem] glass p-2 border-[#D4AF37]/20 border">
              <div className="w-full overflow-hidden rounded-[2.2rem] relative bg-white/5 shadow-2xl flex flex-col">
                <img 
                  src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXeC2JDBmioqG3ZQAnWBQvY-m9DRJ2_2hsGneA1SNwgny551XeauuxCkoJu2nKDMCNAjxDan4CTnxYf_2bxf3N0UYpnHPjOw0dtsFj252gcQiPkMz5aI1NemiXrQozwG8ptYPP72CdswPaOgr4SgNysTnS4?key=4Mj4bJk_67OZUgFqKr5Mhw" 
                  alt="Délégation France Press" 
                  className="w-full h-auto object-contain grayscale transition-all duration-700 group-hover:grayscale-0" 
                />
                <div className="p-6 text-left bg-gradient-to-r from-black/80 to-transparent">
                  <div className="tricolore-strip mb-3"></div>
                  <h3 className="text-xl md:text-3xl font-black text-white uppercase italic tracking-tighter leading-tight">Palmarès Mondial</h3>
                  <p className="text-white/60 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mt-1">Délégation Officielle France • World Nomad Games</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-8 w-full max-w-4xl mx-auto pb-12">
              <div className="glass p-6 md:p-8 rounded-[2.5rem] border-t-8 border-[#0055A4] flex flex-col text-left group w-full">
                <div className="flex justify-between items-start mb-6">
                   <div>
                      <h3 className="text-xl md:text-2xl font-black text-white uppercase italic tracking-tight">Astana 2024</h3>
                      <p className="text-[#0055A4] text-[10px] font-black uppercase tracking-widest">World Nomad Games • Kazakhstan</p>
                   </div>
                   <div className="w-10 h-10 md:w-12 md:h-12 bg-[#0055A4]/10 rounded-xl flex items-center justify-center border border-[#0055A4]/20">
                      <Globe className="text-[#0055A4] w-6 h-6" />
                   </div>
                </div>

                <div className="space-y-6 flex-grow">
                   <div className="space-y-4">
                      <div className="flex items-center gap-3">
                         <div className="w-1 bg-[#D4AF37] h-4"></div>
                         <h4 className="text-sm font-black text-slate-200 uppercase tracking-widest">Discipline Awalé (Owari)</h4>
                      </div>
                      <div className="space-y-3">
                         <div className="glass p-4 rounded-2xl border-l-4 border-[#D4AF37] hover:bg-white/5 transition-all">
                            <p className="text-white font-black text-sm">🥈 Clara Sotoca : 5<sup>e</sup> place / 40 athlètes</p>
                            <p className="text-[10px] text-slate-400 mt-1">Performance exceptionnelle, engagement et maîtrise du jeu. 👏</p>
                         </div>
                         <div className="glass p-4 rounded-2xl border-l-4 border-slate-600">
                            <p className="text-white font-black text-sm">Eric Sotoca : 22<sup>e</sup> place / 50 athlètes</p>
                            <p className="text-[10px] text-slate-400 mt-1">Progression notable et apprentissage précieux. 💪</p>
                         </div>
                         <div className="glass p-3 rounded-xl border-[#0055A4]/30 border text-center">
                            <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest">🇫🇷 Équipe de France : 16<sup>e</sup> / 36 pays 📈</p>
                         </div>
                      </div>
                   </div>

                   <div className="space-y-4">
                      <div className="flex items-center gap-3">
                         <div className="w-1 bg-white h-4"></div>
                         <h4 className="text-sm font-black text-slate-200 uppercase tracking-widest">Discipline Togyz Qumalaq</h4>
                      </div>
                      <div className="space-y-3">
                         <div className="glass p-4 rounded-2xl border-l-4 border-white/40">
                            <p className="text-white font-black text-sm">🥉 Clara Sotoca : 13<sup>e</sup> place / 48 athlètes</p>
                            <p className="text-[10px] text-slate-400 mt-1">Adaptabilité et talent dans des jeux variés. 🌟</p>
                         </div>
                         <div className="glass p-4 rounded-2xl border-l-4 border-slate-600">
                            <p className="text-white font-black text-sm">Eric Sotoca : 42<sup>e</sup> place / 63 athlètes</p>
                            <p className="text-[10px] text-slate-400 mt-1">Expérience enrichissante malgré des rounds intenses. 🔥</p>
                         </div>
                         <div className="glass p-3 rounded-xl border-white/10 border text-center">
                            <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest">🇫🇷 Équipe de France : 19<sup>e</sup> / 40 pays 🚀</p>
                         </div>
                      </div>
                   </div>
                </div>
              </div>

              <div className="glass p-6 md:p-8 rounded-[2.5rem] border-t-8 border-[#EF4135] flex flex-col text-left group w-full">
                <div className="flex justify-between items-start mb-6">
                   <div>
                      <h3 className="text-xl md:text-2xl font-black text-white uppercase italic tracking-tight">Cannes 2025</h3>
                      <p className="text-[#EF4135] text-[10px] font-black uppercase tracking-widest">38<sup>e</sup> Festival Int. des Jeux</p>
                   </div>
                   <div className="w-10 h-10 md:w-12 md:h-12 bg-[#EF4135]/10 rounded-xl flex items-center justify-center border border-[#EF4135]/20">
                      <Medal className="text-[#EF4135] w-6 h-6" />
                   </div>
                </div>

                <div className="space-y-6 flex-grow">
                   <div className="space-y-4">
                      <div className="flex items-center gap-3">
                         <div className="w-1 bg-[#D4AF37] h-4"></div>
                         <h4 className="text-sm font-black text-slate-200 uppercase tracking-widest">Tournoi Int. Awalé</h4>
                      </div>
                      <div className="grid grid-cols-1 gap-2">
                         <div className="flex justify-between items-center glass p-3 rounded-xl border-l-2 border-[#D4AF37]">
                            <span className="text-[11px] font-black text-white uppercase tracking-wider">Clara Sotoca</span>
                            <span className="text-[#D4AF37] font-black text-xs">🥈 2<sup>e</sup> place (Femmes) 👏</span>
                         </div>
                         <div className="flex justify-between items-center glass p-3 rounded-xl border-l-2 border-[#D4AF37]">
                            <span className="text-[11px] font-black text-white uppercase tracking-wider">Eric Sotoca</span>
                            <span className="text-[#D4AF37] font-black text-xs">🥈 2<sup>e</sup> place (Hommes) 💪</span>
                         </div>
                         <div className="flex justify-between items-center glass p-3 rounded-xl border-l-2 border-slate-600">
                            <span className="text-[11px] font-black text-white uppercase tracking-wider opacity-60">Hélène Mimenza</span>
                            <span className="text-slate-500 font-black text-[10px]">4<sup>e</sup> place (Femmes)</span>
                         </div>
                      </div>
                   </div>

                   <div className="space-y-4">
                      <div className="flex items-center gap-3">
                         <div className="w-1 bg-white h-4"></div>
                         <h4 className="text-sm font-black text-slate-200 uppercase tracking-widest">Togyz Qumalaq Mixte</h4>
                      </div>
                      <div className="grid grid-cols-1 gap-2">
                         <div className="flex justify-between items-center glass p-3 rounded-xl border-l-2 border-white/60">
                            <span className="text-[11px] font-black text-white uppercase tracking-wider">Clara Sotoca</span>
                            <span className="text-white font-black text-xs">🥈 2<sup>e</sup> place 🌟</span>
                         </div>
                         <div className="flex justify-between items-center glass p-3 rounded-xl border-l-2 border-slate-600">
                            <span className="text-[11px] font-black text-white uppercase tracking-wider opacity-60">Eric Sotoca</span>
                            <span className="text-slate-500 font-black text-[10px]">4<sup>e</sup> place</span>
                         </div>
                         <div className="flex justify-between items-center glass p-3 rounded-xl border-l-2 border-slate-600">
                            <span className="text-[11px] font-black text-white uppercase tracking-wider opacity-60">Hélène Mimenza</span>
                            <span className="text-slate-500 font-black text-[10px]">6<sup>e</sup> place</span>
                         </div>
                      </div>
                   </div>
                   
                   <p className="text-[11px] text-[#D4AF37] font-black uppercase tracking-widest mt-6 border-t border-white/10 pt-4">
                     Prochain rendez-vous : Tournois du 27 février au 1er mars 2026.
                   </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
      case 6: return (
        <section className="slide-enter flex flex-col items-center max-w-6xl w-full text-center py-8">
          <h2 className="text-2xl md:text-5xl font-black mb-10 text-white uppercase italic tracking-tighter">
            Ils nous <span className="text-[#D4AF37]">soutiennent</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 w-full">
            <div className="glass p-8 md:p-10 rounded-[2.5rem] border-l-8 border-[#0055A4] text-left group hover:bg-white/5 transition-all">
              <Building2 className="text-[#0055A4] w-10 md:w-12 h-10 md:h-12 mb-6" />
              <h3 className="text-xl md:text-2xl font-black text-white mb-2 uppercase italic tracking-tighter">Mairie de La Saulce</h3>
              <p className="text-sm md:text-base text-slate-400 font-light leading-relaxed">
                Base arrière stratégique de préparation technique et soutien institutionnel historique de notre délégation en région PACA.
              </p>
            </div>
            <div className="glass p-8 md:p-10 rounded-[2.5rem] border-r-8 border-[#EF4135] text-left group hover:bg-white/5 transition-all">
              <Globe2 className="text-[#EF4135] w-10 md:w-12 h-10 md:h-12 mb-6" />
              <h3 className="text-xl md:text-2xl font-black text-white mb-2 uppercase italic tracking-tighter">Comité WNG 2026</h3>
              <p className="text-sm md:text-base text-slate-400 font-light leading-relaxed">
                Reconnaissance internationale comme unique structure officielle représentant les couleurs de la France lors de la compétition.
              </p>
            </div>
          </div>
          <div className="mt-12 flex justify-center">
            <button 
              onClick={() => setCurrentSlide(15)}
              className="group flex items-center gap-4 px-8 py-4 border-2 border-dashed border-white/10 rounded-full hover:border-[#D4AF37]/40 transition-all active:scale-95"
            >
              <PlusCircle className="w-5 h-5 text-white group-hover:text-[#D4AF37]" />
              <span className="text-[10px] md:text-[11px] uppercase font-black tracking-[0.3em] text-white/50 group-hover:text-white">Devenir Partenaire</span>
            </button>
          </div>
        </section>
      );
      case 7: return (
        <section className="slide-enter flex flex-col items-center max-w-6xl w-full py-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-white uppercase tracking-tighter text-center">La Délégation 2026</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8 w-full">
            {[
              { name: "Hélène Mimenza", role: "Coach & Joueuse", c: "#0055A4", id: "h1", img: "https://image.jimcdn.com/cdn-cgi/image/width=500%2Cformat=png/app/cms/storage/image/path/sb3e54bbe27069320/image/id714ab802c668909/version/1771072018/image.png" },
              { name: "Clara Sotoca", role: "Joueuse Élite", c: "#D4AF37", id: "h2", img: "https://image.jimcdn.com/cdn-cgi/image/width=320%2Cheight=10000%2Cfit=contain%2Cformat=png%2C/app/cms/storage/image/path/sb3e54bbe27069320/image/i5acaa91710cbb300/version/1771072008/image.png" },
              { name: "Bénédicte V.O.", role: "Joueuse", c: "#EF4135", id: "h3", img: "https://image.jimcdn.com/cdn-cgi/image/width=500%2Cformat=png/app/cms/storage/image/path/sb3e54bbe27069320/image/i635576e827f3d56f/version/1771073221/image.png" },
              { name: "Colette Gueirard", role: "Joueuse", c: "#0055A4", id: "h4", img: "https://image.jimcdn.com/cdn-cgi/image/width=500%2Cformat=png/app/cms/storage/image/path/sb3e54bbe27069320/image/i47b56a7937366578/version/1771072189/image.png" },
              { name: "Éric Sotoca", role: "Dir. Tech & Joueur", c: "#EF4135", id: "h5", img: "https://scontent.fctt1-1.fna.fbcdn.net/v/t39.30808-6/510728177_10238121994250472_14731843692392084_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=__r_kI5hiKMQ7kNvwF4u-Sv&_nc_oc=AdlTqwRN6v0F_l32gxRVfk3XDA7xEr6TlZLJDi9mZA2mjzJWVGj2K2iEXvaNJWR-OoxblxTNhxv8pbtRJHfQ1IRd&_nc_zt=23&_nc_ht=scontent.fctt1-1.fna&_nc_gid=Kz51LUc_FNoy8eiHhSxdjA&oh=00_AfuGxxdjRNdfcw_oGMcslS_Tz5MwRdt52jYvTDpkDb9E4w&oe=69964908" }
            ].map((m, i) => (
              <div key={i} className="flex flex-col items-center group">
                <div className={`w-24 h-24 md:w-36 md:h-36 rounded-2xl glass p-1 mb-4 border-b-4 transition-all group-hover:scale-105`} style={{borderColor: m.c}}>
                  <img src={m.img || `https://picsum.photos/seed/${m.id}/300`} className="w-full h-full object-cover rounded-xl grayscale group-hover:grayscale-0 transition-all shadow-lg" alt={m.name} />
                </div>
                <p className="font-bold text-[11px] md:text-sm text-white text-center leading-tight">{m.name}</p>
                <p className={`text-[10px] md:text-[11px] uppercase font-black tracking-widest mt-1 opacity-60 text-center`} style={{color: m.c}}>{m.role}</p>
              </div>
            ))}
          </div>
        </section>
      );
      case 8: return (
        <section className="slide-enter flex flex-col items-center max-w-6xl w-full py-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-white uppercase italic tracking-tighter text-center">Les Disciplines Maîtresses</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full">
            {[
              { 
                name: "Awalé", 
                c: "#0055A4", 
                img: "https://image.jimcdn.com/cdn-cgi/image/width=305%2Cheight=10000%2Cfit=contain%2Cformat=jpg%2C/app/cms/storage/image/path/sb3e54bbe27069320/image/i39f5f589a56e954a/version/1726758240/image.jpg",
                desc: "Stratégie millénaire d'origine africaine. Demande un calcul mental rapide et une vision tactique à long terme."
              },
              { 
                name: "Togyz Qumalaq", 
                c: "#D4AF37", 
                img: "https://image.jimcdn.com/cdn-cgi/image/width=287%2Cheight=10000%2Cfit=contain%2Cformat=jpg%2C/app/cms/storage/image/path/sb3e54bbe27069320/image/i0ddc98f4df305c1c/version/1726758236/image.jpg",
                desc: "Jeu mathématique royal du Kazakhstan. Considéré comme l'un des mancalas les plus complexes au monde."
              },
              { 
                name: "Mangala", 
                c: "#EF4135", 
                img: "https://image.jimcdn.com/cdn-cgi/image/width=259%2Cheight=10000%2Cfit=contain%2Cformat=png%2C/app/cms/storage/image/path/sb3e54bbe27069320/image/i0bc3a07451d7b742/version/1732526950/image.png",
                desc: "Héritage Ottoman inscrit à l'UNESCO. Symbole de sagesse et de partage, favorisant la réflexion croisée."
              }
            ].map((d, i) => (
              <div key={i} className="flip-card h-[280px] md:h-[300px]">
                <div className="flip-card-inner">
                  <div className={`flip-card-front glass border-opacity-30 overflow-hidden flex flex-col`} style={{borderColor: d.c}}>
                    <div className="flex-grow flex items-center justify-center p-4">
                      <img src={d.img} className="max-w-full max-h-[140px] md:max-h-[160px] object-contain rounded-lg shadow-xl" alt={d.name} />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-6 uppercase italic">{d.name}</h3>
                  </div>
                  <div className="flip-card-back p-6 md:p-8 flex flex-col items-center justify-center text-center rounded-[1.5rem]" style={{backgroundColor: d.c, color: d.c === "#D4AF37" ? "#000" : "#fff"}}>
                    <h4 className="font-bold mb-3 uppercase tracking-widest text-xs">Aperçu</h4>
                    <p className="text-xs md:text-sm leading-relaxed font-medium">{d.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      );
      case 9: return (
        <section className="slide-enter flex flex-col items-center max-w-5xl w-full text-left py-8">
           <h2 className="text-2xl md:text-3xl font-bold mb-10 text-white text-center uppercase italic tracking-tighter">Objectifs 2026</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full">
              {[
                { icon: Trophy, color: "#0055A4", title: "Sportif : Top 10 Mondial", desc: "Maintenir et améliorer notre rang parmi les meilleures nations mondiales." },
                { icon: Languages, color: "#EF4135", title: "Culturel : Rayonnement", desc: "Faire connaître le patrimoine ludique africain et asiatique en France." },
                { icon: GraduationCap, color: "#fff", title: "Éducatif : Sensibilisation", desc: "Échanges intergénérationnels à travers des ateliers régionaux (PACA, Gap)." },
                { icon: Flag, color: "#0055A4", title: "Diplomatie Sportive", desc: "Renforcer l'image de la France comme carrefour des cultures ludiques." }
              ].map((obj, i) => (
                <div key={i} className="flex gap-4 p-5 md:p-6 glass rounded-2xl border-l-4 transition-colors" style={{borderLeftColor: obj.color}}>
                  <div className="w-10 md:w-12 h-10 md:h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{backgroundColor: `${obj.color}20`}}>
                    <obj.icon className="w-5 md:w-6 h-5 md:h-6" style={{color: obj.color}} />
                  </div>
                  <div>
                    <h4 className="font-bold text-base md:text-lg mb-1 text-white">{obj.title}</h4>
                    <p className="text-xs md:text-sm text-slate-400 font-light leading-snug">{obj.desc}</p>
                  </div>
                </div>
              ))}
           </div>
        </section>
      );
      case 10: return (
        <section className="slide-enter flex flex-col items-center max-w-5xl w-full text-center py-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-white uppercase italic tracking-tighter text-center">Calendrier Opérationnel</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 w-full">
             {[
               { date: "2025", label: "Préparation", desc: "Entraînements intensifs et ateliers PACA." },
               { date: "Fév. 2026", label: "Excellence", desc: "Tournois préparatoires internationaux (Cannes)." },
               { date: "Été 2026", label: "Activation", desc: "Démonstrations publiques tricolores." },
               { date: "Sept 2026", label: "Kirghizistan", desc: "World Nomad Games - La Compétition." }
             ].map((s, i) => (
               <div key={i} className="flex flex-col items-center px-2">
                  <div className="w-12 h-12 rounded-full glass border border-white/20 flex items-center justify-center font-black text-[9px] text-[#D4AF37] mb-4 text-center leading-none px-1">{s.date}</div>
                  <h4 className="font-bold text-white text-sm mb-1 uppercase tracking-widest leading-tight">{s.label}</h4>
                  <p className="text-xs text-slate-500 font-medium px-2">{s.desc}</p>
               </div>
             ))}
          </div>
        </section>
      );
      case 11: return (
        <section className="slide-enter flex flex-col items-center max-w-5xl w-full py-8">
           <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white uppercase italic tracking-tighter">Budget & Investissement</h2>
           <div className="w-full glass p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 text-left items-center">
              <div>
                 <div className="mb-6 text-center lg:text-left">
                    <p className="text-xs uppercase text-slate-500 font-black tracking-[0.2em] mb-1">Besoin Global</p>
                    <p className="text-4xl md:text-6xl font-black text-white">4 615 <span className="text-xl md:text-2xl">€</span></p>
                 </div>
                 <div className="space-y-4">
                    <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-slate-400"><span>Déplacements & Missions</span><span>2 750 €</span></div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden"><div className="h-full bg-[#0055A4] rounded-full w-[60%]"></div></div>
                    
                    <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-slate-400"><span>Logistique & Locations</span><span>1 050 €</span></div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden"><div className="h-full bg-[#EF4135] rounded-full w-[23%]"></div></div>

                    <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-slate-400"><span>Équipement & Frais</span><span>815 €</span></div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden"><div className="h-full bg-[#D4AF37] rounded-full w-[17%]"></div></div>
                 </div>
              </div>
              <div className="space-y-5">
                 <h4 className="text-lg md:text-xl font-bold text-[#D4AF37] italic uppercase">Opportunité RSE</h4>
                 <p className="text-slate-400 text-sm md:text-base leading-relaxed font-light">Investir dans un projet à haute valeur culturelle, humaine et éducative avec une visibilité mondiale unique basée sur un budget maîtrisé.</p>
                 <div className="inline-flex gap-4 items-center px-6 py-3 bg-white/5 rounded-full text-xs font-black uppercase text-white tracking-[0.2em]">
                    <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                    Transparence Totale
                 </div>
              </div>
           </div>
        </section>
      );
      case 12: return (
        <section className="slide-enter flex flex-col items-center max-w-6xl w-full text-center py-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-white uppercase italic tracking-tighter">Pourquoi nous rejoindre ?</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full">
            {[
              { icon: Eye, title: "Visibilité", desc: "Audience de 50 millions." },
              { icon: Award, title: "Prestige", desc: "Histoire tricolore unique." },
              { icon: MapPinned, title: "Territoire", desc: "Ancrage PACA et Alpes." },
              { icon: Users2, title: "Impact", desc: "Patrimoine mondial UNESCO." }
            ].map((item, i) => (
              <div key={i} className="glass p-5 md:p-6 rounded-2xl group hover:bg-white/5 transition-all">
                 <item.icon className="w-8 md:w-10 h-8 md:h-10 text-[#D4AF37] mx-auto mb-4" />
                 <h4 className="text-sm md:text-lg font-bold text-white mb-2 uppercase italic leading-tight">{item.title}</h4>
                 <p className="text-[11px] md:text-xs text-slate-500 leading-relaxed font-black uppercase tracking-widest">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      );
      case 13: return (
        <section className="slide-enter flex flex-col items-center max-w-6xl w-full py-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-white uppercase italic tracking-tighter">Offres de Partenariat</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full text-left">
            <div className="glass p-6 md:p-8 rounded-3xl flex flex-col h-full border border-white/10">
               <h3 className="text-sm md:text-base font-black text-slate-400 uppercase mb-2 tracking-widest">Bronze</h3>
               <p className="text-3xl md:text-4xl font-black text-white mb-6">500 €</p>
               <ul className="text-xs space-y-3 text-slate-400 mb-8 flex-grow">
                 <li className="flex gap-2"><Check className="text-[#0055A4] w-4 h-4 mt-0.5" /> Logo sur site web</li>
                 <li className="flex gap-2"><Check className="text-[#0055A4] w-4 h-4 mt-0.5" /> Mentions réseaux</li>
                 <li className="flex gap-2"><Check className="text-[#0055A4] w-4 h-4 mt-0.5" /> Certificat Mécénat</li>
               </ul>
               <button onClick={() => setCurrentSlide(15)} className="w-full py-4 rounded-xl border border-white/10 hover:bg-white/5 uppercase text-xs font-black tracking-widest">Choisir</button>
            </div>
            <div className="glass p-6 md:p-8 rounded-3xl flex flex-col h-full border-2 border-[#D4AF37] md:scale-105 bg-white/5 shadow-2xl">
               <div className="bg-[#D4AF37] text-black text-[10px] font-black px-4 py-1 rounded-full w-fit mb-4 uppercase">Populaire</div>
               <h3 className="text-sm md:text-base font-black text-white uppercase mb-2 tracking-widest">Argent</h3>
               <p className="text-3xl md:text-4xl font-black text-white mb-6">1 000 €</p>
               <ul className="text-xs space-y-3 text-white/80 mb-8 flex-grow">
                 <li className="flex gap-2"><Check className="text-[#D4AF37] w-4 h-4 mt-0.5" /> Pack Bronze Inclus</li>
                 <li className="flex gap-2"><Check className="text-[#D4AF37] w-4 h-4 mt-0.5" /> Logo Tenue Officielle</li>
                 <li className="flex gap-2"><Check className="text-[#D4AF37] w-4 h-4 mt-0.5" /> Branding tournois</li>
               </ul>
               <button onClick={() => setCurrentSlide(15)} className="w-full py-4 rounded-xl bg-[#D4AF37] text-black uppercase text-xs font-black tracking-widest hover:scale-105 transition-transform shadow-lg">Participer</button>
            </div>
            <div className="glass p-6 md:p-8 rounded-3xl flex flex-col h-full border border-white/5">
               <h3 className="text-sm md:text-base font-black text-[#EF4135] uppercase mb-2 tracking-widest">Or / Platine</h3>
               <p className="text-3xl md:text-4xl font-black text-white mb-6">1 500 € +</p>
               <ul className="text-xs space-y-3 text-slate-400 mb-8 flex-grow">
                 <li className="flex gap-2"><Check className="text-[#EF4135] w-4 h-4 mt-0.5" /> Pack Argent Inclus</li>
                 <li className="flex gap-2"><Check className="text-[#EF4135] w-4 h-4 mt-0.5" /> Atelier Team Building</li>
                 <li className="flex gap-2"><Check className="text-[#EF4135] w-4 h-4 mt-0.5" /> Logo Principal</li>
               </ul>
               <button onClick={() => setCurrentSlide(15)} className="w-full py-4 rounded-xl border border-[#EF4135] text-[#EF4135] uppercase text-xs font-black tracking-widest hover:bg-[#EF4135]/10">Contact</button>
            </div>
          </div>
        </section>
      );
      case 14: return (
        <section className="slide-enter flex flex-col items-center max-w-6xl w-full text-center py-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white uppercase italic tracking-tighter text-center">Le Club des Partenaires</h2>
          <div className="tricolore-strip mx-auto mb-10"></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 w-full">
            <div className="glass p-5 rounded-[1.5rem] md:rounded-[2rem] flex flex-col items-center justify-center border-t-4 border-[#0055A4] h-40 md:h-48 transition-all">
              <div className="text-[10px] md:text-xs font-bold text-[#0055A4] uppercase mb-3 tracking-widest leading-tight">Soutien Local</div>
              <Landmark className="w-8 md:w-12 h-8 md:h-12 text-white/40 mb-2" />
              <p className="font-bold text-xs md:text-sm">Mairie de <br/>La Saulce</p>
            </div>
            <div className="glass p-5 rounded-[1.5rem] md:rounded-[2rem] flex flex-col items-center justify-center border-t-4 border-[#EF4135] h-40 md:h-48 transition-all">
              <div className="text-[10px] md:text-xs font-bold text-[#EF4135] uppercase mb-3 tracking-widest leading-tight">Organisateur</div>
              <Shield className="w-8 md:w-12 h-8 md:h-12 text-white/40 mb-2" />
              <p className="font-bold text-xs md:text-sm">Comité WNG <br/>Officiel</p>
            </div>
            <div className="glass p-5 rounded-[1.5rem] md:rounded-[2rem] flex flex-col items-center justify-center border-dashed border-2 border-white/10 h-40 md:h-48 group cursor-pointer hover:border-[#D4AF37]/30 transition-all" onClick={() => setCurrentSlide(15)}>
              <PlusCircle className="w-8 md:w-10 h-8 md:h-10 text-white/10 group-hover:text-[#D4AF37] transition-colors mb-2" />
              <p className="text-[10px] md:text-xs uppercase font-bold text-white/20 group-hover:text-[#D4AF37] text-center">Votre Logo <br/>Ici</p>
            </div>
            <div className="glass p-5 rounded-[1.5rem] md:rounded-[2rem] flex flex-col items-center justify-center border-dashed border-2 border-white/10 h-40 md:h-48 group cursor-pointer hover:border-[#D4AF37]/30 transition-all" onClick={() => setCurrentSlide(15)}>
              <PlusCircle className="w-8 md:w-10 h-8 md:h-10 text-white/10 group-hover:text-[#D4AF37] transition-colors mb-2" />
              <p className="text-[10px] md:text-xs uppercase font-bold text-white/20 group-hover:text-[#D4AF37] text-center">Rejoindre <br/>le Club</p>
            </div>
          </div>
        </section>
      );
      case 15: return (
        <section className="slide-enter flex flex-col md:flex-row items-center gap-10 max-w-6xl w-full text-left py-8">
          <div className="flex-1 space-y-6 text-left">
            <div className="tricolore-strip mb-4"></div>
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight uppercase italic tracking-tighter">Écrivons l'histoire <br/><span className="text-[#D4AF37]">ensemble.</span></h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              <a href="tel:0616080174" className="flex items-center gap-4 glass p-5 rounded-2xl hover:border-[#0055A4] transition-all active:scale-95">
                <div className="w-10 h-10 bg-[#0055A4]/20 rounded-xl flex items-center justify-center"><Phone className="text-[#0055A4] w-5 h-5" /></div>
                <div><p className="text-xs text-slate-500 uppercase font-black tracking-widest">Hélène Mimenza</p><p className="font-black text-white text-sm md:text-base tracking-tighter">06 16 08 01 74</p></div>
              </a>
              <a href="tel:0651332209" className="flex items-center gap-4 glass p-5 rounded-2xl hover:border-[#EF4135] transition-all active:scale-95">
                <div className="w-10 h-10 bg-[#EF4135]/20 rounded-xl flex items-center justify-center"><Phone className="text-[#EF4135] w-5 h-5" /></div>
                <div><p className="text-xs text-slate-500 uppercase font-black tracking-widest">Éric Sotoca</p><p className="font-black text-white text-sm md:text-base tracking-tighter">06 51 33 22 09</p></div>
              </a>
            </div>
          </div>
          <div className="flex-1 w-full">
            <div className="glass p-8 md:p-10 rounded-[2.5rem] border-white/20 relative">
              <h3 className="text-xl font-black text-white mb-6 uppercase italic tracking-widest">Contact Mécénat</h3>
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Message envoyé ! Nous reviendrons vers vous très vite.'); }}>
                <input type="text" placeholder="Organisation / Entreprise" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 md:p-5 focus:border-[#D4AF37] outline-none text-sm transition-all" />
                <input type="email" placeholder="Email professionnel" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 md:p-5 focus:border-[#D4AF37] outline-none text-sm transition-all" />
                <textarea rows={3} placeholder="Votre projet..." className="w-full bg-white/5 border border-white/10 rounded-xl p-4 md:p-5 focus:border-[#D4AF37] outline-none text-sm transition-all resize-none"></textarea>
                <button className="w-full bg-gradient-to-r from-[#0055A4] via-white to-[#EF4135] py-5 rounded-xl text-black font-black uppercase text-base hover:scale-[1.02] active:scale-95 transition-all shadow-xl tracking-widest">
                  Valider
                </button>
              </form>
            </div>
          </div>
        </section>
      );
      case 16: return <VideoPlayer />;
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

      <div className="fixed bottom-0 left-0 w-full z-40 p-4 md:p-8 flex justify-between items-center pointer-events-none mb-4">
        <button 
          onClick={prevSlide}
          className={`pointer-events-auto p-4 rounded-full glass hover:bg-white/10 transition-all ${currentSlide === 0 ? 'opacity-0 pointer-events-none' : 'opacity-100'} active:scale-90`}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <div className="glass px-6 py-3 rounded-full text-xs font-black tracking-[0.3em] text-white flex items-center gap-4 pointer-events-auto shadow-2xl">
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
        <div className="absolute top-1/4 -left-20 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#0055A4] rounded-full blur-[100px] md:blur-[180px]"></div>
        <div className="absolute bottom-1/4 -right-20 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#EF4135] rounded-full blur-[100px] md:blur-[180px]"></div>
      </div>

      <main className="flex-grow overflow-y-auto overflow-x-hidden scroll-smooth flex flex-col items-center">
        <div className="w-full flex items-center justify-center min-h-full px-4 md:px-12 py-16 md:py-24">
           <div className="w-full flex flex-col items-center my-auto">
              {renderSlide(currentSlide)}
              <div className="h-28 md:hidden w-full flex-shrink-0"></div>
           </div>
        </div>
      </main>
    </div>
  );
};

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<App />);
}
