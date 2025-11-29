import { Problem, Difficulty } from '@/types';

export const mongoBasics: Omit<Problem, 'status' | 'isStarred' | 'notes'>[] = [
  {
    id: 'mongo-connect',
    title: 'Connect to MongoDB',
    description: 'Write a function `connect` that simulates connecting to MongoDB using mongoose.',
    difficulty: Difficulty.Easy,
    category: 'MongoDB',
    group: 'Basics',
    docsUrl: 'https://mongoosejs.com/docs/connections.html',
    starterCode: `async function connect() {
  // Your code here
}`,
    testCases: [],
    solutionCheck: (userCode: string) => {
      const passed = userCode.includes('mongoose.connect');
      return [{
        input: 'Code Check',
        expected: 'Mongoose connection logic',
        actual: passed ? 'Connection logic found' : 'Connection logic missing',
        passed
      }];
    },
  }
];
