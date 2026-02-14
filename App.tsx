
import React, { useState, useEffect, useCallback } from 'react';
import { 
  ChevronRight, 
  ChevronLeft, 
  Target, 
  Globe, 
  Lightbulb, 
  Handshake, 
  Trophy, 
  Calendar, 
  MapPin, 
  Mail, 
  Facebook, 
  Phone 
} from 'lucide-react';
import { TeamMember, QuizQuestion } from './types';

const ProgressBar: React.FC<{ current: number; total: number }> = ({ current, total }) => (
  <div className="fixed top-0 left-0 w-full h-1 z-50 flex">
    {Array.from({ length: total }).map((_, i) => (
      <div 
        key={i} 
        className={`h-full transition-all duration-500 ease-out ${
          i <= current ? 'bg-cyan-500' : 'bg-slate-800'
        }`}
        style={{ width: `${100 / total}%` }}
      />
    ))}
  </div>
);

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 10; 

  const nextSlide = useCallback(() => {
    if (currentSlide < totalSlides - 1) setCurrentSlide(prev => prev + 1);
  }, [currentSlide, totalSlides]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) setCurrentSlide(prev => prev - 1);
  }, [currentSlide]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center p-4 md:p-8 bg-[#020617] text-white">
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />
      
      <ProgressBar current={currentSlide} total={totalSlides} />

      <main className="w-full max-w-6xl mx-auto flex-1 flex items-center justify-center relative z-10">
        {renderSlide(currentSlide)}
      </main>

      <div className="fixed bottom-8 left-0 w-full flex justify-between px-8 z-40 pointer-events-none">
        <button 
          onClick={prevSlide}
          className={`p-4 rounded-full glass hover:bg-white/10 transition-all pointer-events-auto ${currentSlide === 0 ? 'opacity-0 scale-90 pointer-events-none' : 'opacity-100 scale-100'}`}
        >
          <ChevronLeft className="w-8 h-8 text-cyan-400" />
        </button>
        <button 
          onClick={nextSlide}
          className={`p-4 rounded-full glass hover:bg-white/10 transition-all pointer-events-auto ${currentSlide === totalSlides - 1 ? 'opacity-0 scale-90 pointer-events-none' : 'opacity-100 scale-100'}`}
        >
          <ChevronRight className="w-8 h-8 text-cyan-400" />
        </button>
      </div>
    </div>
  );

  function renderSlide(index: number) {
    switch(index) {
      case 0: return <HeroSlide />;
      case 1: return <PresidentSlide />;
      case 2: return <MissionSlide />;
      case 3: return <TeamSlide />;
      case 4: return <AstanaSlide />;
      case 5: return <KyrgyzstanSlide />;
      case 6: return <DisciplinesSlide />;
      case 7: return <ObjectivesSlide />;
      case 8: return <QuizSlide />;
      case 9: return <ContactSlide />;
      default: return null;
    }
  }
};

const HeroSlide: React.FC = () => (
  <div className="slide-enter flex flex-col items-center text-center px-4">
    <div className="mb-6 px-4 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm tracking-widest uppercase">
      Expédition Nomade 2026
    </div>
    <h1 className="text-4xl md:text-8xl font-bold mb-6 tracking-tight">
      Délégation <span className="text-cyber">Française</span>
    </h1>
    <p className="text-lg md:text-2xl text-slate-400 max-w-2xl mb-12 font-light">
      Vers les World Nomad Games au Kirghizistan. Une aventure culturelle, sportive et humaine sans précédent.
    </p>
    <div className="flex flex-wrap justify-center gap-4">
      <div className="glass px-6 py-4 rounded-2xl flex items-center gap-3">
        <MapPin className="text-emerald-400 w-5 h-5" />
        <span className="text-sm md:text-base">Kirghizistan</span>
      </div>
      <div className="glass px-6 py-4 rounded-2xl flex items-center gap-3">
        <Calendar className="text-cyan-400 w-5 h-5" />
        <span className="text-sm md:text-base">30 Août — 6 Sept 2026</span>
      </div>
    </div>
  </div>
);

