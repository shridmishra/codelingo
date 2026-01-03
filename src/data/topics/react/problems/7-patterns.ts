import { Problem, Difficulty } from '@/types';

export const reactPatterns: Omit<Problem, 'status' | 'isStarred' | 'notes'>[] = [
  {
    id: 'react-error-boundary',
    title: 'Error Boundary',
    description: `Create an ErrorBoundary class component that catches errors in its children and displays a fallback UI.

Requirements:
1. Use static getDerivedStateFromError to update state when an error occurs
2. Use componentDidCatch to log error details
3. Render a fallback message when hasError is true
4. Render children normally when no error`,
    difficulty: Difficulty.Medium,
    category: 'Patterns',
    group: 'Step 7: Patterns & Advanced',
    docsUrl: 'https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary',
    starterCode: `import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Your code here
  }

  componentDidCatch(error, errorInfo) {
    // Your code here
  }

  render() {
    // Your code here
  }
}`,
    testCases: [],
    solutionCheck: (userCode: string) => {
      const hasGetDerived = userCode.includes('getDerivedStateFromError');
      const hasComponentDidCatch = userCode.includes('componentDidCatch');
      const hasStateUpdate = userCode.includes('hasError: true');
      const hasRender = userCode.includes('this.props.children');
      
      const passed = hasGetDerived && hasComponentDidCatch && hasStateUpdate && hasRender;
      return [{
        input: 'Code Check',
        expected: 'Error Boundary with state management and fallback',
        actual: passed ? 'Correctly implemented' : 'Missing error handling logic',
        passed
      }];
    },
  },
  {
    id: 'react-lazy-suspense',
    title: 'Lazy Loading with Suspense',
    description: `Create a component that lazy loads a HeavyComponent using React.lazy and wraps it with Suspense.

Requirements:
1. Use React.lazy to dynamically import './HeavyComponent'
2. Wrap the lazy component with Suspense
3. Show a loading fallback while the component loads`,
    difficulty: Difficulty.Medium,
    category: 'Patterns',
    group: 'Step 7: Patterns & Advanced',
    docsUrl: 'https://react.dev/reference/react/lazy',
    starterCode: `import React, { Suspense } from 'react';

// Create a lazy-loaded component
const HeavyComponent = // Your code here

function App() {
  return (
    <div>
      {/* Wrap with Suspense and provide fallback */}
    </div>
  );
}`,
    testCases: [],
    solutionCheck: (userCode: string) => {
      const hasLazy = userCode.includes('React.lazy');
      const hasImport = userCode.includes("import(");
      const hasSuspense = userCode.includes('<Suspense');
      const hasFallback = userCode.includes('fallback=');
      
      const passed = hasLazy && hasImport && hasSuspense && hasFallback;
      return [{
        input: 'Code Check',
        expected: 'Lazy loading with Suspense fallback',
        actual: passed ? 'Correctly implemented' : 'Missing lazy or Suspense',
        passed
      }];
    },
  },
  {
    id: 'react-forward-ref',
    title: 'forwardRef',
    description: `Create a FancyInput component that forwards a ref to its inner input element so parents can focus it.

Requirements:
1. Use React.forwardRef to wrap the component
2. Apply the ref to the inner input element
3. Add some styling class to make it "fancy"`,
    difficulty: Difficulty.Medium,
    category: 'Patterns',
    group: 'Step 7: Patterns & Advanced',
    docsUrl: 'https://react.dev/reference/react/forwardRef',
    starterCode: `import React from 'react';

const FancyInput = React.forwardRef((props, ref) => {
  // Your code here
});

// Usage example:
// const inputRef = useRef();
// <FancyInput ref={inputRef} placeholder="Type here..." />
// inputRef.current.focus();`,
    testCases: [],
    solutionCheck: (userCode: string) => {
      const hasForwardRef = userCode.includes('forwardRef');
      const hasRef = userCode.includes('ref={ref}') || userCode.includes('ref = {ref}');
      const hasInput = userCode.includes('<input');
      
      const passed = hasForwardRef && hasRef && hasInput;
      return [{
        input: 'Code Check',
        expected: 'Component with forwardRef passing ref to input',
        actual: passed ? 'Correctly implemented' : 'Missing forwardRef implementation',
        passed
      }];
    },
  },
  {
    id: 'react-imperative-handle',
    title: 'useImperativeHandle',
    description: `Create a CustomInput component that uses useImperativeHandle to expose focus() and clear() methods.

Requirements:
1. Use forwardRef and useImperativeHandle
2. Expose a focus() method that focuses the input
3. Expose a clear() method that clears the input value
4. Keep the actual input ref internal`,
    difficulty: Difficulty.Hard,
    category: 'Patterns',
    group: 'Step 7: Patterns & Advanced',
    docsUrl: 'https://react.dev/reference/react/useImperativeHandle',
    starterCode: `import React, { useRef, useImperativeHandle } from 'react';

const CustomInput = React.forwardRef((props, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    // Your code here - expose focus and clear methods
  }));

  return <input ref={inputRef} {...props} />;
});

// Usage:
// ref.current.focus();
// ref.current.clear();`,
    testCases: [],
    solutionCheck: (userCode: string) => {
      const hasImperativeHandle = userCode.includes('useImperativeHandle');
      const hasFocus = userCode.includes('focus');
      const hasClear = userCode.includes('clear');
      const hasInputRef = userCode.includes('inputRef.current');
      
      const passed = hasImperativeHandle && hasFocus && hasClear && hasInputRef;
      return [{
        input: 'Code Check',
        expected: 'useImperativeHandle with custom methods',
        actual: passed ? 'Correctly implemented' : 'Missing imperative handle methods',
        passed
      }];
    },
  },
  {
    id: 'react-hoc',
    title: 'Higher-Order Component',
    description: `Create a Higher-Order Component called withLoading that adds loading functionality to any component.

Requirements:
1. Accept a WrappedComponent as parameter
2. Return a new component that accepts isLoading prop
3. Show "Loading..." when isLoading is true
4. Render WrappedComponent with remaining props when not loading`,
    difficulty: Difficulty.Medium,
    category: 'Patterns',
    group: 'Step 7: Patterns & Advanced',
    docsUrl: 'https://react.dev/reference/react/Component#higher-order-components',
    starterCode: `import React from 'react';

function withLoading(WrappedComponent) {
  return function WithLoading({ isLoading, ...props }) {
    // Your code here
  };
}

// Usage:
// const UserListWithLoading = withLoading(UserList);
// <UserListWithLoading isLoading={loading} users={users} />`,
    testCases: [],
    solutionCheck: (userCode: string) => {
      const hasWrappedComponent = userCode.includes('WrappedComponent');
      const hasIsLoading = userCode.includes('isLoading');
      const hasSpread = userCode.includes('{...props}') || userCode.includes('...props');
      const hasConditional = userCode.includes('if') || userCode.includes('?');
      
      const passed = hasWrappedComponent && hasIsLoading && hasSpread && hasConditional;
      return [{
        input: 'Code Check',
        expected: 'HOC with loading logic',
        actual: passed ? 'Correctly implemented' : 'Missing HOC pattern',
        passed
      }];
    },
  },
  {
    id: 'react-use-id',
    title: 'useId for Accessibility',
    description: `Create a FormField component that uses useId to link a label with its input for accessibility.

Requirements:
1. Use useId to generate a unique ID
2. Use the ID for both the label's htmlFor and input's id
3. Accept label and type as props`,
    difficulty: Difficulty.Easy,
    category: 'Patterns',
    group: 'Step 7: Patterns & Advanced',
    docsUrl: 'https://react.dev/reference/react/useId',
    starterCode: `import { useId } from 'react';

function FormField({ label, type = 'text', ...props }) {
  // Your code here
}

// Usage:
// <FormField label="Email" type="email" />
// <FormField label="Password" type="password" />`,
    testCases: [],
    solutionCheck: (userCode: string) => {
      const hasUseId = userCode.includes('useId()');
      const hasHtmlFor = userCode.includes('htmlFor');
      const hasId = userCode.includes('id={') || userCode.includes('id=');
      const hasLabel = userCode.includes('<label');
      
      const passed = hasUseId && hasHtmlFor && hasId && hasLabel;
      return [{
        input: 'Code Check',
        expected: 'useId linking label and input',
        actual: passed ? 'Correctly implemented' : 'Missing useId implementation',
        passed
      }];
    },
  },
  {
    id: 'react-use-transition',
    title: 'useTransition',
    description: `Create a SearchWithTransition component that uses useTransition to keep input responsive while filtering a large list.

Requirements:
1. Use useTransition to get isPending and startTransition
2. Update input value immediately (urgent)
3. Filter results inside startTransition (non-urgent)
4. Show a loading indicator when isPending is true`,
    difficulty: Difficulty.Hard,
    category: 'Patterns',
    group: 'Step 7: Patterns & Advanced',
    docsUrl: 'https://react.dev/reference/react/useTransition',
    starterCode: `import { useState, useTransition } from 'react';

const items = Array.from({ length: 10000 }, (_, i) => \`Item \${i + 1}\`);

function SearchWithTransition() {
  const [query, setQuery] = useState('');
  const [filteredItems, setFilteredItems] = useState(items);
  const [isPending, startTransition] = useTransition();

  function handleChange(e) {
    const value = e.target.value;
    // Urgent update
    setQuery(value);
    
    // Non-urgent update inside startTransition
    // Your code here
  }

  return (
    <div>
      <input value={query} onChange={handleChange} />
      {/* Show loading state and filtered items */}
    </div>
  );
}`,
    testCases: [],
    solutionCheck: (userCode: string) => {
      const hasUseTransition = userCode.includes('useTransition');
      const hasStartTransition = userCode.includes('startTransition(');
      const hasIsPending = userCode.includes('isPending');
      const hasFilter = userCode.includes('filter');
      
      const passed = hasUseTransition && hasStartTransition && hasIsPending;
      return [{
        input: 'Code Check',
        expected: 'useTransition with startTransition',
        actual: passed ? 'Correctly implemented' : 'Missing transition logic',
        passed
      }];
    },
  }
];
