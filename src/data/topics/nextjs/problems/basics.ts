import { Problem, Difficulty } from '@/types';

export const nextjsBasics: Omit<Problem, 'status' | 'isStarred' | 'notes'>[] = [
  {
    id: 'nextjs-page',
    title: 'Create a Page',
    description: 'Create a default export function named `Page` that returns a `<h1>` with "Hello Next.js".',
    difficulty: Difficulty.Easy,
    category: 'Next.js',
    group: 'Basics',
    docsUrl: 'https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts',
    starterCode: `export default function Page() {
  // Your code here
}`,
    testCases: [],
    solutionCheck: (userCode: string) => {
      const passed = userCode.includes('export default function Page') && userCode.includes('Hello Next.js');
      return [{
        input: 'Code Check',
        expected: 'Page component with "Hello Next.js"',
        actual: passed ? 'Page created' : 'Page missing or incorrect',
        passed
      }];
    },
  }
];
