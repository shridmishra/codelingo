import { TopicQuestion } from '../types';

export const backendQuestions: TopicQuestion[] = [
  {
    id: 'node-1',
    topic: 'Node.js',
    question: 'What is Node.js?',
    answer: `Node.js is an open-source, cross-platform JavaScript runtime environment that executes JavaScript code outside a web browser. It is built on Chrome's V8 JavaScript engine.`,
    difficulty: 'Easy'
  },
  {
    id: 'node-2',
    topic: 'Node.js',
    question: 'What is the Event Loop in Node.js?',
    answer: `The Event Loop is what allows Node.js to perform non-blocking I/O operations despite the fact that JavaScript is single-threaded. It offloads operations to the system kernel whenever possible.`,
    difficulty: 'Hard'
  },
  {
    id: 'node-3',
    topic: 'Node.js',
    question: 'What is the difference between "require()" and "import"?',
    answer: `**require()**:
- CommonJS module system
- Synchronous loading
- Dynamic (can be called anywhere)

**import**:
- ES6 module system
- Asynchronous loading
- Static (must be at top of file)`,
    difficulty: 'Medium'
  },
  {
    id: 'node-4',
    topic: 'Node.js',
    question: 'What is Middleware in Express?',
    answer: `Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. They can execute code, modify req/res, end the cycle, or call the next middleware.`,
    difficulty: 'Medium'
  },
  {
    id: 'node-5',
    topic: 'Node.js',
    question: 'What is "package.json"?',
    answer: `The \`package.json\` file is the heart of any Node.js project. It records important metadata about a project which is required before publishing to NPM, and also defines functional attributes of a project that npm uses to install dependencies, run scripts, and identify the entry point to our package.`,
    difficulty: 'Easy'
  },
  {
    id: 'node-6',
    topic: 'Node.js',
    question: 'What is "process.nextTick()"?',
    answer: `\`process.nextTick()\` defers the execution of a callback function until the next iteration of the Event Loop. It runs before any other I/O events or timers fire.`,
    difficulty: 'Hard'
  },
  {
    id: 'node-7',
    topic: 'Node.js',
    question: 'What are Streams in Node.js?',
    answer: `Streams are objects that let you read data from a source or write data to a destination in continuous chunks. There are four types: Readable, Writable, Duplex, and Transform.`,
    difficulty: 'Medium'
  },
  {
    id: 'node-8',
    topic: 'Node.js',
    question: 'What is the purpose of "module.exports"?',
    answer: `\`module.exports\` is the object that is actually returned as the result of a \`require\` call. It is used to expose functions, objects, or values from a module so they can be used in other modules.`,
    difficulty: 'Easy'
  },
  {
    id: 'node-9',
    topic: 'Node.js',
    question: 'What is the difference between "readFile" and "readFileSync"?',
    answer: `**readFile**: Asynchronous, non-blocking. Takes a callback function.
**readFileSync**: Synchronous, blocking. Returns the file content directly. Stops execution until file is read.`,
    difficulty: 'Easy'
  },
  {
    id: 'node-10',
    topic: 'Node.js',
    question: 'What is "npm"?',
    answer: `npm stands for Node Package Manager. It is the default package manager for Node.js and consists of a command line client and an online database of public and paid-for private packages.`,
    difficulty: 'Easy'
  }
];
