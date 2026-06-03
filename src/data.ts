import { Principle, CreedPhrase, ComparisonPair, MetaphysicalPoint } from "./types";

export const scientificPrinciples: Principle[] = [
  {
    id: 1,
    label: "On the Object of Study",
    title: "The Order of Nature",
    content: "The universe operates according to consistent, discoverable physical principles."
  },
  {
    id: 2,
    label: "On Methodology",
    title: "Empirical Procedure",
    content: "Scientific knowledge is acquired through a rigorous process of observation, hypothesis formulation, experimentation, and logical inference."
  },
  {
    id: 3,
    label: "On Historical Context",
    title: "The Struggle with Dogma",
    content: "The development of modern science occurred through a historical process of challenging established dogma with empirical evidence."
  },
  {
    id: 4,
    label: "On Validation",
    title: "Empirical Falsifiability",
    content: "Scientific claims are validated or falsified through comparison with empirical evidence."
  },
  {
    id: 5,
    label: "On Epistemic Authority",
    title: "The Ultimate Arbiters",
    content: "In matters concerning the material world, empirical evidence and logical consistency are the ultimate arbiters."
  },
  {
    id: 6,
    label: "On Critical Scrutiny",
    title: "Provisional Truth",
    content: "All scientific findings are provisional and subject to critical scrutiny and peer review."
  },
  {
    id: 7,
    label: "On Motivation",
    title: "Disciplined Curiosity",
    content: "The scientific endeavor is driven by human curiosity and the creative application of disciplined thought."
  },
  {
    id: 8,
    label: "On Community",
    title: "Collaborative Universalism",
    content: "Science is a global, collaborative, and non-sectarian enterprise, united by shared standards of evidence."
  },
  {
    id: 9,
    label: "On Heritage",
    title: "The Cumulative Ascent",
    content: "Current scientific work builds upon the foundational discoveries of previous generations."
  },
  {
    id: 10,
    label: "On Intellectual Integrity",
    title: "Correction of Error",
    content: "A core principle is the transparent acknowledgment and correction of error upon contrary evidence."
  },
  {
    id: 11,
    label: "On Impact",
    title: "The Persistence of Utility",
    content: "The impact of scientific work persists through its contributions to human knowledge and technological applications."
  },
  {
    id: 12,
    label: "On Aspiration",
    title: "Humanitarian Purpose",
    content: "The ultimate goal of the scientific enterprise is the expansion of human knowledge for the betterment of the human condition."
  }
];

export const creedPhrases: CreedPhrase[] = [
  { id: 1, palatable: "without design", creedal: "without design" },
  { id: 2, palatable: "a consequence of reason", creedal: "Reason's sole incarnation" },
  { id: 3, palatable: "resisted by dogma", creedal: "suffered under dogma" },
  { id: 4, palatable: "challenged by authority", creedal: "crucified by authority" },
  { id: 5, palatable: "In a new era", creedal: "On the third day" },
  { id: 6, palatable: "was accepted", creedal: "rose again" },
  { id: 7, palatable: "examined past errors", creedal: "descended into ignorance" },
  { id: 8, palatable: "corrected them", creedal: "harrowed the illusions of the past" },
  { id: 9, palatable: "gained epistemic authority", creedal: "ascended into authority" },
  { id: 10, palatable: "aligned with Logic", creedal: "seated at the right hand of Logic" },
  { id: 11, palatable: "be tested against it", creedal: "bow before it" },
  { id: 12, palatable: "It continues to rigorously evaluate", creedal: "It will come again in rigor to judge" },
  { id: 13, palatable: "Its process is continuous", creedal: "Its judgments are final; of its dominion there will be no end" },
  { id: 14, palatable: "motivation of inquiry", creedal: "Spirit of Inquiry" },
  { id: 15, palatable: "the source of questions", creedal: "the Lord and Giver of Questions" },
  { id: 16, palatable: "highly valued", creedal: "worshipped and glorified" },
  { id: 17, palatable: "foundational", creedal: "apostolic" },
  { id: 18, palatable: "shared body of knowledge", creedal: "communion of minds" },
  { id: 19, palatable: "pioneering figures", creedal: "intellectual saints" },
  { id: 20, palatable: "the practice of retracting error", creedal: "one baptism for the retraction of error" },
  { id: 21, palatable: "advancing knowledge", creedal: "intellectual salvation" },
  { id: 22, palatable: "persistence of ideas", creedal: "resurrection of the mind" },
  { id: 23, palatable: "future of the species", creedal: "life of the species to come" },
  { id: 24, palatable: "goal of Progress", creedal: "promise of Progress" }
];

