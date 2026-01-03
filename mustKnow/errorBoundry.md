Below is a **deep, interview-grade breakdown** of **React Error Boundaries**, covering **what**, **why**, **how**, **internals**, **limitations**, and **real-world usage patterns**.

---

# 3.2 Error Boundaries (Critical Concept)

## 1. What Is an Error Boundary?

An **Error Boundary** is a **special React component** that catches **JavaScript errors during rendering**, in **lifecycle methods**, and in **constructors** of its **child component tree**, and renders a **fallback UI** instead of crashing the entire application.

**In short:**
It prevents the *“White Screen of Death”* in production.

---

## 2. Why Error Boundaries Exist

Before Error Boundaries:

* A single rendering error could crash the **entire React app**
* Users would see a blank screen
* No controlled recovery or logging

Error Boundaries solve this by:

* Isolating failures
* Allowing partial UI recovery
* Enabling structured error logging

---

## 3. What Errors Do Error Boundaries Catch?

### Caught

* Errors during:

  * `render()`
  * `constructor()`
  * Lifecycle methods (`componentDidMount`, `componentDidUpdate`)
* Errors in **child components**

### Not Caught (Very Important)

Error Boundaries **do NOT catch**:

1. Errors inside **event handlers**
2. Errors in **async code** (`setTimeout`, `Promise`, `async/await`)
3. Errors in **server-side rendering**
4. Errors inside the Error Boundary itself

These must be handled using `try–catch`.

---

## 4. How Error Boundaries Work Internally

When a child component throws an error during render:

1. React stops rendering that subtree
2. React looks for the **nearest Error Boundary up the tree**
3. React:

   * Calls `getDerivedStateFromError`
   * Triggers a re-render
   * Shows fallback UI
4. Calls `componentDidCatch` for logging

React **unmounts the broken subtree**, preserving app stability.

---

## 5. Creating an Error Boundary (Production-Ready)

### Class Component (Only Supported Way)

```tsx
import React, { ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    // Send error to monitoring service
    logError(error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong.</h2>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
```

### Why Class Component?

* Hooks **cannot** catch render-phase errors
* Error boundaries rely on lifecycle methods

---

## 6. Using Error Boundaries Strategically

### 6.1 Application-Level Boundary

```tsx
<ErrorBoundary>
  <App />
</ErrorBoundary>
```

Use case:

* Prevents full app crash
* Last line of defense

---

### 6.2 Feature-Level Boundary (Recommended)

```tsx
<ErrorBoundary>
  <UserDashboard />
</ErrorBoundary>
```

Use case:

* Only that feature fails
* Rest of app remains usable

---

### 6.3 Component-Level Boundary (Rare)

Used for:

* Risky components
* Third-party libraries
* Dynamic rendering

---

## 7. Resetting Error Boundaries (Advanced)

Error Boundaries **do not auto-recover**.

### Pattern: Reset on Route Change

```tsx
componentDidUpdate(prevProps: Props) {
  if (this.props.location !== prevProps.location) {
    this.setState({ hasError: false });
  }
}
```

Or using a **key prop**:

```tsx
<ErrorBoundary key={routePath}>
  <Page />
</ErrorBoundary>
```

Changing the `key` forces remount.

---

## 8. Error Boundaries vs try–catch

| Scenario              | Use                     |
| --------------------- | ----------------------- |
| Render crash          | Error Boundary          |
| Event handler         | try–catch               |
| API calls             | try–catch / interceptor |
| Async code            | try–catch               |
| Component tree safety | Error Boundary          |

**They are complementary, not replacements.**

---

## 9. Common Interview Traps

### Q1: Can we create Error Boundaries using hooks?

**Answer:** No. Error Boundaries must be class components.

---

### Q2: Why doesn’t React catch async errors automatically?

**Answer:** Because async code executes outside the render phase.

---

### Q3: Should every component have its own Error Boundary?

**Answer:** No. Use them strategically at feature or layout level.

---

### Q4: What happens to component state when an error occurs?

**Answer:** React unmounts the failed subtree and resets its state.

---

## 10. Real-World Architecture Example

```tsx
<ErrorBoundary>
  <Layout>
    <Navbar />
    <ErrorBoundary>
      <MainRoutes />
    </ErrorBoundary>
  </Layout>
</ErrorBoundary>
```

* Layout protected
* Routes isolated
* Better UX and stability

---

## 11. Best Practices Summary

* Use **multiple boundaries**, not just one
* Log errors centrally
* Show **friendly fallback UI**
* Avoid catching errors silently
* Do not overuse at leaf components

---

If you want, next we can:

1. Implement a **reusable ErrorBoundary with retry**
2. Add **Sentry integration**
3. Cover **Error Boundaries in React 18 & concurrent rendering**
4. Convert this into **Notion toggle format for interview prep**

Tell me the next step.
