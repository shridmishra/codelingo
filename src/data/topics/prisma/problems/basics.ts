import { Problem, Difficulty } from '@/types';

export const prismaBasics: Omit<Problem, 'status' | 'isStarred' | 'notes'>[] = [
  {
    id: 'prisma-model',
    title: 'Define a Model',
    description: 'Define a Prisma model `User` with an `id` (Int, @id, default autoincrement) and `email` (String, unique).',
    difficulty: Difficulty.Easy,
    category: 'Prisma',
    group: 'Basics',
    docsUrl: 'https://www.prisma.io/docs/concepts/components/prisma-schema/data-model',
    starterCode: `model User {
  // Your code here
}`,
    testCases: [],
    solutionCheck: (userCode: string) => {
      const passed = userCode.includes('model User') && userCode.includes('@id') && userCode.includes('@unique');
      return [{
        input: 'Code Check',
        expected: 'User model with id and unique email',
        actual: passed ? 'Model correct' : 'Model incorrect',
        passed
      }];
    },
  }
];
