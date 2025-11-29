import { Problem, Difficulty } from '@/types';

export const nodeBasics: Omit<Problem, 'status' | 'isStarred' | 'notes'>[] = [
  {
    id: 'node-server',
    title: 'Create HTTP Server',
    description: 'Create a simple HTTP server using the `http` module.',
    difficulty: Difficulty.Easy,
    category: 'Node.js',
    group: 'Basics',
    docsUrl: 'https://nodejs.org/api/http.html#httpcreateserveroptions-requestlistener',
    starterCode: `const http = require('http');
const server = http.createServer((req, res) => {
  // Your code here
});`,
    testCases: [],
    solutionCheck: (userCode: string) => {
      const passed = userCode.includes('http.createServer');
      return [{
        input: 'Code Check',
        expected: 'Server creation logic',
        actual: passed ? 'Server created' : 'Server missing',
        passed
      }];
    },
  }
];