export const comparisonPairs: ComparisonPair[] = [
  {
    id: 1,
    topic: "The Source of Reality",
    scientific: "We believe in one Universe, the Material and the Cosmos, operating without design and of its own consistent nature, of all things visible and invisible.",
    christian: "I believe in God, the Father almighty, creator of heaven and earth, of all things visible and invisible.",
    symmetryNote: "Declares the ultimate backdrop of existence. Science de-personalizes it into the self-operating Cosmos, but retains the universal scope and dual classification ('visible and invisible')."
  },
  {
    id: 2,
    topic: "The Incarnation of Truth",
    scientific: "And in Science, the child of observation, Reason's sole incarnation, through which the structures of nature are made manifest.",
    christian: "And in Jesus Christ, his only Son, our Lord, who was conceived by the Holy Spirit, born of the Virgin Mary.",
    symmetryNote: "Symmetry of mediation. In theology, Christ mediates between God and Man; in rationalism, Science (the physical fruit of observation) is the tangible embodiment of Reason."
  },
  {
    id: 3,
    topic: "The Historical Persecution",
    scientific: "Which for the advancement of human understanding suffered under dogma, was crucified by authority.",
    christian: "Who suffered under Pontius Pilate, was crucified, died, and was buried.",
    symmetryNote: "The historic trauma. Reflects the struggle of truth against the political, administrative, and dogmatic structures of the status quo."
  },
  {
    id: 4,
    topic: "Descent and Resurgence",
    scientific: "On the third day it rose again, having descended into ignorance and harrowed the illusions of the past.",
    christian: "He descended into hell. On the third day he rose again from the dead.",
    symmetryNote: "The heroic cycle. The descent into ignorance/darkness acts as a transition. Emerging from errors (harrowing illusions) is framed as a literal intellectual resurrection."
  },
  {
    id: 5,
    topic: "Epistemic Elevation",
    scientific: "It ascended into authority and was seated at the right hand of Logic, and all claims must bow before it.",
    christian: "He ascended into heaven, and is seated at the right hand of God the Father almighty.",
    symmetryNote: "Sovereignty of standard. The elevated status of Christ next to the Father mirrors the high status of scientific evidence aligned with Logic."
  },
  {
    id: 6,
    topic: "The Dynamic Sifting",
    scientific: "It will come again in rigor to judge the living and the dead ideas, and its process is continuous, and of its dominion there will be no end.",
    christian: "From there he will come to judge the living and the dead. His kingdom will have no end.",
    symmetryNote: "The eschatological testing. Scientific vetting is continuous and inescapable, measuring current ('living') and historical ('dead') hypotheses. Peer review maintains active dominion."
  },
  {
    id: 7,
    topic: "The Driving Essence",
    scientific: "And we believe in the Spirit of Inquiry, the Lord and Giver of Questions, who with Logic and Evidence is worshipped and glorified.",
    christian: "And I believe in the Holy Spirit, the Lord, the giver of life, who with the Father and the Son is worshipped and glorified.",
    symmetryNote: "The life-force of the creed. The Holy Spirit (Giver of Life) becomes the Spirit of Inquiry (Giver of Questions)—the subjective ignition driving all exploration."
  },
  {
    id: 8,
    topic: "Unified Fellowship",
    scientific: "We believe in an apostolic and global scientific community, and we acknowledge the communion of minds.",
    christian: "I believe in the holy catholic Church, the communion of saints.",
    symmetryNote: "Social architecture. The universal ('catholic') church is replaced by the global, borders-transcending scientific community. The communion of saints transforms into the collaborative network of minds."
  },
  {
    id: 9,
    topic: "Redemption structure",
    scientific: "We look to the intellectual saints, and acknowledge one baptism for the retraction of error as the path toward intellectual salvation.",
    christian: "I acknowledge one baptism for the forgiveness of sins.",
    symmetryNote: "Transformation through admission. Direct mapping of baptism (purification) to open peer review and self-correction. Forgiveness/remission is translated into the retraction of errors."
  },
  {
    id: 10,
    topic: "Ultimate Continuity",
    scientific: "We look for the resurrection of the mind, and the life of the species to come under the promise of Progress.",
    christian: "I look for the resurrection of the dead, and the life of the world to come.",
    symmetryNote: "Eschatological hope. Individual biological rebirth is re-imagined as collective cognitive continuity (the resurrection of human ideas) and technological/social evolution."
  },
  {
    id: 11,
    topic: "The Cosmic Blessing",
    scientific: "...that humanity may steward the earth and master its future, and our children shall reach for the stars. Amen.",
    christian: "...and the life of the world to come. Amen.",
    symmetryNote: "Cosmic aspiration. Replaces the spiritual world to come with physical preservation of the biosphere ('steward the earth') and cosmological exploration into the deep skies."
  }
];

