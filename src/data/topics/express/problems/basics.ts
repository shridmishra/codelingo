import { Problem, Difficulty } from '@/types';

export const expressBasics: Omit<Problem, 'status' | 'isStarred' | 'notes'>[] = [
  {
    id: 'express-route',
    title: 'Create a Route',
    description: 'Create an Express route handler for GET /hello that sends "Hello World".',
    difficulty: Difficulty.Easy,
    category: 'Express',
    group: 'Basics',
    docsUrl: 'https://expressjs.com/en/starter/basic-routing.html',
    starterCode: `app.get('/hello', (req, res) => {
  // Your code here
});`,
    testCases: [],
    solutionCheck: (userCode: string) => {
      const passed = userCode.includes("res.send('Hello World')") || userCode.includes('res.send("Hello World")');
      return [{
        input: 'Code Check',
        expected: 'Route sending "Hello World"',
        actual: passed ? 'Route correct' : 'Route incorrect',
        passed
      }];
    },
  }
];
