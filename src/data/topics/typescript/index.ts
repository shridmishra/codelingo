import { TopicQuestion } from '../types';

export const tsQuestions: TopicQuestion[] = [
  {
    id: 'typescript-1',
    topic: 'TypeScript',
    question: 'What are TypeScript Generics and why are they useful?',
    answer: `Generics allow you to write reusable, type-safe code that works with multiple types while maintaining type information.

**Why Use Generics:**
- Type safety without losing flexibility
- Code reusability
- Better IDE autocomplete
- Avoid type assertions and 'any'

**Basic Example:**
\`\`\`typescript
// Without generics (not type-safe)
function identity(arg: any): any {
  return arg;
}

// With generics (type-safe)
function identity<T>(arg: T): T {
  return arg;
}

const num = identity<number>(42);     // num is number
const str = identity<string>("hello"); // str is string
const bool = identity(true);           // Type inference works
\`\`\`

**Generic Constraints:**
\`\`\`typescript
interface HasLength {
  length: number;
}

function logLength<T extends HasLength>(arg: T): void {
  console.log(arg.length); // Safe: T must have length
}

logLength("hello");    // ✓ string has length
logLength([1, 2, 3]);  // ✓ array has length
logLength(123);        // ✗ Error: number has no length
\`\`\`

**Real-World Example:**
\`\`\`typescript
// API response wrapper
interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

interface User {
  id: number;
  name: string;
}

const response: ApiResponse<User> = {
  data: { id: 1, name: "John" },
  status: 200,
  message: "Success"
};
// response.data is typed as User
\`\`\``,
    difficulty: 'Hard'
  },
  {
    id: 'typescript-2',
    topic: 'TypeScript',
    question: 'Explain TypeScript Utility Types (Partial, Pick, Omit, etc.)',
    answer: `TypeScript provides built-in utility types for common type transformations.

**1. Partial<T>** - Makes all properties optional:
\`\`\`typescript
interface User {
  id: number;
  name: string;
  email: string;
}

type PartialUser = Partial<User>;
// { id?: number; name?: string; email?: string; }

function updateUser(id: number, updates: Partial<User>) {
  // Can update any subset of properties
}

updateUser(1, { name: 'John' }); // ✓
updateUser(1, { email: 'john@example.com' }); // ✓
\`\`\`

**2. Required<T>** - Makes all properties required:
\`\`\`typescript
interface Config {
  host?: string;
  port?: number;
}

type RequiredConfig = Required<Config>;
// { host: string; port: number; }
\`\`\`

**3. Pick<T, K>** - Select specific properties:
\`\`\`typescript
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

type UserPreview = Pick<User, 'id' | 'name'>;
// { id: number; name: string; }

type Credentials = Pick<User, 'email' | 'password'>;
// { email: string; password: string; }
\`\`\`

**4. Omit<T, K>** - Remove specific properties:
\`\`\`typescript
type UserWithoutPassword = Omit<User, 'password'>;
// { id: number; name: string; email: string; }

type PublicUser = Omit<User, 'password' | 'email'>;
// { id: number; name: string; }
\`\`\`

**5. Record<K, T>** - Create object type with specific keys:
\`\`\`typescript
type Role = 'admin' | 'user' | 'guest';

type Permissions = Record<Role, string[]>;
// {
//   admin: string[];
//   user: string[];
//   guest: string[];
// }

const permissions: Permissions = {
  admin: ['read', 'write', 'delete'],
  user: ['read', 'write'],
  guest: ['read']
};
\`\`\`

**6. Readonly<T>** - Make all properties readonly:
\`\`\`typescript
interface Config {
  apiUrl: string;
  timeout: number;
}

const config: Readonly<Config> = {
  apiUrl: 'https://api.example.com',
  timeout: 5000
};

config.apiUrl = 'other'; // ✗ Error: cannot assign to readonly property
\`\`\`

**7. ReturnType<T>** - Extract return type of function:
\`\`\`typescript
function getUser() {
  return { id: 1, name: 'John', email: 'john@example.com' };
}

type User = ReturnType<typeof getUser>;
// { id: number; name: string; email: string; }
\`\`\`

**8. Parameters<T>** - Extract parameter types:
\`\`\`typescript
function createUser(name: string, age: number, email: string) {
  // ...
}

type CreateUserParams = Parameters<typeof createUser>;
// [string, number, string]
\`\`\`

**9. Exclude<T, U>** - Remove types from union:
\`\`\`typescript
type Status = 'pending' | 'approved' | 'rejected' | 'cancelled';
type ActiveStatus = Exclude<Status, 'cancelled'>;
// 'pending' | 'approved' | 'rejected'
\`\`\`

**10. Extract<T, U>** - Extract types from union:
\`\`\`typescript
type Status = 'pending' | 'approved' | 'rejected' | 'cancelled';
type FinalStatus = Extract<Status, 'approved' | 'rejected'>;
// 'approved' | 'rejected'
\`\`\`

**Real-World Example:**
\`\`\`typescript
// API response transformation
interface ApiUser {
  id: number;
  name: string;
  email: string;
  password: string;
  createdAt: string;
  updatedAt: string;
}

// Public response (remove sensitive fields)
type PublicUser = Omit<ApiUser, 'password'>;

// Create user request (no id, timestamps)
type CreateUserRequest = Omit<ApiUser, 'id' | 'createdAt' | 'updatedAt'>;

// Update user request (partial, no id)
type UpdateUserRequest = Partial<Omit<ApiUser, 'id' | 'createdAt' | 'updatedAt'>>;

// User preview (just id and name)
type UserPreview = Pick<ApiUser, 'id' | 'name'>;
\`\`\``,
    difficulty: 'Medium'
  },
  {
    id: 'ts-3',
    topic: 'TypeScript',
    question: 'What are the differences between Interface and Type in TypeScript?',
    answer: `**Interface**:
- Can be merged (declaration merging)
- Better error messages in some cases
- Can only describe shapes of objects

**Type**:
- Can describe any type (primitives, unions, intersections)
- Cannot be merged
- More flexible for complex type manipulations

**Example:**
\`\`\`typescript
interface User {
  name: string;
}
interface User {
  age: number;
}
// User has both name and age

type ID = string | number; // Union type (only possible with type)
\`\`\``,
    difficulty: 'Medium'
  },
  {
    id: 'ts-4',
    topic: 'TypeScript',
    question: 'What are Generics in TypeScript?',
    answer: `Generics allow you to create reusable components that work with a variety of types rather than a single one. They provide a way to capture the type of the argument so that we can use it to denote what is being returned.

**Example:**
\`\`\`typescript
function identity<T>(arg: T): T {
  return arg;
}

let output = identity<string>("myString");
// Type of output will be 'string'
\`\`\``,
    difficulty: 'Medium'
  },
  {
    id: 'ts-5',
    topic: 'TypeScript',
    question: 'Explain the "any", "unknown", and "never" types.',
    answer: `**any**:
- Disables type checking
- Allows any operation
- Unsafe

**unknown**:
- Safer alternative to any
- Must perform type checking before performing operations
- "I don't know what this is yet"

**never**:
- Represents values that never occur
- Return type of functions that throw errors or infinite loops
- Used in exhaustive type checking`,
    difficulty: 'Medium'
  },
  {
    id: 'ts-6',
    topic: 'TypeScript',
    question: 'What is a Union Type?',
    answer: `A Union Type describes a value that can be one of several types. We use the vertical bar (|) to separate each type.

**Example:**
\`\`\`typescript
function printId(id: number | string) {
  console.log("Your ID is: " + id);
}
\`\`\``,
    difficulty: 'Easy'
  },
  {
    id: 'ts-7',
    topic: 'TypeScript',
    question: 'What is an Intersection Type?',
    answer: `An Intersection Type combines multiple types into one. This allows you to add together existing types to get a single type that has all the features you need.

**Example:**
\`\`\`typescript
interface ErrorHandling {
  success: boolean;
  error?: { message: string };
}

interface ArtworksData {
  artworks: { title: string }[];
}

type ArtworksResponse = ArtworksData & ErrorHandling;
\`\`\``,
    difficulty: 'Medium'
  },
  {
    id: 'ts-8',
    topic: 'TypeScript',
    question: 'What are Enums?',
    answer: `Enums allow a developer to define a set of named constants. Using enums can make it easier to document intent, or create a set of distinct cases. TypeScript provides both numeric and string-based enums.

**Example:**
\`\`\`typescript
enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}
\`\`\``,
    difficulty: 'Easy'
  },
  {
    id: 'ts-9',
    topic: 'TypeScript',
    question: 'What is Type Inference?',
    answer: `Type inference is used to provide type information when there is no explicit type annotation. For example, in this code, TypeScript infers that x is a number:

\`\`\`typescript
let x = 3;
// x is inferred as number
\`\`\``,
    difficulty: 'Easy'
  },
  {
    id: 'ts-10',
    topic: 'TypeScript',
    question: 'What are Decorators?',
    answer: `Decorators provide a way to add both annotations and a meta-programming syntax for class declarations and members. They are a stage 2 proposal for JavaScript and are available as an experimental feature in TypeScript.

**Example:**
\`\`\`typescript
function sealed(constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}

@sealed
class BugReport {
  type = "report";
  title: string;
  constructor(t: string) {
    this.title = t;
  }
}
\`\`\``,
    difficulty: 'Hard'
  },
  {
    id: 'ts-11',
    topic: 'TypeScript',
    question: 'What is the "readonly" modifier?',
    answer: `The \`readonly\` modifier makes a property immutable. It can only be assigned to in the constructor or at the point of declaration.

**Example:**
\`\`\`typescript
interface Point {
  readonly x: number;
  readonly y: number;
}
\`\`\``,
    difficulty: 'Easy'
  },
  {
    id: 'ts-12',
    topic: 'TypeScript',
    question: 'What are Mapped Types?',
    answer: `Mapped types allow you to create new types based on old ones by transforming properties.

**Example:**
\`\`\`typescript
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};
\`\`\``,
    difficulty: 'Hard'
  },
  {
    id: 'ts-13',
    topic: 'TypeScript',
    question: 'What is "keyof" operator?',
    answer: `The \`keyof\` operator takes an object type and produces a string or numeric literal union of its keys.

**Example:**
\`\`\`typescript
type Point = { x: number; y: number };
type P = keyof Point; // "x" | "y"
\`\`\``,
    difficulty: 'Medium'
  },
  {
    id: 'ts-14',
    topic: 'TypeScript',
    question: 'What are Type Guards?',
    answer: `Type guards are expressions that perform a runtime check that guarantees the type in some scope.

**Example:**
\`\`\`typescript
function isString(test: any): test is string {
  return typeof test === "string";
}
\`\`\``,
    difficulty: 'Medium'
  },
  {
    id: 'ts-15',
    topic: 'TypeScript',
    question: 'What is the difference between "null" and "undefined" in TypeScript?',
    answer: `In TypeScript (and JS), \`undefined\` means a variable has been declared but not defined. \`null\` is an assignment value. It can be assigned to a variable as a representation of no value.

By default \`null\` and \`undefined\` are subtypes of all other types.`,
    difficulty: 'Easy'
  },
  {
    id: 'ts-16',
    topic: 'TypeScript',
    question: 'What is a Tuple?',
    answer: `Tuple types allow you to express an array with a fixed number of elements whose types are known, but need not be the same.

**Example:**
\`\`\`typescript
let x: [string, number];
x = ["hello", 10]; // OK
\`\`\``,
    difficulty: 'Easy'
  },
  {
    id: 'ts-17',
    topic: 'TypeScript',
    question: 'What is "this" in TypeScript?',
    answer: `TypeScript infers 'this' in functions, but you can also explicitly type it as the first parameter of a function (which is erased during compilation).

**Example:**
\`\`\`typescript
function f(this: void) {
  // make sure \`this\` is unusable in this standalone function
}
\`\`\``,
    difficulty: 'Medium'
  },
  {
    id: 'ts-18',
    topic: 'TypeScript',
    question: 'What are Ambient Declarations?',
    answer: `Ambient declarations tell the compiler about the shape of code that exists elsewhere (e.g., in a library included via script tag). They are usually in \`.d.ts\` files and use the \`declare\` keyword.`,
    difficulty: 'Hard'
  },
  {
    id: 'ts-19',
    topic: 'TypeScript',
    question: 'What is Conditional Type?',
    answer: `Conditional types take a form that looks a little like conditional expressions (\`condition ? trueExpression : falseExpression\`) in JavaScript.

**Example:**
\`\`\`typescript
type MessageOf<T> = T extends { message: unknown } ? T["message"] : never;
\`\`\``,
    difficulty: 'Hard'
  },
  {
    id: 'ts-20',
    topic: 'TypeScript',
    question: 'What is Utility Type "Partial<T>"?',
    answer: `Constructs a type with all properties of Type set to optional. This utility will return a type that represents all subsets of a given type.

**Example:**
\`\`\`typescript
interface Todo {
  title: string;
  description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}
\`\`\``,
    difficulty: 'Medium'
  }
];
