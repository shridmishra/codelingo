import { InterviewQuestion } from './types';

export const jsQuestions: InterviewQuestion[] = [
  {
    id: 'basics-1',
    topic: 'JavaScript Basics',
    question: 'What is the difference between var, let, and const in JavaScript?',
    answer: `**var**:
- Function-scoped or globally-scoped
- Can be redeclared and updated
- Hoisted to the top with undefined value
- Does not have block scope

**let**:
- Block-scoped (within {})
- Cannot be redeclared in the same scope
- Can be updated
- Hoisted but not initialized (temporal dead zone)

**const**:
- Block-scoped (within {})
- Cannot be redeclared or reassigned
- Must be initialized at declaration
- For objects/arrays, properties can still be modified (reference is constant)

Example:
\`\`\`javascript
var x = 1; // function/global scope
let y = 2; // block scope
const z = 3; // block scope, immutable binding
\`\`\``,
    difficulty: 'Easy'
  },
  {
    id: 'basics-2',
    topic: 'JavaScript Basics',
    question: 'Explain closures in JavaScript with an example.',
    answer: `A closure is a function that has access to variables in its outer (enclosing) lexical scope, even after the outer function has returned.

**Key Points:**
- Inner function has access to outer function's variables
- Creates private variables
- Maintains state between function calls

**Example:**
\`\`\`javascript
function createCounter() {
  let count = 0; // private variable
  
  return {
    increment: function() {
      count++;
      return count;
    },
    decrement: function() {
      count--;
      return count;
    },
    getCount: function() {
      return count;
    }
  };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.getCount());  // 2
// count is not directly accessible
\`\`\`

**Use Cases:**
- Data privacy/encapsulation
- Factory functions
- Event handlers
- Callbacks`,
    difficulty: 'Medium'
  },
  {
    id: 'async-1',
    topic: 'Asynchronous JavaScript',
    question: 'What is the difference between Promise.all() and Promise.race()?',
    answer: `**Promise.all()**:
- Waits for ALL promises to resolve
- Returns array of results in same order
- Rejects immediately if ANY promise rejects
- Use when you need all results

**Example:**
\`\`\`javascript
Promise.all([fetch('/api/users'), fetch('/api/posts')])
  .then([users, posts] => {
    // Both completed successfully
  })
  .catch(error => {
    // Any promise failed
  });
\`\`\`

**Promise.race()**:
- Returns when FIRST promise settles (resolves or rejects)
- Returns/rejects with value of first settled promise
- Other promises continue but are ignored
- Use for timeouts or fastest response

**Example:**
\`\`\`javascript
Promise.race([
  fetch('/api/data'),
  new Promise((_, reject) => 
    setTimeout(() => reject('Timeout'), 5000)
  )
])
  .then(data => {
    // First to complete
  })
  .catch(error => {
    // First to reject or timeout
  });
\`\`\``,
    difficulty: 'Medium'
  },
  {
    id: 'dom-1',
    topic: 'DOM & Events',
    question: 'Explain event bubbling and event capturing in JavaScript.',
    answer: `These describe the order in which event handlers are triggered in nested elements.

**Event Capturing (Capture Phase):**
- Event travels DOWN from root to target
- Rarely used
- Set with addEventListener(event, handler, true)

**Event Bubbling (Bubble Phase):**
- Event travels UP from target to root
- Default behavior
- Set with addEventListener(event, handler, false) or omit third parameter

**Event Flow:**
1. Capture phase: window → document → html → body → ... → target parent
2. Target phase: event reaches target element
3. Bubble phase: target parent → ... → body → html → document → window

**Example:**
\`\`\`javascript
<div id="outer">
  <div id="inner">
    <button id="btn">Click</button>
  </div>
</div>

// Bubbling (default)
outer.addEventListener('click', () => console.log('Outer'));
inner.addEventListener('click', () => console.log('Inner'));
btn.addEventListener('click', () => console.log('Button'));

// Click button → Output: Button, Inner, Outer

// Stop propagation
btn.addEventListener('click', (e) => {
  e.stopPropagation(); // Prevents bubbling
  console.log('Button');
});
\`\`\`

**stopPropagation()** vs **stopImmediatePropagation()**:
- stopPropagation(): stops event from bubbling up
- stopImmediatePropagation(): stops bubbling AND other handlers on same element`,
    difficulty: 'Medium'
  },
  {
    id: 'basics-3',
    topic: 'JavaScript Basics',
    question: 'What is "this" keyword in JavaScript? How does it work?',
    answer: `The "this" keyword refers to the object that is executing the current function. Its value depends on HOW the function is called.

**Rules for "this":**

**1. Global Context:**
\`\`\`javascript
console.log(this); // window (browser) or global (Node.js)
\`\`\`

**2. Object Method:**
\`\`\`javascript
const person = {
  name: 'John',
  greet: function() {
    console.log(this.name); // 'John' - this = person
  }
};
person.greet();
\`\`\`

**3. Regular Function Call:**
\`\`\`javascript
function show() {
  console.log(this); // window (non-strict) or undefined (strict mode)
}
show();
\`\`\`

**4. Arrow Functions:**
\`\`\`javascript
const obj = {
  name: 'Alice',
  regularFunc: function() {
    console.log(this.name); // 'Alice'
  },
  arrowFunc: () => {
    console.log(this.name); // undefined - inherits from parent scope
  }
};
\`\`\`

**5. Constructor Function:**
\`\`\`javascript
function Person(name) {
  this.name = name; // this = new object
}
const p = new Person('Bob');
\`\`\`

**6. Explicit Binding (call, apply, bind):**
\`\`\`javascript
function greet() {
  console.log(this.name);
}
const user = { name: 'Charlie' };
greet.call(user);  // 'Charlie'
greet.apply(user); // 'Charlie'
const boundGreet = greet.bind(user);
boundGreet();      // 'Charlie'
\`\`\`

**Common Pitfall:**
\`\`\`javascript
const obj = {
  name: 'Test',
  method: function() {
    setTimeout(function() {
      console.log(this.name); // undefined - this lost
    }, 100);
  }
};

// Fix with arrow function:
method: function() {
  setTimeout(() => {
    console.log(this.name); // 'Test' - inherits this
  }, 100);
}
\`\`\``,
    difficulty: 'Medium'
  },
  {
    id: 'async-2',
    topic: 'Asynchronous JavaScript',
    question: 'Explain async/await vs Promises. When should you use each?',
    answer: `Async/await is syntactic sugar over Promises, making asynchronous code look synchronous and easier to read.

**Promises:**
\`\`\`javascript
function fetchUser() {
  return fetch('/api/user')
    .then(response => response.json())
    .then(user => {
      console.log(user);
      return fetch(\`/api/posts/\${user.id}\`);
    })
    .then(response => response.json())
    .then(posts => {
      console.log(posts);
    })
    .catch(error => {
      console.error(error);
    });
}
\`\`\`

**Async/Await:**
\`\`\`javascript
async function fetchUser() {
  try {
    const response = await fetch('/api/user');
    const user = await response.json();
    console.log(user);
    
    const postsResponse = await fetch(\`/api/posts/\${user.id}\`);
    const posts = await postsResponse.json();
    console.log(posts);
  } catch (error) {
    console.error(error);
  }
}
\`\`\`

**Key Differences:**

**1. Readability:**
- Async/await: reads like synchronous code
- Promises: chain-based, can get messy with many steps

**2. Error Handling:**
- Async/await: use try/catch (familiar)
- Promises: use .catch()

**3. Debugging:**
- Async/await: easier to debug, clearer stack traces
- Promises: harder to track through chains

**When to Use Promises:**
\`\`\`javascript
// Parallel execution
Promise.all([
  fetch('/api/users'),
  fetch('/api/posts'),
  fetch('/api/comments')
]).then(([users, posts, comments]) => {
  // All completed
});

// Race condition
Promise.race([
  fetch('/api/fast'),
  fetch('/api/slow')
]).then(result => {
  // First to complete
});
\`\`\`

**When to Use Async/Await:**
\`\`\`javascript
// Sequential operations
async function processData() {
  const data = await fetchData();
  const processed = await processData(data);
  const result = await saveData(processed);
  return result;
}

// Conditional logic
async function getUserData(userId) {
  const user = await fetchUser(userId);
  
  if (user.isPremium) {
    return await fetchPremiumData(userId);
  } else {
    return await fetchBasicData(userId);
  }
}
\`\`\`

**Best Practice - Combine Both:**
\`\`\`javascript
async function fetchAllData() {
  try {
    // Parallel execution with async/await
    const [users, posts] = await Promise.all([
      fetch('/api/users').then(r => r.json()),
      fetch('/api/posts').then(r => r.json())
    ]);
    return { users, posts };
  } catch (error) {
    console.error(error);
  }
}
\`\`\``,
    difficulty: 'Medium'
  },
  {
    id: 'basics-4',
    topic: 'JavaScript Basics',
    question: 'What is the difference between == and === in JavaScript?',
    answer: `These are equality operators with different comparison rules.

**== (Loose/Abstract Equality):**
- Compares values after type coercion
- Converts operands to same type before comparison
- Can lead to unexpected results

**=== (Strict Equality):**
- Compares both value AND type
- No type coercion
- Recommended for most cases

**Examples:**
\`\`\`javascript
// == performs type coercion
5 == '5'       // true (string '5' converted to number)
0 == false     // true (false converted to 0)
null == undefined // true (special case)
'' == false    // true (both falsy)
[1] == 1       // true (array converted to primitive)

// === requires same type and value
5 === '5'      // false (different types)
0 === false    // false (number vs boolean)
null === undefined // false (different types)
'' === false   // false (different types)
[1] === 1      // false (object vs number)

// Same results when types match
5 === 5        // true
'hello' === 'hello' // true
true === true  // true
\`\`\`

**Type Coercion Rules for ==:**
\`\`\`javascript
// Weird cases to avoid
[] == ![]      // true (don't ask why)
'' == '0'      // false
0 == ''        // true
0 == '0'       // true

// null and undefined
null == undefined  // true
null == 0         // false
undefined == 0    // false
\`\`\`

**Best Practice:**
\`\`\`javascript
// Always use === unless you have specific reason
if (value === null || value === undefined) {
  // Explicit null/undefined check
}

// Or use nullish coalescing
const result = value ?? 'default';

// Avoid ==
if (value == null) {
  // Only use if you want both null AND undefined
}
\`\`\`

**Exception - Checking for null/undefined:**
\`\`\`javascript
// This is acceptable:
if (value == null) {
  // Catches both null and undefined
}

// Instead of:
if (value === null || value === undefined) {
  // More verbose but clearer
}
\`\`\``,
    difficulty: 'Easy'
  },
  {
    id: 'async-3',
    topic: 'Asynchronous JavaScript',
    question: 'What is the Event Loop in JavaScript? How does it work?',
    answer: `The Event Loop is the mechanism that handles asynchronous operations in JavaScript's single-threaded environment.

**Key Components:**

**1. Call Stack:**
- Executes synchronous code
- LIFO (Last In First Out)
- One thing at a time

**2. Web APIs:**
- Browser-provided APIs (setTimeout, fetch, DOM events)
- Handle async operations outside main thread

**3. Callback Queue (Task Queue):**
- Holds callbacks from async operations
- FIFO (First In First Out)

**4. Microtask Queue:**
- Higher priority than callback queue
- Holds Promise callbacks and MutationObserver

**How It Works:**
\`\`\`javascript
console.log('1');

setTimeout(() => {
  console.log('2');
}, 0);

Promise.resolve().then(() => {
  console.log('3');
});

console.log('4');

// Output: 1, 4, 3, 2
// Explanation:
// 1. '1' - synchronous
// 4. '4' - synchronous
// 3. '3' - microtask (Promise) runs before macrotask
// 2. '2' - macrotask (setTimeout)
\`\`\`

**Execution Order:**
1. Execute all synchronous code (call stack)
2. Process ALL microtasks (Promises, queueMicrotask)
3. Process ONE macrotask (setTimeout, setInterval, I/O)
4. Render if needed
5. Repeat from step 2

**Visual Example:**
\`\`\`javascript
console.log('Start');

setTimeout(() => {
  console.log('Timeout 1');
}, 0);

Promise.resolve()
  .then(() => {
    console.log('Promise 1');
  })
  .then(() => {
    console.log('Promise 2');
  });

setTimeout(() => {
  console.log('Timeout 2');
}, 0);

Promise.resolve().then(() => {
  console.log('Promise 3');
});

console.log('End');

// Output:
// Start
// End
// Promise 1
// Promise 3
// Promise 2
// Timeout 1
// Timeout 2
\`\`\`

**Common Patterns:**

**Blocking the Event Loop:**
\`\`\`javascript
// BAD - blocks everything
function blockingOperation() {
  const start = Date.now();
  while (Date.now() - start < 3000) {
    // Blocks for 3 seconds
  }
}

// GOOD - allows other operations
async function nonBlockingOperation() {
  await new Promise(resolve => setTimeout(resolve, 3000));
}
\`\`\`

**Microtask vs Macrotask:**
\`\`\`javascript
// Macrotasks (lower priority)
setTimeout(() => {}, 0);
setInterval(() => {}, 100);
setImmediate(() => {}); // Node.js
requestAnimationFrame(() => {}); // Browser

// Microtasks (higher priority)
Promise.resolve().then(() => {});
queueMicrotask(() => {});
process.nextTick(() => {}); // Node.js (highest priority)
\`\`\``,
    difficulty: 'Hard'
  },
  {
    id: 'dom-2',
    topic: 'DOM & Events',
    question: 'What is Event Delegation and why is it useful?',
    answer: `Event Delegation is a pattern where you attach a single event listener to a parent element instead of multiple listeners on child elements. It uses event bubbling to handle events.

**Without Event Delegation:**
\`\`\`javascript
// Bad - multiple listeners
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
  button.addEventListener('click', handleClick);
});

// Problem: 
// - Memory intensive for many elements
// - Doesn't work for dynamically added elements
// - Need to remove listeners manually
\`\`\`

**With Event Delegation:**
\`\`\`javascript
// Good - single listener on parent
document.querySelector('#container').addEventListener('click', (e) => {
  if (e.target.matches('button')) {
    handleClick(e);
  }
});

// Benefits:
// - One listener instead of many
// - Works with dynamically added elements
// - Automatic cleanup
\`\`\`

**Real-World Example:**
\`\`\`javascript
// Todo list with event delegation
<ul id="todo-list">
  <li><button class="delete">Delete</button> Task 1</li>
  <li><button class="delete">Delete</button> Task 2</li>
  <li><button class="delete">Delete</button> Task 3</li>
</ul>

// Event delegation approach
document.getElementById('todo-list').addEventListener('click', (e) => {
  // Check if delete button was clicked
  if (e.target.classList.contains('delete')) {
    const li = e.target.closest('li');
    li.remove();
  }
  
  // Check if edit button was clicked
  if (e.target.classList.contains('edit')) {
    const li = e.target.closest('li');
    editTask(li);
  }
});

// Add new item - event delegation still works!
function addTask(text) {
  const li = document.createElement('li');
  li.innerHTML = \`<button class="delete">Delete</button> \${text}\`;
  document.getElementById('todo-list').appendChild(li);
  // No need to add event listener!
}
\`\`\`

**Advanced Pattern:**
\`\`\`javascript
// Generic delegation helper
function delegate(parent, eventType, selector, handler) {
  parent.addEventListener(eventType, (e) => {
    const target = e.target.closest(selector);
    if (target && parent.contains(target)) {
      handler.call(target, e);
    }
  });
}

// Usage
delegate(document, 'click', '.btn-delete', function(e) {
  console.log('Delete clicked', this);
});

delegate(document, 'submit', '.ajax-form', function(e) {
  e.preventDefault();
  submitFormViaAjax(this);
});
\`\`\`

**When to Use:**
✅ Lists with many items
✅ Dynamically generated content
✅ Tables with clickable rows
✅ Toolbar buttons
✅ Navigation menus

**When NOT to Use:**
❌ Focus/blur events (don't bubble)
❌ Mouse enter/leave (use mouseover/mouseout instead)
❌ Events on document/window (already at top)`,
    difficulty: 'Medium'
  },
  {
    id: 'basics-5',
    topic: 'JavaScript Basics',
    question: 'Explain prototypal inheritance in JavaScript.',
    answer: `JavaScript uses prototypal inheritance where objects inherit properties and methods from other objects through a prototype chain.

**Prototype Chain:**
\`\`\`javascript
// Every object has a [[Prototype]] (accessible via __proto__)
const person = {
  greet: function() {
    console.log('Hello');
  }
};

const john = Object.create(person);
john.name = 'John';

john.greet(); // 'Hello' - inherited from person
console.log(john.name); // 'John' - own property

// Prototype chain: john -> person -> Object.prototype -> null
\`\`\`

**Constructor Functions:**
\`\`\`javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Add method to prototype
Person.prototype.greet = function() {
  console.log(\`Hi, I'm \${this.name}\`);
};

Person.prototype.getAge = function() {
  return this.age;
};

const alice = new Person('Alice', 25);
alice.greet(); // 'Hi, I'm Alice'

// alice doesn't have greet() directly
console.log(alice.hasOwnProperty('greet')); // false
console.log(alice.hasOwnProperty('name'));  // true
\`\`\`

**ES6 Classes (Syntactic Sugar):**
\`\`\`javascript
class Animal {
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    console.log(\`\${this.name} makes a sound\`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Call parent constructor
    this.breed = breed;
  }
  
  speak() {
    console.log(\`\${this.name} barks\`);
  }
  
  wagTail() {
    console.log('Wagging tail');
  }
}

const dog = new Dog('Rex', 'Labrador');
dog.speak();   // 'Rex barks'
dog.wagTail(); // 'Wagging tail'

// Prototype chain: dog -> Dog.prototype -> Animal.prototype -> Object.prototype -> null
\`\`\`

**Prototype Methods:**
\`\`\`javascript
// Check prototype
Object.getPrototypeOf(dog) === Dog.prototype // true
dog instanceof Dog    // true
dog instanceof Animal // true

// Set prototype
const obj = {};
Object.setPrototypeOf(obj, person);

// Create with specific prototype
const obj2 = Object.create(person);
\`\`\`

**Property Lookup:**
\`\`\`javascript
const obj = {
  a: 1
};

Object.prototype.b = 2;

console.log(obj.a); // 1 (own property)
console.log(obj.b); // 2 (inherited from Object.prototype)
console.log(obj.c); // undefined (not found in chain)

// Lookup order:
// 1. Own properties
// 2. Prototype
// 3. Prototype's prototype
// 4. ... until null
\`\`\`

**Common Patterns:**
\`\`\`javascript
// Mixin pattern
function mixin(target, ...sources) {
  Object.assign(target.prototype, ...sources);
}

const canEat = {
  eat(food) {
    console.log(\`Eating \${food}\`);
  }
};

const canWalk = {
  walk() {
    console.log('Walking');
  }
};

class Person {
  constructor(name) {
    this.name = name;
  }
}

mixin(Person, canEat, canWalk);

const p = new Person('Bob');
p.eat('pizza'); // 'Eating pizza'
p.walk();       // 'Walking'
\`\`\`

**Key Differences from Classical Inheritance:**
- Objects inherit from objects (not classes from classes)
- Dynamic and flexible
- Prototype can be modified at runtime
- Multiple objects can share same prototype`,
    difficulty: 'Hard'
  },
  {
    id: 'dom-3',
    topic: 'DOM & Events',
    question: 'What is the difference between innerHTML, textContent, and innerText?',
    answer: `These properties are used to get/set content in DOM elements, but they behave differently.

**innerHTML:**
- Gets/sets HTML markup
- Parses HTML tags
- Slower (needs HTML parsing)
- Security risk (XSS vulnerability)

\`\`\`javascript
const div = document.querySelector('div');

div.innerHTML = '<strong>Hello</strong> World';
// Result: <div><strong>Hello</strong> World</div>
// "Hello" appears bold

console.log(div.innerHTML);
// '<strong>Hello</strong> World'
\`\`\`

**textContent:**
- Gets/sets text only
- Ignores HTML tags
- Faster (no HTML parsing)
- Returns ALL text (including hidden)
- Includes text from script/style tags

\`\`\`javascript
div.textContent = '<strong>Hello</strong> World';
// Result: <div>&lt;strong&gt;Hello&lt;/strong&gt; World</div>
// Literal text, no bold

console.log(div.textContent);
// '<strong>Hello</strong> World' (as text)

// Gets hidden text too
<div>
  Visible
  <span style="display: none">Hidden</span>
</div>

console.log(div.textContent); // 'Visible Hidden'
\`\`\`

**innerText:**
- Gets/sets text only
- Ignores HTML tags
- Slower (triggers reflow)
- Returns VISIBLE text only
- Respects CSS styling

\`\`\`javascript
div.innerText = '<strong>Hello</strong> World';
// Same as textContent, shows as text

// Different from textContent with hidden elements
<div>
  Visible
  <span style="display: none">Hidden</span>
</div>

console.log(div.innerText); // 'Visible' (no 'Hidden')
console.log(div.textContent); // 'Visible Hidden'
\`\`\`

**Performance Comparison:**
\`\`\`javascript
// Fastest to slowest:
element.textContent = 'text'; // Fastest
element.innerText = 'text';   // Slow (reflow)
element.innerHTML = 'text';   // Slower (HTML parsing)
\`\`\`

**Security Considerations:**
\`\`\`javascript
// DANGEROUS - XSS vulnerability
const userInput = '<img src=x onerror="alert(XSS)">';
div.innerHTML = userInput; // Script executes! ❌

// SAFE - treats as text
div.textContent = userInput; // Shows as text ✓
div.innerText = userInput;   // Shows as text ✓

// If you need HTML, sanitize first
import DOMPurify from 'dompurify';
div.innerHTML = DOMPurify.sanitize(userInput);
\`\`\`

**When to Use Each:**

**Use textContent when:**
- Setting/getting plain text
- Performance matters
- Need all text (including hidden)
- Most common choice

**Use innerText when:**
- Need only visible text
- Want CSS-aware behavior
- Screen reader considerations

**Use innerHTML when:**
- Need to set HTML markup
- Building dynamic HTML
- Content is trusted/sanitized

**Complete Example:**
\`\`\`javascript
<div id="demo">
  Hello <strong>World</strong>
  <span style="display: none">Hidden</span>
  <script>console.log('script')</script>
</div>

const div = document.getElementById('demo');

console.log(div.innerHTML);
// 'Hello <strong>World</strong> <span style="display: none">Hidden</span><script>console.log('script')</script>'

console.log(div.textContent);
// 'Hello World Hidden console.log('script')'

console.log(div.innerText);
// 'Hello World'
\`\`\`

**Best Practice:**
\`\`\`javascript
// ✓ Good - safe and fast
element.textContent = userInput;

// ✓ Good - when you need HTML
element.innerHTML = sanitizedHTML;

// ❌ Bad - security risk
element.innerHTML = userInput;

// ❌ Bad - slower than textContent
element.innerText = simpleText;
\`\`\``,
    difficulty: 'Medium'
  },
  {
    id: 'basics-6',
    topic: 'JavaScript Basics',
    question: 'What is function currying in JavaScript? Provide an example.',
    answer: `Currying transforms a function with multiple arguments into a sequence of functions that each take a single argument.

**Why use currying?**
- Reusability via partial application
- Improves function composition
- Avoids repeating common params

**Example:**
\`\`\`javascript
// Uncurried
function add(a, b, c) {
  return a + b + c;
}

// Curried
const addC = (a) => (b) => (c) => a + b + c;

console.log(addC(1)(2)(3)); // 6

// Partial application
const add10 = addC(10);
console.log(add10(5)(2)); // 17

// Generic curry helper
const curry = (fn) => (...args) =>
  args.length >= fn.length
    ? fn(...args)
    : (...rest) => curry(fn)(...args, ...rest);

const sum3 = (a, b, c) => a + b + c;
const curriedSum3 = curry(sum3);
console.log(curriedSum3(1)(2)(3)); // 6
\`\`\`

**When to use**
- Configurable utilities (e.g., loggers)
- Building pipelines with shared params
- Event handlers with preset options`,
    difficulty: 'Medium'
  },
  {
    id: 'async-4',
    topic: 'Asynchronous JavaScript',
    question: 'Debounce vs Throttle: What are they and when to use each?',
    answer: `Both limit how often a function runs in response to frequent events (scroll, resize, keypress), but they behave differently.

**Debounce**
- Waits for a pause in calls; runs after N ms of inactivity
- Resets timer on each call
- Use when you want the final result after user stops typing/scrolling

**Throttle**
- Guarantees execution at most once every N ms
- Ignores calls during the cooldown window
- Use when you want regular updates at a steady rate

**Implementations:**
\`\`\`javascript
// Debounce
function debounce(fn, wait) {
  let t;
  return function(...args) {
    clearTimeout(t);
    t = setTimeout(() => fn.apply(this, args), wait);
  };
}

// Throttle (timestamp-based)
function throttle(fn, wait) {
  let last = 0;
  return function(...args) {
    const now = Date.now();
    if (now - last >= wait) {
      last = now;
      fn.apply(this, args);
    }
  };
}

// Throttle (timeout-based trailing)
function throttleTrailing(fn, wait) {
  let throttling = false;
  let savedArgs, savedThis;
  return function wrapper(...args) {
    if (throttling) {
      savedArgs = args;
      savedThis = this;
      return;
    }
    fn.apply(this, args);
    throttling = true;
    setTimeout(() => {
      throttling = false;
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, wait);
  };
}
\`\`\`

**When to use**
- Debounce: search input, auto-save, window resize end
- Throttle: scroll position updates, drag handlers, rate-limited APIs`,
    difficulty: 'Easy'
  },
  {
    id: 'js-currying',
    topic: 'JavaScript Basics',
    question: 'What is Currying in JavaScript?',
    answer: `Currying is a functional programming technique where a function with multiple arguments is transformed into a sequence of functions, each taking a single argument.

**Concept:**
\`f(a, b, c)\` becomes \`f(a)(b)(c)\`

**Why use it?**
- **Reusability**: Create specialized functions from generic ones.
- **Composition**: Easier to compose small functions.
- **Avoid repetitive arguments**.

**Example:**
\`\`\`javascript
// Normal function
function add(a, b) {
  return a + b;
}
add(2, 3); // 5

// Curried function
function curriedAdd(a) {
  return function(b) {
    return a + b;
  };
}
// Or with arrow functions
const arrowAdd = a => b => a + b;

curriedAdd(2)(3); // 5
arrowAdd(2)(3);   // 5
\`\`\`

**Practical Use Case:**
\`\`\`javascript
const log = (date) => (importance) => (message) => {
  console.log(\`[\${date.getHours()}:\${date.getMinutes()}] [\${importance}] \${message}\`);
};

// Create a specialized logger
const logNow = log(new Date());
const logError = logNow('ERROR');

logError('Something went wrong'); 
// Output: [14:30] [ERROR] Something went wrong
\`\`\`\``,
    difficulty: 'Hard'
  }
];
