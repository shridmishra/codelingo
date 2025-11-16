import { QuizQuestion } from './types';

export const arraysAndObjectsQuiz: QuizQuestion[] = [
  {
    question: "Which method is used to add a new element to the end of an array?",
    options: ["array.push()", "array.pop()", "array.shift()", "array.unshift()"],
    correctAnswerIndex: 0,
    difficulty: 'Easy',
    explanation: "`push()` adds one or more elements to the end of an array and returns the new length of the array."
  },
  {
    question: "Which method can be used to iterate over all enumerable properties of an object?",
    options: ["for...in loop", "for...of loop", ".forEach()", "Both A and C"],
    correctAnswerIndex: 0,
    difficulty: 'Medium',
    explanation: "The `for...in` statement iterates over all enumerable properties of an object, including inherited ones. `for...of` is for iterables like arrays and strings."
  },
  {
    question: "What does `Array.prototype.map()` return?",
    options: ["A new array of results", "Original array modified", "First matching element", "Boolean"],
    correctAnswerIndex: 0,
    difficulty: 'Easy',
    explanation: "`map()` creates a new array by calling a function for every array element. It does not change the original array."
  },
  {
    question: "What does the spread operator (...) do for arrays?",
    options: ["Join arrays", "Expand iterable into elements", "Shallow copy", "Both expand and copy"],
    correctAnswerIndex: 1,
    difficulty: 'Medium',
    explanation: "The spread syntax `...` allows an iterable such as an array to be expanded in places where zero or more arguments or elements are expected."
  },
  {
    question: "How do you check if a variable is an array?",
    options: ["typeof arr === 'array'", "arr instanceof Array", "Array.isArray(arr)", "Both B and C"],
    correctAnswerIndex: 3,
    difficulty: 'Easy',
    explanation: "`Array.isArray()` is the most reliable way. `instanceof Array` can fail across different realms (e.g., iframes)."
  },
  {
    question: "What does the `Array.prototype.reduce()` method do?",
    options: ["Collapse array into single value", "Remove elements", "Create filtered array", "Reverse array"],
    correctAnswerIndex: 0,
    difficulty: 'Medium',
    explanation: "`reduce()` is a powerful method for 'reducing' an array to a single value, like summing all numbers or transforming it into an object."
  },
  {
    question: "Which of these is a valid way to create an object?",
    options: ["`const obj = {};`", "`const obj = new Object();`", "`const obj = Object.create(null);`", "All of the above"],
    correctAnswerIndex: 3,
    difficulty: 'Easy',
    explanation: "All three are valid ways to create an object. The object literal syntax `{}` is the most common and concise."
  },
  {
    question: "How do you get the number of properties in an object?",
    options: ["`obj.length`", "`Object.keys(obj).length`", "`obj.size()`", "`Object.count(obj)`"],
    correctAnswerIndex: 1,
    difficulty: 'Easy',
    explanation: "`Object.keys(obj)` returns an array of an object's own enumerable property names, so you can get the count from its length."
  },
  {
    question: "Which method removes the last element from an array and returns that element?",
    options: ["shift()", "unshift()", "pop()", "push()"],
    correctAnswerIndex: 2,
    difficulty: 'Easy',
    explanation: "`pop()` removes and returns the last element, modifying the original array. `shift()` does the same for the first element."
  },
  {
    question: "What is destructuring assignment?",
    options: ["Break down data structures", "Unpack values into variables", "Destroy objects", "Memory technique"],
    correctAnswerIndex: 1,
    difficulty: 'Easy',
    explanation: "Destructuring provides a concise way to extract data from arrays and objects into variables, making code cleaner and more readable."
  },
  {
    question: "What does the `slice()` method do on an array?",
    options: ["It modifies the array in place.", "It returns a shallow copy of a portion of an array into a new array object.", "It adds elements to an array.", "It sorts the array."],
    correctAnswerIndex: 1,
    difficulty: 'Easy',
    explanation: "`slice()` is non-destructive. It creates a new array containing a portion of the original array, which is left unchanged."
  },
  {
    question: "What does `Object.freeze()` do?",
    options: ["It prevents new properties from being added to an object, and prevents existing properties from being removed or modified.", "It deletes an object.", "It creates a read-only copy of an object.", "It serializes an object."],
    correctAnswerIndex: 0,
    difficulty: 'Hard',
    explanation: "`Object.freeze()` makes an object immutable. It's a shallow freeze, meaning properties that are objects themselves can still be modified."
  },
  {
    question: "What is the purpose of the `Set` object?",
    options: ["To store a collection of key-value pairs.", "To store a collection of unique values of any type.", "To define a set of rules for an object.", "To manage application state."],
    correctAnswerIndex: 1,
    difficulty: 'Medium',
    explanation: "A `Set` automatically handles uniqueness. It's useful for tasks like removing duplicate elements from an array."
  },
  {
    question: "What is the purpose of the `Map` object?",
    options: ["To store a collection of unique values.", "To iterate over an array's elements.", "To hold key-value pairs and remember the original insertion order of the keys.", "To perform mathematical operations."],
    correctAnswerIndex: 2,
    difficulty: 'Medium',
    explanation: "`Map` is similar to an object, but it allows keys of any type (not just strings/symbols) and maintains insertion order."
  },
  {
    question: "What is the output of `[] + []` in JavaScript?",
    options: ["[]", "''", "0", "TypeError"],
    correctAnswerIndex: 1,
    difficulty: 'Hard',
    explanation: "When using the `+` operator, JavaScript converts the arrays to strings. `[].toString()` results in `''`, so `'' + ''` is `''`."
  },
  {
    question: "What is the correct way to check if an object has a specific property?",
    options: ["`obj.prop !== undefined`", "`obj.hasOwnProperty('prop')`", "`'prop' in obj`", "All of the above"],
    correctAnswerIndex: 3,
    difficulty: 'Medium',
    explanation: "`hasOwnProperty` checks for own properties, while the `in` operator checks for own and inherited properties. Checking for `undefined` can be unreliable if the property exists but its value is `undefined`."
  },
  {
    question: "What does the `Array.prototype.find()` method return?",
    options: ["An array of all values that satisfy the condition.", "The index of the first element that satisfies the condition.", "The value of the first element that satisfies the condition.", "A boolean indicating if any element satisfies the condition."],
    correctAnswerIndex: 2,
    difficulty: 'Easy',
    explanation: "`find()` returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, `undefined` is returned."
  },
  {
    question: "How can you create a shallow copy of an object?",
    options: ["`const copy = { ...obj };`", "`const copy = Object.assign({}, obj);`", "`const copy = obj;`", "Both A and B"],
    correctAnswerIndex: 3,
    difficulty: 'Easy',
    explanation: "Both the spread syntax `...` and `Object.assign()` create a shallow copy. Assigning with `=` (`const copy = obj;`) only copies the reference, not the object itself."
  },
  {
    question: "What is the purpose of `Array.prototype.some()`?",
    options: ["To check if some elements are the same.", "To check if at least one element in the array passes the test implemented by the provided function.", "To sum up some of the elements.", "To get a random subset of the array."],
    correctAnswerIndex: 1,
    difficulty: 'Easy',
    explanation: "`some()` checks if any array elements pass a test. It returns `true` as soon as it finds one, making it efficient."
  },
  {
    question: "What is the purpose of `Array.prototype.every()`?",
    options: ["To execute a function for every element.", "To check if every element in the array passes the test implemented by the provided function.", "To get every element from an array.", "To iterate over every property of the array object."],
    correctAnswerIndex: 1,
    difficulty: 'Easy',
    explanation: "`every()` tests whether all elements in the array pass the test implemented by the provided function. It returns a boolean value."
  },
  {
    question: "What will `[1, 2, 3].map(parseInt)` return?",
    options: ["[1, 2, 3]", "[1, NaN, NaN]", "[1, 0, 1]", "SyntaxError"],
    correctAnswerIndex: 1,
    difficulty: 'Hard',
    explanation: "`map` passes three arguments: `element`, `index`, and `array`. `parseInt` takes two: `string` and `radix`. The calls become `parseInt('1', 0)`, `parseInt('2', 1)`, and `parseInt('3', 2)`, which result in `1`, `NaN`, and `NaN`."
  },
  {
    question: "What does `...` do when used in an object literal?",
    options: ["Indicates an incomplete object.", "Clones the object.", "Copies the properties from one or more objects into a new object.", "It is a syntax error."],
    correctAnswerIndex: 2,
    difficulty: 'Easy',
    explanation: "The spread syntax for objects is used to easily copy the properties from one object into another, which is very useful for creating new objects based on existing ones."
  },
  {
    question: "How do you create a 'getter' in an object literal?",
    options: ["`get property() { ... }`", "`getter property() { ... }`", "`function get.property() { ... }`", "`property: get() { ... }`"],
    correctAnswerIndex: 0,
    difficulty: 'Medium',
    explanation: "The `get` syntax binds an object property to a function that will be called when that property is looked up."
  },
];
