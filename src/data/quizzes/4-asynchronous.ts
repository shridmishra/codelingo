import { QuizQuestion } from './types';

export const asynchronousJavaScriptQuiz: QuizQuestion[] = [
  {
    question: "What will `console.log(0.1 + 0.2 === 0.3)` output?",
    options: ["true", "false", "undefined", "TypeError"],
    correctAnswerIndex: 1,
    difficulty: 'Medium',
    explanation: "Due to floating-point precision issues in binary, 0.1 + 0.2 results in a number like 0.30000000000000004, which is not strictly equal to 0.3."
  },
  {
    question: "How do you create a promise in JavaScript?",
    options: ["new Promise(executor)", "Promise.create(...)", "makePromise(...)", "Promise(...)"],
    correctAnswerIndex: 0,
    difficulty: 'Easy',
    explanation: "The `Promise` constructor takes a function (an 'executor') with two parameters, `resolve` and `reject`, to create a new promise."
  },
  {
    question: "What is the purpose of the 'async' keyword before a function?",
    options: ["Run on separate thread", "Auto-catch errors", "Returns a Promise", "Pause other code"],
    correctAnswerIndex: 2,
    difficulty: 'Medium',
    explanation: "An `async` function implicitly returns a promise. If the function returns a value, the promise will be resolved with that value."
  },
  {
    question: "How do you handle errors in a promise chain?",
    options: [".catch()", "try...catch in .then()", ".finally()", "Both A and B"],
    correctAnswerIndex: 0,
    difficulty: 'Medium',
    explanation: "The `.catch()` method is the primary way to handle promise rejections. It catches any error that occurred in the promise chain before it."
  },
  {
    question: "What does `Promise.all()` do?",
    options: ["Resolves when all promises resolve", "Resolves on first resolved", "Validates promises", "Chains sequentially"],
    correctAnswerIndex: 0,
    difficulty: 'Medium',
    explanation: "`Promise.all()` is useful for aggregating the results of multiple promises. It rejects if any of the promises reject."
  },
  {
    question: "What does the `finally` block in a Promise do?",
    options: ["Runs on resolve only", "Runs on reject only", "Runs after settle (always)", "Finalize for GC"],
    correctAnswerIndex: 2,
    difficulty: 'Medium',
    explanation: "The `.finally()` method is used for code that should run regardless of whether the promise was fulfilled or rejected, such as cleanup operations."
  },
  {
    question: "What does `async/await` help with?",
    options: ["Make async code look synchronous", "Speed up execution", "Handle CPU tasks", "Create web workers"],
    correctAnswerIndex: 0,
    difficulty: 'Medium',
    explanation: "`async/await` is syntactic sugar built on top of promises, making asynchronous code easier to write and read by avoiding promise chain nesting."
  },
  {
    question: "What is the event loop?",
    options: ["Feature for loops", "Event handling pattern", "Non-blocking I/O mechanism", "Iterate listeners"],
    correctAnswerIndex: 2,
    difficulty: 'Hard',
    explanation: "The event loop is what allows JavaScript to use a single thread to handle concurrency. It continuously checks the message queue for tasks and executes them."
  },
  {
    question: "Which method is used to schedule a function to run after a certain amount of time?",
    options: ["`setInterval()`", "`setTimeout()`", "`requestAnimationFrame()`", "`runAfter()`"],
    correctAnswerIndex: 1,
    difficulty: 'Easy',
    explanation: "`setTimeout` runs a function once after a specified delay. `setInterval` runs a function repeatedly at a specified interval."
  },
  {
    question: "What is 'callback hell'?",
    options: ["Undefined callback error", "Many nested callbacks (hard to read)", "Performance issue", "Security vulnerability"],
    correctAnswerIndex: 1,
    difficulty: 'Medium',
    explanation: "Callback hell (or the 'pyramid of doom') refers to the anti-pattern of deeply nested callbacks, which can be difficult to manage. Promises and async/await are used to avoid this."
  },
  {
    question: "What will `setTimeout(myFunction, 0)` do?",
    options: ["Execute immediately", "Run after current call stack", "Never execute", "Throw error"],
    correctAnswerIndex: 1,
    difficulty: 'Hard',
    explanation: "`setTimeout` with a delay of 0ms doesn't execute immediately. It places the callback in the message queue to be run in a future tick of the event loop, after the current synchronous code has finished executing."
  },
  {
    question: "What does `Promise.race()` do?",
    options: ["Settles with first settled promise", "Run all promises in parallel", "Compare execution times", "Validate race conditions"],
    correctAnswerIndex: 0,
    difficulty: 'Medium',
    explanation: "`Promise.race()` returns a promise that settles (resolves or rejects) as soon as any of the promises in the iterable settles, with the value or reason from that promise."
  },
  {
    question: "What is the difference between microtasks and macrotasks?",
    options: ["Microtasks run before macrotasks", "Macrotasks faster", "No difference", "Microtasks deprecated"],
    correctAnswerIndex: 0,
    difficulty: 'Hard',
    explanation: "Microtasks (like promise callbacks) have higher priority and execute before macrotasks (like setTimeout/setInterval callbacks) in the event loop queue."
  },
  {
    question: "How do you handle errors in async/await?",
    options: ["try...catch", ".catch() on the returned promise", ".finally()", "Both A and B"],
    correctAnswerIndex: 3,
    difficulty: 'Medium',
    explanation: "You can wrap await statements in try...catch blocks, or call the async function and chain .catch() to it since async functions return promises."
  },
  {
    question: "What does `Promise.allSettled()` do?",
    options: ["Waits for all promises to settle", "Return only resolved", "Return only rejected", "Cancel promises"],
    correctAnswerIndex: 0,
    difficulty: 'Medium',
    explanation: "`Promise.allSettled()` waits for all promises to settle and returns an array of objects describing the outcome of each promise, whether fulfilled or rejected."
  },
  {
    question: "What is the purpose of `Promise.resolve()`?",
    options: ["Create resolved promise", "Resolve pending promise", "Validate promise", "Convert value to promise"],
    correctAnswerIndex: 0,
    difficulty: 'Easy',
    explanation: "`Promise.resolve(value)` returns a Promise object that is resolved with the given value. If the value is already a promise, that promise is returned."
  },
  {
    question: "Can you use await outside of an async function?",
    options: ["No", "Yes — top-level modules", "Yes anywhere", "Only in strict mode"],
    correctAnswerIndex: 1,
    difficulty: 'Medium',
    explanation: "Modern JavaScript supports top-level await in modules, allowing you to use await at the top level of a module without wrapping it in an async function."
  },
  {
    question: "What happens if you don't catch a rejected promise?",
    options: ["Unhandled rejection warning/error", "Program crashes", "Ignored silently", "Auto-retry"],
    correctAnswerIndex: 0,
    difficulty: 'Medium',
    explanation: "Unhandled promise rejections trigger a warning in Node.js and browsers. In strict mode or future Node.js versions, they may cause the process to terminate."
  },
  {
    question: "What does `setInterval()` return?",
    options: ["Interval ID for clearInterval()", "A promise", "Function result", "undefined"],
    correctAnswerIndex: 0,
    difficulty: 'Easy',
    explanation: "`setInterval()` returns a numeric ID that can be passed to `clearInterval()` to stop the repeated execution."
  },
];