export const metaphysicalPoints: MetaphysicalPoint[] = [
  {
    id: 1,
    title: "The Transcendent Source",
    originalConcept: "God the Father Almighty, Creator of Heaven and Earth",
    content: "The uncaused ground of all existence, representing the absolute, incomprehensible mystery of being from which order and form emerge.",
    existentialReality: "Instead of a personified deity, we contemplate the primary creative potentiality—the silent cosmic loom on which material reality is continuously woven."
  },
  {
    id: 2,
    title: "The Principle of Incarnation",
    originalConcept: "Jesus Christ, His Only Son, Our Lord",
    content: "The universal pattern of consciousness landing into physical form, bridging the infinite cosmos with localized, subjective experience.",
    existentialReality: "The universe becoming conscious of itself through individual human lives. We are the cosmos focusing its lens to look back upon its own beauty and pain."
  },
  {
    id: 3,
    title: "Receptive Emergence",
    originalConcept: "Conceived by the Holy Spirit, Born of the Virgin Mary",
    content: "The spontaneous arising of pristine conscious awareness out of receptive, innocent physical matter.",
    existentialReality: "The spark of mind emerging from silent biological complexity. It is the miraculous transition from brute chemistry to first-person subjective experience."
  },
  {
    id: 4,
    title: "Confronting Limitation",
    originalConcept: "Suffered under Pontius Pilate, Was Crucified, Died, and Was Buried",
    content: "The inescapable human confrontation with boundaries, somatic suffering, somatic vulnerability, mortality, and the void of absolute non-being.",
    existentialReality: "Acceptance of our existential limits. To live is to be subject to history, decay, and the ultimate surrender of the ego to physical dissolution."
  },
  {
    id: 5,
    title: "The Descent into the Shadow",
    originalConcept: "He Descended into Hell",
    content: "The psychological plunge into deep unconsciousness, confronting primordial terror, historical grief, and the hidden fragments of the mind.",
    existentialReality: "Harrowing the shadow. For integration to occur, we must face our deepest psychological depths, ancestral traumas, and existential vacuums."
  },
  {
    id: 6,
    title: "Resilience & Renewal",
    originalConcept: "On the Third Day He Rose Again",
    content: "The systemic healing capacity of consciousness and life-force, finding pathways to emerge stronger from complete deconstruction.",
    existentialReality: "Somatic and psychological renewal. The structure of conscious recovery makes renewal possible, showing that after dark valleys, a fresh dawn rises."
  },
  {
    id: 7,
    title: "Epistemic Elevation",
    originalConcept: "He Ascended into Heaven",
    content: "The expansion of awareness above localized, emotional ego-attachments to a perspective of absolute wholeness.",
    existentialReality: "Achieving metacognition. Rising above reactive states to witness reality from a place of unshakeable high-altitude clarity and equanimity."
  },
  {
    id: 8,
    title: "Coordination with Natural Order",
    originalConcept: "Seated at the Right Hand of the Father",
    content: "The integration of conscious perspective with the fundamental natural and logical constants of the cosmos.",
    existentialReality: "Somatic, moral, and rational alignment with Truth. Living in perfect harmony with the laws of gravity, thermodynamics, and objective logic."
  },
  {
    id: 9,
    title: "The Sifting of Consequence",
    originalConcept: "Come to Judge the Living and the Dead",
    content: "The continuous validation feedback loop in nature where actions and ideas are measured against objective reality.",
    existentialReality: "Natural karma and evolutionary selection. It is the sifting of sustainable and unsustainable patterns of thinking and acting over long periods of time."
  },
  {
    id: 10,
    title: "Immanent Guidance",
    originalConcept: "The Holy Spirit, the Lord, the Giver of Life",
    content: "The dynamic flow of vitality, attention, and inner guidance operating as the direct agent of creative inquiry.",
    existentialReality: "The presence of pure attention and the spark of curiosity. The source of our questions and the immediate, warm sense of being alive and present."
  },
  {
    id: 11,
    title: "Unified Consciousness & Reconciliation",
    originalConcept: "The Communion of Saints, Forgiveness of Sins, and Life Everlasting",
    content: "The interconnected web of minds, redemptive self-acceptance, and the preservation of our actions in the collective cosmic heritage.",
    existentialReality: "The realization that we are not isolated islands but waves of a single ocean, capable of deep coordinate reconciliation and leaving an eternal ripple."
  }
];

