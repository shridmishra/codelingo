import { QuizQuestion } from './types';

export const advancedConceptsQuiz: QuizQuestion[] = [
  {
    question: "What is prototypal inheritance?",
    options: ["A way to create classes", "Objects inherit from other objects", "Define private members", "Inheritance library"],
    correctAnswerIndex: 1,
    difficulty: 'Hard',
    explanation: "JavaScript objects have a special `[[Prototype]]` property. When trying to access a property on an object, if it's not found, the JavaScript engine looks at the object's prototype, then the prototype's prototype, and so on."
  },
  {
    question: "What does the `instanceof` operator do?",
    options: ["Checks if an object is an instance of a specific class or constructor function.", "Compares two objects for equality.", "Returns the type of an object.", "Creates a new instance of an object."],
    correctAnswerIndex: 0,
    difficulty: 'Medium',
    explanation: "The `instanceof` operator tests to see if the `prototype` property of a constructor appears anywhere in the prototype chain of an object."
  },
  {
    question: "What is `Symbol` in JavaScript?",
    options: ["Special string type", "Unique immutable primitive", "Create private properties", "Both unique primitive and private props"],
    correctAnswerIndex: 3,
    difficulty: 'Hard',
    explanation: "Symbols are a unique and immutable primitive data type introduced in ES6. They are often used as unique property keys for objects to avoid name collisions."
  },
  {
    question: "What is the `Proxy` object used for?",
    options: ["Create proxy server", "Define custom behavior for object ops", "Manage network requests", "Create secure objects"],
    correctAnswerIndex: 1,
    difficulty: 'Hard',
    explanation: "The `Proxy` object allows you to create an object that can be used in place of the original object, but which may redefine fundamental operations like getting, setting, and defining properties."
  },
  {
    question: "What is `WeakMap`?",
    options: ["Incorrect map implementation", "Map with weakly-referenced keys", "Map with limited capacity", "Map accepting only strings"],
    correctAnswerIndex: 1,
    difficulty: 'Hard',
    explanation: "In a `WeakMap`, the keys are weakly referenced, which means if there are no other references to a key object, it can be garbage collected. This is useful for memory management."
  },
  {
    question: "What is a 'Web Worker'?",
    options: ["Networking library", "Background thread for scripts", "Browser security feature", "DOM element type"],
    correctAnswerIndex: 1,
    difficulty: 'Medium',
    explanation: "Web Workers allow you to run a script on a background thread separate from the main execution thread of a web application. This is useful for long-running tasks that shouldn't block the UI."
  },
  {
    question: "What is the difference between `__proto__` and `prototype`?",
    options: ["__proto__ is lookup object; prototype is constructor property", "They are the same", "prototype deprecated", "__proto__ for classes only"],
    correctAnswerIndex: 0,
    difficulty: 'Hard',
    explanation: "`prototype` is a property of constructor functions that becomes the `__proto__` of instances created with `new`. `__proto__` is the actual object that is used in the prototype chain lookup."
  },
  {
    question: "What is memoization?",
    options: ["Cache function results by input", "Memorize code", "Debugging technique", "Memory allocation strategy"],
    correctAnswerIndex: 0,
    difficulty: 'Medium',
    explanation: "Memoization stores the results of expensive function calls and returns the cached result when the same inputs occur again, improving performance for recursive or repeated operations."
  },
  {
    question: "What is the difference between `call()`, `apply()`, and `bind()`?",
    options: ["`call()` and `apply()` invoke immediately with different argument formats; `bind()` returns a new function", "They are the same", "`bind()` is deprecated", "`call()` is for classes only"],
    correctAnswerIndex: 0,
    difficulty: 'Hard',
    explanation: "`call(thisArg, arg1, arg2, ...)` and `apply(thisArg, [args])` invoke immediately. `bind(thisArg)` returns a new function with bound `this` that can be called later."
  },
  {
    question: "What is the Temporal Dead Zone (TDZ)?",
    options: ["Scope period before let/const initialized", "Timezone handling", "Memory leak", "Deprecated feature"],
    correctAnswerIndex: 0,
    difficulty: 'Hard',
    explanation: "Variables declared with `let` and `const` are hoisted but not initialized. Accessing them before their declaration line results in a ReferenceError. This period is the TDZ."
  },
  {
    question: "What is currying in JavaScript?",
    options: ["Transforming a function with multiple arguments into a sequence of functions each taking a single argument", "A way to optimize code", "A debugging technique", "A loop optimization"],
    correctAnswerIndex: 0,
    difficulty: 'Hard',
    explanation: "Currying converts `f(a, b, c)` into `f(a)(b)(c)`. Each function takes one argument and returns another function until all arguments are provided, then the result is computed."
  },
  {
    question: "What is the purpose of `Object.create()`?",
    options: ["Creates a new object with the specified prototype object and properties", "Copies an object", "Validates object creation", "Freezes an object"],
    correctAnswerIndex: 0,
    difficulty: 'Medium',
    explanation: "`Object.create(proto)` creates a new object with the specified prototype. This is useful for implementing inheritance without using constructors or classes."
  },
  {
    question: "What is a WeakSet?",
    options: ["A set where objects are held weakly and can be garbage collected", "A set with limited capacity", "A deprecated collection", "A set that only stores weak references"],
    correctAnswerIndex: 0,
    difficulty: 'Hard',
    explanation: "WeakSet is similar to Set but only stores objects (not primitives) and holds them weakly. If no other references to an object exist, it can be garbage collected from the WeakSet."
  },
  {
    question: "What is the difference between shallow copy and deep copy?",
    options: ["Shallow copies only top-level properties; deep copies all nested objects recursively", "They are the same", "Shallow is faster", "Deep copy is deprecated"],
    correctAnswerIndex: 0,
    difficulty: 'Medium',
    explanation: "Shallow copy (`{...obj}` or `Object.assign()`) only copies top-level properties. Nested objects are still referenced. Deep copy recursively copies all levels, creating independent objects."
  },
  {
    question: "What is the `Reflect` API used for?",
    options: ["Provides methods for interceptable JavaScript operations", "Reflects object properties", "Creates mirror objects", "A debugging tool"],
    correctAnswerIndex: 0,
    difficulty: 'Hard',
    explanation: "`Reflect` is a built-in object that provides methods for interceptable operations (like property access, assignment). It's often used with Proxy to properly forward operations."
  },
];
