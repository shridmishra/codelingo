import { TopicQuestion } from '../types';

export const htmlCssQuestions: TopicQuestion[] = [
  {
    id: 'css-1',
    topic: 'CSS',
    question: 'What is the difference between Flexbox and Grid?',
    answer: `Both are powerful layout systems in CSS, but they serve different purposes.

**Flexbox (Flexible Box Layout):**
- **1-Dimensional**: Layouts in a row OR a column.
- **Content-First**: Layout is based on the content size.
- **Use Cases**: Navbars, centering items, aligning items in a single line, distributing space.

**CSS Grid:**
- **2-Dimensional**: Layouts in rows AND columns simultaneously.
- **Layout-First**: You define the grid structure, then place content in it.
- **Use Cases**: distinct page layouts, complex dashboards, image galleries, aligning items in both directions.

**Comparison:**
| Feature | Flexbox | Grid |
|---------|---------|------|
| Axis | Single (X or Y) | Dual (X and Y) |
| Control | Content drives layout | Container drives layout |
| Overlap | Hard to overlap items | Easy to overlap items |
| Alignment | Good for alignment | Good for layout structure |

**Example:**
\`\`\`css
/* Flexbox */
.container {
  display: flex;
  justify-content: center; /* Main axis */
  align-items: center;     /* Cross axis */
}

/* Grid */
.container {
  display: grid;
  grid-template-columns: 1fr 2fr; /* 2 columns */
  grid-template-rows: auto 100px; /* 2 rows */
}
\`\`\`\``,
    difficulty: 'Medium'
  },
  {
    id: 'html-css-1',
    topic: 'HTML & CSS',
    question: 'What is the Box Model?',
    answer: `The CSS Box Model is a box that wraps around every HTML element. It consists of:
1.  **Content**: The actual content of the box, where text and images appear.
2.  **Padding**: Clears an area around the content. The padding is transparent.
3.  **Border**: A border that goes around the padding and content.
4.  **Margin**: Clears an area outside the border. The margin is transparent.`,
    difficulty: 'Easy'
  },
  {
    id: 'html-css-2',
    topic: 'HTML & CSS',
    question: 'What is the difference between "display: none" and "visibility: hidden"?',
    answer: `**display: none**:
- The element is removed from the document flow.
- It takes up no space.
- It is ignored by screen readers.

**visibility: hidden**:
- The element is hidden but still takes up space in the layout.
- It affects the layout of other elements.`,
    difficulty: 'Easy'
  },
  {
    id: 'html-css-3',
    topic: 'HTML & CSS',
    question: 'What are Semantic Elements in HTML?',
    answer: `Semantic elements clearly describe their meaning to both the browser and the developer.

**Examples:**
- \`<header>\`, \`<footer>\`, \`<article>\`, \`<section>\`
- \`<form>\`, \`<table>\`

**Non-semantic:**
- \`<div>\`, \`<span>\` (tell nothing about their content)`,
    difficulty: 'Easy'
  },
  {
    id: 'html-css-4',
    topic: 'HTML & CSS',
    question: 'What is Flexbox?',
    answer: `Flexbox (Flexible Box Layout) is a one-dimensional layout method for laying out items in rows or columns. Items flex to fill additional space and shrink to fit into smaller spaces.

**Key Properties:**
- \`flex-direction\`
- \`justify-content\`
- \`align-items\`
- \`flex-wrap\``,
    difficulty: 'Medium'
  },
  {
    id: 'html-css-5',
    topic: 'HTML & CSS',
    question: 'What is CSS Grid?',
    answer: `CSS Grid Layout is a two-dimensional layout system for the web. It lets you lay out items in rows and columns.

**Key Properties:**
- \`grid-template-columns\`
- \`grid-template-rows\`
- \`grid-gap\`
- \`grid-area\``,
    difficulty: 'Medium'
  },
  {
    id: 'html-css-6',
    topic: 'HTML & CSS',
    question: 'What is the "z-index" property?',
    answer: `The \`z-index\` property specifies the stack order of an element. An element with greater stack order is always in front of an element with a lower stack order. It only works on positioned elements (\`position: absolute\`, \`position: relative\`, \`position: fixed\`, or \`position: sticky\`).`,
    difficulty: 'Easy'
  },
  {
    id: 'html-css-7',
    topic: 'HTML & CSS',
    question: 'What are Pseudo-classes?',
    answer: `A pseudo-class is used to define a special state of an element.

**Examples:**
- \`:hover\`
- \`:active\`
- \`:focus\`
- \`:first-child\`
- \`:nth-child(n)\``,
    difficulty: 'Medium'
  },
  {
    id: 'html-css-8',
    topic: 'HTML & CSS',
    question: 'What is Specificity in CSS?',
    answer: `Specificity is the means by which browsers decide which CSS property values are the most relevant to an element and, therefore, will be applied.

**Hierarchy (Low to High):**
1.  Element selectors (h1, p)
2.  Class selectors (.example), attribute selectors, pseudo-classes
3.  ID selectors (#example)
4.  Inline styles
5.  !important`,
    difficulty: 'Hard'
  },
  {
    id: 'html-css-9',
    topic: 'HTML & CSS',
    question: 'What is the difference between "relative", "absolute", "fixed", and "sticky" positioning?',
    answer: `**relative**: Positioned relative to its normal position.
**absolute**: Positioned relative to the nearest positioned ancestor.
**fixed**: Positioned relative to the viewport (stays in place on scroll).
**sticky**: Toggles between relative and fixed depending on scroll position.`,
    difficulty: 'Medium'
  },
  {
    id: 'html-css-10',
    topic: 'HTML & CSS',
    question: 'What are Media Queries?',
    answer: `Media queries allow you to apply CSS styles depending on a device's general type (such as print vs. screen) or specific characteristics (such as the width of the viewport).

**Example:**
\`\`\`css
@media (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}
\`\`\``,
    difficulty: 'Easy'
  },
  {
    id: 'html-css-11',
    topic: 'HTML & CSS',
    question: 'What is the difference between "px", "em", and "rem"?',
    answer: `**px**: Absolute unit (pixels).
**em**: Relative to the font-size of the element (2em means 2 times the size of the current font).
**rem**: Relative to the font-size of the root element (html).`,
    difficulty: 'Medium'
  },
  {
    id: 'html-css-12',
    topic: 'HTML & CSS',
    question: 'What is the DOCTYPE?',
    answer: `The \`<!DOCTYPE html>\` declaration is not an HTML tag; it is an instruction to the web browser about what version of HTML the page is written in. It ensures the browser renders the page in "Standard Mode" rather than "Quirks Mode".`,
    difficulty: 'Easy'
  },
  {
    id: 'html-css-13',
    topic: 'HTML & CSS',
    question: 'What are data- attributes?',
    answer: `\`data-*\` attributes allow us to store extra information on standard, semantic HTML elements without other hacks such as non-standard attributes or extra properties on DOM.`,
    difficulty: 'Easy'
  },
  {
    id: 'html-css-14',
    topic: 'HTML & CSS',
    question: 'What is the difference between localStorage, sessionStorage, and cookies?',
    answer: `**localStorage**: Stores data with no expiration date.
**sessionStorage**: Stores data for one session (data is lost when the browser tab is closed).
**Cookies**: Stores data that has to be sent back to the server with subsequent requests. Has expiration.`,
    difficulty: 'Medium'
  },
  {
    id: 'html-css-15',
    topic: 'HTML & CSS',
    question: 'What is the purpose of the "alt" attribute on images?',
    answer: `The \`alt\` attribute provides alternative text for an image if the user for some reason cannot view it (slow connection, error in src, or if the user uses a screen reader).`,
    difficulty: 'Easy'
  },
  {
    id: 'html-css-16',
    topic: 'HTML & CSS',
    question: 'What is the CSS "calc()" function?',
    answer: `The \`calc()\` function allows you to perform calculations to determine CSS property values.

**Example:**
\`\`\`css
width: calc(100% - 100px);
\`\`\``,
    difficulty: 'Medium'
  },
  {
    id: 'html-css-17',
    topic: 'HTML & CSS',
    question: 'What are CSS Variables (Custom Properties)?',
    answer: `CSS variables are entities defined by CSS authors that contain specific values to be reused throughout a document.

**Example:**
\`\`\`css
:root {
  --main-bg-color: coral;
}
body {
  background-color: var(--main-bg-color);
}
\`\`\``,
    difficulty: 'Easy'
  },
  {
    id: 'html-css-18',
    topic: 'HTML & CSS',
    question: 'What is BEM methodology?',
    answer: `BEM stands for Block Element Modifier. It is a naming convention for classes in HTML and CSS.

**Structure:**
- **Block**: Standalone entity that is meaningful on its own (\`.header\`, \`.container\`).
- **Element**: A part of a block that has no standalone meaning and is semantically tied to its block (\`.header__menu\`).
- **Modifier**: A flag on a block or element. Use them to change appearance or behavior (\`.header__menu--active\`).`,
    difficulty: 'Hard'
  },
  {
    id: 'html-css-19',
    topic: 'HTML & CSS',
    question: 'What is the difference between "inline", "inline-block", and "block"?',
    answer: `**block**: Starts on a new line and takes up the full width available.
**inline**: Does not start on a new line and only takes up as much width as necessary. Cannot set width/height.
**inline-block**: Like inline, but allows setting width and height.`,
    difficulty: 'Easy'
  },
  {
    id: 'html-css-20',
    topic: 'HTML & CSS',
    question: 'What is the Shadow DOM?',
    answer: `The Shadow DOM is a browser technology designed primarily for scoping variables and CSS in web components. It allows you to attach a hidden DOM tree to an element in the regular DOM tree.`,
    difficulty: 'Hard'
  }
];
