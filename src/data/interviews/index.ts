export * from './types';

import { InterviewQuestion } from './types';
import { jsQuestions } from './javascript';
import { tsQuestions } from './typescript';
import { reactQuestions } from './react';
import { nextjsQuestions } from './nextjs';
import { mongoQuestions } from './mongo';
import { expressQuestions } from './express';
import { backendQuestions } from './backend';
import { prismaPostgresQuestions } from './prisma-postgres';
import { htmlCssQuestions } from './html-css';

// Combine all questions
const allQuestions: InterviewQuestion[] = [
  ...jsQuestions,
  ...tsQuestions,
  ...reactQuestions,
  ...nextjsQuestions,
  ...mongoQuestions,
  ...expressQuestions,
  ...backendQuestions,
  ...prismaPostgresQuestions,
  ...htmlCssQuestions
];

/**
 * Get random interview questions from all topics
 * @param count Number of questions to return
 * @returns Array of random interview questions
 */
export function getRandomInterviewQuestions(count: number): InterviewQuestion[] {
  const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

export {
  jsQuestions,
  tsQuestions,
  reactQuestions,
  nextjsQuestions,
  mongoQuestions,
  expressQuestions,
  backendQuestions,
  prismaPostgresQuestions,
  htmlCssQuestions
};
