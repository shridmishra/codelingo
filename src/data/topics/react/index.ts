import { TopicQuestion } from '../types';

export const reactQuestions: TopicQuestion[] = [
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
  },
  {
    id: 'react-21',
    topic: 'React',
    question: 'What are Error Boundaries and how do you implement them?',
    answer: `Error Boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of crashing the whole app.

**Implementation (Class Component only):**
\`\`\`javascript
class ErrorBoundary extends React.Component {
  state = { hasError: false };
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}
\`\`\`

**Key Points:**
- Must be a class component (hooks version not available yet)
- Does NOT catch errors in event handlers, async code, SSR, or itself
- Use multiple boundaries to isolate different parts of your app`,
    difficulty: 'Medium'
  },
  {
    id: 'react-22',
    topic: 'React',
    question: 'Explain React.lazy and Suspense for code splitting.',
    answer: `React.lazy and Suspense enable code splitting by loading components dynamically only when they're needed.

**React.lazy:**
\`\`\`javascript
const LazyComponent = React.lazy(() => import('./HeavyComponent'));
\`\`\`

**Suspense:**
\`\`\`javascript
<Suspense fallback={<Loading />}>
  <LazyComponent />
</Suspense>
\`\`\`

**Benefits:**
- Reduces initial bundle size
- Faster initial page load
- Components load on demand

**Use Cases:**
- Route-based code splitting
- Heavy components (charts, editors)
- Modals and dialogs`,
    difficulty: 'Medium'
  },
  {
    id: 'react-23',
    topic: 'React',
    question: 'What is forwardRef and when would you use it?',
    answer: `forwardRef is a technique that lets you pass a ref through a component to a child element.

**Problem:** Regular function components can't receive refs directly.

**Solution:**
\`\`\`javascript
const FancyInput = React.forwardRef((props, ref) => (
  <input ref={ref} className="fancy" {...props} />
));

// Usage
const inputRef = useRef();
<FancyInput ref={inputRef} />
inputRef.current.focus();
\`\`\`

**Use Cases:**
- Reusable input/button components
- Focus management
- Integrating with third-party libraries
- Exposing child DOM nodes to parent components`,
    difficulty: 'Medium'
  },
  {
    id: 'react-24',
    topic: 'React',
    question: 'Explain useImperativeHandle and its purpose.',
    answer: `useImperativeHandle customizes the instance value exposed to parent components when using ref with forwardRef.

**Syntax:**
\`\`\`javascript
const FancyInput = React.forwardRef((props, ref) => {
  const inputRef = useRef();
  
  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current.focus(),
    clear: () => { inputRef.current.value = ''; }
  }));
  
  return <input ref={inputRef} />;
});

// Parent can now call:
ref.current.focus();
ref.current.clear();
\`\`\`

**Use Cases:**
- Exposing only specific methods (encapsulation)
- Creating custom "handles" with specific API
- Complex imperative logic in reusable components`,
    difficulty: 'Hard'
  },
  {
    id: 'react-25',
    topic: 'React',
    question: 'What are Higher-Order Components (HOCs)?',
    answer: `A Higher-Order Component is a function that takes a component and returns a new enhanced component.

**Pattern:**
\`\`\`javascript
function withLoading(WrappedComponent) {
  return function WithLoading({ isLoading, ...props }) {
    if (isLoading) return <Spinner />;
    return <WrappedComponent {...props} />;
  };
}

// Usage
const EnhancedList = withLoading(UserList);
<EnhancedList isLoading={loading} users={users} />
\`\`\`

**Common HOCs:**
- withRouter (React Router)
- connect (Redux)
- withAuth (authentication)

**Note:** Hooks have largely replaced HOCs, but they're still used and asked about in interviews.`,
    difficulty: 'Medium'
  },
  {
    id: 'react-26',
    topic: 'React',
    question: 'What is the Render Props pattern?',
    answer: `Render Props is a pattern where a component receives a function as a prop that returns React elements, allowing code sharing.

**Example:**
\`\`\`javascript
function MouseTracker({ render }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMove = (e) => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);
  
  return render(position);
}

// Usage
<MouseTracker render={({ x, y }) => (
  <p>Mouse at: {x}, {y}</p>
)} />
\`\`\`

**Alternative using children:**
\`\`\`javascript
<MouseTracker>
  {({ x, y }) => <p>Mouse at: {x}, {y}</p>}
</MouseTracker>
\`\`\`

**Note:** Custom hooks have largely replaced this pattern but it's still interview-relevant.`,
    difficulty: 'Medium'
  },
  {
    id: 'react-27',
    topic: 'React',
    question: 'What is the useId hook and when should you use it?',
    answer: `useId generates unique IDs that are stable across server and client, useful for accessibility attributes.

**Syntax:**
\`\`\`javascript
function PasswordField() {
  const id = useId();
  return (
    <>
      <label htmlFor={id}>Password</label>
      <input id={id} type="password" />
    </>
  );
}
\`\`\`

**Benefits:**
- Avoids ID collisions when component is rendered multiple times
- Stable across SSR and hydration
- Better than generating IDs with Math.random()

**Use Cases:**
- Accessibility (label + input)
- ARIA attributes (aria-describedby)
- Multiple instances of same component`,
    difficulty: 'Easy'
  },
  {
    id: 'react-28',
    topic: 'React',
    question: 'Explain useTransition and its use case.',
    answer: `useTransition marks state updates as non-urgent, allowing React to keep the UI responsive during heavy updates.

**Syntax:**
\`\`\`javascript
function SearchResults() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isPending, startTransition] = useTransition();
  
  function handleChange(e) {
    setQuery(e.target.value); // Urgent: update input immediately
    
    startTransition(() => {
      setResults(filterLargeList(e.target.value)); // Non-urgent
    });
  }
  
  return (
    <>
      <input value={query} onChange={handleChange} />
      {isPending ? <Spinner /> : <Results data={results} />}
    </>
  );
}
\`\`\`

**Key Points:**
- isPending indicates transition is in progress
- Urgent updates (typing) interrupt non-urgent ones
- Part of React 18's concurrent features`,
    difficulty: 'Hard'
  },
  {
    id: 'react-29',
    topic: 'React',
    question: 'What is useDeferredValue and how does it differ from useTransition?',
    answer: `useDeferredValue defers updating a value, similar to useTransition but for values you don't control.

**Syntax:**
\`\`\`javascript
function SearchResults({ query }) {
  const deferredQuery = useDeferredValue(query);
  const results = useMemo(() => 
    filterLargeList(deferredQuery), [deferredQuery]
  );
  
  return <Results data={results} />;
}
\`\`\`

**Difference from useTransition:**
| useTransition | useDeferredValue |
|---------------|------------------|
| Wraps state update function | Wraps a value |
| You control the state | Value comes from props/parent |
| Returns isPending flag | No pending indicator built-in |

**Use Case:** When you can't access the state setter (e.g., value from props).`,
    difficulty: 'Hard'
  },
  {
    id: 'react-30',
    topic: 'React',
    question: 'How do you handle events in React and what are synthetic events?',
    answer: `React uses Synthetic Events - a cross-browser wrapper around native events that normalizes behavior.

**Event Handling:**
\`\`\`javascript
function Form() {
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission
    e.stopPropagation(); // Stop event bubbling
    console.log('Form submitted');
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
}
\`\`\`

**Key Differences from DOM:**
- camelCase naming (onClick, not onclick)
- Pass functions, not strings
- Events are pooled (reused) for performance
- Access native event via e.nativeEvent

**Common Patterns:**
\`\`\`javascript
// Passing arguments
<button onClick={() => handleClick(id)}>Click</button>

// Access event + custom data
<button onClick={(e) => handleClick(e, id)}>Click</button>
\`\`\``,
    difficulty: 'Easy'
  }
];

