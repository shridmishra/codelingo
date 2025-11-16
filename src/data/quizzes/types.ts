export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswerIndex: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  explanation: string;
}
