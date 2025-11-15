import { Problem, Difficulty } from '../../types';
import { runTests } from './utils';

export const typescriptAdvanced: Omit<Problem, 'status' | 'isStarred' | 'notes'>[] = [
  {
    id: 'ts-function-overloads',
    title: 'Function Overloads',
    description: 'Define function overloads for a function `combine` that can take either two `number`s and return a `number`, or two `string`s and return a `string`.',
    difficulty: Difficulty.Hard,
    category: 'Overloads',
    group: 'Step 8: TypeScript Advanced',
    docsUrl: 'https://www.typescriptlang.org/docs/handbook/2/functions.html#function-overloads',
    starterCode: `function combine(a: number, b: number): number;
function combine(a: string, b: string): string;
function combine(a: any, b: any): any {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  }
  if (typeof a === 'string' && typeof b === 'string') {
    return a + b;
  }
  throw new Error("Invalid arguments");
}`,
    testCases: [{ input: [1, 2], expectedOutput: 3 }, { input: ['Hello', 'World'], expectedOutput: 'HelloWorld' }],
    solutionCheck: (userCode: string) => runTests(userCode, [{ input: [10, 20], expectedOutput: 30 }, { input: ['Type', 'Script'], expectedOutput: 'TypeScript' }]),
  },
  {
    id: 'ts-abstract-class',
    title: 'Abstract Class and Implementation',
    description: 'Define an abstract class `Shape` with an abstract method `getArea(): number`. Create a concrete class `Circle` that extends `Shape` and implements `getArea()` to calculate the area of a circle given a `radius`.',
    difficulty: Difficulty.Hard,
    category: 'Classes',
    group: 'Step 8: TypeScript Advanced',
    docsUrl: 'https://www.typescriptlang.org/docs/handbook/2/classes.html#abstract-classes',
    starterCode: `abstract class Shape {
  abstract getArea(): number;
}
class Circle extends Shape {
  radius: number;
  constructor(radius: number) {
    super();
    this.radius = radius;
  }
  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}`,
    testCases: [{ input: [5], expectedOutput: Math.PI * 25 }],
    solutionCheck: (userCode: string) => {
      try {
        const proxy = new Function(
          `
          ${userCode}
          const circle = new Circle(5);
          return circle.getArea();
        `
        );
        const result = proxy();
        const expected = Math.PI * 25;
        const passed = Math.abs(result - expected) < 0.001;
        return [{ input: 'radius: 5', expected: String(expected), actual: result, passed: passed }];
      } catch (e: unknown) {
        return [{ input: 'N/A', expected: 'No runtime errors and correct area', actual: `Error: ${e instanceof Error ? e.message : String(e)}`, passed: false }];
      }
    },
  },
  {
    id: 'ts-generic-identity',
    title: 'Generic Identity Function',
    description: 'Write a generic function `identity` that takes an argument of type `T` and returns it.',
    difficulty: Difficulty.Medium,
    category: 'Generics',
    group: 'Step 8: TypeScript Advanced',
    docsUrl: 'https://www.typescriptlang.org/docs/handbook/2/generics.html',
    starterCode: `function identity<T>(arg: T): T { return arg; }`,
    testCases: [{ input: [123], expectedOutput: 123 }, { input: ['hello'], expectedOutput: 'hello' }],
    solutionCheck: (userCode: string) => runTests(userCode, [{ input: [456], expectedOutput: 456 }, { input: ['world'], expectedOutput: 'world' }]),
  },
  {
    id: 'ts-generic-array-element',
    title: 'Generic Array Element Getter',
    description: 'Write a generic function `getFirstElement` that takes an array of type `T[]` and returns the first element of type `T`.',
    difficulty: Difficulty.Medium,
    category: 'Generics',
    group: 'Step 8: TypeScript Advanced',
    docsUrl: 'https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-functions',
    starterCode: `function getFirstElement<T>(arr: T[]): T | undefined { return arr[0]; }`,
    testCases: [{ input: [[1, 2, 3]], expectedOutput: 1 }, { input: [['a', 'b']], expectedOutput: 'a' }],
    solutionCheck: (userCode: string) => runTests(userCode, [{ input: [[4, 5, 6]], expectedOutput: 4 }, { input: [['x', 'y']], expectedOutput: 'x' }]),
  },
  {
    id: 'ts-generic-interface',
    title: 'Generic Interface: Box',
    description: 'Define a generic interface `Box<T>` with a property `value` of type `T`. Create a `Box` for a number and a `Box` for a string.',
    difficulty: Difficulty.Hard,
    category: 'Generics',
    group: 'Step 8: TypeScript Advanced',
    docsUrl: 'https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-interfaces',
    starterCode: `interface Box<T> { value: T; }
const numberBox: Box<number> = { value: 10 };
const stringBox: Box<string> = { value: "text" };`,
    testCases: [{ input: [], expectedOutput: { numberBox: { value: 10 }, stringBox: { value: "text" } } }],
    solutionCheck: (userCode: string) => {
      try {
        const proxy = new Function(
          `
          ${userCode}
          return { numberBox, stringBox };
        `
        );
        const { numberBox, stringBox } = proxy();
        const passed = typeof numberBox.value === 'number' && typeof stringBox.value === 'string';
        return [{ input: 'N/A', expected: 'numberBox.value: number, stringBox.value: string', actual: `numberBox.value: ${typeof numberBox.value}, stringBox.value: ${typeof stringBox.value}`, passed: passed }];
      } catch (e: unknown) {
        return [{ input: 'N/A', expected: 'No runtime errors', actual: `Error: ${e instanceof Error ? e.message : String(e)}`, passed: false }];
      }
    },
  },
  {
    id: 'ts-generic-class',
    title: 'Generic Class: Stack',
    description: 'Define a generic class `Stack<T>` with methods `push(item: T)`, `pop(): T | undefined`, and `peek(): T | undefined`.',
    difficulty: Difficulty.Hard,
    category: 'Generics',
    group: 'Step 8: TypeScript Advanced',
    docsUrl: 'https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-classes',
    starterCode: `class Stack<T> {
  private elements: T[] = [];
  push(item: T): void {
    this.elements.push(item);
  }
  pop(): T | undefined {
    return this.elements.pop();
  }
  peek(): T | undefined {
    return this.elements[this.elements.length - 1];
  }
}`,
    testCases: [],
    solutionCheck: (userCode: string) => {
      try {
        const userClass = new Function(`return ${userCode}`)();
        const stack = new userClass();
        stack.push(1);
        stack.push(2);
        const peeked = stack.peek();
        const popped = stack.pop();
        const passed = peeked === 2 && popped === 2 && stack.peek() === 1;
        return [{
          input: 'Stack operations',
          expected: 'peek: 2, pop: 2, peek: 1',
          actual: `peek: ${peeked}, pop: ${popped}, peek: ${stack.peek()}`,
          passed: passed
        }];
      } catch (e: unknown) {
        return [{ input: 'N/A', expected: 'No runtime errors and correct stack behavior', actual: `Error: ${e instanceof Error ? e.message : String(e)}`, passed: false }];
      }
    },
  },
  {
    id: 'ts-generic-constraints',
    title: 'Generic Constraints',
    description: 'Write a generic function `getLength` that takes an argument `arg` which must have a `length` property (e.g., string or array) and returns its length.',
    difficulty: Difficulty.Hard,
    category: 'Generics',
    group: 'Step 8: TypeScript Advanced',
    docsUrl: 'https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-constraints',
    starterCode: `function getLength<T extends { length: number }>(arg: T): number { return arg.length; }`,
    testCases: [{ input: ['hello'], expectedOutput: 5 }, { input: [[1, 2, 3]], expectedOutput: 3 }],
    solutionCheck: (userCode: string) => runTests(userCode, [{ input: ['typescript'], expectedOutput: 10 }, { input: [['a', 'b', 'c', 'd']], expectedOutput: 4 }]),
  },
  {
    id: 'ts-intersection-type',
    title: 'Intersection Type',
    description: 'Define two interfaces `Draggable` (with `drag: () => void`) and `Resizable` (with `resize: () => void`). Create a type `UIElement` that is an intersection of both. Then create an object `myUIElement` of type `UIElement`.',
    difficulty: Difficulty.Medium,
    category: 'Intersections',
    group: 'Step 8: TypeScript Advanced',
    docsUrl: 'https://www.typescriptlang.org/docs/handbook/2/objects.html#intersection-types',
    starterCode: `interface Draggable { drag(): void; }
interface Resizable { resize(): void; }
type UIElement = Draggable & Resizable;
const myUIElement: UIElement = {
  drag: () => console.log("Dragging"),
  resize: () => console.log("Resizing")
};`,
    testCases: [],
    solutionCheck: (userCode: string) => {
      try {
        const proxy = new Function(
          `
          ${userCode}
          return myUIElement;
        `
        );
        const element = proxy();
        const passed = typeof element.drag === 'function' && typeof element.resize === 'function';
        return [{ input: 'N/A', expected: 'Object with drag() and resize() methods', actual: `drag: ${typeof element.drag}, resize: ${typeof element.resize}`, passed: passed }];
      } catch (e: unknown) {
        return [{ input: 'N/A', expected: 'No runtime errors', actual: `Error: ${e instanceof Error ? e.message : String(e)}`, passed: false }];
      }
    },
  },
  {
    id: 'ts-keyof-type-operator',
    title: 'Keyof Type Operator',
    description: 'Define an interface `User` with `name` (string) and `email` (string). Use `keyof` to create a type `UserKeys` that represents the keys of `User`.',
    difficulty: Difficulty.Hard,
    category: 'Operators',
    group: 'Step 8: TypeScript Advanced',
    docsUrl: 'https://www.typescriptlang.org/docs/handbook/2/keyof-types.html',
    starterCode: `interface User { name: string; email: string; }
type UserKeys = keyof User;`,
    testCases: [],
    solutionCheck: (userCode: string) => {
      try {
        const proxy = new Function(
          `
          ${userCode}
          let key1: UserKeys = "name";
          let key2: UserKeys = "email";
          return { key1, key2 };
        `
        );
        const { key1, key2 } = proxy();
        const passed = key1 === 'name' && key2 === 'email';
        return [{ input: 'N/A', expected: 'UserKeys to be "name" | "email"', actual: `key1: "${key1}", key2: "${key2}"`, passed: passed }];
      } catch (e: unknown) {
        return [{ input: 'N/A', expected: 'No runtime errors (implies correct type definition)', actual: `Error: ${e instanceof Error ? e.message : String(e)}`, passed: false }];
      }
    },
  },
  {
    id: 'ts-utility-partial',
    title: 'Utility Type: Partial',
    description: 'Given an interface `Product` with `name` (string) and `price` (number), create a type `PartialProduct` using `Partial<Product>`. Then create an object `partialProduct` of type `PartialProduct`.',
    difficulty: Difficulty.Medium,
    category: 'Utilities',
    group: 'Step 8: TypeScript Advanced',
    docsUrl: 'https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype',
    starterCode: `interface Product { name: string; price: number; }
type PartialProduct = Partial<Product>;
const partialProduct: PartialProduct = { name: "Laptop" };`,
    testCases: [],
    solutionCheck: (userCode: string) => {
      try {
        const proxy = new Function(
          `
          ${userCode}
          return partialProduct;
        `
        );
        const result = proxy();
        const passed = typeof result.name === 'string' && result.price === undefined;
        return [{ input: 'N/A', expected: '{ name?: string; price?: number; }', actual: JSON.stringify(result), passed: passed }];
      } catch (e: unknown) {
        return [{ input: 'N/A', expected: 'No runtime errors', actual: `Error: ${e instanceof Error ? e.message : String(e)}`, passed: false }];
      }
    },
  },
  {
    id: 'ts-utility-readonly',
    title: 'Utility Type: Readonly',
    description: 'Given an interface `Point` with `x` (number) and `y` (number), create a type `ReadonlyPoint` using `Readonly<Point>`. Then create an object `readonlyPoint` of type `ReadonlyPoint`.',
    difficulty: Difficulty.Medium,
    category: 'Utilities',
    group: 'Step 8: TypeScript Advanced',
    docsUrl: 'https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype',
    starterCode: `interface Point { x: number; y: number; }
type ReadonlyPoint = Readonly<Point>;
const readonlyPoint: ReadonlyPoint = { x: 10, y: 20 };`,
    testCases: [],
    solutionCheck: (userCode: string) => {
      try {
        const proxy = new Function(
          `
          ${userCode}
          return readonlyPoint;
        `
        );
        const result = proxy();
        const passed = typeof result.x === 'number' && typeof result.y === 'number';
        return [{ input: 'N/A', expected: '{ readonly x: number; readonly y: number; }', actual: JSON.stringify(result), passed: passed }];
      } catch (e: unknown) {
        return [{ input: 'N/A', expected: 'No runtime errors', actual: `Error: ${e instanceof Error ? e.message : String(e)}`, passed: false }];
      }
    },
  },
  {
    id: 'ts-utility-pick',
    title: 'Utility Type: Pick',
    description: 'Given an interface `User` with `id` (number), `name` (string), and `email` (string), create a type `UserPreview` using `Pick<User, "name" | "email">`. Then create an object `userPreview` of type `UserPreview`.',
    difficulty: Difficulty.Hard,
    category: 'Utilities',
    group: 'Step 8: TypeScript Advanced',
    docsUrl: 'https://www.typescriptlang.org/docs/handbook/utility-types.html#picktypekeys',
    starterCode: `interface User { id: number; name: string; email: string; }
type UserPreview = Pick<User, "name" | "email">
const userPreview: UserPreview = { name: "Alice", email: "alice@example.com" };`,
    testCases: [],
    solutionCheck: (userCode: string) => {
      try {
        const proxy = new Function(
          `
          ${userCode}
          return userPreview;
        `
        );
        const result = proxy();
        const passed = typeof result.name === 'string' && typeof result.email === 'string' && result.id === undefined;
        return [{ input: 'N/A', expected: '{ name: string; email: string; }', actual: JSON.stringify(result), passed: passed }];
      } catch (e: unknown) {
        return [{ input: 'N/A', expected: 'No runtime errors', actual: `Error: ${e instanceof Error ? e.message : String(e)}`, passed: false }];
      }
    },
  },
  {
    id: 'ts-utility-omit',
    title: 'Utility Type: Omit',
    description: 'Given an interface `User` with `id` (number), `name` (string), and `email` (string), create a type `UserWithoutId` using `Omit<User, "id">`. Then create an object `userWithoutId` of type `UserWithoutId`.',
    difficulty: Difficulty.Hard,
    category: 'Utilities',
    group: 'Step 8: TypeScript Advanced',
    docsUrl: 'https://www.typescriptlang.org/docs/handbook/utility-types.html#omittypekeys',
    starterCode: `interface User { id: number; name: string; email: string; }
type UserWithoutId = Omit<User, "id">
const userWithoutId: UserWithoutId = { name: "Bob", email: "bob@example.com" };`,
    testCases: [],
    solutionCheck: (userCode: string) => {
      try {
        const proxy = new Function(
          `
          ${userCode}
          return userWithoutId;
        `
        );
        const result = proxy();
        const passed = typeof result.name === 'string' && typeof result.email === 'string' && result.id === undefined;
        return [{ input: 'N/A', expected: '{ name: string; email: string; }', actual: JSON.stringify(result), passed: passed }];
      } catch (e: unknown) {
        return [{ input: 'N/A', expected: 'No runtime errors', actual: `Error: ${e instanceof Error ? e.message : String(e)}`, passed: false }];
      }
    }
  },
  {
    id: 'ts-utility-record',
    title: 'Utility Type: Record',
    description: 'Create a type `StringDictionary` using `Record<string, string>` to represent an object with string keys and string values. Then create an object `myDictionary` of type `StringDictionary`.',
    difficulty: Difficulty.Hard,
    category: 'Utilities',
    group: 'Step 8: TypeScript Advanced',
    docsUrl: 'https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type',
    starterCode: `type StringDictionary = Record<string, string>;
const myDictionary: StringDictionary = {
  hello: "world",
  foo: "bar"
};`,
    testCases: [],
    solutionCheck: (userCode: string) => {
      try {
        const proxy = new Function(
          `
          ${userCode}
          return myDictionary;
        `
        );
        const result = proxy();
        const passed = typeof result.hello === 'string' && typeof result.foo === 'string';
        return [{ input: 'N/A', expected: '{ [key: string]: string }', actual: JSON.stringify(result), passed: passed }];
      } catch (e: unknown) {
        return [{ input: 'N/A', expected: 'No runtime errors', actual: `Error: ${e instanceof Error ? e.message : String(e)}`, passed: false }];
      }
    }
  },
  {
    id: 'ts-type-guards',
    title: 'Type Guards',
    description: 'Write a type guard function `isNumber` that checks if an `unknown` value is a `number`.',
    difficulty: Difficulty.Hard,
    category: 'Guards',
    group: 'Step 8: TypeScript Advanced',
    docsUrl: 'https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates',
    starterCode: `function isNumber(value: unknown): value is number { return typeof value === 'number'; }`,
    testCases: [{ input: [5], expectedOutput: true }, { input: ['hello'], expectedOutput: false }],
    solutionCheck: (userCode: string) => runTests(userCode, [{ input: [10], expectedOutput: true }, { input: [true], expectedOutput: false }]),
  },
  {
    id: 'ts-indexed-access-types',
    title: 'Indexed Access Types',
    description: 'Given an interface `Car` with `brand` (string) and `model` (string), create a type `CarBrand` that represents the type of the `brand` property using indexed access. Then declare a variable `myCarBrand` of type `CarBrand`.',
    difficulty: Difficulty.Hard,
    category: 'Indexed',
    group: 'Step 8: TypeScript Advanced',
    docsUrl: 'https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html',
    starterCode: `interface Car { brand: string; model: string; }
type CarBrand = Car["brand"];
const myCarBrand: CarBrand = "Toyota";`,
    testCases: [],
    solutionCheck: (userCode: string) => {
      try {
        const proxy = new Function(
          `
          ${userCode}
          return myCarBrand;
        `
        );
        const result = proxy();
        const passed = typeof result === 'string';
        return [{ input: 'N/A', expected: 'string', actual: typeof result, passed: passed }];
      } catch (e: unknown) {
        return [{ input: 'N/A', expected: 'No runtime errors', actual: `Error: ${e instanceof Error ? e.message : String(e)}`, passed: false }];
      }
    },
  },
  {
    id: 'ts-conditional-types',
    title: 'Conditional Types',
    description: 'Create a conditional type `NonNullable<T>` that removes `null` and `undefined` from `T`. Then test it with a union type.',
    difficulty: Difficulty.Hard,
    category: 'Conditional',
    group: 'Step 8: TypeScript Advanced',
    docsUrl: 'https://www.typescriptlang.org/docs/handbook/2/conditional-types.html',
    starterCode: `type NonNullable<T> = T extends null | undefined ? never : T;
type TestType = NonNullable<string | null | undefined | number>;
const testVar: TestType = 5; // Should only allow string or number`,
    testCases: [],
    solutionCheck: (userCode: string) => {
      try {
        const proxy = new Function(
          `
          ${userCode}
          return testVar;
        `
        );
        const result = proxy();
        const passed = typeof result === 'string' || typeof result === 'number';
        return [{ input: 'N/A', expected: 'string | number', actual: typeof result, passed: passed }];
      } catch (e: unknown) {
        return [{ input: 'N/A', expected: 'No runtime errors', actual: `Error: ${e instanceof Error ? e.message : String(e)}`, passed: false }];
      }
    },
  },
  {
    id: 'ts-template-literal-types',
    title: 'Template Literal Types',
    description: 'Create a template literal type `EventName<T extends string>` that prepends "on" to a given string literal type `T` (e.g., "onClick", "onHover"). Then declare a variable `clickEvent` of type `EventName<"Click">`.',
    difficulty: Difficulty.Hard,
    category: 'Templates',
    group: 'Step 8: TypeScript Advanced',
    docsUrl: 'https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html',
    starterCode: `type EventName<T extends string> = \`on\${T}\`;
type ClickEvent = EventName<"Click">
const clickEvent: ClickEvent = "onClick";`,
    testCases: [],
    solutionCheck: (userCode: string) => {
      try {
        const proxy = new Function(
          `
          ${userCode}
          return clickEvent;
        `
        );
        const result = proxy();
        const passed = result === 'onClick';
        return [{ input: 'N/A', expected: '"onClick"', actual: result, passed: passed }];
      } catch (e: unknown) {
        return [{ input: 'N/A', expected: 'No runtime errors', actual: `Error: ${e instanceof Error ? e.message : String(e)}`, passed: false }];
      }
    },
  },
  {
    id: 'ts-mapped-types',
    title: 'Mapped Types',
    description: 'Given an interface `User` with `name` (string) and `age` (number), create a mapped type `MutableUser` that makes all properties of `User` mutable (removes `readonly`). Then create an object `mutableUser` of type `MutableUser`.',
    difficulty: Difficulty.Hard,
    category: 'Mapped',
    group: 'Step 8: TypeScript Advanced',
    docsUrl: 'https://www.typescriptlang.org/docs/handbook/2/mapped-types.html',
    starterCode: `interface User { readonly name: string; readonly age: number; }
type MutableUser = { -readonly [P in keyof User]: User[P] };
const mutableUser: MutableUser = { name: "John", age: 30 };`,
    testCases: [],
    solutionCheck: (userCode: string) => {
      try {
        const proxy = new Function(
          `
          ${userCode}
          return mutableUser;
        `
        );
        const result = proxy();
        const passed = typeof result.name === 'string' && typeof result.age === 'number';
        return [{ input: 'N/A', expected: '{ name: string; age: number; }', actual: JSON.stringify(result), passed: passed }];
      } catch (e: unknown) {
        return [{ input: 'N/A', expected: 'No runtime errors', actual: `Error: ${e instanceof Error ? e.message : String(e)}`, passed: false }];
      }
    },
  },
];
