# Quiz Data Organization

This directory contains quiz questions organized by topic, similar to how problems are structured.

## Structure

Each quiz file contains questions related to a specific topic:

- `1-basics.ts` - JavaScript fundamentals (data types, operators, variables, type coercion)
- `2-functions-scope.ts` - Functions, closures, this, arrow functions, higher-order functions
- `3-arrays-objects.ts` - Array methods, object manipulation, destructuring, data structures
- `4-asynchronous.ts` - Promises, async/await, event loop, timers
- `5-dom-events.ts` - DOM manipulation, event handling, event delegation
- `6-advanced-concepts.ts` - Prototypal inheritance, symbols, proxies, WeakMap
- `7-es6-features.ts` - Template literals, for...of, modern JavaScript features
- `8-web-apis-browser.ts` - Browser APIs, storage, CORS, modules, tooling
- `9-typescript.ts` - TypeScript fundamentals, types, interfaces, generics, utility types

## Usage

### Import all quizzes
```typescript
import { quizData } from '@/data/quizzes';
```

### Import specific quiz topic
```typescript
import { basicsQuiz, functionsAndScopeQuiz } from '@/data/quizzes';
```

### Use quiz modules with metadata
```typescript
import { quizModules } from '@/data/quizzes';

// Access quiz by topic
const basicsModule = quizModules.find(m => m.id === 'basics');
console.log(basicsModule.title); // "JavaScript Basics"
console.log(basicsModule.questions); // Array of quiz questions
```

## Adding New Quizzes

1. Create a new file following the naming pattern: `{number}-{topic}.ts`
2. Export an array of `QuizQuestion[]`
3. Import and add to `index.ts`:
   - Add to individual exports
   - Add to `quizData` array
   - Add metadata to `quizModules` array

Example:
```typescript
// 9-new-topic.ts
import { QuizQuestion } from './types';

export const newTopicQuiz: QuizQuestion[] = [
  {
    question: "Your question here?",
    options: ["Option 1", "Option 2", "Option 3", "Option 4"],
    correctAnswerIndex: 0,
    difficulty: 'Easy',
    explanation: "Explanation of the correct answer."
  },
  // More questions...
];
```

## Backward Compatibility

The old `quizData.ts` file in the parent directory re-exports from this structure, ensuring existing imports continue to work.
