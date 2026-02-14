
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

// Components
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
  }, [currentSlide]);

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
    <div className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center p-4 md:p-8">
      {/* Background decoration */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-500/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-500/10 blur-[120px] rounded-full" />
      
      <ProgressBar current={currentSlide} total={totalSlides} />

      <main className="w-full max-w-6xl mx-auto flex-1 flex items-center justify-center">
        {renderSlide(currentSlide)}
      </main>

      {/* Navigation Controls */}
      <div className="fixed bottom-8 left-0 w-full flex justify-between px-8 z-40 pointer-events-none">
        <button 
          onClick={prevSlide}
          className={`p-4 rounded-full glass hover:bg-white/10 transition-all pointer-events-auto ${currentSlide === 0 ? 'opacity-0' : 'opacity-100'}`}
        >
          <ChevronLeft className="w-8 h-8 text-cyan-400" />
        </button>
        <button 
          onClick={nextSlide}
          className={`p-4 rounded-full glass hover:bg-white/10 transition-all pointer-events-auto ${currentSlide === totalSlides - 1 ? 'opacity-0' : 'opacity-100'}`}
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

// --- SLIDE COMPONENTS ---

const HeroSlide: React.FC = () => (
  <div className="slide-enter flex flex-col items-center text-center">
    <div className="mb-6 px-4 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm tracking-widest uppercase">
      Expédition Nomade 2026
    </div>
    <h1 className="text-5xl md:text-8xl font-bold mb-6 tracking-tight">
      Délégation <span className="text-cyber">Française</span>
    </h1>
    <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mb-12 font-light">
      Vers les World Nomad Games au Kirghizistan. Une aventure culturelle, sportive et humaine sans précédent.
    </p>
    <div className="flex flex-wrap justify-center gap-6">
      <div className="glass px-6 py-4 rounded-2xl flex items-center gap-3">
        <MapPin className="text-emerald-400" />
        <span>Kirghizistan</span>
      </div>
      <div className="glass px-6 py-4 rounded-2xl flex items-center gap-3">
        <Calendar className="text-cyan-400" />
        <span>30 Août — 6 Sept 2026</span>
      </div>
    </div>
  </div>
);

const PresidentSlide: React.FC = () => (
  <div className="slide-enter flex flex-col md:flex-row gap-12 items-center">
    <div className="md:w-1/2">
      <div className="relative">
        <div className="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-full" />
        {/* Photo de Hélène Mimenza mise à jour avec l'image fournie */}
        <div className="relative aspect-[3/4] overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
          <img 
            src="https://raw.githubusercontent.com/stackblitz/stackblitz-images/main/helene-mimenza.jpg" 
            alt="Hélène Mimenza" 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            onError={(e) => {
              // Fallback au cas où l'URL externe échouerait, utilisant un placeholder stylisé
              e.currentTarget.src = "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800&h=1000";
            }}
          />
        </div>
      </div>
    </div>
    <div className="md:w-1/2 space-y-6">
      <h2 className="text-4xl font-bold">Le mot de la <span className="text-cyber">Présidente</span></h2>
      <blockquote className="text-2xl italic font-light text-slate-300 leading-relaxed border-l-4 border-emerald-500 pl-6">
        "Les Jeux Nomades incarnent une vision du monde où la culture, la compétition et la fraternité se rejoignent."
      </blockquote>
      <p className="text-slate-400 leading-relaxed">
        Représenter la France à cet événement, c'est bien plus qu'une aventure sportive : c'est un engagement pour la transmission, la rencontre et la reconnaissance des patrimoines immatériels du monde.
      </p>
      <div className="font-bold text-emerald-400">— Hélène Mimenza</div>
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
    <div className="slide-enter w-full">
      <h2 className="text-4xl font-bold mb-12 text-center">Nos <span className="text-cyber">Missions</span></h2>
      <div className="grid md:grid-cols-3 gap-8">
        {missions.map((m, i) => (
          <div key={i} className="glass p-8 rounded-3xl hover:border-cyan-500/50 transition-all group">
            <m.icon className="w-12 h-12 text-cyan-400 mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-bold mb-4">{m.title}</h3>
            <p className="text-slate-400">{m.desc}</p>
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
    <div className="slide-enter w-full">
      <h2 className="text-4xl font-bold mb-12 text-center">La <span className="text-cyber">Dream Team</span> 2026</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {members.map((m, i) => (
          <div key={i} className="flip-card h-80">
            <div className="flip-card-inner h-full w-full">
              <div className="flip-card-front glass rounded-2xl overflow-hidden flex flex-col">
                <img src={m.image} className="h-2/3 object-cover grayscale" />
                <div className="p-4 flex-1 flex flex-col justify-center">
                  <div className="font-bold truncate">{m.name}</div>
                  <div className="text-xs text-cyan-400 uppercase tracking-tighter">{m.role}</div>
                </div>
              </div>
              <div className="flip-card-back glass rounded-2xl p-6 flex flex-col justify-center bg-slate-900 border-emerald-500/30">
                <div className="text-sm text-emerald-400 mb-2">Disciplines :</div>
                <div className="text-xs flex flex-wrap gap-1 mb-4">
                  {m.disciplines.map(d => <span key={d} className="bg-white/5 px-2 py-0.5 rounded border border-white/10">{d}</span>)}
                </div>
                <p className="text-xs text-slate-400 leading-tight">{m.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const AstanaSlide: React.FC = () => (
  <div className="slide-enter w-full max-w-4xl mx-auto glass p-8 md:p-12 rounded-[40px] relative overflow-hidden">
    <div className="absolute top-0 right-0 p-8">
      <Trophy className="w-24 h-24 text-emerald-500/20" />
    </div>
    <div className="flex flex-col md:flex-row gap-8 items-center">
      <div className="md:w-1/2">
        <h2 className="text-3xl font-bold mb-4 italic">Astana 2024</h2>
        <div className="text-emerald-400 text-5xl font-black mb-6">ÉCLATANT</div>
        <ul className="space-y-4 text-lg">
          <li className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span><strong className="text-white">Clara Sotoca :</strong> 5ème / 40 en Awalé</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span><strong className="text-white">Éric Sotoca :</strong> 22ème en Awalé</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span>Compétition de +30 nations</span>
          </li>
        </ul>
      </div>
      <div className="md:w-1/2">
        <div className="p-4 bg-white/5 rounded-3xl border border-white/10">
          <img src="https://images.unsplash.com/photo-1558588942-930faae5a389?auto=format&fit=crop&q=80&w=500&h=300" className="rounded-2xl object-cover" alt="Astana event" />
        </div>
      </div>
    </div>
  </div>
);

const KyrgyzstanSlide: React.FC = () => (
  <div className="slide-enter text-center">
    <div className="mb-4 text-emerald-400 font-bold tracking-widest uppercase">Objectif Suivant</div>
    <h2 className="text-6xl font-black mb-8">KIRGHIZISTAN <span className="text-cyber">2026</span></h2>
    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      <div className="glass p-8 rounded-3xl flex flex-col items-center">
        <Globe className="w-12 h-12 text-cyan-400 mb-4" />
        <div className="text-3xl font-bold">+80</div>
        <div className="text-slate-400">Nations participantes</div>
      </div>
      <div className="glass p-8 rounded-3xl flex flex-col items-center">
        <Trophy className="w-12 h-12 text-emerald-400 mb-4" />
        <div className="text-3xl font-bold">Top 10</div>
        <div className="text-slate-400">Notre objectif sportif</div>
      </div>
    </div>
    <p className="mt-12 text-slate-400 max-w-2xl mx-auto italic">
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
    <div className="slide-enter w-full">
      <h2 className="text-4xl font-bold mb-12 text-center">Les <span className="text-cyber">Disciplines</span></h2>
      <div className="grid md:grid-cols-3 gap-8">
        {games.map((g, i) => (
          <div key={i} className="group relative overflow-hidden glass p-8 rounded-3xl h-64 flex flex-col justify-end hover:bg-white/5 transition-all">
            <div className="absolute top-8 left-8 text-xs font-bold text-cyan-400 tracking-widest uppercase">{g.origin}</div>
            <div className="text-3xl font-black mb-2 group-hover:translate-x-2 transition-transform">{g.name}</div>
            <p className="text-sm text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500">{g.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const ObjectivesSlide: React.FC = () => {
  const goals = [
    { icon: Trophy, label: "Sportifs", text: "Atteindre le top 10 mondial." },
    { icon: Globe, label: "Culturels", text: "Faire connaître le patrimoine africain et turc." },
    { icon: Lightbulb, label: "Éducatifs", text: "Sensibiliser les jeunes aux valeurs du jeu." },
    { icon: Handshake, label: "Diplomatiques", text: "Renforcer la coopération interculturelle." }
  ];
  return (
    <div className="slide-enter w-full max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center">Nos <span className="text-cyber">Objectifs</span></h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {goals.map((g, i) => (
          <div key={i} className="flex gap-6 p-6 glass rounded-2xl items-center">
            <div className="p-4 bg-white/5 rounded-xl">
              <g.icon className="w-8 h-8 text-emerald-400" />
            </div>
            <div>
              <div className="font-bold text-cyan-400">{g.label}</div>
              <div className="text-slate-400">{g.text}</div>
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
    { question: "Quel est le score record de Clara Sotoca en 2024 ?", options: ["3ème", "5ème", "10ème", "1ère"], correct: 1 },
    { question: "Quelle discipline vient de Turquie ?", options: ["Awalé", "Togyz Qumalaq", "Mangala", "Echecs"], correct: 2 },
    { question: "Combien de joueuses/joueurs composent la délégation ?", options: ["3", "10", "5", "8"], correct: 2 }
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
    <div className="slide-enter text-center glass p-12 rounded-3xl">
      <Trophy className="w-16 h-16 text-emerald-400 mx-auto mb-6" />
      <h2 className="text-4xl font-bold mb-4">Quiz Terminé !</h2>
      <p className="text-2xl mb-8">Ton score : <span className="text-cyan-400">{score} / {questions.length}</span></p>
      <button 
        onClick={() => { setCurrentQ(0); setFinished(false); setScore(0); }}
        className="px-8 py-3 rounded-xl border border-white/20 hover:bg-white/5 transition-all"
      >
        Recommencer
      </button>
    </div>
  );

  return (
    <div className="slide-enter w-full max-w-2xl">
      <div className="text-cyan-400 mb-2 font-bold uppercase tracking-widest text-sm text-center">Quiz Nomad</div>
      <h2 className="text-3xl font-bold mb-8 text-center">{questions[currentQ].question}</h2>
      <div className="grid gap-4">
        {questions[currentQ].options.map((opt, i) => (
          <button 
            key={i} 
            onClick={() => handleAnswer(i)}
            className="p-6 glass rounded-2xl text-left hover:bg-cyan-500/10 hover:border-cyan-500/50 transition-all flex items-center gap-4 group"
          >
            <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-xs group-hover:bg-cyan-500 group-hover:border-cyan-500 transition-all">
              {String.fromCharCode(65 + i)}
            </div>
            <span className="text-lg">{opt}</span>
          </button>
        ))}
      </div>
      <div className="mt-8 text-center text-slate-500 text-sm">Question {currentQ + 1} / {questions.length}</div>
    </div>
  );
};

const ContactSlide: React.FC = () => (
  <div className="slide-enter w-full max-w-4xl grid md:grid-cols-2 gap-12">
    <div>
      <h2 className="text-5xl font-black mb-6">REJOIGNEZ <span className="text-cyber">L'AVENTURE</span></h2>
      <p className="text-slate-400 mb-8 leading-relaxed">
        Soutenir la Délégation Française, c'est participer à la sauvegarde d'un patrimoine millénaire et au rayonnement de la France.
      </p>
      <div className="space-y-4">
        <div className="flex items-center gap-4 text-slate-300">
          <div className="p-3 glass rounded-xl"><Mail className="w-5 h-5 text-cyan-400" /></div>
          <span>contact@jeuxnomadesfrance.fr</span>
        </div>
        <div className="flex items-center gap-4 text-slate-300">
          <div className="p-3 glass rounded-xl"><Facebook className="w-5 h-5 text-cyan-400" /></div>
          <span>Jeux Nomades France</span>
        </div>
        <div className="flex items-center gap-4 text-slate-300">
          <div className="p-3 glass rounded-xl"><MapPin className="w-5 h-5 text-cyan-400" /></div>
          <span>La Saulce (05) – France</span>
        </div>
      </div>
    </div>
    <div className="glass p-8 rounded-3xl flex flex-col justify-between">
      <div className="space-y-6">
        <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl">
          <div className="text-xs text-emerald-400 font-bold uppercase tracking-widest mb-1">Hélène Mimenza</div>
          <div className="flex items-center gap-2"><Phone className="w-4 h-4" /> 06.16.08.01.74</div>
        </div>
        <div className="p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-2xl">
          <div className="text-xs text-cyan-400 font-bold uppercase tracking-widest mb-1">Éric Sotoca</div>
          <div className="flex items-center gap-2"><Phone className="w-4 h-4" /> 06.51.33.22.09</div>
        </div>
      </div>
      <div className="mt-8 p-6 cyber-gradient rounded-2xl text-center">
        <div className="text-xl font-bold">MERCI DE VOTRE SOUTIEN !</div>
        <div className="text-sm opacity-80 mt-1">Ensemble vers 2026.</div>
      </div>
    </div>
  </div>
);

export default App;
