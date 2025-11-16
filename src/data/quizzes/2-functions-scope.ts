import { QuizQuestion } from './types';

export const functionsAndScopeQuiz: QuizQuestion[] = [
  {
    question: "What does 'this' keyword refer to in an arrow function?",
    options: ["The object that called the function", "The global window object", "The lexical scope's 'this'", "It is always undefined"],
    correctAnswerIndex: 2,
    difficulty: 'Medium',
    explanation: "Arrow functions do not have their own `this` context. They inherit `this` from the parent scope at the time they are defined (lexical scoping)."
  },
  {
    question: "What is a closure in JavaScript?",
    options: ["Function retains access to parent scope", "Locks variables", "Special loop", "Date helper"],
    correctAnswerIndex: 0,
    difficulty: 'Hard',
    explanation: "A closure gives you access to an outer function's scope from an inner function. This is a fundamental and powerful concept in JavaScript."
  },
  {
    question: "What is hoisting in JavaScript?",
    options: ["Declarations moved to top of scope", "Engine optimization", "Module import", "Object pattern"],
    correctAnswerIndex: 0,
    difficulty: 'Medium',
    explanation: "Hoisting means that `var` variable and function declarations are processed before any code is executed, but assignments are not. `let` and `const` are hoisted but not initialized, creating a 'temporal dead zone'."
  },
  {
    question: "What does the `bind()` method do?",
    options: ["Immediately calls a function with a given 'this' value.", "Creates a new function that, when called, has its 'this' keyword set to the provided value.", "Attaches a function to an event.", "Connects two objects."],
    correctAnswerIndex: 1,
    difficulty: 'Medium',
    explanation: "`bind()` creates a new function with a permanently bound `this` value. It's useful for passing methods as callbacks."
  },
  {
    question: "What is the purpose of a constructor function?",
    options: ["To construct HTML elements.", "To create and initialize objects of a certain type.", "To connect to a database.", "To handle user input."],
    correctAnswerIndex: 1,
    difficulty: 'Medium',
    explanation: "A constructor function is a blueprint for creating objects. The `new` keyword is used to create new instances from a constructor."
  },
  {
    question: "What is a higher-order function?",
    options: ["A function that is more complex than others.", "A function that operates on other functions, either by taking them as arguments or by returning them.", "A function that is declared at the top of the scope.", "A function that returns an object."],
    correctAnswerIndex: 1,
    difficulty: 'Medium',
    explanation: "Functions like `map`, `filter`, and `reduce` are higher-order functions because they take a function as an argument."
  },
  {
    question: "What is a pure function?",
    options: ["A function that only uses primitive types.", "A function that has no side effects and its return value is the same for the same arguments.", "A function written in vanilla JavaScript.", "A function with no arguments."],
    correctAnswerIndex: 1,
    difficulty: 'Medium',
    explanation: "Pure functions are predictable. Given the same input, they always return the same output and don't modify any external state. This makes them easier to test and reason about."
  },
  {
    question: "What is the `arguments` object in a function?",
    options: ["Array of passed arguments", "Array-like arguments object", "Special keyword", "Deprecated"],
    correctAnswerIndex: 1,
    difficulty: 'Medium',
    explanation: "`arguments` is an array-like object, not a true array. It doesn't have methods like `map` or `forEach`. It is not available in arrow functions."
  },
  {
    question: "Arrow functions can be used as constructor functions.",
    options: ["True", "False"],
    correctAnswerIndex: 1,
    difficulty: 'Medium',
    explanation: "Arrow functions cannot be used as constructors and will throw an error when used with `new`. They also don't have a `prototype` property."
  },
  {
    question: "What is the `this` value in a function called in strict mode?",
    options: ["The global object (window)", "The object that called the function", "undefined", "null"],
    correctAnswerIndex: 2,
    difficulty: 'Medium',
    explanation: "In strict mode, if `this` is not set by the call, it remains `undefined`. In non-strict mode, it would default to the global object (window)."
  },
  {
    question: "What does the `...` rest parameter do in a function signature?",
    options: ["It allows a function to accept an indefinite number of arguments as an array.", "It spreads the arguments into individual variables.", "It indicates that the function is recursive.", "It's a syntax error."],
    correctAnswerIndex: 0,
    difficulty: 'Easy',
    explanation: "The rest parameter syntax `...` collects all remaining arguments passed to a function into a single array."
  },
  {
    question: "Which of the following is a correct way to define a default parameter for a function?",
    options: ["`function foo(a=1) {}`", "`function foo(a || 1) {}`", "`function foo(a ? a : 1) {}`", "`function foo(a: 1) {}`"],
    correctAnswerIndex: 0,
    difficulty: 'Easy',
    explanation: "ES6 introduced default function parameters, allowing you to initialize formal parameters with default values if no value or `undefined` is passed."
  },
  {
    question: "What is the value of `this` in a method of an object?",
    options: ["The global object", "The object itself", "undefined", "The function's prototype"],
    correctAnswerIndex: 1,
    difficulty: 'Easy',
    explanation: "When a function is called as a method of an object, its `this` is set to the object the method is called on (the object before the dot)."
  },
  {
    question: "What does the `new` keyword do?",
    options: ["Creates a new scope.", "Creates a new instance of an object from a constructor function or class.", "Declares a new variable.", "Initializes a new Promise."],
    correctAnswerIndex: 1,
    difficulty: 'Medium',
    explanation: "The `new` keyword creates a blank, plain JavaScript object, sets its `[[Prototype]]`, binds `this` to the new object, and returns it."
  },
  {
    question: "What is the output of `(function(){ return typeof arguments; })();`?",
    options: ["'array'", "'object'", "'arguments'", "'undefined'"],
    correctAnswerIndex: 1,
    difficulty: 'Hard',
    explanation: "Even though `arguments` is array-like, it is not a true array. Its `typeof` is 'object'."
  },
  {
    question: "What does 'use strict' directive do?",
    options: ["Enforces stricter parsing and error handling in your code.", "Allows the use of newer JavaScript features.", "Makes the code run faster.", "Prevents the use of external libraries."],
    correctAnswerIndex: 0,
    difficulty: 'Medium',
    explanation: "'use strict' enables Strict Mode, which changes previously accepted 'bad syntax' into real errors and makes JavaScript more secure."
  },
];
