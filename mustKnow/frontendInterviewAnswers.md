# Frontend Interview Questions and Answers

## Table of Contents
- [Frontend Interview Questions and Answers](#frontend-interview-questions-and-answers)
  - [Table of Contents](#table-of-contents)
  - [HTML/CSS/JavaScript](#htmlcssjavascript)
    - [HTML Questions](#html-questions)
    - [CSS Questions](#css-questions)
    - [JavaScript Questions](#javascript-questions)
  - [React.js](#reactjs)
  - [TypeScript](#typescript)
  - [Redux](#redux)
  - [Ant Design](#ant-design)
  - [Vue.js](#vuejs)
  - [Angular](#angular)
  - [Data Structures and Algorithms](#data-structures-and-algorithms)
  - [Frontend Testing](#frontend-testing)
  - [Frontend System Design](#frontend-system-design)
  - [Web Fundamentals](#web-fundamentals)
  - [Build Tools \& Performance](#build-tools--performance)
  - [Security \& Deployment](#security--deployment)

## HTML/CSS/JavaScript

### HTML Questions

1. **Difference between `<div>` and `<span>`**:
   - `<div>` is a block-level element that creates a new line and takes full width
   - `<span>` is an inline element that only takes up as much width as necessary
   - `<div>` is typically used for larger content blocks, while `<span>` is for smaller text elements

2. **Semantic HTML elements**:
   - Elements that clearly describe their meaning to both browser and developer
   - Examples: `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`
   - Benefits: Better accessibility, SEO, and code readability

3. **Creating a table in HTML**:
```html
<table>
  <thead>
    <tr>
      <th>Header 1</th>
      <th>Header 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Data 1</td>
      <td>Data 2</td>
    </tr>
  </tbody>
</table>
```

4. **Purpose of `<head>` element**:
   - Contains metadata about the document
   - Includes title, character set, styles, scripts, and other meta information
   - Not visible to users but essential for browser rendering

5. **Including external CSS files**:
```html
<link rel="stylesheet" href="styles.css">
```

6. **Role of `<meta>` tag**:
   - Provides metadata about the HTML document
   - Common uses: character set, viewport settings, description, keywords
   - Example: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`

7. **Block-level vs Inline elements**:
   - Block-level: Start on new line, take full width (e.g., `<div>`, `<p>`, `<h1>`)
   - Inline: Don't start new line, take only necessary width (e.g., `<span>`, `<a>`, `<img>`)

8. **Purpose of `<link>` tag**:
   - Links external resources to the document
   - Common uses: stylesheets, icons, fonts
   - Example: `<link rel="stylesheet" href="styles.css">`

9. **Creating unordered list**:
```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
```

10. **Purpose of `<iframe>`**:
    - Embeds another HTML page within current page
    - Used for videos, maps, external content
    - Example: `<iframe src="https://www.youtube.com/embed/..."></iframe>`

### CSS Questions

1. **Box Model**:
   - Content: Actual content area
   - Padding: Space between content and border
   - Border: Line around padding
   - Margin: Space outside border
   - Total width = content + padding + border + margin

2. **Ways to apply CSS**:
   - Inline: `<div style="color: red;">`
   - Internal: `<style>` tag in `<head>`
   - External: `<link rel="stylesheet" href="style.css">`
   - Import: `@import url('style.css');`

3. **Margin vs Padding**:
   - Margin: Space outside element
   - Padding: Space inside element
   - Margin can be negative, padding cannot
   - Margin collapses, padding doesn't

4. **Centering elements**:
```css
/* Horizontal centering */
.element {
  margin: 0 auto;
}

/* Vertical and horizontal centering */
.element {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

5. **Positioning in CSS**:
   - `static`: Default positioning
   - `relative`: Positioned relative to normal position
   - `absolute`: Positioned relative to nearest positioned ancestor
   - `fixed`: Positioned relative to viewport
   - `sticky`: Hybrid of relative and fixed

### JavaScript Questions

1. **var, let, const**:
   - `var`: Function-scoped, hoisted
   - `let`: Block-scoped, not hoisted
   - `const`: Block-scoped, cannot be reassigned
   - Best practice: Use `const` by default, `let` when needed, avoid `var`

2. **Hoisting**:
   - Variables and function declarations are moved to top
   - Only declarations are hoisted, not initializations
   - `let` and `const` are hoisted but not initialized

3. **this keyword**:
   - Refers to the object that is executing the current function
   - In global scope: refers to window object
   - In method: refers to object containing method
   - In event handler: refers to element that received event

4. **Functions**:
```javascript
// Function declaration
function add(a, b) {
  return a + b;
}

// Function expression
const add = function(a, b) {
  return a + b;
};

// Arrow function
const add = (a, b) => a + b;
```

5. **Closures**:
   - Function that has access to variables from outer scope
   - Maintains state between function calls
   - Example:
```javascript
function counter() {
  let count = 0;
  return function() {
    return ++count;
  };
}
```

## React.js

1. **Functional vs Class Components**:
   - Functional: Simpler, use hooks, better performance
   - Class: More complex, use lifecycle methods
   - Modern React prefers functional components

2. **JSX**:
   - JavaScript XML
   - Syntax extension for JavaScript
   - Allows writing HTML-like code in JavaScript
   - Gets compiled to React.createElement() calls

3. **Virtual DOM**:
   - Lightweight copy of real DOM
   - React compares virtual DOM with real DOM
   - Only updates what's necessary
   - Improves performance

4. **useState and useEffect**:
```javascript
// useState
const [count, setCount] = useState(0);

// useEffect
useEffect(() => {
  // Side effect code
  return () => {
    // Cleanup code
  };
}, [dependencies]);
```

5. **Performance Optimization**:
   - Use React.memo for component memoization
   - Use useMemo for expensive calculations
   - Use useCallback for function memoization
   - Implement shouldComponentUpdate in class components

## TypeScript

1. **Purpose of TypeScript**:
   - Adds static typing to JavaScript
   - Catches errors at compile time
   - Improves code maintainability
   - Better IDE support

2. **any vs unknown vs never**:
   - `any`: No type checking
   - `unknown`: Type-safe alternative to any
   - `never`: Represents values that never occur

3. **Interfaces vs Types**:
   - Interfaces: Can be extended, merged
   - Types: More flexible, can use unions
   - Both define object shapes

4. **Function Signatures**:
```typescript
function add(x: number, y: number): number {
  return x + y;
}

const multiply = (x: number, y: number): number => x * y;
```

5. **Generics**:
```typescript
function identity<T>(arg: T): T {
  return arg;
}
```

## Redux

1. **Core Principles**:
   - Single source of truth
   - State is read-only
   - Changes made with pure functions

2. **Store**:
   - Holds application state
   - Created using createStore
   - Accessed using getState()

3. **Actions**:
   - Plain JavaScript objects
   - Must have type property
   - Can have payload

4. **Reducers**:
   - Pure functions
   - Take current state and action
   - Return new state

5. **Middleware**:
   - Extends Redux functionality
   - Common: redux-thunk, redux-saga
   - Handles async actions

## Ant Design

1. **Layout System**:
   - Grid system with Row and Col
   - Responsive design
   - 24-column grid

2. **Components**:
   - Form
   - Table
   - Modal
   - Menu
   - Button

3. **Theming**:
   - Customizable through ConfigProvider
   - Supports dark mode
   - Can override default styles

4. **Form Handling**:
   - Controlled components
   - Validation
   - Dynamic fields

5. **Data Display**:
   - Table with sorting
   - Pagination
   - Filtering

## Vue.js

1. **Key Features**:
   - Reactive data binding
   - Component-based architecture
   - Virtual DOM
   - Single-file components

2. **Vue Instance**:
```javascript
new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})
```

3. **Components**:
```vue
<template>
  <div>{{ message }}</div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello'
    }
  }
}
</script>
```

4. **v-bind vs v-model**:
   - v-bind: One-way binding
   - v-model: Two-way binding

5. **Computed Properties**:
```javascript
computed: {
  fullName() {
    return this.firstName + ' ' + this.lastName
  }
}
```

## Angular

1. **Key Features**:
   - TypeScript-based
   - Dependency injection
   - Two-way data binding
   - Component-based architecture

2. **Components**:
```typescript
@Component({
  selector: 'app-root',
  template: '<h1>{{title}}</h1>'
})
export class AppComponent {
  title = 'My App';
}
```

3. **Services**:
```typescript
@Injectable({
  providedIn: 'root'
})
export class DataService {
  getData() {
    return this.http.get('/api/data');
  }
}
```

4. **Modules**:
```typescript
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

5. **Routing**:
```typescript
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent }
];
```

## Data Structures and Algorithms

1. **Arrays**:
   - Linear data structure
   - Fixed or dynamic size
   - Random access
   - Common operations: push, pop, shift, unshift

2. **Linked Lists**:
   - Linear data structure
   - Dynamic size
   - No random access
   - Common operations: insert, delete, traverse

3. **Stacks**:
   - LIFO (Last In First Out)
   - Operations: push, pop, peek
   - Used for: function calls, undo operations

4. **Queues**:
   - FIFO (First In First Out)
   - Operations: enqueue, dequeue, peek
   - Used for: task scheduling, message queues

5. **Trees**:
   - Hierarchical data structure
   - Common types: binary, binary search, AVL
   - Operations: insert, delete, search

## Frontend Testing

1. **Types of Testing**:
   - Unit testing
   - Integration testing
   - End-to-end testing
   - Visual regression testing

2. **Testing Tools**:
   - Jest
   - React Testing Library
   - Cypress
   - Playwright

3. **Test Structure**:
```javascript
describe('Component', () => {
  it('should render correctly', () => {
    // Test code
  });
});
```

4. **Mocking**:
```javascript
jest.mock('./api', () => ({
  fetchData: () => Promise.resolve({ data: 'test' })
}));
```

5. **Assertions**:
```javascript
expect(element).toBeInTheDocument();
expect(element).toHaveTextContent('Hello');
```

## Frontend System Design

1. **Component Architecture**:
   - Presentational vs Container components
   - Component composition
   - Props vs State
   - Context API

2. **State Management**:
   - Local state
   - Global state
   - Redux/Context API
   - State normalization

3. **Performance Optimization**:
   - Code splitting
   - Lazy loading
   - Memoization
   - Virtualization

4. **Error Handling**:
   - Error boundaries
   - Global error handling
   - Error logging
   - Fallback UI

5. **Security**:
   - XSS prevention
   - CSRF protection
   - Input validation
   - Secure authentication

## Web Fundamentals

1. **HTTP/HTTPS**:
   - HTTP: Unencrypted
   - HTTPS: Encrypted
   - SSL/TLS certificates
   - Port 80 vs 443

2. **Browser Rendering**:
   - DOM construction
   - CSSOM construction
   - Render tree
   - Layout and paint

3. **Caching**:
   - Browser cache
   - Service workers
   - CDN
   - Cache headers

4. **Security**:
   - Same-origin policy
   - CORS
   - Content Security Policy
   - XSS/CSRF prevention

5. **Performance**:
   - Critical rendering path
   - Resource optimization
   - Lazy loading
   - Code splitting

## Build Tools & Performance

1. **Webpack**:
   - Module bundler
   - Loaders and plugins
   - Code splitting
   - Tree shaking

2. **Babel**:
   - JavaScript compiler
   - Polyfills
   - Presets
   - Plugins

3. **Performance Metrics**:
   - First Contentful Paint
   - Time to Interactive
   - Largest Contentful Paint
   - Cumulative Layout Shift

4. **Optimization Techniques**:
   - Minification
   - Compression
   - Image optimization
   - Caching strategies

5. **Monitoring**:
   - Error tracking
   - Performance monitoring
   - User analytics
   - Real User Monitoring

## Security & Deployment

1. **Security Best Practices**:
   - Input validation
   - Output encoding
   - Authentication
   - Authorization

2. **Deployment Strategies**:
   - Continuous Integration
   - Continuous Deployment
   - Blue-green deployment
   - Canary releases

3. **Environment Configuration**:
   - Development
   - Staging
   - Production
   - Environment variables

4. **Monitoring**:
   - Error tracking
   - Performance monitoring
   - Logging
   - Alerting

5. **Backup & Recovery**:
   - Data backup
   - Disaster recovery
   - Rollback procedures
   - High availability 