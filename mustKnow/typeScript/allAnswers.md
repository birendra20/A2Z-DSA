# TypeScript Interview Questions & Answers

## 1. TypeScript Basics (Very Common)

Q. 1. What is TypeScript and why do we use it?

1. Definition
TypeScript is a strongly typed superset of JavaScript developed by Microsoft. It adds static typing to JavaScript and compiles down to plain JavaScript for browser execution.

2. Why It Exists / Problem It Solves
JavaScript is dynamically typed, leading to runtime errors that are hard to debug in large codebases. TypeScript solves this by catching type-related errors at compile time, improving maintainability and developer scalability.

3. How It Works (Conceptual Explanation)
It introduces a "Type System" layer on top of JavaScript. The TypeScript compiler (`tsc`) analyzes the code for type consistency. If valid, it "erases" the types and emits standard JavaScript; if invalid, it creates a build error.

4. Code Example

Basic Example:
```typescript
// JavaScript (runtime error potential)
function add(a, b) {
  return a + b;
}
add("1", 2); // "12" (string concatenation, often a bug)

// TypeScript (compile-time safety)
function addTS(a: number, b: number): number {
  return a + b;
}
// addTS("1", 2); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
```

5. Common Mistakes
- Thinking TypeScript runs in the browser (it doesn't; runtime is always JS).
- Overusing `any` which defeats the purpose of using TypeScript.

6. Interview Follow-Ups
- Does TypeScript exist at runtime?
- What is the difference between specific types and `any`?

7. One-Line Interview Summary
TypeScript is JavaScript with syntax for types, designed to catch errors early and improve tooling.

---

Q. 2. How is TypeScript different from JavaScript?

1. Definition
TypeScript is a superset of JavaScript used for development, whereas JavaScript is the scripting language that actually checks into the browser/node runtime.

2. Why It Exists / Problem It Solves
JavaScript lacks static type checking and advanced object-oriented features in older versions. TypeScript fills this gap to make large-application development safer.

3. How It Works (Conceptual Explanation)
TypeScript code (`.ts`) is "transpiled" into JavaScript code (`.js`). All TypeScript-specific syntax (interfaces, types, generics) is stripped away during this process.

4. Code Example

Basic Example:
```typescript
// TypeScript Code
interface User {
  id: number;
  name: string;
}
const user: User = { id: 1, name: "Alice" };

// Compile Output (JavaScript)
const user = { id: 1, name: "Alice" }; // Interface disappears entirely
```

5. Common Mistakes
- Confusing build-time features (Interfaces) with runtime features (Classes).
- Expecting TypeScript to fix runtime logic errors (it only checks type consistency).

6. Interview Follow-Ups
- Can browsers execute TypeScript directly?
- What happens to interfaces after compilation?

7. One-Line Interview Summary
TypeScript is a compile-time tool that adds static typing to strict JavaScript, enforcing safety before code runs.

---

Q. 3. What are the advantages of TypeScript?

1. Definition
The primary advantages are static typing, intelligent code completion (IntelliSense), better refactoring tools, and early bug detection.

2. Why It Exists / Problem It Solves
As projects grow, refactoring JavaScript becomes risky and "undefined is not a function" errors become common. TypeScript mitigates these risks by enforcing contracts between parts of the code.

3. How It Works (Conceptual Explanation)
The compiler acts as a first line of defense, checking that variables usage matches their declaration. IDEs use this type information to provide accurate autocomplete and definition lookup.

4. Code Example

Real-World Example (Refactoring Safety):
```typescript
interface Props {
  isActive: boolean;
}

// If we rename 'isActive' to 'enabled', TS will flag every usage file instanty.
const Button = ({ isActive }: Props) => {
  return <button disabled={!isActive}>Has Access</button>;
};
```

5. Common Mistakes
- Assuming TypeScript prevents all bugs (it doesn't catch logical bugs or IO schema mismatches without validation).
- Believing it adds runtime overhead (it adds zero runtime cost).

6. Interview Follow-Ups
- Does TypeScript hurt build performance?
- How does TypeScript help with documentation?

7. One-Line Interview Summary
TypeScript increases developer productivity and code confidence through static analysis, autocomplete, and safer refactoring.

---

Q. 4. What are `type` and `interface`?

1. Definition
`type` and `interface` are the two main ways to define custom data structures (shapes of objects) in TypeScript.

2. Why It Exists / Problem It Solves
We need reusable ways to describe the shape of data so we don't have to repeat signature details (DRY principle) and to ensure consistency across the application.

3. How It Works (Conceptual Explanation)
They create a contract. If an object takes on that `type` or `interface`, strictly satisfying that shape is mandatory.

4. Code Example

Basic Example:
```typescript
// Type
type Point = {
  x: number;
  y: number;
};

// Interface
interface User {
  name: string;
  age: number;
}
```

5. Common Mistakes
- Thinking one is deprecated; both are valid and useful.
- Using `interface` for simple unions (interfaces cannot define unions).

6. Interview Follow-Ups
- When would you strictly pick one over the other?
- Can interfaces extend types?

7. One-Line Interview Summary
Both define shapes of data, but `interface` is better for extensible object structures while `type` is more flexible for unions and primitives.

---

Q. 5. Difference between `type` and `interface`

1. Definition
`interface` is strictly for defining objects which can be extended (merged), while `type` is an alias that can define objects, primitives, unions, intersections, and tuples.

2. Why It Exists / Problem It Solves
TypeScript offers both to handle different scenarios: `interface` is ideal for declaring library definitions that might need augmentation, while `type` is needed for complex type compositions like unions.

3. How It Works (Conceptual Explanation)
Interfaces are "open" and can be declared multiple times to merge properties (declaration merging). Types are "closed" and cannot be re-declared.

4. Code Example

Basic Example (Difference):
```typescript
// 1. Declaration Merging (Interface only)
interface Window {
  title: string;
}
interface Window {
  width: number;
}
// valid, Window now has both title and width

// 2. Unions (Type only)
type Status = "success" | "error"; // Interface cannot do this
```

5. Common Mistakes
- Using `interface` when a Union type is needed.
- Using `type` for public library APIs where consumers might need to extend the definition.

6. Interview Follow-Ups
- What is declaration merging?
- Can a class implement a type alias? (Yes, if the type is an object).

7. One-Line Interview Summary
Interfaces support declaration merging and are object-focused; Types are more versatile, supporting unions and primitives but cannot be re-opened.

---

Q. 6. What are primitive types in TypeScript?

1. Definition
Primitive types are the most basic data types provided by the language, corresponding directly to JavaScript primitives: `string`, `number`, `boolean`, `null`, `undefined`, `symbol`, and `bigint`.

2. Why It Exists / Problem It Solves
They are the building blocks of all data. TypeScript acknowledges them explicitly to ensure you don't perform invalid operations (e.g., dividing a string by a boolean).

3. How It Works (Conceptual Explanation)
They are "pass-by-value" types. TypeScript narrows variables to these types to enforce strict operations.

4. Code Example

Basic Example:
```typescript
let username: string = "Alice";
let count: number = 42;
let isActive: boolean = true;
let empty: null = null;
let notFound: undefined = undefined;
```

5. Common Mistakes
- Confusing `String` (wrapper object) with `string` (primitive). Always use lowercase `string`.
- Treating `null` and `undefined` as same without `strictNullChecks`.

6. Interview Follow-Ups
- Is `void` a primitive type?
- What is the difference between `null` and `undefined` in TS?

7. One-Line Interview Summary
Primitives are the atomic types: string, number, boolean, null, undefined, symbol, and bigint.

---

Q. 7. What is `any`? Why should it be avoided?

1. Definition
`any` is a type that effectively disables type checking for a variable, allowing it to hold any value and be accessed in any way.

2. Why It Exists / Problem It Solves
It exists as an escape hatch for migrating legacy JavaScript code or handling complex dynamic content where types are truly unknown.

3. How It Works (Conceptual Explanation)
When you mark something as `any`, you tell the compiler "Trust me, ignore this." It skips all compile-time checks for that variable.

4. Code Example

Basic Example:
```typescript
let data: any = "hello";
data = 5; // Valid
data.foo(); // Valid at compile time, CRASHES at runtime
```

5. Common Mistakes
- Using `any` out of laziness to suppress errors.
- Assuming `any` is safe; "any" actually spreads like a virus (e.g., return value of an `any` function is also `any`).

6. Interview Follow-Ups
- What should you use instead of `any`? (unknown)
- How do you strictly forbid `any` in a codebase? (noImplicitAny)

7. One-Line Interview Summary
`any` disables TypeScript's protection; use it only as a last resort because it allows runtime crashes that TS usually prevents.

---

Q. 8. What is `unknown` and how is it different from `any`?

1. Definition
`unknown` is the type-safe counterpart to `any`. It represents any value but forces you to perform type checking before performing operations on it.

2. Why It Exists / Problem It Solves
It solves the safety issue of `any`. It allows accepting dynamic data (e.g., API response) without allowing unsafe usage immediately.

3. How It Works (Conceptual Explanation)
You can assign anything TO `unknown`, but you cannot acess properties FROM `unknown` unless you "narrow" the type first.

4. Code Example

Basic Example:
```typescript
let value: unknown = "hello";

// value.toUpperCase(); // Error: Object is of type 'unknown'.

if (typeof value === "string") {
  console.log(value.toUpperCase()); // Safe: TS knows it is string here
}
```

5. Common Mistakes
- Using `any` when `unknown` would be safer.
- Forgetting to narrow (check types) before using the variable.

6. Interview Follow-Ups
- Can you assign `unknown` to a string variable? (No, not without casting/narrowing).
- What is type narrowing?

7. One-Line Interview Summary
`unknown` forces you to check the type before using it, whereas `any` lets you do anything without checks.

---

Q. 9. What is `never`?

1. Definition
`never` represents values that will *never* occur. It is the return type of functions that throw errors or rely on infinite loops.

2. Why It Exists / Problem It Solves
It is crucial for "exhaustive checking" in switch statements (ensuring all cases are handled) and modeling impossible states in control flow analysis.

3. How It Works (Conceptual Explanation)
It is the bottom type of the entire type system. No other value can be assigned to `never`.

4. Code Example

Basic Example (Function that never returns):
```typescript
function throwError(msg: string): never {
  throw new Error(msg);
}

function infiniteLoop(): never {
  while (true) {}
}
```

Real-World Example (Exhaustive Check):
```typescript
type Shape = "circle" | "square";
function getArea(s: Shape) {
  if (s === "circle") { /*...*/ }
  else if (s === "square") { /*...*/ }
  else {
    const _exhaustiveCheck: never = s; // Error here if a new Shape is added but not handled
    return _exhaustiveCheck;
  }
}
```

5. Common Mistakes
- Confusing `void` (returns undefined) with `never` (never returns).
- Using it explicitly when inference is sufficient.

6. Interview Follow-Ups
- How is `never` used in conditional types?
- What happens if you intersect a type with `never`?

7. One-Line Interview Summary
`never` indicates a code path that should logically not be reachable or a function that does not complete execution.

---

Q. 10. What is `void`?

1. Definition
`void` is the return type for functions that do not return a meaningful value.

2. Why It Exists / Problem It Solves
It clarifies intent. It tells the caller: "Use this function for its side effects (like logging or updating state), not for its return value."

3. How It Works (Conceptual Explanation)
In JavaScript, a function with no return returns `undefined`. In TypeScript, `void` is a type that accepts `undefined` but generally signals "ignore the return".

4. Code Example

Basic Example:
```typescript
function logMessage(msg: string): void {
  console.log(msg);
  // implicitly returns undefined
}

const result = logMessage("Hi"); // variable 'result' is of type void
```

5. Common Mistakes
- Thinking `void` means the function explicitly returns nothing (`undefined` is actually returned).
- Confusing `void` with `never`.

6. Interview Follow-Ups
- Can you assign `undefined` to `void`?
- Can you assign `null` to `void`?

7. One-Line Interview Summary
`void` is used for functions where the return value is irrelevant (usually side-effect functions).

---

Q. 11. What is type inference?

1. Definition
Type inference is TypeScript's ability to automatically deduce the type of a variable or return value based on the initial value or usage context, without explicit annotations.

2. Why It Exists / Problem It Solves
It reduces verbosity. You don't need to write `: string` every time you assign `"hello"`. It makes the code cleaner while keeping strict safety.

3. How It Works (Conceptual Explanation)
The compiler scans the code flow. If you assign `let x = 10`, it infers `x` is `number`. If you later do `x = "hi"`, it errors because `number` was locked in.

4. Code Example

Basic Example:
```typescript
let score = 99; // Inferred as 'number'
// score = "A"; // Error

// Return type inference
function add(a: number, b: number) {
  return a + b; // Inferred return type: number
}
```

5. Common Mistakes
- Over-annotating obvious types (e.g., `const name: string = "Alice"` is redundant).
- Relying on inference for complex object literals where specific interface conformance is better for error reporting.

6. Interview Follow-Ups
- What happens if TypeScript cannot infer the type? (Implicit `any` if not strict).
- What is context type inference?

7. One-Line Interview Summary
Type inference allows TS to auto-detect types from values, reducing code boilerplate.

---

Q. 12. What is type annotation?

1. Definition
Type annotation is the explicit syntax of adding generic or specific types to variables, parameters, and return values using the colon `:` syntax.

2. Why It Exists / Problem It Solves
Sometimes inference isn't enough (e.g., function parameters) or you want to enforce a specific type contract (e.g., a variable must match a specific Interface).

3. How It Works (Conceptual Explanation)
It overrides or guides inference. It forces the variable to strictly adhere to the defined type.

4. Code Example

Basic Example:
```typescript
// Explicit Annotation
let greeting: string = "Hello";

function greet(name: string): string {
  return `Hi ${name}`;
}
```

5. Common Mistakes
- Annotating everything (e.g., `let x: number = 5`), which adds noise.
- Annotating with the wrong case (`String` vs `string`).

6. Interview Follow-Ups
- When is annotation strictly required? (Function args).
- Can annotations affect runtime? (No).

7. One-Line Interview Summary
Type annotation is manually specifying the type of a variable using `: TypeName` syntax.

---

Q. 13. What are optional properties?

1. Definition
Optional properties are object properties that may or may not be present. They are denoted by a question mark `?` after the property name.

2. Why It Exists / Problem It Solves
Real-world data is often incomplete (e.g., a user might have a `phone` number but not an `email`). Optional properties model this flexibility strictly.

3. How It Works (Conceptual Explanation)
`prop?: type` effectively means the type is `type | undefined`. You must check if it exists before using it methods that could fail on undefined.

4. Code Example

Basic Example:
```typescript
interface User {
  id: number;
  email?: string; // string | undefined
}

const u1: User = { id: 1 }; // valid
const u2: User = { id: 2, email: "test@test.com" }; // valid
```

5. Common Mistakes
- Trying to access the optional property without checking for `undefined` (Strict Null Checks catches this).
- Confusing optional property `?` with nullability `| null`.

6. Interview Follow-Ups
- How do you create an optional method in an interface?
- How does `Required<T>` utility type relate to this?

7. One-Line Interview Summary
Optional properties (`key?: type`) allow a property to be omitted from an object.

---

Q. 14. What are readonly properties?

1. Definition
`readonly` is a modifier that makes a property immutable after its initial assignment (during initialization).

2. Why It Exists / Problem It Solves
It ensures data integrity and supports functional programming patterns (immutability). It prevents accidental mutation of state, like an object's ID.

3. How It Works (Conceptual Explanation)
The compiler flags an error if you try to reassign a `readonly` property. This check is compile-time only; compiled JS is still mutable.

4. Code Example

Basic Example:
```typescript
interface User {
  readonly id: number;
  name: string;
}

const u: User = { id: 1, name: "Alice" };
u.name = "Bob"; // Valid
// u.id = 2; // Error: Cannot assign to 'id' because it is a read-only property.
```

5. Common Mistakes
- Thinking `readonly` ensures deep immutability (it only protects the reference, not nested objects).
- Confusing `readonly` (property) with `const` (variable).

6. Interview Follow-Ups
- How do you make an array readonly? (`ReadonlyArray<T>` or `readonly T[]`).
- What is `Object.freeze` vs `readonly`?

7. One-Line Interview Summary
`readonly` prevents a property from being reassigned after the object is created.

---

## 2. Types & Advanced Type System (Very Common)

Q. 15. What are union types?

1. Definition
A Union Type allows a variable to hold values of multiple distinct types, denoted by the pipe symbol `|`. It literally means "This value can be A OR B".

2. Why It Exists / Problem It Solves
It models values that can change shape, like an API response that is either a `SuccessObject` OR an `ErrorObject`, or a function parameter that accepts both `string` and `number`.

3. How It Works (Conceptual Explanation)
It creates a supertype that encompasses all listed types. TypeScript will only allow you to access properties common to *all* types in the union, unless you "narrow" it first.

4. Code Example

Basic Example:
```typescript
function printId(id: number | string) {
  console.log("Your ID is: " + id);
}
printId(101); // OK
printId("202"); // OK
```

5. Common Mistakes
- Trying to access a property that only exists on *one* of the types without checking.
- Creating huge unions that make narrowing difficult.

6. Interview Follow-Ups
- How does narrowing work with unions?
- What is a discriminated union?

7. One-Line Interview Summary
Union types (`A | B`) allow a value to be one of several types.

---

Q. 16. What are intersection types?

1. Definition
An Intersection Type combines multiple types into one, denoted by the ampersand `&`. The resulting type must satisfy ALL the combined types.

2. Why It Exists / Problem It Solves
It is effectively "inheritance" or "composition" for object types. It's used to mixin capabilities or merge multiple interfaces into a single object.

3. How It Works (Conceptual Explanation)
It requires the object to possess all properties from Type A AND all properties from Type B.

4. Code Example

Basic Example:
```typescript
interface BusinessPartner {
  name: string;
  credit: number;
}
interface Identity {
  id: number;
  email: string;
}

type Employee = BusinessPartner & Identity;

const e: Employee = {
  id: 1,
  name: "John",
  email: "john@test.com",
  credit: 1000
}; // Must have ALL 4 properties
```

5. Common Mistakes
- Creating impossible intersections (e.g., `string & number`), which results in `never`.
- Confusing Union (`|`) with Intersection (`&`).

6. Interview Follow-Ups
- What happens if two intersected interfaces have the same property with different types? (Usually becomes `never`).

7. One-Line Interview Summary
Intersection types (`A & B`) combine types, requiring an object to have all properties of both.

---

Q. 17. What is a literal type?

1. Definition
A literal type restricts a variable to a specific exact string, number, or boolean value, rather than the general category of that type.

2. Why It Exists / Problem It Solves
It is vital for state management (e.g., status: "loading" | "success"), ensuring you can't assign random strings to variables where only specific finite values are allowed.

3. How It Works (Conceptual Explanation)
It treats the specific value (e.g., "admin") as a type itself.

4. Code Example

Basic Example:
```typescript
type Direction = "left" | "right" | "up" | "down";

function move(dir: Direction) {
  // ...
}

move("left"); // valid
// move("forward"); // Error: "forward" is not assignable to type Direction
```

5. Common Mistakes
- Typographical errors in string literals which TS catches instantly.
- Trying to modify a `let` variable inferred as a general string to a literal variable without casting or specific definition.

6. Interview Follow-Ups
- How do template literal types work?
- Why does `as const` create literal types?

7. One-Line Interview Summary
Literal types enforce that a variable must hold an exact specific value (e.g., `"success"`), not just any string.

---

Q. 18. What are tuple types?

1. Definition
A tuple is a fixed-length array where each element has a specific known type at a specific position.

2. Why It Exists / Problem It Solves
It allows returning multiple values from a function (like React hooks) or representing fixed structures (like CSV rows: `[string, number]`) with strict ordering.

3. How It Works (Conceptual Explanation)
TS enforces length and order. `[string, number]` means index 0 must be string, index 1 must be number.

4. Code Example

Basic Example:
```typescript
// x, y coordinates
let point: [number, number] = [10, 20];

// React useState pattern
type StatePair = [string, (val: string) => void];
```

5. Common Mistakes
- Accessing an index outside the tuple definition (TS flags this).
- Assuming tuples are immutable (they are mutable arrays unless marked `readonly`).

6. Interview Follow-Ups
- Can tuples have optional elements? (Yes: `[string, number?]`).
- How are tuples different from regular arrays `(string | number)[]`?

7. One-Line Interview Summary
Tuples are arrays with fixed length and declared types for each index position.

---

Q. 19. What are enums? Difference between `enum` and `const enum`

1. Definition
Enums (Enumerations) allow a developer to define a set of named constants. TypeScript supports both numeric and string-based enums.

2. Why It Exists / Problem It Solves
They verify intent and provide readable names for constant values (e.g., `UserRole.Admin` is clearer than just passing the number `1` or string `"admin"`).

3. How It Works (Conceptual Explanation)
Regular `enum` generates a real JavaScript object at runtime (mapping names to values). `const enum` is erased during compilation and inlines the values at usage sites.

4. Code Example

Basic Example:
```typescript
enum Status {
  Active = "ACTIVE",
  Inactive = "INACTIVE"
}
const currentStatus = Status.Active;
```

Difference Example:
```typescript
// Regular Enum -> Generates JS object overhead
enum A { X = 1 } 

// Const Enum -> No JS object, inlines '1' where used
const enum B { X = 1 }
```

5. Common Mistakes
- Using numeric enums without initializers (starts at 0, which is falsy).
- Using regular enums in large bundles where tree-shaking is desired (const enums or union types are lighter).

6. Interview Follow-Ups
- Why do some developers prefer Union Types over Enums? (Less overhead, simpler JS output).

7. One-Line Interview Summary
Enums define named constants; `const enum` is a performance optimization that removes the enum object at runtime.

---

Q. 20. What are generics and why are they needed?

1. Definition
Generics allow you to write reusable code components (functions, classes, interfaces) that work with a variety of types rather than a single one, while maintaining type safety.

2. Why It Exists / Problem It Solves
Without generics, you'd have to use `any` for reusable functions, losing type safety. Generics let you capture the type passed in (e.g., `T`) and use it for return types.

3. How It Works (Conceptual Explanation)
It works like a parameter, but for types. You pass a Type `T` into a function `Func<T>`, and TS swaps `T` with the actual type you use.

4. Code Example

Basic Example:
```typescript
function identity<T>(arg: T): T {
  return arg;
}

const num = identity<number>(42); // returns number
const str = identity("Hello"); // infers T is string
```

5. Common Mistakes
- Over-engineering simple functions with unnecessary generics.
- Forgetting to constrain generics when specific properties are accessed.

6. Interview Follow-Ups
- How do you restrict what `T` can be? (Generic Constraints).
- Can you have default generic types? (`<T = string>`).

7. One-Line Interview Summary
Generics allow you to write code that works with any data type while preserving the specific type info of that data.

---

Q. 21. How do generic constraints work?

1. Definition
Generic constraints limit the types that can be passed to a generic parameter using the `extends` keyword.

2. Why It Exists / Problem It Solves
Sometimes a generic function needs to access a specific property (like `.length`). If `T` can be anything, TS denies access. Constraint ensures `T` at least has that property.

3. How It Works (Conceptual Explanation)
`function func<T extends SomeInterface>` guarantees that whatever `T` is, it must have the keys defined in `SomeInterface`.

4. Code Example

Basic Example:
```typescript
interface Lengthwise {
  length: number;
}

function logLength<T extends Lengthwise>(arg: T): T {
  console.log(arg.length); // Allowed because of constraint
  return arg;
}

logLength("hello"); // OK (string has length)
// logLength(10); // Error (number has no length)
```

5. Common Mistakes
- Assuming `extends` means inheritance (in this context, it means "assignable to").

6. Interview Follow-Ups
- How does `keyof` work with generic constraints?

7. One-Line Interview Summary
Constraints (`<T extends Constraint>`) restrict generics to ensure they have required properties.

---

Q. 22. What is `keyof`?

1. Definition
`keyof` is an operator that takes an object type and produces a string or numeric literal union of its keys.

2. Why It Exists / Problem It Solves
It enables type-safe dynamic property access. It prevents you from accessing properties that don't exist on an object.

3. How It Works (Conceptual Explanation)
If `Type = { x: number, y: number }`, then `keyof Type` becomes `"x" | "y"`.

4. Code Example

Basic Example:
```typescript
interface User {
  id: number;
  name: string;
}

type UserKeys = keyof User; // "id" | "name"

function getProp(obj: User, key: UserKeys) {
  return obj[key]; // Safe
}
```

5. Common Mistakes
- Using `keyof any` (results in string | number | symbol).
- Confusing it with `Object.keys()` (runtime vs compile-time).

6. Interview Follow-Ups
- How to combine `keyof` with `typeof`?

7. One-Line Interview Summary
`keyof T` extracts the keys of type T as a union of string literals.

---

Q. 23. What is `typeof` in TypeScript?

1. Definition
In TypeScript type context, `typeof` extracts the TypeScript type from a runtime value/variable.

2. Why It Exists / Problem It Solves
It prevents code duplication. If you have a complex configuration object, you don't need to manually write an interface for it; you can just infer it from the object itself.

3. How It Works (Conceptual Explanation)
It snapshots the shape of a variable. `type T = typeof variable`.

4. Code Example

Basic Example:
```typescript
const config = {
  endpoint: "https://api.com",
  timeout: 5000
};

type Config = typeof config; 
// Equivalent to: { endpoint: string; timeout: number; }
```

5. Common Mistakes
- Using it on types instead of values (`typeof MyInterface` is invalid).
- Confusing runtime `typeof` (returns "string", "object") with type-context `typeof`.

6. Interview Follow-Ups
- How do you use `ReturnType` with `typeof`? (e.g. `ReturnType<typeof func>`).

7. One-Line Interview Summary
`typeof` in type context returns the inferred type of a variable or object.

---

Q. 24. What is index signature?

1. Definition
Index signatures allow you to define types for objects when you don't know the exact property names ahead of time, but you know the type of the keys and values.

2. Why It Exists / Problem It Solves
Useful for dictionaries, hashmaps, or dynamic objects where keys are added at runtime.

3. How It Works (Conceptual Explanation)
Syntax: `[key: KeyType]: ValueType`. It tells TS "Any key of this type will have this value type".

4. Code Example

Basic Example:
```typescript
interface StringDictionary {
  [index: string]: string;
}

const myDict: StringDictionary = {};
myDict["color"] = "red";
myDict["brand"] = "apple";
// myDict["age"] = 10; // Error
```

5. Common Mistakes
- Mixing strict properties with incompatible index signatures.
- Thinking `[key: string]` excludes methods (it forces all properties, including methods, to match the value type).

6. Interview Follow-Ups
- Can you have multiple index signatures? (Yes, for string/number).
- What is `Record<K, T>`? (A utility for this).

7. One-Line Interview Summary
Index signatures (`[key: string]: V`) define types for objects with dynamic keys.

---

Q. 25. What is mapped type?

1. Definition
Mapped types allow you to create new types by transforming properties of an existing type. It iterates over keys of a type to create something new.

2. Why It Exists / Problem It Solves
It enables DRY principles for types. Instead of manually re-typing "ReadonlyUser", "OptionalUser", etc., you map over "User" to generate them.

3. How It Works (Conceptual Explanation)
Syntax: `[P in K]: T`. It loops over union `K` and maps property `P` to type `T`.

4. Code Example

Basic Example:
```typescript
type MyReadonly<T> = {
  readonly [P in keyof T]: T[P];
};

interface User {
  age: number;
}
type ReadonlyUser = MyReadonly<User>; // { readonly age: number }
```

5. Common Mistakes
- Syntax errors (forgetting `in` or `keyof`).
- Not understanding it's the foundation of Utility Types like `Partial`.

6. Interview Follow-Ups
- What are template literal mapped types?
- How to remove modifiers in mapped types? (e.g., `-readonly`).

7. One-Line Interview Summary
Mapped types (`[P in Key]: Type`) construct new types by iterating and transforming keys of an existing type.

---

Q. 26. What is conditional type?

1. Definition
Conditional types allow you to choose types based on a condition, similar to ternary operators in JS. Syntax: `T extends U ? X : Y`.

2. Why It Exists / Problem It Solves
It enables flexible APIs where the return type depends on the input type.

3. How It Works (Conceptual Explanation)
If type `T` is assignable to `U`, the type resolves to `X`, otherwise `Y`.

4. Code Example

Basic Example:
```typescript
type IsString<T> = T extends string ? true : false;

type A = IsString<string>; // true
type B = IsString<number>; // false
```

Real-World Example (Extract ID):
```typescript
type IdOrName<T extends number | string> = T extends number ? "Id" : "Name";
```

5. Common Mistakes
- Using them unnecessarily for simple problems.
- Not understanding "Distributive Conditional Types" (when acting on unions).

6. Interview Follow-Ups
- What is the `infer` keyword?

7. One-Line Interview Summary
Conditional types (`T extends U ? X : Y`) select one type or another based on type assignability.

---

## 3. Utility Types (Frequently Asked)

Q. 27. What are utility types in TypeScript?

1. Definition
Utility types are built-in generic types provided by TypeScript that facilitate common type transformations, such as picking properties, excluding keys, or making properties optional.

2. Why It Exists / Problem It Solves
They reduce boilerplate. Instead of creating new interfaces for slightly different versions of the same object (e.g., separate `User` and `UserUpdate` types), you can transform the original `User` type.

3. How It Works (Conceptual Explanation)
They are implemented using Mapped Types, Conditional Types, and `keyof` under the hood.

4. Code Example

Basic Example:
```typescript
interface User {
  id: number;
  name: string;
}
// Instead of defining a new type for update:
type UpdateUser = Partial<User>;
```

5. Common Mistakes
- Reinventing the wheel by writing manual mapped types for things that already exist.

6. Interview Follow-Ups
- Can you write your own version of `Partial`?

7. One-Line Interview Summary
Utility types are standard tools to transform existing types into new ones without duplication.

---

Q. 28. Explain `Partial<T>`

1. Definition
`Partial<T>` constructs a type with all properties of `T` set to optional.

2. Why It Exists / Problem It Solves
Perfect for "patch" or "update" operations where you might only send a subset of fields to update.

3. How It Works (Conceptual Explanation)
It maps over relevant keys and adds the `?` modifier. `[P in keyof T]?: T[P]`.

4. Code Example

Real-World Example (React State Update):
```typescript
interface State {
  loading: boolean;
  data: string[];
  error: string | null;
}

function updateState(current: State, update: Partial<State>) {
  return { ...current, ...update };
}
```

5. Common Mistakes
- Expecting it to handle deep nesting (`Partial` is shallow).

6. Interview Follow-Ups
- How would you implement `DeepPartial<T>`?

7. One-Line Interview Summary
`Partial<T>` makes all properties of an object optional.

---

Q. 29. Explain `Required<T>`

1. Definition
`Required<T>` constructs a type with all properties of `T` set to required. It removes the `?` modifier.

2. Why It Exists / Problem It Solves
Useful when you have a config object with optional defaults, but inside your logic, you have merged defaults and know strictly that all fields exist.

3. How It Works (Conceptual Explanation)
It maps over keys and removes optionality: `[P in keyof T]-?: T[P]`.

4. Code Example

Basic Example:
```typescript
interface Config {
  timeout?: number;
  retries?: number;
}

// Internal strict config
type StrictConfig = Required<Config>;
```

5. Common Mistakes
- Assuming it fixes `null` (it only handles optional `?`, not `| null`).

6. Interview Follow-Ups
- How does `-?` syntax work?

7. One-Line Interview Summary
`Required<T>` makes all properties of an object required (removes optionality).

---

Q. 30. Explain `Readonly<T>`

1. Definition
`Readonly<T>` constructs a type with all properties of `T` set to `readonly`.

2. Why It Exists / Problem It Solves
To enforce immutability across an entire object, often used for Redux state or React props to prevent accidental mutation.

3. How It Works (Conceptual Explanation)
It maps over keys and adds `readonly` modifier.

4. Code Example

Basic Example:
```typescript
interface Todo {
  title: string;
}
const todo: Readonly<Todo> = { title: "Buy Milk" };

// todo.title = "Buy Bread"; // Error
```

5. Common Mistakes
- Thinking it freezes the object at runtime (`Object.freeze` is needed for that).

6. Interview Follow-Ups
- what is `ReadonlyArray`?

7. One-Line Interview Summary
`Readonly<T>` marks all properties of a type as read-only.

---

Q. 31. Explain `Pick<T, K>`

1. Definition
`Pick<T, K>` constructs a type by picking the set of properties `K` from `T`.

2. Why It Exists / Problem It Solves
Useful when you need a strict subset of a larger interface, for example, a component that only needs `id` and `name` from a full `User` object.

3. How It Works (Conceptual Explanation)
It creates a new type containing ONLY the specified keys. `Key` must be a key of T.

4. Code Example

Basic Example:
```typescript
interface User {
  id: number;
  name: string;
  email: string;
  token: string;
}

type UserPreview = Pick<User, "id" | "name">;
```

5. Common Mistakes
- Trying to pick keys that don't exist in `T`.

6. Interview Follow-Ups
- Difference between `Pick` and `Omit`?

7. One-Line Interview Summary
`Pick<T, K>` creates a new type selecting only the specified keys from T.

---

Q. 32. Explain `Omit<T, K>`

1. Definition
`Omit<T, K>` constructs a type by picking all properties from `T` and then removing `K`.

2. Why It Exists / Problem It Solves
It is the opposite of `Pick`. Useful when you want everything *except* a few fields (e.g., removing sensitive data like `password` from a User object before sending to client).

3. How It Works (Conceptual Explanation)
It is implemented as `Pick<T, Exclude<keyof T, K>>`.

4. Code Example

Basic Example:
```typescript
interface User {
  id: number;
  name: string;
  passwordHash: string;
}

type SafeUser = Omit<User, "passwordHash">;
```

5. Common Mistakes
- Trying to omit keys that don't exist (TypeScript treats this leniently in some versions, unlike Pick).

6. Interview Follow-Ups
- Why wasn't `Omit` included in the very first version of TS utility types? (It requires `Exclude` which came later).

7. One-Line Interview Summary
`Omit<T, K>` creates a new type by removing specified keys from T.

---

Q. 33. Explain `Record<K, T>`

1. Definition
`Record<K, T>` constructs an object type whose property keys are `K` and whose property values are `T`.

2. Why It Exists / Problem It Solves
It is the standard way to define a dictionary or map where you know the keys (e.g., IDs) and the values (e.g., User objects).

3. How It Works (Conceptual Explanation)
It maps over `K` and sets the value to `T`. `K` is usually `string`, `number`, or a union of literals.

4. Code Example

Basic Example:
```typescript
type Page = "home" | "about" | "contact";
interface PageInfo {
  title: string;
}

const nav: Record<Page, PageInfo> = {
  home: { title: "Home" },
  about: { title: "About Us" },
  contact: { title: "Contact" }
};
```

5. Common Mistakes
- Using `object` instead of `Record<string, unknown>`.

6. Interview Follow-Ups
- How does `Record` differ from an index signature?

7. One-Line Interview Summary
`Record<K, T>` creates an object type with specific keys K and values T.

---

Q. 34. Explain `Exclude<T, U>`

1. Definition
`Exclude<T, U>` constructs a type by excluding from `T` all union members that are assignable to `U`.

2. Why It Exists / Problem It Solves
It is used to filter out types from a Union. For example, removing `null` or removing specific string literals.

3. How It Works (Conceptual Explanation)
It uses conditional types: `T extends U ? never : T`. If it matches U, it is thrown away (never).

4. Code Example

Basic Example:
```typescript
type MyUnion = string | number | boolean;
type OnlyStringNumber = Exclude<MyUnion, boolean>; // string | number
```

5. Common Mistakes
- Confusing `Exclude` (for Unions) with `Omit` (for Objects).

6. Interview Follow-Ups
- What happens if you exclude everything? (Type becomes `never`).

7. One-Line Interview Summary
`Exclude<T, U>` removes types from a union T that match U.

---

Q. 35. Explain `Extract<T, U>`

1. Definition
`Extract<T, U>` constructs a type by extracting from `T` all union members that are assignable to `U`.

2. Why It Exists / Problem It Solves
It finds the intersection or commonality between two unions.

3. How It Works (Conceptual Explanation)
It uses conditional types: `T extends U ? T : never`.

4. Code Example

Basic Example:
```typescript
type T0 = Extract<"a" | "b" | "c", "a" | "f">; // "a"
```

5. Common Mistakes
- Confusing it with Intersection Types `&`.

6. Interview Follow-Ups
- How to uses Extract to find common properties of two objects? (use `keyof`).

7. One-Line Interview Summary
`Extract<T, U>` keeps only the types in union T that also exist in U.

---

Q. 36. Explain `NonNullable<T>`

1. Definition
`NonNullable<T>` constructs a type by excluding `null` and `undefined` from `T`.

2. Why It Exists / Problem It Solves
Useful when you have a possibly null value but you are in a code path where you want to explicitly enforce the non-null version.

3. How It Works (Conceptual Explanation)
It is essentially `Exclude<T, null | undefined>`.

4. Code Example

Basic Example:
```typescript
type MaybeString = string | null | undefined;
type DefinitelyString = NonNullable<MaybeString>; // string
```

5. Common Mistakes
- Assuming it removes `false` or `0` (it only removes null/undefined).

6. Interview Follow-Ups
- How does this relate to strictNullChecks?

7. One-Line Interview Summary
`NonNullable<T>` removes `null` and `undefined` from a type.

---

## 4. Functions & Typing (Very Common)

Q. 37. How do you type a function in TypeScript?

1. Definition
Functions in TypeScript require typing for parameters and the return value. Types can be defined inline or via an interface/type alias.

2. Why It Exists / Problem It Solves
It ensures that functions are called with the correct arguments and that their return values are handled correctly, preventing runtime crashes.

3. How It Works (Conceptual Explanation)
TS enforces strict checking of argument count and types.

4. Code Example

Basic Example:
```typescript
// Named function
function add(x: number, y: number): number {
  return x + y;
}

// Function Type Expression
type MathFunc = (x: number, y: number) => number;
const subtract: MathFunc = (x, y) => x - y;
```

5. Common Mistakes
- Forgetting to type the return value (though inference usually handles this).
- Thinking the parameter names in the type definition matter (only types and order matter).

6. Interview Follow-Ups
- How to type a function that accepts `this`?

7. One-Line Interview Summary
Functions require types for parameters and return values to ensure contract safety.

---

Q. 38. What is function overload?

1. Definition
Function overloading allows a single function to have multiple signatures (different parameter types or counts), but a single implementation.

2. Why It Exists / Problem It Solves
It allows a function to handle different input scenarios gracefully while maintaining strict type safety for the caller.

3. How It Works (Conceptual Explanation)
You write multiple "overload signatures" (heads) and one "implementation signature" (body). The implementation signature must be compatible with all overloads.

4. Code Example

Basic Example:
```typescript
function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d);
  }
  return new Date(mOrTimestamp);
}

const d1 = makeDate(12345678); // Valid
const d2 = makeDate(5, 5, 2025); // Valid
// const d3 = makeDate(1, 3); // Error: No overload matches 2 args
```

5. Common Mistakes
- Trying to call the implementation signature directly (it is hidden from the outside world).
- Making the implementation signature incompatible with the overloads.

6. Interview Follow-Ups
- Why can't you just use union types instead of overloads?

7. One-Line Interview Summary
Overloading defines multiple call signatures for one function implementation.

---

Q. 39. Difference between function overload and union types

1. Definition
Union types allow a parameter to be one of several types (`a: string | number`), while overloads define distinct relationships between parameters and return types.

2. Why It Exists / Problem It Solves
Union types are simpler for independent parameters. Overloads are needed when the *return type depends on the input type* or when parameters are correlated.

3. How It Works (Conceptual Explanation)
Use Unions for simple "A or B" inputs. Use Overloads when "Input A returns X" and "Input B returns Y".

4. Code Example

Basic Example (Union is better here):
```typescript
// Simple formatting
function format(input: string | number) { 
  return "Val: " + input; 
}
```

Basic Example (Overload is better here):
```typescript
function getItems(s: string): string[];  // returns array
function getItems(s: number): number[];  // returns array
function getItems(s: any): any[] { return [s]; }
```

5. Common Mistakes
- Using overloads when a simple optional parameter or union would suffice (Stick to what is simpler).

6. Interview Follow-Ups
- Can you overload arrow functions? (No, only via type aliases).

7. One-Line Interview Summary
Use unions for simple parameter flexibility; use overloads when return types vary based on input types.

---

Q. 40. What are optional and default parameters?

1. Definition
Optional parameters (`?`) are not required when calling the function. Default parameters (`= value`) provide a fallback value if the caller passes `undefined`.

2. Why It Exists / Problem It Solves
They make functions flexible and reduce the need for multiple overloads for simple variations.

3. How It Works (Conceptual Explanation)
Optional parameters must come *after* required parameters. Default parameters imply optionality and infer the type.

4. Code Example

Basic Example:
```typescript
function buildName(first: string, last?: string) {
  // last is string | undefined
}

function buildNameWithDefault(first: string, last: string = "Smith") {
  // last is strictly string within the function
}
```

5. Common Mistakes
- Placing optional parameters before required ones.
- Passing `null` to trigger the default value (only `undefined` triggers the default).

6. Interview Follow-Ups
- Can a required parameter follow a default parameter? (Yes, but you must explicitly pass `undefined` to skip the default).

7. One-Line Interview Summary
Optional parameters (`?`) can be omitted; Default parameters (`=`) provide concrete values when arguments are missing/undefined.

---

Q. 41. What is rest parameter typing?

1. Definition
Rest parameters allow a function to accept an indefinite number of arguments as an array.

2. Why It Exists / Problem It Solves
Essential for variadic functions like `Math.max` or utility wrappers where you don't know how many arguments will be passed.

3. How It Works (Conceptual Explanation)
Syntax: `...args: Type[]`. TypeScript treats `args` as an array of that type inside the function.

4. Code Example

Basic Example:
```typescript
function sum(...numbers: number[]): number {
  return numbers.reduce((total, n) => total + n, 0);
}
sum(1, 2, 3); // Valid
```

5. Common Mistakes
- Trying to define rest parameters at the start (they must be the last parameter).
- Typing them as a tuple when the length is actually variable.

6. Interview Follow-Ups
- How to type rest parameters using a Tuple type?

7. One-Line Interview Summary
Rest parameters (`...args: Type[]`) type an infinite list of arguments as an array.

---

Q. 42. What is return type inference?

1. Definition
TypeScript automatically determines the return type of a function based on the return statements inside its body.

2. Why It Exists / Problem It Solves
It saves typing effort. If you return a string, TS knows the function returns a string.

3. How It Works (Conceptual Explanation)
The compiler analyzes all code paths. If they return consistent types, that becomes the return type. If they differ (`string` vs `number`), it infers a union (`string | number`).

4. Code Example

Basic Example:
```typescript
function greet() {
  return "Hello"; // Inferred return type: string
}
```

5. Common Mistakes
- Relying on inference for recursive functions (often fails or hits circular limits).
- Not explicit typing public APIs (explicit return types prevent accidental breaking changes from internal code tweaks).

6. Interview Follow-Ups
- When should you strictly force a return type?

7. One-Line Interview Summary
TypeScript automatically deduces the function return type from the values returned in the body.

---

Q. 43. How to type arrow functions?

1. Definition
Arrow functions are typed similarly to regular functions, but their type definition often lives in a variable declaration if assigned to a defined type.

2. Why It Exists / Problem It Solves
Arrow functions are used heavily in modern JS/React (callbacks, components). Typing them correctly ensures safe passing of functions as props.

3. How It Works (Conceptual Explanation)
Syntax: `(params) => ReturnType`.

4. Code Example

Basic Example:
```typescript
const multiply = (a: number, b: number): number => a * b;

// Type Alias approach
type ClickHandler = (event: Event) => void;
const onClick: ClickHandler = (e) => console.log(e);
```

5. Common Mistakes
- Confusing the arrow `=>` in type definition with the arrow in function implementation.

6. Interview Follow-Ups
- How does `this` work in arrow functions vs regular functions in TS?

7. One-Line Interview Summary
Arrow functions use `(args) => ReturnType` syntax for typing.

---

Q. 44. How to type callback functions?

1. Definition
Callback functions are typed by defining their parameter signature and return type (often `void`).

2. Why It Exists / Problem It Solves
Crucial for asynchronous programming and event handling. It ensures the callback receives the expected data.

3. How It Works (Conceptual Explanation)
You define the shape the callback *must* match. `(err: Error | null, data: string) => void`.

4. Code Example

Basic Example:
```typescript
function fetchData(url: string, cb: (data: string) => void) {
  // ...
  cb("Response Data");
}

fetchData("/api", (data) => console.log(data.toUpperCase()));
```

5. Common Mistakes
- Typing the callback return as `any` instead of `void` if the return value is ignored.

6. Interview Follow-Ups
- What happens if a callback is optional?

7. One-Line Interview Summary
Callbacks are typed as function signatures specifying expected arguments and return type.

---

Q. 45. How to type async functions?

1. Definition
Async functions always return a `Promise`. So the return type must be `Promise<T>`, where T is the resolved value.

2. Why It Exists / Problem It Solves
It accurately models the asynchronous nature. You cannot treat the return value as the direct data; you must await it.

3. How It Works (Conceptual Explanation)
Even if you return a simple number, an `async` keyword wraps it in a Promise. TS enforces `Promise<number>`.

4. Code Example

Basic Example:
```typescript
async function getUser(id: number): Promise<string> {
  return "User" + id;
}

// Usage
const user = await getUser(1); // user is string
```

5. Common Mistakes
- Typing return as `T` instead of `Promise<T>`.
- Forgetting to handle rejections in the type (though `Promise<T>` doesn't explicitly encode rejection types easily).

6. Interview Follow-Ups
- Can you type the error of a Promise? (Not natively in the Promise type argument).

7. One-Line Interview Summary
Async functions must have a return type of `Promise<ResolvedType>`.

---

## 5. Object & Class Related (Common)

Q. 46. How do you type objects in TypeScript?

1. Definition
Objects are typed using Interfaces, Type Aliases, or inline object type literals.

2. Why It Exists / Problem It Solves
It ensures that the object has the expected structure (properties, types) before it is used, preventing access to undefined properties.

3. How It Works (Conceptual Explanation)
TS compares the shape of the value to the defined shape.

4. Code Example

Basic Example:
```typescript
interface Car {
  make: string;
  year: number;
}
const myCar: Car = { make: "Toyota", year: 2020 };
```

5. Common Mistakes
- Thinking order of properties matters (it doesn't).
- Forgetting to handle optional properties (`?`).

6. Interview Follow-Ups
- When to use `Record` instead of an interface?

7. One-Line Interview Summary
Objects are typed using interfaces or type aliases to define their required shape.

---

Q. 47. What is structural typing?

1. Definition
Structural typing is a type system feature where type compatibility is determined by the *shape* (structure) of the object, not its explicit name or declaration.

2. Why It Exists / Problem It Solves
It allows flexibility. If Object A has all the fields required by Type B, it can be used as Type B, even if it wasn't explicitly declared as "implements B".

3. How It Works (Conceptual Explanation)
"If it walks like a duck and quacks like a duck, it's a duck." TS checks: "Does this object have properties X, Y, Z?" If yes, it matches.

4. Code Example

Basic Example:
```typescript
interface Point { x: number; y: number; }

function logPoint(p: Point) { console.log(p.x, p.y); }

const myObj = { x: 10, y: 20, z: 30 };
logPoint(myObj); // Valid! myObj has x and y.
```

5. Common Mistakes
- Confusing it with "Nominal Typing" (like Java/C#) where the name matters.
- Structure must be *at least* what is required (excess properties are allowed in variables, but checked in literals).

6. Interview Follow-Ups
- What consists of a "freshness" check (Object Literal Strictness)?

7. One-Line Interview Summary
Structural typing means compatibility is based on the object's members/shape, not its name.

---

Q. 48. What is duck typing?

1. Definition
Duck typing is the dynamic typing equivalent of structural typing. Use mostly in JS context. In TS, we refer to it as structural typing.

2. Why It Exists / Problem It Solves
It focuses on what an object *can do* (properties/methods) rather than what it *is* (class inheritance).

3. How It Works (Conceptual Explanation)
At runtime (JS), if you try to call `obj.quack()`, it works if the method exists.

4. Code Example

Basic Example:
```typescript
// TS formalizes Duck Typing via interfaces
interface Quacker {
  quack(): void;
}
```

5. Common Mistakes
- Using `instanceof` checks for duck-typed objects (which might be plain objects, not class instances).

6. Interview Follow-Ups
- How does structural typing differ from nominal typing?

7. One-Line Interview Summary
Duck typing implies checking if an object has certain methods/properties rather than checking its specific class.

---

Q. 49. What are access modifiers (`public`, `private`, `protected`)?

1. Definition
Access modifiers control the visibility of class members. `public` (default), `private` (accessible only within class), `protected` (derived classes too).

2. Why It Exists / Problem It Solves
Encapsulation. It prevents external code from messing with internal state that shouldn't be exposed.

3. How It Works (Conceptual Explanation)
TS enforces these checks at compile time. At runtime, the JS is just a normal object (unless using `#private` fields).

4. Code Example

Basic Example:
```typescript
class BankAccount {
  private balance: number = 0;
  
  public deposit(amount: number) {
    this.balance += amount;
  }
}
const acc = new BankAccount();
acc.deposit(100);
// acc.balance; // Error: private
```

5. Common Mistakes
- Thinking `private` keyword provides runtime privacy (it doesn't, use `#field` for that).

6. Interview Follow-Ups
- Difference between `private` and `#private` (JS private fields)?

7. One-Line Interview Summary
Modifiers control access: `public` (everywhere), `private` (own class only), `protected` (class + subclasses).

---

Q. 50. What is readonly in classes?

1. Definition
`readonly` properties in classes can only be assigned in the declaration or inside the constructor.

2. Why It Exists / Problem It Solves
It ensures that critical properties (like ID or creation date) cannot be modified after the instance is created.

3. How It Works (Conceptual Explanation)
Compiler prevents assignment outside the constructor.

4. Code Example

Basic Example:
```typescript
class User {
  readonly id: number;
  constructor(id: number) {
    this.id = id;
  }
  
  changeId() {
    // this.id = 5; // Error
  }
}
```

5. Common Mistakes
- Trying to change it in a method other than the constructor.

6. Interview Follow-Ups
- Can you use `readonly` with `static`?

7. One-Line Interview Summary
`readonly` ensures a class property is immutable after initialization.

---

Q. 51. What is abstract class?

1. Definition
An abstract class is a base class that cannot be instantiated directly. It may contain abstract methods (no implementation) that derived classes *must* implement.

2. Why It Exists / Problem It Solves
It provides a blueprint. It enforces that all subclasses share a common structure and behavior set.

3. How It Works (Conceptual Explanation)
You mark class and methods as `abstract`. You must extend it to create an instance.

4. Code Example

Basic Example:
```typescript
abstract class Animal {
  abstract makeSound(): void; // Must be implemented
  move() { console.log("Moving"); } // Shared logic
}

class Dog extends Animal {
  makeSound() { console.log("Bark"); }
}
// const a = new Animal(); // Error
```

5. Common Mistakes
- Forgetting to implement an abstract method in the subclass.

6. Interview Follow-Ups
- Difference between abstract class and interface?

7. One-Line Interview Summary
Abstract classes are blueprints that cannot be instantiated and may require subclasses to implement specific methods.

---

Q. 52. Difference between `interface` and `class`

1. Definition
A `class` is a blueprint for creating objects (exists at runtime). An `interface` is a structure definition (exists only at compile time).

2. Why It Exists / Problem It Solves
Classes are for implementation (code + data). Interfaces are for contracts (shapes).

3. How It Works (Conceptual Explanation)
Classes generate JS code. Interfaces are erased.

4. Code Example

Basic Example:
```typescript
interface Runnable {
  run(): void;
}
class Athlete implements Runnable {
  run() { console.log("Run"); }
}
```

5. Common Mistakes
- Trying to `new Interface()`.

6. Interview Follow-Ups
- Can a class implement an interface? (Yes).
- Can an interface extend a class? (Yes, surprisingly, it inherits the shape).

7. One-Line Interview Summary
Classes compile to JS and create objects; Interfaces are TS-only constructs for type checking.

---

Q. 53. How does TypeScript support OOP concepts?

1. Definition
TS adds full OOP support to JS: Classes, Inheritance, Polymorphism, Abstraction, Encapsulation (modifiers), and Interfaces.

2. Why It Exists / Problem It Solves
It makes JS robust for large-scale enterprise applications where OOP patterns are preferred for organization.

3. How It Works (Conceptual Explanation)
It mimics languages like Java/C# but transpiles to prototype-based JavaScript.

4. Code Example

Basic Example:
```typescript
class Animal { /*...*/ }
class Dog extends Animal { /*...*/ } // Inheritance
```

5. Common Mistakes
- Applying OOP where Functional Programming might be simpler (TS supports both).

6. Interview Follow-Ups
- Explain Encapsulation in TS.

7. One-Line Interview Summary
TS supports OOP via classes, interfaces, inheritance, and access modifiers.

---

Q. 54. What is `implements` keyword?

1. Definition
`implements` ensures that a class adheres to a specific interface (contract).

2. Why It Exists / Problem It Solves
It guarantees that the class has defined the required properties and methods. If not, TS throws an error.

3. How It Works (Conceptual Explanation)
`class C implements I`. C must have all members of I.

4. Code Example

Basic Example:
```typescript
interface Logger {
  log(msg: string): void;
}

class ConsoleLogger implements Logger {
  log(msg: string) { console.log(msg); }
}
```

5. Common Mistakes
- Thinking `implements` brings code into the class (it doesn't, it just checks structure).

6. Interview Follow-Ups
- Can a class implement multiple interfaces? (Yes).

7. One-Line Interview Summary
`implements` forces a class to satisfy the shape of an interface.

---

Q. 55. What is `extends` keyword?

1. Definition
`extends` is used for inheritance. A subclass inherits properties and methods from a parent class.

2. Why It Exists / Problem It Solves
Code reuse. You define common logic in a base class and reuse/override it in subclasses.

3. How It Works (Conceptual Explanation)
It sets up the prototype chain in JavaScript.

4. Code Example

Basic Example:
```typescript
class Base {
  greet() { console.log("Hi"); }
}

class Derived extends Base {
  greet() { super.greet(); console.log("Bye"); }
}
```

5. Common Mistakes
- Confusing `extends` (inheritance) with `implements` (contract).
- Not calling `super()` in the constructor of a derived class.

6. Interview Follow-Ups
- Can you extend multiple classes? (No, JS/TS does not support multiple inheritance).

7. One-Line Interview Summary
`extends` creates a subclass that inherits from a parent class.

---

## 6. Narrowing & Type Guards (Very Important)

Q. 56. What is type narrowing?

1. Definition
Type narrowing is the process by which TypeScript refines a broad type (like `string | number`) to a more specific type (like `string`) based on conditional checks in the code.

2. Why It Exists / Problem It Solves
It allows you to safely use methods that only exist on one specific type within a union.

3. How It Works (Conceptual Explanation)
TS analyzes control flow (if/else). If you check `if (typeof x === 'string')`, inside that block, TS treats `x` as string.

4. Code Example

Basic Example:
```typescript
function padLeft(padding: number | string, input: string) {
  if (typeof padding === "number") {
    // padding is number here
    return " ".repeat(padding) + input;
  }
  // padding is string here (TS infers this)
  return padding + input;
}
```

5. Common Mistakes
- Expecting narrowing to work across function boundaries without extra care (TS control flow analysis is mostly intra-function).

6. Interview Follow-Ups
- Explain "Control Flow Analysis".

7. One-Line Interview Summary
Narrowing is refinements of types based on runtime checks.

---

Q. 57. What are type guards?

1. Definition
Type guards are expressions that perform a runtime check which guarantees the type in some scope.

2. Why It Exists / Problem It Solves
They are the mechanism that triggers type narrowing. Without them, TS wouldn't know when it's safe to assume a specific type.

3. How It Works (Conceptual Explanation)
Common guards include `typeof`, `instanceof`, `in`, and custom "user-defined" guards.

4. Code Example

Basic Example:
```typescript
// 'typeof x === "string"' is a type guard
if (typeof val === "string") { /*...*/ }
```

5. Common Mistakes
- Assuming truthiness (e.g. `if (val)`) is enough to distinguish types (it only checks for null/undefined/0/false).

6. Interview Follow-Ups
- How to write a custom type guard?

7. One-Line Interview Summary
Type guards are conditions that verify a variable's type at runtime, triggering narrowing in TypeScript.

---

Q. 58. Explain `typeof` type guard

1. Definition
The `typeof` operator returns a string indicating the type of the operand. TypeScript recognizes it as a type guard for primitives.

2. Why It Exists / Problem It Solves
It is the standard way to check for primitives: `string`, `number`, `boolean`, `symbol`.

3. How It Works (Conceptual Explanation)
If `typeof x === "string"`, TS knows `x` must be a string.

4. Code Example

Basic Example:
```typescript
function printId(id: number | string) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id.toFixed(2));
  }
}
```

5. Common Mistakes
- Using `typeof` for `null` (returns `"object"`) or array (returns `"object"`).

6. Interview Follow-Ups
- What does `typeof null` return?

7. One-Line Interview Summary
`typeof` is used to narrow primitive types like string, number, and boolean.

---

Q. 59. Explain `instanceof` type guard

1. Definition
The `instanceof` operator checks if an object is an instance of a class or constructor function.

2. Why It Exists / Problem It Solves
Useful for narrowing object types that are instances of classes (e.g., `Date`, `Error`, or custom classes).

3. How It Works (Conceptual Explanation)
It checks the prototype chain: `obj instanceof Class`.

4. Code Example

Basic Example:
```typescript
function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toISOString()); // x is Date
  } else {
    console.log(x.toUpperCase()); // x is string
  }
}
```

5. Common Mistakes
- Using `instanceof` on interfaces (interfaces do not exist at runtime, so `instanceof` crashes or fails).

6. Interview Follow-Ups
- Can you use `instanceof` with an interface? (No).

7. One-Line Interview Summary
`instanceof` checks if an object was created by a specific class constructor.

---

Q. 60. What is user-defined type guard?

1. Definition
A user-defined type guard is a function whose return type is a type predicate: `arg is Type`. It tells TS "If this function returns true, assume `arg` is `Type`".

2. Why It Exists / Problem It Solves
Crucial for complex checks that automatic narrowing can't handle (e.g., checking if an object has a specific interface shape).

3. How It Works (Conceptual Explanation)
Return type must be strictly boolean, but typed as `param is Type`.

4. Code Example

Basic Example:
```typescript
interface Fish { swim: () => void; }
interface Bird { fly: () => void; }

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

// Usage
if (isFish(pet)) {
  pet.swim(); // TS knows pet is Fish
}
```

5. Common Mistakes
- Returning `boolean` instead of `arg is Type` (narrowing won't happen).
- Writing a guard that returns true but doesn't actually validate the type (unsafe).

6. Interview Follow-Ups
- Can you assert negative cases? (No, `is not T` exists in newer TS versions).

7. One-Line Interview Summary
A function returning `arg is Type` that instructs the compiler to narrow a variable's type if the function returns true.

---

Q. 61. What is discriminated union?

1. Definition
A discriminated union (or tagged union) is a union of object types that all share a common literal property (the "discriminant"), used to narrow the union.

2. Why It Exists / Problem It Solves
It is the gold standard for modeling state (e.g., Redux actions, loading states). It makes narrowing explicit and 100% safe.

3. How It Works (Conceptual Explanation)
TS relies on the common shared field. If `kind === "circle"`, it must be the `Circle` type.

4. Code Example

Basic Example:
```typescript
interface Circle { kind: "circle"; radius: number; }
interface Square { kind: "square"; side: number; }
type Shape = Circle | Square;

function getArea(s: Shape) {
  switch (s.kind) {
    case "circle": return Math.PI * s.radius ** 2; // Inferred as Circle
    case "square": return s.side ** 2; // Inferred as Square
  }
}
```

5. Common Mistakes
- Forgetting to make the discriminant a *literal* type (using `string` instead of `"circle"` breaks it).

6. Interview Follow-Ups
- How does this relate to Redux reducers?

7. One-Line Interview Summary
A union of types sharing a common literal property (tag) allowing precise type narrowing.

---

Q. 62. What is exhaustive checking?

1. Definition
Exhaustive checking ensures that all possible cases of a union are handled in control flow statements (like switch/case).

2. Why It Exists / Problem It Solves
It prevents bugs when you add a new type to a union but forget to update the logic handling it.

3. How It Works (Conceptual Explanation)
You assign the "impossible" remaining value to `never`. If types remain (unhandled case), TS errors.

4. Code Example

Basic Example:
```typescript
function getArea(s: Shape) {
  switch (s.kind) {
    case "circle": /*...*/ break;
    case "square": /*...*/ break;
    default:
      const _exhaustiveCheck: never = s; // Error if 'Triangle' is added to Shape
      return _exhaustiveCheck;
  }
}
```

5. Common Mistakes
- Not using the `never` assignment, leaving unhandled cases silently ignored.

6. Interview Follow-Ups
- How does `never` work here?

7. One-Line Interview Summary
Using the `never` type to ensure the compiler enforces that every possible variant of a union is handled.

---

Q. 63. How does TypeScript handle control flow analysis?

1. Definition
Control Flow Analysis (CFA) is the mechanism TS uses to understand how types change over time within code blocks (loops, ifs, returns).

2. Why It Exists / Problem It Solves
It enables intelligent narrowing. It knows that if you `return` inside an `if`, the code after it doesn't need to consider that case.

3. How It Works (Conceptual Explanation)
It builds a graph of execution paths. It tracks type guards and assignments to refine types at each node.

4. Code Example

Basic Example:
```typescript
function example(x: string | number) {
  x = "foo"; 
  // TS knows x is strictly string now due to assignment
  console.log(x.toUpperCase());
}
```

5. Common Mistakes
- Expecting CFA to track closure state changes properly (limitations with callbacks).

6. Interview Follow-Ups
- What happens to type narrowing in callbacks?

7. One-Line Interview Summary
CFA tracks code execution paths to automatically narrow types based on guards and assignments.

---

## 7. Enums, Const Assertions & Assertions

Q. 64. What is type assertion?

1. Definition
Type assertion is a mechanism to tell the TypeScript compiler to treat a value as a specific type, overriding its inferred type. It is effectively "casting".

2. Why It Exists / Problem It Solves
Sometimes you as a developer know more about a value than TS does (e.g., getting an element from the DOM).

3. How It Works (Conceptual Explanation)
It does not change the runtime value. It just silences the compiler errors by forcing the type.

4. Code Example

Basic Example:
```typescript
const input = document.getElementById("my-input") as HTMLInputElement;
input.value = "Hello";
```

5. Common Mistakes
- Thinking it performs runtime validation or conversion (it assumes you are right).
- Asserting unrelated types directly (TS prevents `string as number` without double casting `string as unknown as number`).

6. Interview Follow-Ups
- Is type assertion type-safe? (No, it's an escape hatch).

7. One-Line Interview Summary
Type assertion (`as Type`) overrides the compiler's inference, telling it to treat a value as a specific type.

---

Q. 65. Difference between `as` and angle bracket syntax

1. Definition
`value as Type` and `<Type>value` are two syntaxes for type assertion.

2. Why It Exists / Problem It Solves
Angle brackets `<Type>` were the original syntax. `as` was introduced because angle brackets conflict with JSX (React) syntax.

3. How It Works (Conceptual Explanation)
They are identical in functionality.

4. Code Example

Basic Example:
```typescript
// JSX Safe
let s1 = someValue as string;

// Not JSX Safe (confused with HTML tags)
let s2 = <string>someValue;
```

5. Common Mistakes
- Using angle brackets in `.tsx` files (syntax error).

6. Interview Follow-Ups
- Which one is preferred in modern TS? (`as` syntax due to React popularity).

7. One-Line Interview Summary
`as` is JSX-compatible; angle brackets `<T>` are not. Both do the same thing.

---

Q. 66. What is `const assertion (as const)`?

1. Definition
`as const` is a special assertion that signals TS to infer the most specific "literal" type possible and make properties readonly.

2. Why It Exists / Problem It Solves
It prevents widening of literals (e.g., `"hello"` staying `"hello"`, not becoming `string`) and creates deeply immutable objects/tuples easily.

3. How It Works (Conceptual Explanation)
It locks down the values at compile time.

4. Code Example

Basic Example:
```typescript
// Without as const
const args = [8, 5]; // number[]
// With as const
const argsConst = [8, 5] as const; // readonly [8, 5]

const config = {
  method: "GET" 
} as const; 
// method is strictly "GET", not string
```

5. Common Mistakes
- Using it on variables that need to be mutated later.

6. Interview Follow-Ups
- How does `as const` help with Redux action creators?

7. One-Line Interview Summary
`as const` asserts that an expression should be treated as a readonly literal, preventing type widening.

---

Q. 67. When should you use type assertion?

1. Definition
Use it only when you have information about the type that TypeScript cannot know.

2. Why It Exists / Problem It Solves
Accessing DOM elements, handling external non-typed data, or narrowing disjoint unions where TS can't track the logic manually.

3. How It Works (Conceptual Explanation)
It bridges the gap between TS's analysis and developer knowledge.

4. Code Example

Real-World Example:
```typescript
// API returns JSON, we know it matches User
const user = await response.json() as User;
```

5. Common Mistakes
- Using it to silence valid errors instead of fixing the types.

6. Interview Follow-Ups
- Is `! ` (non-null assertion) a type assertion? (Yes, specifically for null/undefined).

7. One-Line Interview Summary
Use assertions only when you are certain of the type and TS's inference is insufficient (e.g. DOM access).

---

Q. 68. What are the risks of type assertion?

1. Definition
The main risk is lying to the compiler. If the runtime value doesn't match the asserted type, the app will crash later with no compile-time warning.

2. Why It Exists / Problem It Solves
Risk exists because assertions essentially disable the type checker for that specific expression.

3. How It Works (Conceptual Explanation)
TS says "Okay, I trust you" and stops checking. Runtime JS tries to access properties that might not exist.

4. Code Example

Basic Example:
```typescript
type User = { name: string };
const obj = {} as User; // TS is happy
console.log(obj.name.toUpperCase()); // Runtime Error: Cannot read property 'toUpperCase' of undefined
```

5. Common Mistakes
- Asserting partial objects as full objects.

6. Interview Follow-Ups
- How to avoid assertions? (Use Type Guards or Zod/validation libraries).

7. One-Line Interview Summary
Assertions can lead to runtime errors because they mask type mismatches from the compiler.

---

## 8. Modules & Configuration (Common)

Q. 69. What are ES modules in TypeScript?

1. Definition
ES Modules (ECMAScript Modules) are the standard module system in JavaScript, using `import` and `export` keywords. TypeScript supports them natively.

2. Why It Exists / Problem It Solves
It provides a standard handling for code organization, dependency management, and tree-shaking, replacing older systems like CommonJS.

3. How It Works (Conceptual Explanation)
Each file is a module if it has a top-level `import` or `export`. Variables are scoped to the file unless exported.

4. Code Example

Basic Example:
```typescript
// math.ts
export const add = (a: number, b: number) => a + b;

// main.ts
import { add } from "./math";
```

5. Common Mistakes
- Confusing default exports with named exports.
- Trying to use `import` in a file that is treated as a script (global scope) because it lacks any import/export.

6. Interview Follow-Ups
- How does TS handle CommonJS interoperability (`import = require()`)?

7. One-Line Interview Summary
ES Modules standard using `import`/`export` keywords to organize code into separate files.

---

Q. 70. Difference between `import` and `require`

1. Definition
`import` is the ES6 standard keyword for loading modules (static). `require` is the node.js/CommonJS function for loading modules (dynamic).

2. Why It Exists / Problem It Solves
`import` enables static analysis (tree shaking), better tooling, and async loading (via `import()`). `require` is legacy but still used in Node.js.

3. How It Works (Conceptual Explanation)
`import` happens at parse time (hoisted). `require` happens at runtime (synchronous execution).

4. Code Example

Basic Example:
```typescript
// ES Module
import React from "react";

// CommonJS
const React = require("react");
```

5. Common Mistakes
- Mixing them in the same file (can cause configuration headaches).
- Using `require` in a project configured for `ESNext` modules.

6. Interview Follow-Ups
- Can you conditionally `import` a module? (Only with dynamic `import()`).

7. One-Line Interview Summary
`import` is static and standard ES6; `require` is dynamic and specific to CommonJS/Node.js.

---

Q. 71. What is `tsconfig.json`?

1. Definition
`tsconfig.json` is the configuration file for the TypeScript compiler (`tsc`). It specifies the root files and the compiler options.

2. Why It Exists / Problem It Solves
It allows you to customize how strict your code is, what syntax is allowed (target), and where output files go.

3. How It Works (Conceptual Explanation)
When you run `tsc`, it looks for this file. It controls "Inputs" (files) -> "Process" (compiler options) -> "Outputs" (.js files).

4. Code Example

Basic Example:
```json
{
  "compilerOptions": {
    "target": "ES6",
    "strict": true,
    "outDir": "./dist"
  },
  "include": ["src/**/*"]
}
```

5. Common Mistakes
- Not including `tsconfig.json` and wondering why VS Code Intellisense differs from `tsc` build errors.

6. Interview Follow-Ups
- Can you extend another `tsconfig`? (Yes, `"extends"` property).

7. One-Line Interview Summary
The configuration file that defines compile options and root files for a TypeScript project.

---

Q. 72. Important compiler options (`strict`, `noImplicitAny`, `strictNullChecks`)

1. Definition
`strict`: Enables all strict type checking options.
`noImplicitAny`: Raises error on implied `any`.
`strictNullChecks`: `null` and `undefined` are distinct types, not subtypes of everything.

2. Why It Exists / Problem It Solves
They are the "safety switches". `strict: true` is highly recommended for new projects to prevent common runtime errors like "cannot read property of undefined".

3. How It Works (Conceptual Explanation)
They switch logic in the compiler's checking phase. `strictNullChecks` forces you to check for nulls before using values.

4. Code Example

Basic Example:
```typescript
// strictNullChecks: true
function getLen(s: string | null) {
  // return s.length; // Error: Object is possibly 'null'
  return s ? s.length : 0;
}
```

5. Common Mistakes
- Disabling `strict` mode to save time (creates technical debt).

6. Interview Follow-Ups
- What does `skipLibCheck` do?

7. One-Line Interview Summary
Flags that control the strictness of type safety; `strict: true` is standard for modern TS development.

---

Q. 73. What is `target` in `tsconfig`?

1. Definition
`target` specifies the ECMAScript version of the *output* JavaScript code (e.g., `ES5`, `ES6`, `ES2020`).

2. Why It Exists / Problem It Solves
It determines browser compatibility. If you need to support IE11, you target `ES5`. If you target modern Node, you can use `ES2022`.

3. How It Works (Conceptual Explanation)
It tells the compiler how much "down-leveling" to do. If target is `ES5`, TS transpiles arrow functions to `function`. If `ES6`, it leaves them alone.

4. Code Example

Basic Example:
```typescript
// TS Code
const x = () => 1;

// Target: ES5 output
var x = function() { return 1; };

// Target: ES6 output
const x = () => 1;
```

5. Common Mistakes
- Confusing `target` with `lib` (which defines what *existing* features TS knows about, like `Map` or `Promise`).

6. Interview Follow-Ups
- What happens if you use a feature that cannot be polyfilled in the target? (Compiler error or runtime crash if not polyfilled manually).

7. One-Line Interview Summary
`target` sets the version of JavaScript that is generated by the compiler.

---

Q. 74. What is `moduleResolution`?

1. Definition
It's the strategy TS uses to locate imported modules. Common values are `Node` (Node.js style) or `Classic`.

2. Why It Exists / Problem It Solves
It ensures TS finds the files the same way your runtime (Node or Bundler) will find them.

3. How It Works (Conceptual Explanation)
If set to `Node`, it mimics Node.js lookup (looking in `node_modules`, checking `index.ts`, checking `package.json`).

4. Code Example

Basic Example (tsconfig):
```json
{
  "compilerOptions": {
    "moduleResolution": "node"
  }
}
```

5. Common Mistakes
- Using `Classic` in modern projects (usually breaks usage of `node_modules`).

6. Interview Follow-Ups
- How does `Bundler` resolution mode work in TS 5.0?

7. One-Line Interview Summary
Strategy used by the compiler to resolve import paths to files.

---

Q. 75. What is `paths` and `baseUrl`?

1. Definition
They are path mapping options in `tsconfig` that allow using absolute or alias imports instead of relative paths.

2. Why It Exists / Problem It Solves
Avoids `import ... from "../../../utils"`. You can just write `import ... from "@utils"`.

3. How It Works (Conceptual Explanation)
`baseUrl`: Base directory to resolve non-relative names.
`paths`: Mapping of alias patterns to locations relative to `baseUrl`.

4. Code Example

Basic Example (tsconfig):
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@components/*": ["src/components/*"]
    }
  }
}
// Import equivalent
import Button from "@components/Button";
```

5. Common Mistakes
- Forgetting to configure the *runtime* (Webpack/Vite) to also understand these aliases (TS only handles compile-time checks).

6. Interview Follow-Ups
- Do these affect the output JS file paths? (No, unless you use a transformer or bundler).

7. One-Line Interview Summary
`paths` and `baseUrl` configure import aliases for cleaner module imports.

---

## 9. TypeScript with React (Highly Asked)

Q. 76. How do you type React props?

1. Definition
React props are typically typed using an `interface` or `type` alias that defines the shape of the props object passed to the component.

2. Why It Exists / Problem It Solves
It ensures that parent components pass the correct data to children, preventing runtime errors like undefined props or wrong data types.

3. How It Works (Conceptual Explanation)
You define the interface and pass it as a generic to `FC` (Function Component) or destructure it with inline typing.

4. Code Example

Basic Example:
```typescript
interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return <button onClick={onClick}>{label}</button>;
};

// Or implicit
const Button2 = ({ label }: ButtonProps) => <button>{label}</button>;
```

5. Common Mistakes
- Typos in prop names that lead to props being ignored.
- Forgetting to make optional props optional (`?`).

6. Interview Follow-Ups
- When should you use `React.ComponentProps`?

7. One-Line Interview Summary
Props are typed via interfaces/types to enforce the data contract between parent and child components.

---

Q. 77. How do you type React state?

1. Definition
React state is typed using generics in the `useState` hook.

2. Why It Exists / Problem It Solves
It prevents setting state to an invalid value and ensures safe access when using the state variable.

3. How It Works (Conceptual Explanation)
`useState<Type>(initialValue)` strictly enforces that the state and its updates adhere to `Type`.

4. Code Example

Basic Example:
```typescript
interface User { name: string; }

// 1. Inferred (simple)
const [count, setCount] = useState(0); 

// 2. Explicit (complex or nullable)
const [user, setUser] = useState<User | null>(null);
```

5. Common Mistakes
- Not handling the `null` state initially, leading to "property does not exist on type null".

6. Interview Follow-Ups
- How to type state in Class Components?

7. One-Line Interview Summary
Type React state using the generic parameter in `useState<T>(initial)`.

---

Q. 78. Difference between `interface` and `type` for props

1. Definition
Both can be used to define props. `interface` is better for extending/merging (e.g. extending HTML attributes), while `type` is better for unions.

2. Why It Exists / Problem It Solves
It's mostly a stylistic preference or depends on extensibility needs. Library authors prefer interfaces for declaration merging.

3. How It Works (Conceptual Explanation)
Functionally identical for 99% of app components.

4. Code Example

Basic Example:
```typescript
// Interface
interface PropsA { id: string; }

// Type
type PropsB = { id: string; } & { active: boolean; };
```

5. Common Mistakes
- Spending too much time debating this (pick one and be consistent).

6. Interview Follow-Ups
- Which one handles `Record` or mapped types better? (Type).

7. One-Line Interview Summary
`interface` is preferred for public APIs/extensibility; `type` is often used for internal component props or unions.

---

Q. 79. How do you type `children`?

1. Definition
`children` can be typed as `React.ReactNode` (most common), `React.ReactElement` (strict elements), or `JSX.Element`.

2. Why It Exists / Problem It Solves
`children` is opaque. Typing it ensures you aren't passing objects where you expect rendered UI.

3. How It Works (Conceptual Explanation)
`ReactNode` covers everything (strings, numbers, fragments, elements, null).

4. Code Example

Basic Example:
```typescript
interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => <div>{children}</div>;
```

5. Common Mistakes
- Using `React.FC` just to get implicit `children` (this was removed in React 18 types; you must now explicit type `children`).

6. Interview Follow-Ups
- Difference between `ReactNode` and `ReactElement`?

7. One-Line Interview Summary
Use `React.ReactNode` for `children` as it accepts all valid renderable React content.

---

Q. 80. How do you type event handlers?

1. Definition
React provides generic event types like `React.ChangeEvent<T>` or `React.FormEvent<T>`.

2. Why It Exists / Problem It Solves
It gives you autocomplete on `event.target`, ensuring you don't access non-existent properties (e.g., trying to read `value` from a div).

3. How It Works (Conceptual Explanation)
You pass the DOM element type to the generic: `ChangeEvent<HTMLInputElement>`.

4. Code Example

Basic Example:
```typescript
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  console.log(e.target.value); // TS knows value exists
};

return <input onChange={handleChange} />;
```

5. Common Mistakes
- Using implicit `any` for events (`e: any`).
- Confusing `React.ChangeEvent` with the native DOM `Event`.

6. Interview Follow-Ups
- How to type a generic `onClick` that works on both buttons and divs?

7. One-Line Interview Summary
Use React's built-in event types with generics, e.g., `React.ChangeEvent<HTMLInputElement>`.

---

Q. 81. How do you type `useState`?

(Covered in Q77, asking specifically about complex cases here)

1. Definition
Use the generic `<T>` to define the shape. If initial state is different (e.g., null), use a Union.

2. Why It Exists / Problem It Solves
To handle async loading states where data starts as undefined/null.

3. How It Works (Conceptual Explanation)
`useState<User | null>(null)` tells TS that valid states are either a User object or null.

4. Code Example

Basic Example:
```typescript
const [tags, setTags] = useState<string[]>([]);
```

5. Common Mistakes
- `useState({})` (inferred as empty object `{}`, so you can't add properties later).

6. Interview Follow-Ups
- How to infer type from initial value?

7. One-Line Interview Summary
Pass the type argument explicitly `useState<Type>(...)` whenever the initial value doesn't fully represent the future state.

---

Q. 82. How do you type `useRef`?

1. Definition
`useRef` takes a generic for the element type. IMPORTANT: Initialize with `null` if accessing DOM.

2. Why It Exists / Problem It Solves
Accessing DOM nodes requires strict typing to call methods like `.focus()`.

3. How It Works (Conceptual Explanation)
`useRef<HTMLInputElement>(null)` returns a MutableRefObject where `current` is `HTMLInputElement | null`.

4. Code Example

Basic Example:
```typescript
const inputRef = useRef<HTMLInputElement>(null);

const focus = () => {
    // strict null check needed
    inputRef.current?.focus(); 
};
```

5. Common Mistakes
- Forgetting the initial `null` (TypeScript might infer it as `undefined` or complain about read-only refs).

6. Interview Follow-Ups
- Difference between `useRef<T>(val)` and `useRef<T | null>(null)`?

7. One-Line Interview Summary
Use `useRef<HTMLElement>(null)` for DOM references to access specific element methods safely.

---

Q. 83. How do you type `useReducer`?

1. Definition
You need to type the `State` and the `Action` (usually a discriminated union).

2. Why It Exists / Problem It Solves
Reducers have complex logic. Typing actions ensures you can't dispatch unknown actions or payloads.

3. How It Works (Conceptual Explanation)
The reducer function signature is `(state: State, action: Action) => State`.

4. Code Example

Basic Example:
```typescript
type State = { count: number };
type Action = 
  | { type: 'increment' } 
  | { type: 'decrement' }
  | { type: 'set'; payload: number };

function reducer(state: State, action: Action): State {
    switch (action.type) {
        case 'set': return { count: action.payload }; // safe access
        default: return state;
    }
}
```

5. Common Mistakes
- Missing return types on the reducer.

6. Interview Follow-Ups
- How to use `Reduxtoolkit` to simplify this?

7. One-Line Interview Summary
Define a `State` interface and a Discriminated Union `Action` type for strict reducer safety.

---

Q. 84. How do you type custom hooks?

1. Definition
Custom hooks are just functions. You type arguments and specifically type the return value, often as a tuple (like useState) or object.

2. Why It Exists / Problem It Solves
It ensures consumers of the hook get correct types.

3. How It Works (Conceptual Explanation)
If returning an array (tuple), use `const` assertion or explicit tuple return type to prevent it broadening to `(string | number)[]`.

4. Code Example

Basic Example:
```typescript
function useToggle(initial: boolean = false): [boolean, () => void] {
  const [state, setState] = useState(initial);
  const toggle = () => setState(d => !d);
  return [state, toggle];
}
```

5. Common Mistakes
- Letting TS infer the return of `[state, setState]` as `(boolean | Function)[]` (mixed array) instead of a fixed tuple.

6. Interview Follow-Ups
- How to genericize a custom hook (e.g., `useFetch<T>`)?

7. One-Line Interview Summary
Type the parameters and explicitly return a Tuple or Object type to preserve strictness for the consumer.

---

Q. 85. How do you type Higher Order Components (HOC)?

1. Definition
HOCs are functions that take a component and return a new component. Typing involves Generics to pass through props.

2. Why It Exists / Problem It Solves
To ensure the wrapped component receives its required props, and the returned component exposes the correct combined props.

3. How It Works (Conceptual Explanation)
It injects props. The resulting component's props = `OriginalProps - InjectedProps`.

4. Code Example

Basic Example:
```typescript
// Simple HOC adding a 'className'
function withBorder<P extends object>(Component: React.ComponentType<P>) {
  return (props: P) => (
    <div style={{ border: "1px solid red" }}>
      <Component {...props} />
    </div>
  );
}
```

5. Common Mistakes
- Losing the types of the original component (using `any`).
- Complexity hell (Hooks are preferred over HOCs now primarily because HOC typing is hard).

6. Interview Follow-Ups
- Why are hooks preferred over HOCs?

7. One-Line Interview Summary
HOC typing uses Generics `<P>` to wrap a component while preserving or modifying its prop definitions.

---

## 10. Error Handling & Edge Cases (Interview Favorite)

Q. 86. How does TypeScript handle runtime errors?

1. Definition
TypeScript DOES NOT handle runtime errors. It is a static analysis tool that produces standard JavaScript.

2. Why It Exists / Problem It Solves
It aims to prevent errors *before* they happen. If an error occurs at runtime (e.g. network failure), standard JS error handling (try/catch) applies.

3. How It Works (Conceptual Explanation)
TS compiles to JS. The JS engine executes and throws errors. TS is long gone by then.

4. Code Example

Basic Example:
```typescript
const val: any = "hello";
// TS allows this because of 'any', but it crashes at runtime
// val.toFixed(); // TypeError: val.toFixed is not a function
```

5. Common Mistakes
- Expecting TS to catch IO errors or validation errors from external API data at runtime (it can't, use schema validation like Zod).

6. Interview Follow-Ups
- Can TS predict `IndexOutOfBounds`? (Partially, with `noUncheckedIndexedAccess`).

7. One-Line Interview Summary
TypeScript checks types at compile time but has no presence or effect on runtime error handling.

---

Q. 87. What is the difference between compile-time and runtime errors?

1. Definition
Compile-time errors are raised by the TS compiler before code runs (e.g., type mismatch). Runtime errors happen while the application is executing (e.g., undefined variable access).

2. Why It Exists / Problem It Solves
Distinction is crucial. Detailed compile-time errors prevent catastrophic runtime errors.

3. How It Works (Conceptual Explanation)
Compile-time: Red squiggly lines in IDE. Runtime: App crashes / white screen.

4. Code Example

Basic Example:
```typescript
// Compile-time Error
const x: string = 123; // Error: Type 'number' is not assignable to 'string'

// Runtime Error
const arr = [1];
console.log(arr[5].toString()); // Crash: Cannot read properties of undefined
```

5. Common Mistakes
- Thinking TS catches all runtime errors (it doesn't catch logical errors or external data mismatches).

6. Interview Follow-Ups
- Give an example of an error TS cannot catch.

7. One-Line Interview Summary
Compile-time errors prevent build; Runtime errors crash the app.

---

Q. 88. How to type `try-catch` block?

1. Definition
In TypeScript, the error object in a `catch(error)` block is of type `unknown` or `any` (default `any`, strict `unknown` available).

2. Why It Exists / Problem It Solves
You don't know what will be thrown (it could be an Error object, a string, or even null). You must narrow it.

3. How It Works (Conceptual Explanation)
You cannot annotate the catch clause variable (e.g., `catch(e: Error)` is illegal). You must use `unknown` and check types.

4. Code Example

Basic Example:
```typescript
try {
  throw new Error("Failure");
} catch (error: unknown) {
  if (error instanceof Error) {
    console.log(error.message); // Safe
  } else {
    console.log("Unknown error", error);
  }
}
```

5. Common Mistakes
- Assuming `error` is always an `Error` object (JavaScript allows `throw "oops"`).

6. Interview Follow-Ups
- Why can't we type the catch variable directly? (Because JS allows throwing anything).

7. One-Line Interview Summary
The error variable in `catch` is `unknown` or `any`; you must perform type checks (guarding) to safely access properties like `.message`.

---

Q. 89. What is `never` used for in error handling?

1. Definition
`never` is the return type of a function that *always* throws an error and never returns to the caller.

2. Why It Exists / Problem It Solves
It signals to the control flow analyzer that code execution ends here (or the process crashes).

3. How It Works (Conceptual Explanation)
`function fail(): never { throw new Error(); }`.

4. Code Example

Basic Example:
```typescript
function fail(msg: string): never {
  throw new Error(msg);
}

function process(x: string | null) {
  if (x === null) {
      fail("X cannot be null");
  }
  // TS knows x is string here because fail() returns never
  console.log(x.toUpperCase());
}
```

5. Common Mistakes
- Confusing `void` (returns normally with undefined) with `never` (aborts execution).

6. Interview Follow-Ups
- How does `asserts` keyword relate to this?

7. One-Line Interview Summary
`never` signals that a function will stop execution (throw), allowing TS to know code unreachable after it.

---

Q. 90. How do you enforce strict null checks?

1. Definition
`strictNullChecks` is a compiler option in `tsconfig.json`. When true, `null` and `undefined` are not subtypes of every other type.

2. Why It Exists / Problem It Solves
"The Billion Dollar Mistake". It forces you to explicitly handle cases where values might be missing.

3. How It Works (Conceptual Explanation)
If `strictNullChecks: true`, `let x: string = null` is an error. You must say `let x: string | null`.

4. Code Example

Basic Example:
```typescript
// strictNullChecks: on
let name: string = "Alice";
// name = null; // Error

let maybeName: string | null = "Alice";
maybeName = null; // OK
```

5. Common Mistakes
- Turning it on in a large legacy codebase without preparation (causes thousands of errors).

6. Interview Follow-Ups
- How does the `!` (non-null assertion operator) help here?

7. One-Line Interview Summary
`strictNullChecks` config option prevents assigning `null`/`undefined` to variables unless their type explicitly includes it.

---

## 11. Performance & Best Practices

Q. 91. Does TypeScript affect runtime performance?

1. Definition
No, TypeScript itself has ZERO impact on runtime performance.

2. Why It Exists / Problem It Solves
TS is a build-time tool. It "disappears" completely after compilation.

3. How It Works (Conceptual Explanation)
The browser or Node.js only ever sees the JavaScript output. If the JS output is inefficient (e.g. using older target ES5), that affects performance, but types do not.

4. Code Example

Basic Example:
```typescript
const x: number = 10;
// Compiles to: const x = 10; (Exactly the same runtime speed)
```

5. Common Mistakes
- Thinking that complex types slow down the app (they slow down the *IDE* and *build*, but not the app).

6. Interview Follow-Ups
- Can `enums` affect bundle size? (Yes, they generate code).

7. One-Line Interview Summary
No, TypeScript types are erased during compilation, so they do not exist at runtime to slow it down.

---

Q. 92. How does TypeScript help in refactoring?

1. Definition
TypeScript makes refactoring safer and faster by identifying all usages of a symbol across the entire codebase.

2. Why It Exists / Problem It Solves
In JS, renaming a function means "Find and Replace" text globally, which is risky. In TS, the compiler knows exactly which `user.id` refers to `User Interface`.

3. How It Works (Conceptual Explanation)
The IDE uses the Type Graph into perform semantic renames rather than string replacements.

4. Code Example

Real-World Example (Refactoring):
```typescript
interface User { id: number; fullName: string; }
// Changing 'fullName' to 'name'
// TS immediately highlights every file where 'user.fullName' is accessed with a red error.
```

5. Common Mistakes
- Not relying on the compiler errors to guide the refactor (ignoring errors).

6. Interview Follow-Ups
- How does `keyof` help in refactoring?

7. One-Line Interview Summary
TypeScript allows you to rename symbols and change structures with confidence, as the compiler flags every broken reference immediately.

---

Q. 93. Best practices for using TypeScript in large projects

1. Definition
Strictness, Consistency, and Modularity.

2. Why It Exists / Problem It Solves
To keep build times fast and code maintainable as the team grows.

3. How It Works (Conceptual Explanation)
- Enable `"strict": true`.
- Avoid `any`.
- Prefer `interface` for public APIs.
- Use explicit return types for exported functions.
- Use `Project References` for monorepos (performance).

4. Code Example

Basic Example (tsconfig):
```json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true
  }
}
```

5. Common Mistakes
- Using `any` everywhere (creating "Anyscript").
- Not defining return types (slows down the compiler's inference work).

6. Interview Follow-Ups
- Why are explicit return types recommended for speed?

7. One-Line Interview Summary
Use strict mode, avoid `any`, explicitly type module boundaries, and use consistent linting rules.

---

Q. 94. Common mistakes in TypeScript

1. Definition
Common pitfalls include overusing `any`, ignoring compiler errors, and using complex types where simple ones suffice.

2. Why It Exists / Problem It Solves
Learning curve issues or "fighting the compiler".

3. How It Works (Conceptual Explanation)
- Using `Function` type (unsafe) instead of `() => void`.
- Using `Object` type (broad).
- `!` (Non-null assertion) overuse.

4. Code Example

Basic Example (Bad Practice):
```typescript
function doSomething(cb: Function) { // Unsafe
  cb(); 
}
// Better
function doSomething(cb: () => void) { ... }
```

5. Common Mistakes
- Not checking for `null` when `strictNullChecks` is off.

6. Interview Follow-Ups
- What is wrong with the `Number` type (capital N)? (It wraps the primitive, rarely what you want).

7. One-Line Interview Summary
Overusing `any`, using unsafe broad types (`Function`, `Object`), and using `as` assertions to silence legitimate errors.

---

Q. 95. When should you avoid TypeScript?

1. Definition
TypeScript might be overkill for very small scripts, quick prototypes, or learning projects where setup time outweighs benefits.

2. Why It Exists / Problem It Solves
TS adds tooling overhead (tsconfig, build step).

3. How It Works (Conceptual Explanation)
If you just want to write 10 lines of code to test a regex, a simple `.js` file or browser console is faster.

4. Code Example

Scenario:
- "I need to write a one-off migration script to rename 5 files." -> Use JS.
- "I am building a production banking app." -> Use TS.

5. Common Mistakes
- Avoiding TS in large teams (huge tech debt risk).

6. Interview Follow-Ups
- Can you mix JS and TS? (Yes, `allowJs: true`).

7. One-Line Interview Summary
Avoid TypeScript for tiny scripts, throwaway prototypes, or when the team strictly lacks TS knowledge and training time.

---

## 12. Tricky & Real-World Questions (Often Asked)

Q. 96. Why does `[]` infer as `never[]`?

1. Definition
When you define `const arr = []` with strict`noImplicitAny`, TypeScript initially doesn't know what will go into it. It infers `never[]` to prevent unsafe additions until context is provided.

2. Why It Exists / Problem It Solves
It's a safety against "evolving types" that might lead to `any`.

3. How It Works (Conceptual Explanation)
`never` is the bottom type. You can't push anything into `never[]`.

4. Code Example

Basic Example:
```typescript
const arr = []; // never[]
// arr.push(1); // Error: Argument of type 'number' is not assignable to parameter of type 'never'.

// Fix:
const arrFixed: number[] = [];
```

5. Common Mistakes
- Leaving it as default and getting confusing "never" errors later.

6. Interview Follow-Ups
- How does `noImplicitAny` affect this?

7. One-Line Interview Summary
`[]` is inferred as `never[]` to prevent you from adding inconsistent types to an untyped array.

---

Q. 97. Why does `Object.keys()` return `string[]`?

1. Definition
`Object.keys(obj)` returns `string[]`, NOT `(keyof typeof obj)[]`.

2. Why It Exists / Problem It Solves
Because in JavaScript, objects are open. An object can have more keys at runtime than what is defined in its static type (due to structural typing, extra props are allowed).

3. How It Works (Conceptual Explanation)
If TS returned `keyof T`, it would imply "These are the ONLY keys", which is false. Using `string[]` forces you to validate the key before accessing the object.

4. Code Example

Basic Example:
```typescript
interface User { id: number; }
const u: User = { id: 1 };
// Runtime usage might add u.name via extensive libraries

Object.keys(u).forEach(key => {
  // console.log(u[key]); // Error: Implicit any because key is string, not 'id'
});
```

5. Common Mistakes
- Casting it unsafely: `(Object.keys(u) as (keyof User)[])`. (Common but technically unsafe).

6. Interview Follow-Ups
- How to write a typed helper for `Object.keys`?

7. One-Line Interview Summary
It returns `string[]` because objects in JS may contain extra properties not visible in the Type definition.

---

Q. 98. Why is `any` contagious?

1. Definition
If any part of an expression is `any`, the result usually becomes `any`.

2. Why It Exists / Problem It Solves
It ensures that once you opt-out of checking, you stay opted-out to avoid false positives.

3. How It Works (Conceptual Explanation)
`any + number = any`. `function(any) = any`. It propagates up the AST.

4. Code Example

Basic Example:
```typescript
function getData(): any { return 5; }
const data = getData(); // any
const result = data.foo.bar.baz(); // any (no error, but dangerous)
```

5. Common Mistakes
- Using one `any` casting which silently effectively turns off checking for the rest of the file/function logic.

6. Interview Follow-Ups
- Does `unknown` spread like `any`? (No, `unknown` forces checking).

7. One-Line Interview Summary
`any` turns off type checking for any expression it touches, propagating the lack of safety.

---

Q. 99. How to type dynamic object keys?

1. Definition
Use an **Index Signature**.

2. Why It Exists / Problem It Solves
For objects used as lookup maps/dictionaries or handling unstructured JSON.

3. How It Works (Conceptual Explanation)
`{ [key: string]: ValueType }`.

4. Code Example

Basic Example:
```typescript
interface Styles {
  [className: string]: string;
}

const styles: Styles = {
  header: "red",
  footer: "blue"
};
```

5. Common Mistakes
- Trying to access properties with dot notation `.prop` knowing strict null checks might flag it if not careful with the return type (usually safe for string values).

6. Interview Follow-Ups
- Can you limit the keys in an index signature? (Use `Record<Union, Val>`).

7. One-Line Interview Summary
Use an index signature `[key: string]: Type` to define objects with arbitrary keys.

---

Q. 100. How to migrate a JavaScript project to TypeScript?

1. Definition
The process involves enabling `allowJs`, iteratively renaming `.js` to `.ts`, and fixing errors.

2. Why It Exists / Problem It Solves
To gradually add type safety to legacy codebases without rewriting everything at once.

3. How It Works (Conceptual Explanation)
Step 1: Add `tsconfig.json` with `allowJs: true`.
Step 2: Rename one file `utils.js` -> `utils.ts`.
Step 3: Fix `any` errors.
Step 4: Repeat.

4. Code Example

Strategy:
- Use `any` strictly for things you can't fix yet.
- Focus on leaf nodes (utils) first, then core logic.

5. Common Mistakes
- Turning on `strict: true` immediately (overwhelming).
- Renaming all files at once (compile hell).

6. Interview Follow-Ups
- What is the `checkJs` option?

7. One-Line Interview Summary
Migrate incrementally: Enable `allowJs`, rename files one by one to `.ts`, and resolve type errors gradually.
