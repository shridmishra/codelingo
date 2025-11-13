
import { Problem, Difficulty } from '../../types';
import { runTests } from './utils';

export const algorithms: Omit<Problem, 'status' | 'isStarred' | 'notes'>[] = [
  {
    id: 'factorial',
    title: 'Factorial',
    description: 'Write a function `factorial` that takes a non-negative integer `n` and returns its factorial.',
    difficulty: Difficulty.Medium,
    category: 'Algorithm',
    group: 'Step 4: Algorithms',
    docsUrl: 'https://en.wikipedia.org/wiki/Factorial',
    starterCode: `function factorial(n) {
  // Your code here
}`,
    testCases: [ { input: [5], expectedOutput: 120 }, { input: [0], expectedOutput: 1 } ],
    solutionCheck: (userCode: string) => runTests(userCode, [ { input: [5], expectedOutput: 120 }, { input: [0], expectedOutput: 1 }, { input: [1], expectedOutput: 1 }, { input: [10], expectedOutput: 3628800 } ]),
  },
  {
    id: 'fibonacci-sequence',
    title: 'Fibonacci Sequence',
    description: 'Write a function `fibonacci` that takes a number `n` and returns the nth number in the Fibonacci sequence. The sequence starts with 0 and 1.',
    difficulty: Difficulty.Medium,
    category: 'Algorithm',
    group: 'Step 4: Algorithms',
    docsUrl: 'https://en.wikipedia.org/wiki/Fibonacci_number',
    starterCode: `function fibonacci(n) {
  // Your code here
}`,
    testCases: [ { input: [6], expectedOutput: 8 }, { input: [10], expectedOutput: 55 } ],
    solutionCheck: (userCode: string) => runTests(userCode, [ { input: [0], expectedOutput: 0 }, { input: [1], expectedOutput: 1 }, { input: [6], expectedOutput: 8 }, { input: [10], expectedOutput: 55 }, { input: [15], expectedOutput: 610 } ]),
  },
  {
    id: 'two-sum',
    title: 'Two Sum',
    description: 'Given an array of integers `nums` and an integer `target`, write a function `twoSum` that returns indices of the two numbers such that they add up to `target`. You may assume that each input would have exactly one solution, and you may not use the same element twice. The result should be sorted.',
    difficulty: Difficulty.Medium,
    category: 'Array',
    group: 'Step 4: Algorithms',
    docsUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map',
    starterCode: `function twoSum(nums, target) {
  // Your code here
}`,
    testCases: [ { input: [[2, 7, 11, 15], 9], expectedOutput: [0, 1] }, { input: [[3, 2, 4], 6], expectedOutput: [1, 2] } ],
    solutionCheck: (userCode: string) => runTests(userCode, [ { input: [[2, 7, 11, 15], 9], expectedOutput: [0, 1] }, { input: [[3, 2, 4], 6], expectedOutput: [1, 2] }, { input: [[3, 3], 6], expectedOutput: [0, 1] }, { input: [[-1, -2, -3, -4, -5], -8], expectedOutput: [2, 4] } ]),
  },
  {
    id: 'is-anagram',
    title: 'Check for Anagrams',
    description: 'Write a function `isAnagram` that takes two strings and returns `true` if they are anagrams of each other (contain the same characters in any order), and `false` otherwise.',
    difficulty: Difficulty.Medium,
    category: 'String',
    group: 'Step 4: Algorithms',
    docsUrl: 'https://en.wikipedia.org/wiki/Anagram',
    starterCode: `function isAnagram(str1, str2) {
  // Your code here
}`,
    testCases: [ { input: ['listen', 'silent'], expectedOutput: true }, { input: ['hello', 'world'], expectedOutput: false } ],
    solutionCheck: (userCode: string) => runTests(userCode, [ { input: ['listen', 'silent'], expectedOutput: true }, { input: ['hello', 'world'], expectedOutput: false }, { input: ['rail safety', 'fairy tales'], expectedOutput: true }, { input: ['Dormitory', 'dirty room'], expectedOutput: true } ]),
  },
  {
    id: 'bubble-sort',
    title: 'Bubble Sort',
    description: 'Write a function `bubbleSort` that implements the bubble sort algorithm to sort an array of numbers.',
    difficulty: Difficulty.Hard,
    category: 'Algorithm',
    group: 'Step 4: Algorithms',
    docsUrl: 'https://en.wikipedia.org/wiki/Bubble_sort',
    starterCode: `function bubbleSort(arr) {
  // Your code here
}`,
    testCases: [ { input: [[5, 3, 8, 2, 1]], expectedOutput: [1, 2, 3, 5, 8] } ],
    solutionCheck: (userCode: string) => runTests(userCode, [ { input: [[5, 3, 8, 2, 1, 4]], expectedOutput: [1, 2, 3, 4, 5, 8] }, { input: [[-1, -5, 0, 5, 1]], expectedOutput: [-5, -1, 0, 1, 5] }, { input: [[1]], expectedOutput: [1] } ]),
  },
  {
    id: 'binary-search',
    title: 'Binary Search',
    description: 'Write a function `binarySearch` that takes a sorted array of numbers and a target value, and returns the index of the target. If the target is not found, return -1.',
    difficulty: Difficulty.Hard,
    category: 'Algorithm',
    group: 'Step 4: Algorithms',
    docsUrl: 'https://en.wikipedia.org/wiki/Binary_search_algorithm',
    starterCode: `function binarySearch(arr, target) {
  // Your code here
}`,
    testCases: [ { input: [[1, 2, 3, 4, 5], 3], expectedOutput: 2 }, { input: [[1, 2, 3, 4, 5], 6], expectedOutput: -1 } ],
    solutionCheck: (userCode: string) => runTests(userCode, [ { input: [[1, 2, 3, 4, 5, 6], 4], expectedOutput: 3 }, { input: [[-5, -1, 0, 3, 8], -1], expectedOutput: 1 }, { input: [[10, 20, 30], 35], expectedOutput: -1 } ]),
  },
    {
        id: 'find-longest-word',
        title: 'Find Longest Word',
        description: 'Write a function `findLongestWord` that takes a sentence (string) and returns the length of the longest word in it.',
        difficulty: Difficulty.Medium, category: 'Algorithm', group: 'Step 4: Algorithms',
        docsUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split',
        starterCode: `function findLongestWord(sentence) {
  // Your code here
}`,
        testCases: [ { input: ['The quick brown fox jumped over the lazy dog'], expectedOutput: 6 } ],
        solutionCheck: (userCode: string) => runTests(userCode, [ { input: ['Hello world'], expectedOutput: 5 }, { input: ['JavaScript is awesome'], expectedOutput: 10 } ]),
    },
    
      {
        id: 'insertion-sort',
        title: 'Insertion Sort',
        description: 'Write a function `insertionSort` that implements the insertion sort algorithm to sort an array of numbers.',
        difficulty: Difficulty.Hard,
        category: 'Algorithm',
        group: 'Step 4: Algorithms',
        docsUrl: 'https://en.wikipedia.org/wiki/Insertion_sort',
        starterCode: `function insertionSort(arr) {
  // Your code here
}`,
        testCases: [ { input: [[5, 3, 8, 2, 1]], expectedOutput: [1, 2, 3, 5, 8] } ],
        solutionCheck: (userCode: string) => runTests(userCode, [ { input: [[5, 3, 8, 2, 1, 4]], expectedOutput: [1, 2, 3, 4, 5, 8] }, { input: [[-1, -5, 0, 5, 1]], expectedOutput: [-5, -1, 0, 1, 5] } ]),
      },
      {
        id: 'roman-to-integer',        title: 'Roman to Integer',
        description: 'Write a function `romanToInt` that converts a Roman numeral (string) to an integer.',
        difficulty: Difficulty.Hard, category: 'Algorithm', group: 'Step 4: Algorithms',
        docsUrl: 'https://en.wikipedia.org/wiki/Roman_numerals',
        starterCode: `function romanToInt(s) {
  // Your code here
}`,
        testCases: [ { input: ['III'], expectedOutput: 3 }, { input: ['LVIII'], expectedOutput: 58 }, { input: ['MCMXCIV'], expectedOutput: 1994 } ],
        solutionCheck: (userCode: string) => { return runTests(userCode, [ { input: ['IX'], expectedOutput: 9 }, { input: ['IV'], expectedOutput: 4 }, { input: ['MCMXCIV'], expectedOutput: 1994 } ]); },
      },
    {
        id: 'merge-sorted-arrays',
        title: 'Merge Sorted Arrays',
        description: 'Write a function `mergeSorted` that takes two sorted arrays of numbers and returns a single sorted array containing all elements from both. Do not use `.sort()` on the final array.',
        difficulty: Difficulty.Hard,
        category: 'Algorithm',
        group: 'Step 4: Algorithms',
        docsUrl: 'https://en.wikipedia.org/wiki/Merge_algorithm',
        starterCode: `function mergeSorted(arr1, arr2) {
  // Your code here
}`,
        testCases: [ { input: [[1, 3, 5], [2, 4, 6]], expectedOutput: [1, 2, 3, 4, 5, 6] } ],
        solutionCheck: (userCode: string) => runTests(userCode, [ { input: [[1, 2, 4], [1, 3, 4]], expectedOutput: [1, 1, 2, 3, 4, 4] }, { input: [[], [1]], expectedOutput: [1] } ]),
    },
];
