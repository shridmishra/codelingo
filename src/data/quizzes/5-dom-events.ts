import { QuizQuestion } from './types';

export const domAndEventsQuiz: QuizQuestion[] = [
  {
    question: "What is event delegation?",
    options: ["Attach handler to child", "Attach one handler to parent", "Create custom events", "Delay handler execution"],
    correctAnswerIndex: 1,
    difficulty: 'Hard',
    explanation: "Event delegation is a powerful technique that leverages event bubbling. You listen for events on a parent element instead of on every child, improving performance and simplifying code."
  },
  {
    question: "What is the DOM?",
    options: ["Data Object Model", "Document Object Model", "Dynamic Object Model", "Distributed Object Model"],
    correctAnswerIndex: 1,
    difficulty: 'Easy',
    explanation: "The DOM is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content."
  },
  {
    question: "How do you select an element by its ID in JavaScript?",
    options: ["`document.querySelector('#id')`", "`document.getElementById('id')`", "`document.getElement('id')`", "Both A and B"],
    correctAnswerIndex: 3,
    difficulty: 'Easy',
    explanation: "`getElementById` is specifically for IDs and is often faster. `querySelector` is more versatile and can use any CSS selector."
  },
  {
    question: "What is the difference between `event.stopPropagation()` and `event.preventDefault()`?",
    options: ["They are the same", "stopPropagation stops bubbling; preventDefault stops default action", "preventDefault stops bubbling; stopPropagation stops default", "No stopPropagation method"],
    correctAnswerIndex: 1,
    difficulty: 'Medium',
    explanation: "`preventDefault()` stops the browser's default behavior (e.g., a link navigating). `stopPropagation()` prevents parent elements from seeing the event (event bubbling)."
  },
  {
    question: "How do you prevent a form from submitting in JavaScript?",
    options: ["Return false", "Call event.preventDefault()", "Call event.stopPropagation()", "Both A and B"],
    correctAnswerIndex: 3,
    difficulty: 'Easy',
    explanation: "Calling `event.preventDefault()` is the modern and standard way. Returning `false` from a handler also works in many cases but `preventDefault` is more explicit."
  },
  {
    question: "What method is used to add an event listener to an element?",
    options: ["`element.addEventListener()`", "`element.on()`", "`element.listen()`", "`element.bind()`"],
    correctAnswerIndex: 0,
    difficulty: 'Easy',
    explanation: "`addEventListener()` is the standard way to register an event handler. It allows multiple handlers for the same event and provides more control than inline handlers."
  },
  {
    question: "What are the three phases of event propagation?",
    options: ["Capture, Target, Bubble", "Start, Middle, End", "Init, Process, Complete", "Down, At, Up"],
    correctAnswerIndex: 0,
    difficulty: 'Medium',
    explanation: "Events propagate in three phases: Capturing phase (from root to target), Target phase (at the target element), and Bubbling phase (from target back to root)."
  },
  {
    question: "How do you select all elements with a specific class?",
    options: ["`document.getElementsByClassName('class')`", "`document.querySelectorAll('.class')`", "`document.getClass('class')`", "Both A and B"],
    correctAnswerIndex: 3,
    difficulty: 'Easy',
    explanation: "Both methods work. `getElementsByClassName` returns a live HTMLCollection, while `querySelectorAll` returns a static NodeList."
  },
  {
    question: "What does `event.target` refer to?",
    options: ["Element that triggered event", "Element listener attached to", "Parent element", "Document object"],
    correctAnswerIndex: 0,
    difficulty: 'Easy',
    explanation: "`event.target` is the element that actually triggered the event, while `event.currentTarget` is the element the listener is attached to."
  },
  {
    question: "What is the difference between `textContent` and `innerHTML`?",
    options: ["textContent = text only; innerHTML = HTML markup", "They are the same", "innerHTML is faster", "textContent parses HTML"],
    correctAnswerIndex: 0,
    difficulty: 'Medium',
    explanation: "`textContent` returns just the text content, while `innerHTML` returns the HTML markup. Using `textContent` is safer as it doesn't parse HTML and prevents XSS attacks."
  },
  {
    question: "How do you create a new DOM element?",
    options: ["`document.createElement('tag')`", "`new Element('tag')`", "`document.newElement('tag')`", "`Element.create('tag')`"],
    correctAnswerIndex: 0,
    difficulty: 'Easy',
    explanation: "`document.createElement()` creates a new element node. After creation, you can modify it and add it to the document with methods like `appendChild()`."
  },
  {
    question: "What does `element.classList.toggle('class')` do?",
    options: ["Adds class if missing; removes if present", "Always adds class", "Always removes class", "Checks existence"],
    correctAnswerIndex: 0,
    difficulty: 'Easy',
    explanation: "`classList.toggle()` is a convenient method that adds a class if it's not present and removes it if it is, returning a boolean indicating the final state."
  },
  {
    question: "What is event bubbling?",
    options: ["Event propagates up through ancestors", "Events queued", "Events delayed", "Multiple events fire"],
    correctAnswerIndex: 0,
    difficulty: 'Medium',
    explanation: "Event bubbling means that when an event occurs on an element, it first runs handlers on that element, then on its parent, then all the way up to the root."
  },
  {
    question: "How do you remove an event listener?",
    options: ["`element.removeEventListener(type, fn)`", "`element.off(type, fn)`", "`element.deleteListener(type, fn)`", "`element.unbind(type, fn)`"],
    correctAnswerIndex: 0,
    difficulty: 'Easy',
    explanation: "`removeEventListener()` removes a previously registered event listener. You must pass the exact same function reference that was used with `addEventListener()`."
  },
  {
    question: "What does `event.stopImmediatePropagation()` do?",
    options: ["Stops propagation and prevents other listeners on same element", "Same as stopPropagation()", "Stops all events on page", "Removes listener"],
    correctAnswerIndex: 0,
    difficulty: 'Hard',
    explanation: "`stopImmediatePropagation()` not only stops the event from bubbling up, but also prevents other event listeners on the same element from being called."
  },
  {
    question: "What is the purpose of `data-*` attributes?",
    options: ["Store custom data on elements", "Define DB connections", "Create animations", "Style elements"],
    correctAnswerIndex: 0,
    difficulty: 'Medium',
    explanation: "Custom data attributes (`data-*`) allow you to store extra information on HTML elements. Access them via `element.dataset` in JavaScript."
  },
];
