export interface TopicQuestion {
  id: string;
  topic: string;
  question: string;
  answer: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
}
