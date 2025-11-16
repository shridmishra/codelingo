import { QuizQuestion } from './types';

export const basicsQuiz: QuizQuestion[] = [
  {
    question: "What does 'typeof' operator in JavaScript return for 'null'?",
    options: ["'object'", "'null'", "'undefined'", "'string'"],
    correctAnswerIndex: 0,
    difficulty: 'Easy',
    explanation: "This is a well-known quirk in JavaScript. Due to historical reasons, `typeof null` returns 'object', not 'null'."
  },
  {
    question: "Which of the following is NOT a primitive data type in JavaScript?",
    options: ["Number", "String", "Boolean", "Object"],
    correctAnswerIndex: 3,
    difficulty: 'Easy',
    explanation: "Primitives in JavaScript are Number, String, Boolean, null, undefined, Symbol, and BigInt. Object is a complex data type."
  },
  {
    question: "What is the result of '2' + 2 in JavaScript?",
    options: ["'22'", "4", "TypeError", "NaN"],
    correctAnswerIndex: 0,
    difficulty: 'Easy',
    explanation: "The `+` operator performs string concatenation when one of the operands is a string. The number 2 is coerced into a string '2'."
  },
  {
    question: "What does the '===' operator check for?",
    options: ["Value equality only", "Type equality only", "Both value and type equality", "Reference equality"],
    correctAnswerIndex: 2,
    difficulty: 'Easy',
    explanation: "The strict equality operator `===` checks for both value and type equality without performing any type coercion."
  },
  {
    question: "How do you declare a variable that cannot be reassigned?",
    options: ["let", "var", "const", "static"],
    correctAnswerIndex: 2,
    difficulty: 'Easy',
    explanation: "`const` declares a block-scoped variable whose value cannot be changed through reassignment and it can't be redeclared."
  },
  {
    question: "What is the difference between `let` and `var`?",
    options: ["`let` is function-scoped, `var` is block-scoped.", "`let` is block-scoped, `var` is function-scoped.", "There is no difference.", "`let` can be redeclared, `var` cannot."],
    correctAnswerIndex: 1,
    difficulty: 'Easy',
    explanation: "`let` and `const` have block scope (they are confined to the block `{}` they are defined in), while `var` has function scope."
  },
  {
    question: "What is the output of `typeof NaN`?",
    options: ["'number'", "'NaN'", "'undefined'", "'object'"],
    correctAnswerIndex: 0,
    difficulty: 'Easy',
    explanation: "NaN (Not-a-Number) is technically a numeric type. It represents a value that is not a legal number."
  },
  {
    question: "What is the difference between `null` and `undefined`?",
    options: ["They are interchangeable.", "`null` is an assigned value representing no value; `undefined` means a variable has been declared but not assigned a value.", "`undefined` is an object, `null` is a primitive.", "There is no `null` in JavaScript."],
    correctAnswerIndex: 1,
    difficulty: 'Easy',
    explanation: "`undefined` is the default value of a variable that has not been assigned a value. `null` is an intentional 'nothing' value that you can assign."
  },
  {
    question: "What is the result of `!!'hello'`?",
    options: ["true", "false", "'hello'", "SyntaxError"],
    correctAnswerIndex: 0,
    difficulty: 'Easy',
    explanation: "The double negation operator `!!` coerces a value to a boolean. Any non-empty string is 'truthy', so `!!'hello'` becomes `true`."
  },
  {
    question: "Which of the following is an example of a falsy value?",
    options: ["'0'", "[]", "{}", "0"],
    correctAnswerIndex: 3,
    difficulty: 'Easy',
    explanation: "In JavaScript, there are only a few falsy values: `false`, `0`, `''` (empty string), `null`, `undefined`, and `NaN`. Everything else is truthy, including `'0'`, `[]`, and `{}`."
  },
  {
    question: "What is the output of `typeof []`?",
    options: ["'array'", "'object'", "'list'", "'undefined'"],
    correctAnswerIndex: 1,
    difficulty: 'Easy',
    explanation: "In JavaScript, arrays are a special type of object, so `typeof` returns 'object'."
  },
  {
    question: "What is the result of `'5' - 3`?",
    options: ["2", "'53'", "NaN", "'2'"],
    correctAnswerIndex: 0,
    difficulty: 'Easy',
    explanation: "When the `-` operator is used, JavaScript coerces the string '5' into a number, so the expression becomes a standard mathematical subtraction."
  },
  {
    question: "What is the result of `'5' * 3`?",
    options: ["15", "'555'", "NaN", "'15'"],
    correctAnswerIndex: 0,
    difficulty: 'Easy',
    explanation: "Similar to subtraction, the `*` operator triggers numeric conversion, so JavaScript treats the operation as `5 * 3`."
  },
  {
    question: "What is the result of `1 + '2' + 3`?",
    options: ["6", "'123'", "'33'", "15"],
    correctAnswerIndex: 1,
    difficulty: 'Medium',
    explanation: "Execution goes left-to-right. `1 + '2'` results in string concatenation ('12'). Then `'12' + 3` is also a concatenation, resulting in '123'."
  },
  {
    question: "What is the result of `1 + 2 + '3'`?",
    options: ["6", "'123'", "'33'", "'6'"],
    correctAnswerIndex: 2,
    difficulty: 'Medium',
    explanation: "Execution goes left-to-right. `1 + 2` is a numeric addition (3). Then `3 + '3'` becomes a string concatenation, resulting in '33'."
  },
  {
    question: "What is the difference between `==` and `===`?",
    options: ["`==` compares for equality after performing type coercion; `===` compares for strict equality without type coercion.", "`===` is faster than `==`.", "`==` is for primitives, `===` is for objects.", "There is no practical difference."],
    correctAnswerIndex: 0,
    difficulty: 'Easy',
    explanation: "`==` can lead to unexpected results (e.g., `0 == false` is true). It's best practice to always use `===` to avoid bugs from unintended type coercion."
  },
  {
    question: "How do you write a single-line comment in JavaScript?",
    options: ["// comment", "/* comment */", "<!-- comment -->", "## comment"],
    correctAnswerIndex: 0,
    difficulty: 'Easy',
    explanation: "`//` is used for single-line comments, and `/* ... */` is used for multi-line comments."
  },
];
