import { QuizQuestion } from './types';

export const webApisAndBrowserQuiz: QuizQuestion[] = [
  {
    question: "What is JSON?",
    options: ["A JS function", "A JS object", "Lightweight data-interchange format", "JS styling language"],
    correctAnswerIndex: 2,
    difficulty: 'Easy',
    explanation: "JSON (JavaScript Object Notation) is a text-based format for representing structured data based on JavaScript object syntax. It's commonly used for transmitting data in web applications."
  },
  {
    question: "Which method converts a JSON string to a JavaScript object?",
    options: ["JSON.parse()", "JSON.stringify()", "JSON.object()", "JSON.convert()"],
    correctAnswerIndex: 0,
    difficulty: 'Easy',
    explanation: "`JSON.parse()` is used to parse a JSON string, constructing the JavaScript value or object described by the string."
  },
  {
    question: "What is CORS?",
    options: ["A JS framework", "Styling methodology", "Cross-Origin Resource Sharing", "A JS error"],
    correctAnswerIndex: 2,
    difficulty: 'Medium',
    explanation: "CORS is a browser security feature that restricts cross-origin HTTP requests. Servers can use specific headers to tell browsers which origins are permitted to access their resources."
  },
  {
    question: "Which hook is used to perform side effects in a functional React component?",
    options: ["`useState`", "`useEffect`", "`useContext`", "`useReducer`"],
    correctAnswerIndex: 1,
    difficulty: 'Easy',
    explanation: "`useEffect` is used for side effects like data fetching, setting up a subscription, or manually changing the DOM in React components."
  },
  {
    question: "What is the purpose of the `localStorage` object?",
    options: ["To store data with no expiration date that is private to a domain.", "To store session-level data.", "To communicate with a local server.", "To manage application memory."],
    correctAnswerIndex: 0,
    difficulty: 'Easy',
    explanation: "`localStorage` allows web applications to store key-value pairs in a web browser with no expiration time. The data persists even after the browser is closed."
  },
  {
    question: "What is the difference between `localStorage` and `sessionStorage`?",
    options: ["`localStorage` is faster.", "`sessionStorage` data is cleared when the page session ends.", "`localStorage` can store more data.", "There is no difference."],
    correctAnswerIndex: 1,
    difficulty: 'Easy',
    explanation: "`localStorage` persists data until explicitly deleted. `sessionStorage` maintains a separate storage area for each given origin that's available for the duration of the page session (as long as the browser is open)."
  },
  {
    question: "Which function is used to parse a string to an integer?",
    options: ["`parseInt()`", "`Number()`", "`toFloat()`", "`Integer.parse()`"],
    correctAnswerIndex: 0,
    difficulty: 'Easy',
    explanation: "`parseInt()` parses a string argument and returns an integer of the specified radix (the base in mathematical numeral systems)."
  },
  {
    question: "What is the `global` object in Node.js equivalent to in the browser?",
    options: ["`document`", "`console`", "`window`", "`this`"],
    correctAnswerIndex: 2,
    difficulty: 'Easy',
    explanation: "In browsers, the global scope is the `window` object. In Node.js, the `global` object serves a similar purpose."
  },
  {
    question: "How do you export a function from a module in Node.js (CommonJS)?",
    options: ["`export default myFunction;`", "`module.exports = myFunction;`", "`exports.myFunction = myFunction;`", "Both B and C"],
    correctAnswerIndex: 3,
    difficulty: 'Medium',
    explanation: "`module.exports` is used to export a single value (like a function or object), while `exports` is a reference to `module.exports` and can be used to export multiple named values."
  },
  {
    question: "How do you create a regular expression in JavaScript?",
    options: ["`/pattern/flags`", "`new RegExp('pattern', 'flags')`", "`'pattern'.toRegex()`", "Both A and B"],
    correctAnswerIndex: 3,
    difficulty: 'Easy',
    explanation: "You can create a regular expression using either the literal syntax (`/abc/i`) or the constructor (`new RegExp('abc', 'i')`)."
  },
  {
    question: "What method is used to test for a match in a string against a regex?",
    options: ["`string.match(regex)`", "`regex.test(string)`", "`string.search(regex)`", "All of the above"],
    correctAnswerIndex: 3,
    difficulty: 'Medium',
    explanation: "`test()` returns true/false, `match()` returns an array of matches, and `search()` returns the index of the match. All can be used to test for a match."
  },
  {
    question: "What is a 'polyfill'?",
    options: ["Browser extension", "Code providing newer feature on old browsers", "Debugging tool", "Code formatting standard"],
    correctAnswerIndex: 1,
    difficulty: 'Medium',
    explanation: "A polyfill 'fills in' the gap by implementing a modern API that an older browser is missing, allowing developers to use new features more broadly."
  },
  {
    question: "What is 'transpiling'?",
    options: ["Converting between languages", "Converting JS from one version to another", "Testing method", "Minifying code"],
    correctAnswerIndex: 1,
    difficulty: 'Medium',
    explanation: "Transpiling, done by tools like Babel, allows developers to write modern JavaScript (ES6+) and have it converted to an older, more widely-supported version (like ES5) for production."
  },
  {
    question: "What is the main purpose of a 'linter' like ESLint?",
    options: ["Format code", "Find and fix problems", "Bundle code", "Run tests"],
    correctAnswerIndex: 1,
    difficulty: 'Medium',
    explanation: "A linter statically analyzes your code to quickly find stylistic errors, potential bugs, and code that doesn't adhere to certain style guidelines."
  },
];