const PresidentSlide: React.FC = () => (
  <div className="slide-enter flex flex-col md:flex-row gap-8 md:gap-12 items-center px-4">
    <div className="w-full md:w-1/2">
      <div className="relative group">
        <div className="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-full opacity-50" />
        <div className="relative aspect-[3/4] md:aspect-auto md:h-[500px] overflow-hidden rounded-[2.5rem] border border-white/10 shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800&h=1000" 
            alt="Hélène Mimenza" 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
            onError={(e) => {
              e.currentTarget.src = "https://via.placeholder.com/800x1000/020617/06b6d4?text=Helene+Mimenza";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
            <p className="text-xs uppercase tracking-[0.2em] font-bold text-cyan-400">Présidente - WNG France</p>
          </div>
        </div>
      </div>
    </div>
    <div className="w-full md:w-1/2 space-y-6">
      <h2 className="text-3xl md:text-4xl font-bold">Le mot de la <span className="text-cyber">Présidente</span></h2>
      <blockquote className="text-xl md:text-2xl italic font-light text-slate-300 leading-relaxed border-l-4 border-emerald-500 pl-6">
        "Les Jeux Nomades incarnent une vision du monde où la culture, la compétition et la fraternité se rejoignent."
      </blockquote>
      <p className="text-slate-400 leading-relaxed text-base md:text-lg">
        Représenter la France à cet événement, c'est bien plus qu'une aventure sportive : c'est un engagement pour la transmission et la reconnaissance des patrimoines immatériels du monde.
      </p>
      <div className="font-bold text-emerald-400 text-lg md:text-xl">— Hélène Mimenza</div>
    </div>
  </div>
);

const MissionSlide: React.FC = () => {
  const missions = [
    { icon: Globe, title: "Promotion", desc: "Transmission des jeux de société traditionnels mondiaux." },
    { icon: Target, title: "Participation", desc: "Représenter la France sur la scène nomade internationale." },
    { icon: Lightbulb, title: "Valorisation", desc: "Patrimoine ludique mondial comme outil éducatif." }
  ];
  return (
    <div className="slide-enter w-full px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Nos <span className="text-cyber">Missions</span></h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {missions.map((m, i) => (
          <div key={i} className="glass p-8 rounded-3xl hover:border-cyan-500/50 transition-all group">
            <m.icon className="w-10 h-10 text-cyan-400 mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold mb-4">{m.title}</h3>
            <p className="text-slate-400 text-sm md:text-base">{m.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const TeamSlide: React.FC = () => {
  const members: TeamMember[] = [
    { name: "Hélène Mimenza", role: "Présidente & Coach", disciplines: ["Awalé", "Mangala", "Togyz"], description: "Pilier de l'association, experte en préparation mentale.", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400&h=500" },
    { name: "Éric Sotoca", role: "Directeur Technique", disciplines: ["Awalé", "Mangala"], description: "22ème mondial en 2024, garant de la rigueur technique.", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400&h=500" },
    { name: "Clara Sotoca", role: "Membre d'Honneur", disciplines: ["Awalé", "Togyz"], description: "5ème place mondiale en Awalé (2024). L'espoir français.", image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=400&h=500" },
    { name: "Bénédicte V. Opoix", role: "Joueuse", disciplines: ["Awalé", "Mangala"], description: "Sélectionnée pour son expertise stratégique en Awalé.", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400&h=500" },
    { name: "Colette Gueirard", role: "Joueuse", disciplines: ["Awalé", "Mangala"], description: "Maîtrise les subtilités du Mangala traditionnel.", image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=400&h=500" }
  ];

  return (
    <div className="slide-enter w-full px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">La <span className="text-cyber">Dream Team</span> 2026</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
        {members.map((m, i) => (
          <div key={i} className="flip-card h-64 md:h-80">
            <div className="flip-card-inner relative w-full">
              <div className="flip-card-front glass overflow-hidden flex flex-col">
                <img src={m.image} className="h-2/3 object-cover grayscale" alt={m.name} />
                <div className="p-3 md:p-4 flex-1 flex flex-col justify-center">
                  <div className="font-bold text-xs md:text-sm truncate">{m.name}</div>
                  <div className="text-[10px] md:text-xs text-cyan-400 uppercase truncate">{m.role}</div>
                </div>
              </div>
              <div className="flip-card-back glass p-4 md:p-6 flex flex-col justify-center bg-slate-900">
                <div className="text-[10px] md:text-xs text-emerald-400 mb-2 font-bold">Disciplines :</div>
                <div className="text-[10px] flex flex-wrap gap-1 mb-3">
                  {m.disciplines.map(d => <span key={d} className="bg-white/5 px-1.5 py-0.5 rounded border border-white/10">{d}</span>)}
                </div>
                <p className="text-[10px] md:text-xs text-slate-400 leading-tight">{m.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const AstanaSlide: React.FC = () => (
  <div className="slide-enter w-full max-w-4xl mx-auto glass p-6 md:p-12 rounded-[2.5rem] relative overflow-hidden px-4">
    <div className="absolute top-0 right-0 p-8 opacity-20 md:opacity-100">
      <Trophy className="w-16 h-16 md:w-24 md:h-24 text-emerald-500/20" />
    </div>
    <div className="flex flex-col md:flex-row gap-8 items-center">
      <div className="w-full md:w-1/2">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 italic">Astana 2024</h2>
        <div className="text-emerald-400 text-4xl md:text-5xl font-black mb-6 uppercase tracking-tighter">Éclatant</div>
        <ul className="space-y-4 text-base md:text-lg">
          <li className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
            <span><strong className="text-white">Clara Sotoca :</strong> 5ème mondiale</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
            <span><strong className="text-white">Éric Sotoca :</strong> 22ème en Awalé</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
            <span>Compétition de +30 nations</span>
          </li>
        </ul>
      </div>
      <div className="w-full md:w-1/2">
        <div className="p-2 md:p-4 bg-white/5 rounded-3xl border border-white/10">
          <img src="https://images.unsplash.com/photo-1558588942-930faae5a389?auto=format&fit=crop&q=80&w=500&h=300" className="rounded-2xl object-cover w-full" alt="Astana event" />
        </div>
      </div>
    </div>
  </div>
);

const KyrgyzstanSlide: React.FC = () => (
  <div className="slide-enter text-center px-4">
    <div className="mb-4 text-emerald-400 font-bold tracking-widest uppercase text-xs md:text-sm">Objectif Suivant</div>
    <h2 className="text-4xl md:text-6xl font-black mb-8">KIRGHIZISTAN <span className="text-cyber">2026</span></h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
      <div className="glass p-6 md:p-8 rounded-3xl flex flex-col items-center">
        <Globe className="w-10 h-10 text-cyan-400 mb-4" />
        <div className="text-2xl md:text-3xl font-bold">+80</div>
        <div className="text-slate-400 text-sm">Nations participantes</div>
      </div>
      <div className="glass p-6 md:p-8 rounded-3xl flex flex-col items-center">
        <Trophy className="w-10 h-10 text-emerald-400 mb-4" />
        <div className="text-2xl md:text-3xl font-bold">Top 10</div>
        <div className="text-slate-400 text-sm">Notre objectif sportif</div>
      </div>
    </div>
    <p className="mt-12 text-slate-400 max-w-2xl mx-auto italic text-sm md:text-base px-4 leading-relaxed">
      "Le berceau des traditions nomades nous appelle. Une opportunité unique de rayonnement culturel pour la France."
    </p>
  </div>
);

const DisciplinesSlide: React.FC = () => {
  const games = [
    { name: "AWALÉ", origin: "Afrique", desc: "Le plus célèbre des jeux de semis. Un calcul stratégique pur." },
    { name: "MANGALA", origin: "Turquie", desc: "Variante anatolienne ancestrale favorisant l'anticipation." },
    { name: "TOGYZ QUMALAQ", origin: "Asie Centrale", desc: "Le 'calculateur de neuf'. Complexité mathématique extrême." }
  ];
  return (
    <div className="slide-enter w-full px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Les <span className="text-cyber">Disciplines</span></h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {games.map((g, i) => (
          <div key={i} className="group relative overflow-hidden glass p-8 rounded-3xl h-56 md:h-64 flex flex-col justify-end hover:bg-white/5 transition-all">
            <div className="absolute top-6 left-8 text-[10px] md:text-xs font-bold text-cyan-400 tracking-widest uppercase">{g.origin}</div>
            <div className="text-2xl md:text-3xl font-black mb-2 group-hover:translate-x-2 transition-transform">{g.name}</div>
            <p className="text-xs md:text-sm text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500">{g.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const ObjectivesSlide: React.FC = () => {
  const goals = [
    { icon: Trophy, label: "Sportifs", text: "Atteindre le top 10 mondial." },
    { icon: Globe, label: "Culturels", text: "Faire connaître le patrimoine mondial." },
    { icon: Lightbulb, label: "Éducatifs", text: "Sensibiliser les jeunes aux valeurs du jeu." },
    { icon: Handshake, label: "Diplomatiques", text: "Renforcer la coopération interculturelle." }
  ];
  return (
    <div className="slide-enter w-full max-w-4xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Nos <span className="text-cyber">Objectifs</span></h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {goals.map((g, i) => (
          <div key={i} className="flex gap-4 md:gap-6 p-4 md:p-6 glass rounded-2xl items-center hover:bg-white/5 transition-colors">
            <div className="p-3 md:p-4 bg-white/5 rounded-xl shrink-0">
              <g.icon className="w-6 h-6 md:w-8 md:h-8 text-emerald-400" />
            </div>
            <div>
              <div className="font-bold text-cyan-400 text-sm md:text-base">{g.label}</div>
              <div className="text-slate-400 text-xs md:text-sm leading-tight">{g.text}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const QuizSlide: React.FC = () => {
  const questions: QuizQuestion[] = [
    { question: "Où se déroulent les WNG 2026 ?", options: ["France", "Kazakhstan", "Kirghizistan", "Turquie"], correct: 2 },
    { question: "Quelle place a obtenu Clara Sotoca en 2024 ?", options: ["3ème", "5ème", "10ème", "1ère"], correct: 1 },
    { question: "Quelle discipline vient de Turquie ?", options: ["Awalé", "Togyz Qumalaq", "Mangala", "Echecs"], correct: 2 },
    { question: "Combien de membres clés dans la délégation ?", options: ["3", "10", "5", "8"], correct: 2 }
  ];

  const [currentQ, setCurrentQ] = useState(0);
  const [finished, setFinished] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswer = (idx: number) => {
    if (idx === questions[currentQ].correct) setScore(s => s + 1);
    if (currentQ < questions.length - 1) {
      setCurrentQ(c => c + 1);
    } else {
      setFinished(true);
    }
  };

  if (finished) return (
    <div className="slide-enter text-center glass p-8 md:p-12 rounded-3xl mx-4">
      <Trophy className="w-12 h-12 md:w-16 md:h-16 text-emerald-400 mx-auto mb-6" />
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Quiz Terminé !</h2>
      <p className="text-xl md:text-2xl mb-8">Ton score : <span className="text-cyan-400">{score} / {questions.length}</span></p>
      <button 
        onClick={() => { setCurrentQ(0); setFinished(false); setScore(0); }}
        className="px-8 py-3 rounded-xl border border-white/20 hover:bg-white/5 transition-all text-sm md:text-base"
      >
        Recommencer
      </button>
    </div>
  );

  return (
    <div className="slide-enter w-full max-w-2xl px-4">
      <div className="text-cyan-400 mb-2 font-bold uppercase tracking-widest text-[10px] md:text-xs text-center">Quiz Nomad</div>
      <h2 className="text-xl md:text-3xl font-bold mb-8 text-center min-h-[4rem] flex items-center justify-center leading-tight">
        {questions[currentQ].question}
      </h2>
      <div className="grid gap-3 md:gap-4">
        {questions[currentQ].options.map((opt, i) => (
          <button 
            key={i} 
            onClick={() => handleAnswer(i)}
            className="p-5 md:p-6 glass rounded-2xl text-left hover:bg-cyan-500/10 hover:border-cyan-500/50 transition-all flex items-center gap-4 group"
          >
            <div className="w-6 h-6 md:w-8 md:h-8 rounded-full border border-white/20 flex items-center justify-center text-[10px] md:text-xs group-hover:bg-cyan-500 group-hover:border-cyan-500 transition-all shrink-0">
              {String.fromCharCode(65 + i)}
            </div>
            <span className="text-sm md:text-lg">{opt}</span>
          </button>
        ))}
      </div>
      <div className="mt-8 text-center text-slate-500 text-[10px] md:text-xs uppercase tracking-widest">Question {currentQ + 1} / {questions.length}</div>
    </div>
  );
};

const ContactSlide: React.FC = () => (
  <div className="slide-enter w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 px-4">
    <div className="space-y-6">
      <h2 className="text-4xl md:text-5xl font-black mb-6 leading-none">Rejoignez <span className="text-cyber uppercase">L'aventure</span></h2>
      <p className="text-slate-400 mb-8 leading-relaxed text-sm md:text-base">
        Soutenir la Délégation Française, c'est participer à la sauvegarde d'un patrimoine millénaire et au rayonnement de la France.
      </p>
      <div className="space-y-4">
        <div className="flex items-center gap-4 text-slate-300">
          <div className="p-3 glass rounded-xl shrink-0"><Mail className="w-4 h-4 md:w-5 md:h-5 text-cyan-400" /></div>
          <span className="text-xs md:text-sm">contact@jeuxnomadesfrance.fr</span>
        </div>
        <div className="flex items-center gap-4 text-slate-300">
          <div className="p-3 glass rounded-xl shrink-0"><Facebook className="w-4 h-4 md:w-5 md:h-5 text-cyan-400" /></div>
          <span className="text-xs md:text-sm">Jeux Nomades France</span>
        </div>
        <div className="flex items-center gap-4 text-slate-300">
          <div className="p-3 glass rounded-xl shrink-0"><MapPin className="w-4 h-4 md:w-5 md:h-5 text-cyan-400" /></div>
          <span className="text-xs md:text-sm">La Saulce (05) – France</span>
        </div>
      </div>
    </div>
    <div className="glass p-6 md:p-8 rounded-3xl flex flex-col justify-between">
      <div className="space-y-4 md:space-y-6">
        <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl">
          <div className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest mb-1">Hélène Mimenza</div>
          <div className="flex items-center gap-2 text-sm md:text-base"><Phone className="w-4 h-4" /> 06.16.08.01.74</div>
        </div>
        <div className="p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-2xl">
          <div className="text-[10px] text-cyan-400 font-bold uppercase tracking-widest mb-1">Éric Sotoca</div>
          <div className="flex items-center gap-2 text-sm md:text-base"><Phone className="w-4 h-4" /> 06.51.33.22.09</div>
        </div>
      </div>
      <div className="mt-8 p-6 cyber-gradient rounded-2xl text-center shadow-lg shadow-cyan-500/20">
        <div className="text-lg md:text-xl font-bold text-white">MERCI DE VOTRE SOUTIEN !</div>
        <div className="text-[10px] md:text-xs opacity-80 mt-1 uppercase tracking-widest">Ensemble vers 2026.</div>
      </div>
    </div>
  </div>
);

export default App;
