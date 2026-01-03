# JavaScript Promise Concepts & Project

This folder contains a comprehensive breakdown of Promise concepts in JavaScript, followed by a "Real World Project" simulation.

## Files Breakdown

1.  **`01_fundamentals.js`**
    *   What is a Promise?
    *   The 3 States (Pending, Fulfilled, Rejected).
    *   The Executor Function.
    *   Immutability.

2.  **`02_consumption_and_chaining.js`**
    *   `.then()`, `.catch()`, `.finally()`.
    *   Chaining promises to run sequentially.
    *   Error propagation (bubbling).

3.  **`03_static_methods.js`**
    *   `Promise.all()`
    *   `Promise.allSettled()`
    *   `Promise.race()`
    *   `Promise.any()`
    *   `Promise.resolve()` / `Promise.reject()`

4.  **`04_async_await.js`**
    *   Syntactic sugar over Promises.
    *   `try...catch` blocks.
    *   Parallel execution with await.

5.  **`05_event_loop_microtasks.js`**
    *   The Microtask Queue vs Macrotask Queue.
    *   Execution order demonstration.

6.  **`06_project_dashboard.js`**
    *   **Putting it all together**: A simulated Dashboard Loader.
    *   Fetches User Profile, Posts, and Notifications.
    *   Handles timeouts and partial failures.
    *   Uses async/await and `Promise.allSettled`.

## How to Run

You can run any of these files using Node.js in your terminal:

```bash
node 01_fundamentals.js
node 06_project_dashboard.js
```
