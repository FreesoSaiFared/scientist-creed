export interface Principle {
  id: number;
  label: string;
  title: string;
  content: string;
}

export interface CreedPhrase {
  id: number;
  palatable: string;
  creedal: string;
}

export interface ComparisonPair {
  id: number;
  scientific: string;
  christian: string;
  symmetryNote: string;
  topic: string;
}

export interface MetaphysicalPoint {
  id: number;
  title: string;
  originalConcept: string;
  content: string;
  existentialReality: string;
}
