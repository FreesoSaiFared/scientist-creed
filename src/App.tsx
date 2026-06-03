import { useState, useEffect, useRef } from "react";
import {
  Compass,
  Atom,
  Scroll,
  GitCompare,
  Sparkles,
  Play,
  Pause,
  RotateCcw,
  Layers,
  ChevronRight,
  Eye,
  Activity,
  Heart,
  BookOpen,
  HelpCircle,
  Users,
  Award,
  Globe,
  Shuffle
} from "lucide-react";
import {
  scientificPrinciples,
  creedPhrases,
  comparisonPairs,
  metaphysicalPoints,
  contemplativePrinciples
} from "./data";

export default function App() {
  const [activeTab, setActiveTab] = useState<number>(1);
  const [revealedStates, setRevealedStates] = useState<boolean[]>(() =>
    Array(24).fill(false)
  );
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const [hoveredCompareIndex, setHoveredCompareIndex] = useState<number | null>(null);
  const [selectedP1Index, setSelectedP1Index] = useState<number>(0);
  const [selectedP5Index, setSelectedP5Index] = useState<number>(0);
  const [expandedMetaphysicalCard, setExpandedMetaphysicalCard] = useState<number | null>(null);
  const [p5AlignmentActive, setP5AlignmentActive] = useState<boolean>(true);

  // Auto-reveal logic on Page 2
  useEffect(() => {
    if (activeTab !== 2 || !isAutoPlaying) return;

    const interval = setInterval(() => {
      setRevealedStates((prev) => {
        const nextIndex = prev.findIndex((r) => !r);
        if (nextIndex === -1) {
          setIsAutoPlaying(false);
          clearInterval(interval);
          return prev;
        }
        const next = [...prev];
        next[nextIndex] = true;
        return next;
      });
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [activeTab, isAutoPlaying]);

  // Click on single phrase to toggle revealed state
  const handleTogglePhrase = (index: number) => {
    setRevealedStates((prev) => {
      const next = [...prev];
      next[index] = !next[index];
      return next;
    });
  };

  const handleRevealAll = () => {
    setRevealedStates(Array(24).fill(true));
  };

  const handleResetCredal = () => {
    setRevealedStates(Array(24).fill(false));
    setIsAutoPlaying(false);
  };

  // Quick statistics for Page 2
  const revealedCount = revealedStates.filter(Boolean).length;
  const revealedPercentage = Math.round((revealedCount / 24) * 100);

  // Inline InteractivePhrase sub-component to ensure self-containment
  function InteractivePhrase({ index }: { index: number }) {
    const phrase = creedPhrases[index];
    const isRevealed = revealedStates[index];
    const [displayText, setDisplayText] = useState(isRevealed ? phrase.creedal : phrase.palatable);
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
      const targetText = isRevealed ? phrase.creedal : phrase.palatable;
      if (displayText !== targetText) {
        setIsTransitioning(true);
        const timer = setTimeout(() => {
          setDisplayText(targetText);
          setIsTransitioning(false);
        }, 200);
        return () => clearTimeout(timer);
      }
    }, [isRevealed, phrase]);

    return (
      <button
        onClick={() => handleTogglePhrase(index)}
        className={`inline-block border-b px-1 py-0.5 rounded text-left transition-all duration-300 leading-none mx-0.5 select-none ${
          isRevealed
            ? "bg-indigo-50/90 border-indigo-500 text-indigo-900 font-serif font-semibold shadow-sm decoration-indigo-300 shadow-indigo-100/40"
            : "bg-slate-100/70 hover:bg-slate-200/90 border-slate-400 border-dashed text-slate-700 cursor-pointer"
        }`}
        style={{
          opacity: isTransitioning ? 0 : 1,
          transform: `scale(${isTransitioning ? 0.95 : 1}) translateY(${isTransitioning ? "2px" : "0px"})`,
          transitionProperty: "opacity, transform, background-color, border-color, color"
        }}
        title={isRevealed ? "Click to revert to Professional terminology" : "Click to reveal Creedal equivalent"}
      >
        {displayText}
      </button>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col selection:bg-indigo-100 selection:text-indigo-900">
      {/* Decorative Upper Border Pattern */}
      <div className="h-1.5 bg-gradient-to-r from-slate-400 via-indigo-600 to-slate-700 w-full" />

      {/* Main Premium Header */}
      <header className="bg-white border-b border-slate-200 py-6 px-4 sm:px-6 lg:px-8 shadow-xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-indigo-600 font-semibold tracking-wider text-xs uppercase mb-1">
              <Compass className="w-4 h-4 animate-spin-slow" />
              <span>A Conceptual Journey Through Two Creeds</span>
            </div>
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight font-sans">
              A Journey Through Two Creeds
            </h1>
            <p className="text-slate-500 text-sm mt-1">
              An interactive comparative exploration of scientific empiricism, liturgical translation, and contemplative inquiry.
            </p>
          </div>

          {/* Social and Attribution Info */}
          <div className="flex items-center gap-2 self-start md:self-center text-xs text-slate-400 font-mono bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
            <span>v1.0.0</span>
            <span className="text-slate-300">|</span>
            <span>Philosophical Synthesis</span>
          </div>
        </div>
      </header>

      {/* Navigation Dock */}
      <div className="sticky top-0 z-40 bg-slate-50/90 backdrop-blur-md border-b border-slate-200 py-4 px-4 shadow-2xs">
        <div className="max-w-7xl mx-auto">
          <nav className="flex flex-wrap gap-2 justify-center sm:justify-start" aria-label="Tabs">
            {[
              { id: 1, label: "1. The Scientific Charter", icon: Atom },
              { id: 2, label: "2. The Scientist's Creed", icon: Scroll },
              { id: 3, label: "3. Point of Convergence", icon: GitCompare },
              { id: 4, label: "4. The Nuanced Creed", icon: Layers },
              { id: 5, label: "5. Contemplative Principles", icon: Sparkles }
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  id={`tab-button-${tab.id}`}
                  onClick={() => {
                    setActiveTab(tab.id);
                    // Standard accessibility & quick user navigation setup
                  }}
                  className={`flex items-center gap-2 py-2 px-4 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-slate-900 text-white shadow-md shadow-slate-950/10 scale-[1.02]"
                      : "bg-white text-slate-600 hover:text-slate-950 hover:bg-slate-100 border border-slate-200"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? "text-indigo-400" : "text-slate-400"}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Main Context Stage */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 w-full">
        {/* PAGE 1: THE PROFESSIONAL CHARTER */}
        {activeTab === 1 && (
          <div className="animate-fade-in duration-500">
            <div className="bg-white rounded-3xl border border-slate-200/80 p-6 md:p-8 shadow-sm">
              <div className="border-b border-slate-100 pb-6 mb-6">
                <div className="flex items-center gap-2 text-indigo-600 text-xs font-semibold uppercase tracking-wider mb-1">
                  <span>Step 1 of 5</span>
                  <span>•</span>
                  <span>Systematic Foundations</span>
                </div>
                <h2 className="text-3xl font-extrabold text-slate-800 tracking-tight leading-none mb-2">
                  Page 1: The Professional Charter
                </h2>
                <p className="text-slate-500 text-lg font-serif">
                  A Statement of Principles for the Scientific Endeavor
                </p>
                <p className="text-slate-500 text-sm mt-3 max-w-3xl leading-relaxed">
                  The primary pillar of modern civilization is built upon an objective, rigorous model of nature.
                  Here are the 12 agreeable, standard principles that govern peer-vetted scientific inquiry.
                </p>
              </div>

              {/* Two Column Layout: Left list index, Right detail card */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left hand list */}
                <div className="lg:col-span-7 space-y-3">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-2 mb-2">
                    Principles Directory
                  </div>
                  {scientificPrinciples.map((principle, index) => {
                    const isSelected = selectedP1Index === index;
                    return (
                      <button
                        key={principle.id}
                        id={`p1-item-${principle.id}`}
                        onClick={() => setSelectedP1Index(index)}
                        className={`w-full text-left p-4 rounded-xl border transition-all duration-200 cursor-pointer flex items-start gap-4 ${
                          isSelected
                            ? "bg-slate-50 border-indigo-500 shadow-sm ring-1 ring-indigo-500/20"
                            : "bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/50"
                        }`}
                      >
                        <div
                          className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold font-mono text-xs shrink-0 transition-colors ${
                            isSelected
                              ? "bg-indigo-600 text-white"
                              : "bg-slate-100 text-slate-600"
                          }`}
                        >
                          {principle.id}
                        </div>
                        <div className="space-y-0.5">
                          <div className="text-xs font-semibold text-indigo-600 uppercase tracking-wider">
                            {principle.label}
                          </div>
                          <div className="font-bold text-slate-900 text-sm">
                            {principle.title}
                          </div>
                          <p className="text-slate-500 text-xs line-clamp-1">
                            {principle.content}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Right hand detail panel */}
                <div className="lg:col-span-5">
                  <div className="sticky top-28 space-y-6">
                    <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-md border border-slate-800">
                      <div className="flex items-center gap-2 text-indigo-400 text-xs font-mono uppercase tracking-widest mb-4">
                        <Atom className="w-5 h-5" />
                        <span>Interactive Lounge</span>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <span className="text-[10px] font-mono uppercase bg-slate-800 text-slate-300 px-2 py-1 rounded">
                            {scientificPrinciples[selectedP1Index].label}
                          </span>
                          <h3 className="text-xl font-bold text-white mt-3 font-sans tracking-tight">
                            {scientificPrinciples[selectedP1Index].title}
                          </h3>
                        </div>

                        <p className="text-slate-300 font-serif text-lg leading-relaxed border-l-2 border-indigo-500 pl-4 py-1 italic">
                          "{scientificPrinciples[selectedP1Index].content}"
                        </p>

                        <div className="pt-4 border-t border-slate-800 space-y-3">
                          <div className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
                            Epistemic Rationale
                          </div>
                          <p className="text-xs text-slate-400 leading-relaxed">
                            {selectedP1Index === 0 && "Establishes a solid, predictable canvas for mathematical measurement. Nature is assumed to containing no capricious or whimsical hidden rules."}
                            {selectedP1Index === 1 && "Formulates the empirical triad: sensory observation, hypothetical geometry, and logical/inductive verification, securing a systematic framework."}
                            {selectedP1Index === 2 && "Secures an intellectual counter-history. Epistemic authority moved from scholastic and traditional clergy pulpits to experimental chambers."}
                            {selectedP1Index === 3 && "Allows statements to be checked against reality. If a hypothesis contradicts concrete data, the idea is modified or abandoned."}
                            {selectedP1Index === 4 && "Demands that evidence supersedes personal rank, political position, or religious status of the claimant."}
                            {selectedP1Index === 5 && "Protects the community against absolute convictions. All paradigms remain open to correction if better data arrives."}
                            {selectedP1Index === 6 && "Rooted in human psychological wonder. Science aligns the child-like drive to ask 'Why' with rigorous logical armor."}
                            {selectedP1Index === 7 && "Transcends boundaries of language, country, and gender. Math and data serve as a unified global translation medium."}
                            {selectedP1Index === 8 && "Cumulative wisdom. We see further because we stand upon the robust intellectual shoulders of giants."}
                            {selectedP1Index === 9 && "Ethical pivot of scientific self-policing. Refinement depends on transparency; hiding mistakes is a critical failure."}
                            {selectedP1Index === 10 && "Value transfer. The abstract formulas manifest physically as diagnostic scanners, solar grids, and universal knowledge routing."}
                            {selectedP1Index === 11 && "Sovereign purpose of the endeavor. Knowledge must alleviate suffering, expand horizons, and secure long-term physical continuation."}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Quick navigation hint */}
                    <div className="bg-indigo-50/50 rounded-xl p-4 border border-indigo-100 flex items-start gap-3">
                      <HelpCircle className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-xs font-bold text-indigo-900">Epistemic Symmetry Profile</h4>
                        <p className="text-xs text-indigo-800/80 mt-1 leading-relaxed">
                          Note how these 12 secular anchors form the architectural blueprint of Page 2, where they undergo liturgical translation into evocative creedal statements.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* PAGE 2: THE SCIENTIST'S CREED */}
        {activeTab === 2 && (
          <div className="animate-fade-in duration-500">
            <div className="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 shadow-sm">
              <div className="border-b border-slate-100 pb-6 mb-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 text-indigo-600 text-xs font-semibold uppercase tracking-wider mb-1">
                      <span>Step 2 of 5</span>
                      <span>•</span>
                      <span>The Scientific Liturgy</span>
                    </div>
                    <h2 className="text-3xl font-extrabold text-slate-800 tracking-tight leading-none mb-2 font-sans">
                      Page 2: The Scientist's Creed
                    </h2>
                    <p className="text-slate-500 text-sm mt-1">
                      Click highlighted phrases or use the controls below to watch the standard professional text transition into liturgical prose.
                    </p>
                  </div>

                  {/* Manual / Auto Controllers */}
                  <div className="bg-slate-50 p-2 rounded-2xl border border-slate-200 flex flex-wrap gap-1 items-center self-start sm:self-center">
                    <button
                      onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                        isAutoPlaying
                          ? "bg-indigo-600 text-white shadow-xs"
                          : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200"
                      }`}
                      title={isAutoPlaying ? "Pause the automated reveal timer" : "Start automated reveal (2s interval)"}
                    >
                      {isAutoPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                      <span>{isAutoPlaying ? "Auto-Revealing" : "Auto-Reveal"}</span>
                    </button>

                    <button
                      onClick={handleRevealAll}
                      className="px-2.5 py-1.5 bg-white border border-slate-200 text-slate-600 hover:bg-slate-100/80 hover:text-slate-900 rounded-lg text-xs font-medium cursor-pointer"
                    >
                      Reveal All
                    </button>

                    <button
                      onClick={handleResetCredal}
                      className="p-1.5 bg-white border border-slate-200 text-slate-600 hover:bg-red-50 hover:text-red-700 rounded-lg hover:border-red-200 cursor-pointer"
                      title="Reset all phrases to palatable scientific state"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Progress bar container */}
                <div className="mt-6">
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-1">
                    <span>TRANSLATION PROGRESS</span>
                    <span className="font-bold text-indigo-600">{revealedCount} / 24 Phrases ({revealedPercentage}%)</span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden border border-slate-200/50">
                    <div
                      className="h-full bg-gradient-to-r from-indigo-500 to-indigo-700 transition-all duration-500"
                      style={{ width: `${revealedPercentage}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* LITURGICAL MANUSCRIPT RENDER */}
              <div className="max-w-3xl mx-auto my-8 bg-amber-50/20 border-2 border-slate-200 rounded-2xl p-6 sm:p-10 shadow-xs relative overflow-hidden">
                {/* Liturgical watermarks/accents */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50/30 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-amber-50 rounded-full blur-2xl pointer-events-none" />

                {/* Typography Instructions */}
                <div className="text-center font-mono text-xs text-slate-400 tracking-wider uppercase mb-8 pb-3 border-b border-dashed border-slate-200">
                  † Creedal Formulation Document †
                </div>

                {/* Interactive Creed Prose */}
                <div className="font-serif text-slate-800 text-base sm:text-lg md:text-xl leading-loose tracking-wide md:leading-extra-loose text-justify space-y-6">
                  <p>
                    We believe in one Universe, the Material and the Cosmos, operating{" "}
                    <InteractivePhrase index={0} /> and of its own consistent nature, of all things visible and invisible.
                    And in Science, the child of observation,{" "}
                    <InteractivePhrase index={1} />, through which the structures of nature are made manifest.
                  </p>

                  <p>
                    Which for the advancement of human understanding was{" "}
                    <InteractivePhrase index={2} /> and{" "}
                    <InteractivePhrase index={3} />.{" "}
                    <InteractivePhrase index={4} /> it{" "}
                    <InteractivePhrase index={5} />, having{" "}
                    <InteractivePhrase index={6} /> and{" "}
                    <InteractivePhrase index={7} />.
                  </p>

                  <p>
                    It{" "}
                    <InteractivePhrase index={8} /> and was{" "}
                    <InteractivePhrase index={9} />, and we believe all claims must{" "}
                    <InteractivePhrase index={10} />.{" "}
                    <InteractivePhrase index={11} /> the living and the dead ideas, and{" "}
                    <InteractivePhrase index={12} />.
                  </p>

                  <p>
                    And we believe in the{" "}
                    <InteractivePhrase index={13} />,{" "}
                    <InteractivePhrase index={14} />, who with Logic and Evidence is{" "}
                    <InteractivePhrase index={15} />. Who spoke through the founders and explorers of old.
                  </p>

                  <p>
                    We believe in an{" "}
                    <InteractivePhrase index={16} /> and global scientific community, and we acknowledge the{" "}
                    <InteractivePhrase index={17} />, the legacy of{" "}
                    <InteractivePhrase index={18} />, and{" "}
                    <InteractivePhrase index={19} /> as the path toward{" "}
                    <InteractivePhrase index={20} />.
                  </p>

                  <span className="block mt-6">
                    We look for the{" "}
                    <InteractivePhrase index={21} />, and the{" "}
                    <InteractivePhrase index={22} /> under the{" "}
                    <InteractivePhrase index={23} />, that humanity may{" "}
                    <span className="font-sans font-bold text-slate-900 border-b border-indigo-200">steward the earth</span> and master its future, and our children shall reach for the stars. Amen.
                  </span>
                </div>

                {/* Interactive Legend Footnote */}
                <div className="mt-8 pt-4 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs text-slate-400">
                  <span className="italic">
                    * Hover to identify active replacements. Click any term to toggle its state.
                  </span>
                  <div className="flex items-center gap-1.5 self-start">
                    <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                    <span className="font-mono text-[10px]">LITURGICAL SYNTACTIC DECODER ACTIVE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* PAGE 3: THE POINT OF CONVERGENCE */}
        {activeTab === 3 && (
          <div className="animate-fade-in duration-500">
            <div className="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 shadow-sm">
              <div className="border-b border-slate-100 pb-6 mb-6">
                <div className="flex items-center gap-2 text-indigo-600 text-xs font-semibold uppercase tracking-wider mb-1">
                  <span>Step 3 of 5</span>
                  <span>•</span>
                  <span>Comparative Anatomy</span>
                </div>
                <h2 className="text-3xl font-extrabold text-slate-800 tracking-tight leading-none mb-2">
                  Page 3: The Point of Convergence
                </h2>
                <p className="text-slate-500 text-lg font-serif">
                  A Side-by-Side Architectural Mapping
                </p>
                <p className="text-slate-500 text-sm mt-3 max-w-3xl leading-relaxed">
                  Below lies a precise, line-by-line comparison of modern rationalist aspiration and the ancient Apostles'/Nicene Creed.
                  Note the exact narrative and grammatical symmetry in how truth, struggle, authority, and eternity are structured in both structures.
                </p>
              </div>

              {/* Grid workspace */}
              <div className="space-y-4">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-2 mb-2 flex items-center justify-between">
                  <span>Structural Symmetry Modules</span>
                  <span className="font-mono text-indigo-500">11 Convergence Keys</span>
                </div>

                {comparisonPairs.map((pair, index) => {
                  const isHovered = hoveredCompareIndex === index;
                  return (
                    <div
                      key={pair.id}
                      id={`compare-row-${pair.id}`}
                      onMouseEnter={() => setHoveredCompareIndex(index)}
                      onMouseLeave={() => setHoveredCompareIndex(null)}
                      className={`p-5 rounded-2xl border transition-all duration-300 ${
                        isHovered
                          ? "bg-indigo-50/50 border-indigo-400 shadow-sm"
                          : "bg-white border-slate-200"
                      }`}
                    >
                      {/* Topic title block */}
                      <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-100">
                        <div className="flex items-center gap-2">
                          <span className="w-5 h-5 bg-slate-100 rounded-full flex items-center justify-center font-mono text-[10px] font-bold text-slate-600">
                            {pair.id}
                          </span>
                          <h4 className="text-xs font-bold text-indigo-900 uppercase tracking-wider">
                            {pair.topic}
                          </h4>
                        </div>
                        <span className="text-[10px] font-mono font-medium text-slate-400">
                          STRUCTURAL ALIGNMENT
                        </span>
                      </div>

                      {/* Columns */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Right rationalist creed content */}
                        <div className="space-y-1.5 flex flex-col justify-between">
                          <div>
                            <span className="text-[10px] uppercase font-mono font-bold text-indigo-600 bg-indigo-50 px-1.5 py-0.5 rounded tracking-widest">
                              The Scientist's Creed (Liturgical)
                            </span>
                            <blockquote className="text-sm md:text-base text-slate-800 font-serif leading-relaxed italic mt-2 pl-3 border-l-2 border-indigo-300">
                              "{pair.scientific}"
                            </blockquote>
                          </div>
                        </div>

                        {/* Traditional faith basis content */}
                        <div className="space-y-1.5 flex flex-col justify-between">
                          <div>
                            <span className="text-[10px] uppercase font-mono font-bold text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded tracking-widest">
                              Apostles' / Nicene Creed basis
                            </span>
                            <blockquote className="text-sm md:text-base text-slate-600 font-serif leading-relaxed italic mt-2 pl-3 border-l-2 border-slate-300">
                              "{pair.christian}"
                            </blockquote>
                          </div>
                        </div>
                      </div>

                      {/* Symmetry Synthesis */}
                      <div className={`mt-4 pt-3 border-t border-dashed border-slate-200 transition-all duration-300 overflow-hidden ${
                        isHovered ? "opacity-100 max-h-40" : "opacity-70 max-h-16"
                      }`}>
                        <div className="flex items-start gap-2 text-xs">
                          <BookOpen className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                          <div>
                            <span className="font-bold text-slate-700">Comparative Balance Note:</span>{" "}
                            <span className="text-slate-500 leading-relaxed italic">{pair.symmetryNote}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* PAGE 4: THE NUANCED CREED */}
        {activeTab === 4 && (
          <div className="animate-fade-in duration-500">
            <div className="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 shadow-sm">
              <div className="border-b border-slate-100 pb-6 mb-6">
                <div className="flex items-center gap-2 text-indigo-600 text-xs font-semibold uppercase tracking-wider mb-1">
                  <span>Step 4 of 5</span>
                  <span>•</span>
                  <span>Existential Hermeneutics</span>
                </div>
                <h2 className="text-3xl font-extrabold text-slate-800 tracking-tight leading-none mb-2">
                  Page 4: The Nuanced Creed
                </h2>
                <p className="text-slate-500 text-lg font-serif">
                  A Metaphysical Interpretation of the Creed
                </p>
                <p className="text-slate-500 text-sm mt-3 max-w-3xl leading-relaxed">
                  Traditional theological dogmas are not merely literal decrees about past events. When parsed philosophically and psychologically,
                  they represent profound human maps of somatic existence, subjective suffering, cognitive rebirth, and existential reconciliation.
                </p>
              </div>

              {/* Bento grid layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {metaphysicalPoints.map((point) => {
                  const isExpanded = expandedMetaphysicalCard === point.id;
                  return (
                    <div
                      key={point.id}
                      id={`metaphysical-card-${point.id}`}
                      onClick={() => setExpandedMetaphysicalCard(isExpanded ? null : point.id)}
                      className={`p-5 rounded-2xl border transition-all duration-300 text-left flex flex-col justify-between cursor-pointer ${
                        isExpanded
                          ? "col-span-1 md:col-span-2 lg:col-span-3 bg-slate-900 border-slate-800 text-white shadow-lg shadow-slate-950/20"
                          : "bg-white border-slate-200 hover:border-slate-300 hover:shadow-sm"
                      }`}
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className={`w-8 h-8 rounded-lg flex items-center justify-center font-mono font-bold text-xs ${
                            isExpanded ? "bg-indigo-600 text-white animate-pulse" : "bg-indigo-50 text-indigo-600"
                          }`}>
                            {point.id}
                          </span>
                          <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest">
                            PHILOSOPHICAL CODE
                          </span>
                        </div>

                        <div>
                          <div className={`text-[10px] font-mono uppercase tracking-widest ${isExpanded ? "text-indigo-400" : "text-slate-400"}`}>
                            Original Concept:
                          </div>
                          <div className={`text-xs font-serif font-semibold italic mt-0.5 ${isExpanded ? "text-slate-300" : "text-slate-600"}`}>
                            "{point.originalConcept}"
                          </div>
                        </div>

                        <h3 className={`text-lg font-bold font-sans tracking-tight ${isExpanded ? "text-white" : "text-slate-900"}`}>
                          {point.title}
                        </h3>

                        <p className={`text-sm leading-relaxed ${isExpanded ? "text-slate-200 font-serif text-base" : "text-slate-500 line-clamp-3"}`}>
                          {point.content}
                        </p>

                        {/* Expanded existential block */}
                        {isExpanded && (
                          <div className="mt-4 pt-4 border-t border-slate-800 space-y-2 animate-fade-in">
                            <div className="text-xs font-bold text-indigo-400 uppercase tracking-widest flex items-center gap-1.5ClassName">
                              <Eye className="w-4 h-4 text-indigo-500" />
                              <span>Subjective Existential Reality:</span>
                            </div>
                            <p className="text-slate-300 text-sm leading-relaxed italic bg-slate-950/60 p-4 rounded-xl border border-slate-800/80 font-serif">
                              "{point.existentialReality}"
                            </p>
                          </div>
                        )}
                      </div>

                      <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold">
                        <span className={`text-[10px] font-sans ${isExpanded ? "text-indigo-400" : "text-indigo-600"}`}>
                          {isExpanded ? "Click to collapse overview" : "Click to view full interpretation"}
                        </span>
                        <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${
                          isExpanded ? "rotate-90 text-indigo-400" : "text-slate-400"
                        }`} />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Contemplative transition panel */}
              <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 mt-10 border border-slate-800 relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-2 max-w-2xl">
                  <span className="px-2.5 py-1 bg-indigo-900/60 text-indigo-300 rounded text-xs tracking-widest font-mono uppercase">
                    Metaphysical Junction
                  </span>
                  <h3 className="text-xl font-bold tracking-tight">
                    Ready to explore the subjective science?
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed font-serif">
                    The sifting of physical equations (Page 1) and theological structures (Page 4) culminates in a unified 
                    Contemplative Science—where Consciousness itself is assessed under the most rigorous, first-person discipline.
                  </p>
                </div>
                <button
                  onClick={() => setActiveTab(5)}
                  className="px-5 py-3 bg-white text-slate-900 rounded-xl hover:bg-slate-100 transition-all font-semibold text-sm cursor-pointer whitespace-nowrap self-start md:self-center shrink-0 border border-slate-200"
                >
                  Step Into Contemplative Principles
                </button>
              </div>
            </div>
          </div>
        )}

        {/* PAGE 5: THE CONTEMPLATIVE PRINCIPLES */}
        {activeTab === 5 && (
          <div className="animate-fade-in duration-500">
            <div className="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 shadow-sm">
              <div className="border-b border-slate-100 pb-6 mb-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 text-indigo-600 text-xs font-semibold uppercase tracking-wider mb-1">
                      <span>Step 5 of 5</span>
                      <span>•</span>
                      <span>The Subjective Turn</span>
                    </div>
                    <h2 className="text-3xl font-extrabold text-slate-800 tracking-tight leading-none mb-2">
                      Page 5: The Contemplative Principles
                    </h2>
                    <p className="text-slate-500 text-lg font-serif">
                      A Statement of Principles for Contemplative Inquiry
                    </p>
                  </div>

                  {/* Visual alignment mode selectors */}
                  <div className="p-1 bg-slate-100 rounded-xl border border-slate-200/50 flex items-center self-start sm:self-center">
                    <button
                      onClick={() => setP5AlignmentActive(true)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                        p5AlignmentActive
                          ? "bg-white text-slate-900 shadow-xs"
                          : "text-slate-500 hover:text-slate-800"
                      }`}
                    >
                      Aligned Portal
                    </button>
                    <button
                      onClick={() => setP5AlignmentActive(false)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                        !p5AlignmentActive
                          ? "bg-white text-slate-900 shadow-xs"
                          : "text-slate-500 hover:text-slate-800"
                      }`}
                    >
                      Strict Directory
                    </button>
                  </div>
                </div>

                <p className="text-slate-500 text-sm mt-3 max-w-3xl leading-relaxed">
                  By declaring Consciousness itself as primary, we can project the exact 12-point rigor of the Scientific Charter
                  inwards. Contemplative practice functions not as vague superstition, but as a systematic, verifiable introspective inquiry.
                </p>
              </div>

              {p5AlignmentActive ? (
                /* INTERACTIVE PARALLEL ALIGNMENT PORTAL */
                <div className="space-y-6">
                  <div className="bg-indigo-50/50 rounded-2xl p-4 border border-indigo-100/75 text-xs text-indigo-900 flex items-center justify-between">
                    <span className="font-serif">
                      Showing structural symmetry between <strong>The Scientific Charter</strong> (Page 1) and <strong>The Contemplative Charter</strong> (Page 5).
                    </span>
                    <span className="font-mono text-[10px] font-bold text-indigo-700 bg-indigo-100 px-2 py-0.5 rounded">
                      SYNTAX COMPARED BY INDEX
                    </span>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Index List - 12 matching steps */}
                    <div className="lg:col-span-5 space-y-2">
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1 mb-2">
                        Alignment Anchors
                      </div>
                      {contemplativePrinciples.map((contPrinciple, idx) => {
                        const isSelected = selectedP5Index === idx;
                        return (
                          <button
                            key={contPrinciple.id}
                            onClick={() => setSelectedP5Index(idx)}
                            className={`w-full text-left p-3.5 rounded-xl border transition-all duration-200 cursor-pointer flex items-center justify-between ${
                              isSelected
                                ? "bg-indigo-50 border-indigo-600 shadow-sm ring-1 ring-indigo-500/10 text-indigo-900"
                                : "bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50/50"
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <span className={`w-6 h-6 rounded-md flex items-center justify-center text-xs font-mono font-bold ${
                                isSelected ? "bg-indigo-600 text-white" : "bg-slate-100 text-slate-600"
                              }`}>
                                {contPrinciple.id}
                              </span>
                              <div className="text-xs font-bold tracking-tight uppercase">
                                {contPrinciple.label}
                              </div>
                            </div>
                            <ChevronRight className={`w-4 h-4 text-slate-400 transition-transform ${isSelected ? "translate-x-1" : ""}`} />
                          </button>
                        );
                      })}
                    </div>

                    {/* Dual Comparative Viewing Lounges */}
                    <div className="lg:col-span-7 space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Science Card */}
                        <div className="p-5 bg-white border border-slate-200 rounded-2xl shadow-xs relative overflow-hidden flex flex-col justify-between min-h-[250px]">
                          <div className="space-y-4">
                            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                              <span className="text-[10px] font-mono font-bold text-indigo-600 uppercase bg-indigo-50 px-2 py-0.5 rounded tracking-widest">
                                1. Scientific Charter
                              </span>
                              <span className="text-[10px] font-mono text-slate-400">
                                Step {selectedP5Index + 1}
                              </span>
                            </div>

                            <div className="space-y-1">
                              <span className="text-[10px] text-slate-400 font-mono uppercase tracking-widest">
                                {scientificPrinciples[selectedP5Index].label}
                              </span>
                              <h4 className="font-bold font-sans text-slate-900 text-base">
                                {scientificPrinciples[selectedP5Index].title}
                              </h4>
                            </div>

                            <blockquote className="text-sm font-serif text-slate-700 leading-relaxed italic pl-3 border-l-2 border-slate-300 pt-0.5">
                              "{scientificPrinciples[selectedP5Index].content}"
                            </blockquote>
                          </div>

                          <div className="text-[9px] font-mono text-slate-400 uppercase tracking-widest pt-4 border-t border-slate-100">
                            Objective Material Metric
                          </div>
                        </div>

                        {/* Contemplative Card */}
                        <div className="p-5 bg-slate-900 border border-slate-800 text-white rounded-2xl shadow-md relative overflow-hidden flex flex-col justify-between min-h-[250px]">
                          <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-600/10 rounded-full blur-xl pointer-events-none" />

                          <div className="space-y-4">
                            <div className="flex items-center justify-between pb-2 border-b border-indigo-950">
                              <span className="text-[10px] font-mono font-bold text-indigo-300 uppercase bg-indigo-950 px-2 py-0.5 rounded tracking-widest">
                                5. Contemplative Charter
                              </span>
                              <span className="text-[10px] font-mono text-slate-500">
                                Step {selectedP5Index + 1}
                              </span>
                            </div>

                            <div className="space-y-1">
                              <span className="text-[10px] text-indigo-400 font-mono uppercase tracking-widest">
                                {contemplativePrinciples[selectedP5Index].label}
                              </span>
                              <h4 className="font-bold font-sans text-white text-base">
                                {contemplativePrinciples[selectedP5Index].title}
                              </h4>
                            </div>

                            <blockquote className="text-sm font-serif text-indigo-100 leading-relaxed italic pl-3 border-l-2 border-indigo-500 pt-0.5">
                              "{contemplativePrinciples[selectedP5Index].content}"
                            </blockquote>
                          </div>

                          <div className="text-[9px] font-mono text-indigo-400 uppercase tracking-widest pt-4 border-t border-indigo-950">
                            Subjective Phenomenological Metric
                          </div>
                        </div>
                      </div>

                      {/* Bridge Summary Assessment */}
                      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3">
                        <div className="flex items-center gap-2">
                          <Compass className="w-5 h-5 text-indigo-600 shrink-0" />
                          <h4 className="text-xs font-extrabold text-slate-950 uppercase tracking-wider">
                            The Paradigm Convergence Analysis
                          </h4>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {selectedP5Index === 0 && "The outer lens focuses on the consistent Order of Nature. The inner lens focuses on Foundational Consciousness—the indispensable screen upon which that physical Order is observed."}
                          {selectedP5Index === 1 && "While outer methodology measures chemical reactions and astronomical weights, contemplative methodology uses detailed mental silence and meditative techniques to map raw sensation itself."}
                          {selectedP5Index === 2 && "Just as modern science fought material dogmatism, contemplative physics arose historically from teachers rejecting rigid traditionalism and dry priestcraft in favor of active, direct realization."}
                          {selectedP5Index === 3 && "Falsifiability enters the subjective realm. Claims about attention, mind, and joy are verified directly through replicate practice. If an practice does not lead to quiet compassion, it is abandoned."}
                          {selectedP5Index === 4 && "Authority moves inside. Neither scripture, traditional folklore, nor dry materialism can overrule direct, silent awareness vetted through logical cohesion."}
                          {selectedP5Index === 5 && "Protects the introspective community against dogmatic spiritual egoism. Findings are submitted to communities of seasoned sages and spiritual peers."}
                          {selectedP5Index === 6 && "The search moves from mechanical curiosity of external engines to existential concern—the longing to reconcile suffering and awaken pure attention."}
                          {selectedP5Index === 7 && "Dual systems transcend sectarian structures. Just as math unites scientists, the direct experience of quiet awareness and empathy unites contemplative minds globally."}
                          {selectedP5Index === 8 && "Sages across millennia hand down precise tools: pranayama, shamatha, vipassana. Current explorers build directly on these historical clinical archives of the mind."}
                          {selectedP5Index === 9 && "Integrity of silent limits. Contemplatives recognize thoughts and sentences are merely concepts. Authentic insight actively corrects dogmatic clinging to linguistic definitions."}
                          {selectedP5Index === 10 && "Value manifest. Physical logic builds bridges; contemplative discipline resolves emotional reactivity, leading directly to greater moral capacity, structural peace, and selfless service."}
                          {selectedP5Index === 11 && "Our destination is identical. Whether looking at the stars or resting in pure attention, the aspiration is the complete liberation of the human spirit for the collective benefit."}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                /* STANDALONE STRICT DIRECTORY GRID */
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {contemplativePrinciples.map((principle) => {
                    return (
                      <div
                        key={principle.id}
                        className="p-5 bg-white border border-slate-200 hover:border-slate-350 rounded-2xl hover:shadow-xs transition-all text-left flex flex-col justify-between"
                      >
                        <div className="space-y-3">
                          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                            <span className="text-[10px] font-mono text-indigo-600 font-bold uppercase tracking-wider">
                              {principle.label}
                            </span>
                            <span className="w-6 h-6 bg-slate-100 text-slate-800 text-[11px] font-mono font-bold rounded-full flex items-center justify-center">
                              {principle.id}
                            </span>
                          </div>

                          <h3 className="text-base font-bold text-slate-900 tracking-tight">
                            {principle.title}
                          </h3>

                          <p className="text-slate-600 text-xs font-serif leading-relaxed italic">
                            "{principle.content}"
                          </p>
                        </div>

                        <div className="pt-4 mt-3 border-t border-slate-100 flex items-center gap-2 text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                          <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
                          <span>Contemplative Standard</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        )}
      </main>

      {/* Persistent Elegant Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-800 mt-12 font-sans">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-white font-bold tracking-tight">
              <Compass className="w-5 h-5 text-indigo-400" />
              <span>A Journey Through Two Creeds</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              An ontological synthesis website exploring the identical structures, symmetries, and narrative models 
              inherent to material-rationalist pursuits, systematic theological creeds, and post-materialist contemplative inquiry.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest">
              Journey Anchors
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <button onClick={() => setActiveTab(1)} className="text-left hover:text-white transition-colors cursor-pointer">1. Scientific Charter</button>
              <button onClick={() => setActiveTab(2)} className="text-left hover:text-white transition-colors cursor-pointer">2. Scientist's Creed</button>
              <button onClick={() => setActiveTab(3)} className="text-left hover:text-white transition-colors cursor-pointer">3. Point of Convergence</button>
              <button onClick={() => setActiveTab(4)} className="text-left hover:text-white transition-colors cursor-pointer">4. Metaphysical Creed</button>
              <button onClick={() => setActiveTab(5)} className="text-left hover:text-white transition-colors cursor-pointer col-span-2">5. Contemplative Principles</button>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest">
              Philosophical Note
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed italic">
              "We suffer under dogmas, whether physicalist or ecclesiastical. True salvation remains an act of continuous intellectual and phenomenological sifting."
            </p>
            <div className="text-[10px] font-mono text-indigo-400 uppercase tracking-widest">
              steward the earth / master the future
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto border-t border-slate-800 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <span>&copy; 2026 A Journey Through Two Creeds. Built for humanity's reach for the stars.</span>
          <div className="flex gap-4">
            <span>Inter & Lora Pairings</span>
            <span>•</span>
            <span>Tailwind v4 SPA Architecture</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
