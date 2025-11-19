import { InterviewQuestion } from './types';

export const reactQuestions: InterviewQuestion[] = [
  {
    id: 'react-1',
    topic: 'React',
    question: 'What is the Virtual DOM and how does it work?',
    answer: `The Virtual DOM (VDOM) is a lightweight copy of the actual DOM in memory. React uses it to improve performance by minimizing direct DOM manipulation.

**How it works:**
1. **Render Phase**: When state/props change, React creates a new Virtual DOM tree.
2. **Diffing**: React compares the new VDOM with the previous VDOM (Diffing Algorithm).
3. **Reconciliation**: It calculates the minimum number of changes needed.
4. **Commit Phase**: React updates the real DOM with only those specific changes.

**Benefits:**
- Faster updates (batching)
- Cross-platform (React Native)
- Declarative API (you don't manually touch DOM)

**Real DOM vs Virtual DOM:**
| Real DOM | Virtual DOM |
|----------|-------------|
| Slow to update | Fast to update |
| Can directly update HTML | Can't directly update HTML |
| Creates a new DOM if element updates | Updates the JSX if element updates |
| DOM manipulation is expensive | DOM manipulation is easy |`,
    difficulty: 'Medium'
  },
  {
    id: 'react-2',
    topic: 'React',
    question: 'Explain the useEffect hook and its dependency array.',
    answer: `useEffect handles side effects in functional components (fetching data, subscriptions, manual DOM changes).

**Syntax:**
\`\`\`javascript
useEffect(() => {
  // Effect code
  return () => {
    // Cleanup code (optional)
  };
}, [dependencies]);
\`\`\`

**Dependency Array Rules:**
1. **No Array (omitted)**: Runs after EVERY render.
   \`\`\`javascript
   useEffect(() => { console.log('Runs always'); });
   \`\`\`

2. **Empty Array ([])**: Runs ONLY on mount (once).
   \`\`\`javascript
   useEffect(() => { console.log('Runs once'); }, []);
   \`\`\`

3. **With Dependencies ([prop, state])**: Runs on mount AND when any dependency changes.
   \`\`\`javascript
   useEffect(() => { console.log('Runs when count changes'); }, [count]);
   \`\`\`

**Cleanup Function:**
- Runs before the component unmounts
- Runs before re-running the effect (if dependencies changed)
- Used for clearing timers, removing event listeners, cancelling requests.

**Common Mistake:**
Missing dependencies in the array can lead to stale closures or infinite loops.`,
    difficulty: 'Medium'
  },
  {
    id: 'react-3',
    topic: 'React',
    question: 'What are React hooks and why were they introduced?',
    answer: `Hooks are functions that let you use state and other React features in functional components. They were introduced to avoid class components, promote code reuse, and simplify component logic.`,
    difficulty: 'Easy'
  },
  {
    id: 'react-4',
    topic: 'React',
    question: 'How does useEffect differ from componentDidMount/componentDidUpdate?',
    answer: `useEffect runs after render and can be configured with a dependency array. With an empty array it mimics componentDidMount, and with specific dependencies it runs when those values change, covering componentDidUpdate behavior.`,
    difficulty: 'Medium'
  },
  {
    id: 'react-5',
    topic: 'React',
    question: 'What is the purpose of useMemo and when should you use it?',
    answer: `useMemo memoizes a computed value between renders. Use it for expensive calculations that should only re‑run when their dependencies change, preventing unnecessary work.`,
    difficulty: 'Medium'
  },
  {
    id: 'react-6',
    topic: 'React',
    question: 'Explain the difference between controlled and uncontrolled components.',
    answer: `Controlled components have their value managed by React state via onChange handlers. Uncontrolled components store their own internal state, accessed via refs. Controlled gives full React control, while uncontrolled is simpler for simple forms.`,
    difficulty: 'Easy'
  },
  {
    id: 'react-7',
    topic: 'React',
    question: 'What is React Context and when would you use it?',
    answer: `Context provides a way to pass data through the component tree without prop‑drilling. Use it for global values like theme, locale, or authenticated user that many components need.`,
    difficulty: 'Medium'
  },
  {
    id: 'react-8',
    topic: 'React',
    question: 'How does React.memo improve performance?',
    answer: `React.memo is a higher‑order component that memoizes a functional component’s rendered output. It prevents re‑rendering when props haven’t changed, similar to shouldComponentUpdate for class components.`,
    difficulty: 'Medium'
  },
  {
    id: 'react-9',
    topic: 'React',
    question: 'What are custom hooks and how do you create one?',
    answer: `Custom hooks are reusable functions that encapsulate hook logic. Create one by defining a function that calls built‑in hooks and returns whatever you need (state, handlers, etc.). Prefix the name with “use”.`,
    difficulty: 'Easy'
  },
  {
    id: 'react-10',
    topic: 'React',
    question: 'Explain the concept of lifting state up.',
    answer: `Lifting state up means moving shared state to the nearest common ancestor so multiple child components can read and modify it via props, ensuring a single source of truth.`,
    difficulty: 'Easy'
  },
  {
    id: 'react-11',
    topic: 'React',
    question: 'What is the purpose of the useRef hook?',
    answer: `useRef returns a mutable ref object whose .current property persists across renders. It’s used to access DOM nodes or store mutable values that don’t trigger re‑renders when changed.`,
    difficulty: 'Easy'
  },
  {
    id: 'react-12',
    topic: 'React',
    question: 'How does React handle events differently from plain HTML?',
    answer: `React uses a synthetic event system that normalizes events across browsers and pools them for performance. Handlers are passed as camelCase props (e.g., onClick) instead of HTML attributes.`,
    difficulty: 'Medium'
  },
  {
    id: 'react-13',
    topic: 'React',
    question: 'What is the difference between React.lazy and code‑splitting with dynamic import?',
    answer: `React.lazy is a helper that lets you render a dynamically imported component as a lazy‑loaded component, automatically handling the loading state. Dynamic import alone just returns a promise; you need to manage the component rendering yourself.`,
    difficulty: 'Medium'
  },
  {
    id: 'react-14',
    topic: 'React',
    question: 'Explain the role of the key prop in React.Fragment.',
    answer: `When rendering multiple fragments, a key prop lets React differentiate each fragment in the list, enabling proper reconciliation and avoiding warnings.`,
    difficulty: 'Easy'
  },
  {
    id: 'react-15',
    topic: 'React',
    question: 'What are error boundaries and how do you implement one?',
    answer: `Error boundaries are React components that catch JavaScript errors in their child tree during rendering, lifecycle methods, or constructors. Implement by defining a class component with static getDerivedStateFromError and componentDidCatch, then render a fallback UI.`,
    difficulty: 'Medium'
  },
  {
    id: 'react-16',
    topic: 'React',
    question: 'How does the useCallback hook help with performance?',
    answer: `useCallback returns a memoized version of a callback function that only changes when its dependencies change. It prevents unnecessary re‑creation of functions, useful when passing callbacks to memoized child components.`,
    difficulty: 'Medium'
  },
  {
    id: 'react-17',
    topic: 'React',
    question: 'What is the purpose of the React.StrictMode component?',
    answer: `StrictMode activates additional checks and warnings for its descendants in development mode, such as detecting unsafe lifecycles, legacy API usage, and unexpected side effects.`,
    difficulty: 'Easy'
  },
  {
    id: 'react-18',
    topic: 'React',
    question: 'Explain the difference between client‑side rendering and server‑side rendering in React.',
    answer: `Client‑side rendering renders components in the browser after JavaScript loads, while server‑side rendering (SSR) generates HTML on the server for the initial request, improving SEO and perceived load time.`,
    difficulty: 'Medium'
  },
  {
    id: 'react-19',
    topic: 'React',
    question: 'What is the purpose of the React Profiler API?',
    answer: `The Profiler measures rendering performance of React components, providing timing information for each commit. It helps identify performance bottlenecks in the UI.`,
    difficulty: 'Medium'
  },
  {
    id: 'react-20',
    topic: 'React',
    question: 'How do you prevent memory leaks with useEffect?',
    answer: `Return a cleanup function from useEffect to unsubscribe from subscriptions, clear timers, or cancel async operations when the component unmounts or before the effect re‑runs.`,
    difficulty: 'Medium'
  }
];
