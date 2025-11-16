import { QuizQuestion } from './types';
import { basicsQuiz } from './1-basics';
import { functionsAndScopeQuiz } from './2-functions-scope';
import { arraysAndObjectsQuiz } from './3-arrays-objects';
import { asynchronousJavaScriptQuiz } from './4-asynchronous';
import { domAndEventsQuiz } from './5-dom-events';
import { advancedConceptsQuiz } from './6-advanced-concepts';
import { es6FeaturesQuiz } from './7-es6-features';
import { webApisAndBrowserQuiz } from './8-web-apis-browser';
import { typeScriptQuiz } from './9-typescript';

// Export individual quiz modules
export {
  basicsQuiz,
  functionsAndScopeQuiz,
  arraysAndObjectsQuiz,
  asynchronousJavaScriptQuiz,
  domAndEventsQuiz,
  advancedConceptsQuiz,
  es6FeaturesQuiz,
  webApisAndBrowserQuiz,
  typeScriptQuiz,
};

// Export the QuizQuestion type
export type { QuizQuestion };

// Combine all quizzes into a single array (for backward compatibility)
export const quizData: QuizQuestion[] = [
  ...basicsQuiz,
  ...functionsAndScopeQuiz,
  ...arraysAndObjectsQuiz,
  ...asynchronousJavaScriptQuiz,
  ...domAndEventsQuiz,
  ...advancedConceptsQuiz,
  ...es6FeaturesQuiz,
  ...webApisAndBrowserQuiz,
  ...typeScriptQuiz,
];

// Quiz metadata for organization
export interface QuizModule {
  id: string;
  title: string;
  description: string;
  questions: QuizQuestion[];
}

export const quizModules: QuizModule[] = [
  {
    id: 'basics',
    title: 'JavaScript Basics',
    description: 'Fundamental concepts including data types, operators, variables, and type coercion',
    questions: basicsQuiz,
  },
  {
    id: 'functions-scope',
    title: 'Functions & Scope',
    description: 'Closures, this keyword, arrow functions, and higher-order functions',
    questions: functionsAndScopeQuiz,
  },
  {
    id: 'arrays-objects',
    title: 'Arrays & Objects',
    description: 'Array methods, object manipulation, destructuring, and data structures',
    questions: arraysAndObjectsQuiz,
  },
  {
    id: 'asynchronous',
    title: 'Asynchronous JavaScript',
    description: 'Promises, async/await, event loop, and asynchronous patterns',
    questions: asynchronousJavaScriptQuiz,
  },
  {
    id: 'dom-events',
    title: 'DOM & Events',
    description: 'DOM manipulation, event handling, and event delegation',
    questions: domAndEventsQuiz,
  },
  {
    id: 'advanced-concepts',
    title: 'Advanced Concepts',
    description: 'Prototypal inheritance, symbols, proxies, and advanced patterns',
    questions: advancedConceptsQuiz,
  },
  {
    id: 'es6-features',
    title: 'ES6+ Features',
    description: 'Modern JavaScript features including template literals and iterators',
    questions: es6FeaturesQuiz,
  },
  {
    id: 'web-apis-browser',
    title: 'Web APIs & Browser',
    description: 'Browser APIs, storage, CORS, modules, and tooling',
    questions: webApisAndBrowserQuiz,
  },
  {
    id: 'typescript',
    title: 'TypeScript',
    description: 'TypeScript fundamentals, types, interfaces, generics, and utility types',
    questions: typeScriptQuiz,
  },
];