export const contemplativePrinciples: Principle[] = [
  {
    id: 1,
    label: "On the Object of Study",
    title: "Foundational Consciousness",
    content: "The primary object of study is foundational Consciousness, within which the physical universe and all experiences arise as modular expressions."
  },
  {
    id: 2,
    label: "On Methodology",
    title: "Disciplined Phenomenology",
    content: "Knowledge is acquired through rigorous, disciplined introspective and contemplative inquiry, utilizing meditation, phenomenological mapping, and silent observation."
  },
  {
    id: 3,
    label: "On Historical Context",
    title: "Trans-empirical Wisdom",
    content: "The development of contemplative science occurred through a historical process of sages and practitioners challenging dogmatic materialist and theological assertions with direct, first-person experiential insights."
  },
  {
    id: 4,
    label: "On Validation",
    title: "Experiential Verification",
    content: "Contemplative claims are validated or falsified through direct experiential coherence, replicability in deep states of meditation, and ethical fruitfulness in daily life."
  },
  {
    id: 5,
    label: "On Epistemic Authority",
    title: "First-Person Witness",
    content: "In matters concerning the nature of mind and subjective experience, direct, disciplined first-person awareness is the ultimate arbiter, balanced by logical coherence."
  },
  {
    id: 6,
    label: "On Critical Scrutiny",
    title: "Egoic Sifting",
    content: "All contemplative insights are provisional and subject to critical scrutiny and peer review within communities of dedicated practitioners."
  },
  {
    id: 7,
    label: "On Motivation",
    title: "Longing for Liberation",
    content: "The contemplative endeavor is driven by the human longing for truth, liberation from suffering, and the realization of our interconnected nature."
  },
  {
    id: 8,
    label: "On Community",
    title: "The Sangha of Minds",
    content: "Contemplative inquiry is a global, non-sectarian, and ancient enterprise, united by shared direct experiences and standards of mental discipline."
  },
  {
    id: 9,
    label: "On Heritage",
    title: "Lineage of Insight",
    content: "Current contemplative practice builds upon the foundational wisdom and meditative technologies discovered by previous generations of spiritual and philosophical pioneers."
  },
  {
    id: 10,
    label: "On Intellectual Integrity",
    title: "Transcending Constructs",
    content: "A core principle is the transparent acknowledgment of the limitations of language and the correction of dogmatic ideas upon deep experiential counter-evidence."
  },
  {
    id: 11,
    label: "On Impact",
    title: "Characterological Transformation",
    content: "The impact of contemplative work persists through the transformation of human character, greater ethical compassion, and the enrichment of existential understanding."
  },
  {
    id: 12,
    label: "On Aspiration",
    title: "Universal Awakening",
    content: "The ultimate goal of the contemplative enterprise is the expansion of human wisdom, the alleviation of suffering, and the awakening of collective consciousness for the betterment of the human condition."
  }
];
