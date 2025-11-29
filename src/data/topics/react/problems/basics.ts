import { Problem, Difficulty } from '@/types';

export const reactBasics: Omit<Problem, 'status' | 'isStarred' | 'notes'>[] = [
  {
    id: 'react-component',
    title: 'Create a Component',
    description: 'Create a functional component named `Greeting` that returns a `<div>` with the text "Hello, React!".',
    difficulty: Difficulty.Easy,
    category: 'React',
    group: 'Basics',
    docsUrl: 'https://react.dev/learn/your-first-component',
    starterCode: `function Greeting() {
  // Your code here
}`,
    testCases: [],
    solutionCheck: (userCode: string) => {
      const passed = userCode.includes('function Greeting') && userCode.includes('return') && userCode.includes('Hello, React!');
      return [{
        input: 'Code Check',
        expected: 'Component with "Hello, React!"',
        actual: passed ? 'Component created' : 'Component missing or incorrect',
        passed
      }];
    },
  }
];
