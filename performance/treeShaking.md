# Tree Shaking Explained

Tree shaking is a **dead code elimination technique** used in modern JavaScript bundlers to remove unused code from your final bundle. The term comes from the idea of shaking a tree to make the dead leaves fall off.

## How It Works

Tree shaking relies on the **static structure** of ES6 module syntax (`import` and `export`). Unlike CommonJS (`require`), ES6 modules can be analyzed at build time to determine what's actually being used.

### The Process

1. **Static Analysis**: The bundler analyzes your code's import/export statements
2. **Dependency Graph**: It builds a graph of which modules and exports are actually used
3. **Mark & Sweep**: Marks used code and sweeps away (removes) unused code
4. **Bundle Generation**: Only the marked code makes it into the final bundle

## Example

```javascript
// utils.js
export function add(a, b) { return a + b; }
export function subtract(a, b) { return a - b; }
export function multiply(a, b) { return a * b; }
```

```javascript
// main.js
import { add } from './utils.js';
console.log(add(2, 3));
```

With tree shaking, only the `add` function gets included in your final bundle. The `subtract` and `multiply` functions are shaken out because they're never imported or used.

## Requirements for Effective Tree Shaking

**ES6 Modules**: You must use `import`/`export`, not `require`/`module.exports`. CommonJS is dynamic and can't be statically analyzed.

**Side-Effect-Free Code**: The bundler needs to know which modules are safe to remove. You can mark modules as side-effect-free in your `package.json`:

```json
{
  "sideEffects": false
}
```

Or specify which files have side effects:

```json
{
  "sideEffects": ["*.css", "src/polyfills.js"]
}
```

**Production Mode**: Most bundlers only tree shake in production builds.

## Common Pitfalls

**Default Exports**: Sometimes harder to tree shake effectively, especially with objects. Named exports work better:

```javascript
// Less optimal for tree shaking
export default { add, subtract, multiply };

// Better for tree shaking
export { add, subtract, multiply };
```

**Class Methods**: Unused methods on classes that are instantiated often can't be removed since the bundler can't be sure they won't be called dynamically.

**Babel Transpilation**: If Babel transforms your ES6 modules to CommonJS before the bundler sees them, tree shaking won't work. Configure Babel to preserve ES6 modules:

```json
{
  "presets": [
    ["@babel/preset-env", { "modules": false }]
  ]
}
```

**Side Effects**: Code with side effects (modifying globals, DOM manipulation on import) can't be removed even if unused, unless explicitly marked as side-effect-free.

## Popular Tools

- **Webpack** (with optimization enabled)
- **Rollup** (pioneered tree shaking)
- **Parcel**
- **Vite**
- **esbuild**

## Real-World Impact

Tree shaking can dramatically reduce bundle sizes. For example, if you're using Lodash:

```javascript
// Entire Lodash library (~70KB)
import _ from 'lodash';
_.debounce(fn, 100);

// Only the debounce function (~2KB)
import { debounce } from 'lodash-es';
debounce(fn, 100);
```

The second approach, combined with tree shaking, results in a much smaller bundle because only the `debounce` function and its dependencies are included.