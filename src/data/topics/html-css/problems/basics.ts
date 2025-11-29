import { Problem, Difficulty } from '@/types';

export const htmlCssBasics: Omit<Problem, 'status' | 'isStarred' | 'notes'>[] = [
  {
    id: 'html-div',
    title: 'Create a Div',
    description: 'Create a `<div>` element with the class "container".',
    difficulty: Difficulty.Easy,
    category: 'HTML & CSS',
    group: 'Basics',
    docsUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div',
    starterCode: `<!-- Your HTML here -->`,
    testCases: [],
    solutionCheck: (userCode: string) => {
      const passed = userCode.includes('<div class="container">') || userCode.includes("<div class='container'>");
      return [{
        input: 'Code Check',
        expected: 'Div with class container',
        actual: passed ? 'Div found' : 'Div missing',
        passed
      }];
    },
  }
];
