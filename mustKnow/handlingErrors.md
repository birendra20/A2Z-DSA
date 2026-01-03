Below are **structured, interview-ready notes** for the question **“How do you handle errors?”**, tailored for a **Frontend / JavaScript / React developer (3+ years)**.
You can directly copy this into **Notion** and use it during revision.

---

## How Do You Handle Errors? (Interview Notes)

### 1. What Is Error Handling?

Error handling is the process of **detecting, managing, and recovering from errors** that occur during application execution so that the app remains **stable, user-friendly, and debuggable**.

In frontend applications, errors can occur due to:

* Invalid user input
* API/network failures
* Runtime JavaScript exceptions
* Rendering issues in UI components

---

### 2. Types of Errors in Frontend Applications

#### a) Syntax Errors

* Occur due to incorrect code syntax.
* Detected at compile or parse time.
* Example: Missing brackets, incorrect keywords.

Handled by:

* Linters (ESLint)
* TypeScript
* IDE warnings

---

#### b) Runtime Errors

* Occur during code execution.
* Example: Accessing undefined properties.

```js
console.log(user.name); // user is undefined
```

Handled by:

* `try...catch`
* Defensive programming
* Optional chaining (`user?.name`)

---

#### c) Logical Errors

* Code runs but produces incorrect output.
* Hardest to detect.

Handled by:

* Unit tests
* Code reviews
* Logging

---

#### d) Network / API Errors

* Occur due to failed HTTP requests.
* Examples: 404, 500, timeout, no internet.

Handled by:

* HTTP status checks
* Retry mechanisms
* Graceful UI fallback

---

### 3. Error Handling in JavaScript

#### a) try...catch

Used to catch **synchronous runtime errors**.

```js
try {
  JSON.parse(data);
} catch (error) {
  console.error(error.message);
}
```

Important points:

* Does NOT catch async errors unless `await` is used.
* Always keep `try` block minimal.

---

#### b) Error Object

JavaScript provides a built-in `Error` object.

```js
throw new Error("Something went wrong");
```

Properties:

* `name`
* `message`
* `stack`

---

### 4. Error Handling in Asynchronous Code

#### a) Promises

```js
fetch(url)
  .then(res => res.json())
  .catch(error => console.error(error));
```

---

#### b) async / await

Preferred in modern applications.

```js
try {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("API failed");
  }
} catch (error) {
  console.error(error.message);
}
```

---

### 5. Error Handling in React (Critical Interview Topic)

#### a) Error Boundaries

* Catch **rendering errors** in component tree.
* Do NOT catch:

  * Event handler errors
  * Async errors
  * Errors in error boundary itself

```jsx
class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log(error, info);
  }

  render() {
    return this.state.hasError
      ? <h2>Something went wrong</h2>
      : this.props.children;
  }
}
```

Usage:

```jsx
<ErrorBoundary>
  <MyComponent />
</ErrorBoundary>
```

---

#### b) API Error Handling in React

* Use loading, success, and error states.

```js
const [error, setError] = useState(null);

try {
  await fetchData();
} catch (err) {
  setError(err.message);
}
```

Display meaningful UI:

* Toast
* Error message
* Retry button

---

### 6. Global Error Handling

#### a) Window Level

```js
window.onerror = function (message, source, lineno) {
  console.log(message);
};
```

#### b) Unhandled Promise Rejection

```js
window.addEventListener("unhandledrejection", event => {
  console.error(event.reason);
});
```

---

### 7. User-Friendly Error Handling (Important for UX)

* Never show raw error messages.
* Show clear, actionable messages.
* Provide recovery options.

Example:

* ❌ “Cannot read property of undefined”
* ✅ “Something went wrong. Please try again.”

---

### 8. Logging & Monitoring (Senior-Level Answer)

* Log errors for debugging and monitoring.
* Tools:

  * Sentry
  * LogRocket
  * New Relic

Benefits:

* Track production issues
* Improve application stability

---

### 9. Best Practices (Quick Points)

* Fail gracefully
* Use centralized error handling
* Avoid silent failures
* Validate inputs
* Handle API errors explicitly
* Write unit tests for error cases

---

### 10. Sample Interview Answer (Concise)

> “I handle errors by categorizing them into runtime, logical, and network errors.
> In JavaScript, I use try-catch for synchronous code and async-await with proper error handling for APIs.
> In React, I use Error Boundaries to catch rendering errors and show fallback UI.
> For API failures, I manage loading and error states and show user-friendly messages.
> Additionally, I log critical errors using monitoring tools like Sentry to track issues in production.”

---

### 11. Follow-Up Questions Interviewers May Ask

* What are Error Boundaries?
* Can try-catch catch async errors?
* Difference between runtime and logical errors?
* How do you handle API failures?
* How do you prevent app crash in React?

---

If you want, I can:

* Convert this into **Notion toggle format**
* Create a **1-minute / 2-minute answer**
* Add **real-world production examples**
* Map this to **Senior Frontend interview expectations**

Tell me how you want to proceed.
