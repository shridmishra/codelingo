import { Problem, Difficulty } from '@/types';

export const postgresBasics: Omit<Problem, 'status' | 'isStarred' | 'notes'>[] = [
  {
    id: 'postgres-select',
    title: 'Select All Users',
    description: 'Write a SQL query to select all columns from the `users` table.',
    difficulty: Difficulty.Easy,
    category: 'PostgreSQL',
    group: 'Basics',
    docsUrl: 'https://www.postgresql.org/docs/current/tutorial-select.html',
    starterCode: `-- Your SQL here`,
    testCases: [],
    solutionCheck: (userCode: string) => {
      const passed = userCode.toLowerCase().includes('select * from users');
      return [{
        input: 'Code Check',
        expected: 'SELECT * FROM users',
        actual: passed ? 'Query correct' : 'Query incorrect',
        passed
      }];
    },
  }
];
