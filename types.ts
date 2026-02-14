
export interface TeamMember {
  name: string;
  role: string;
  disciplines: string[];
  description: string;
  image: string;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correct: number;
}
