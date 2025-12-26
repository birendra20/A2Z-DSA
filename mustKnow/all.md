
```
🔹 Event Loop deep dive (microtasks vs macrotasks)
🔹 Promise.all vs allSettled vs any (and when each fails)
🔹 Top-level await and its impact on performance
🔹 Memory leaks, garbage collection, and WeakMaps
🔹 Tree shaking, code splitting, and bundle optimization
🔹 Debouncing vs throttling (with real UI use cases)
🔹 Web Workers vs async functions
🔹 State management without Redux
🔹 Module Federation in large frontend systems
🔹 Proxies, reactivity, and custom hook patterns
🔹 XSS prevention and Content Security Policy
🔹 Testing async JavaScript without libraries


 What is React Fiber?
```

```

```


```
1️⃣ What will be the output?

console.log(typeof null);

2️⃣ Predict the output:

let a = 10;
function test() {
 console.log(a);
 let a = 20;
}
test();

3️⃣ Output?

for (var i = 0; i < 3; i++) {
 setTimeout(() => console.log(i), 0);
}


4️⃣ What is the difference between:

[] == []
{} == {}


5️⃣ What will this return?

Promise.resolve(1)
 .then(x => x + 1)
 .then(x => { throw x })
 .catch(x => x + 10)
 .then(x => console.log(x));
```


```
What is the difference between var, let, and const?
2. How does JavaScript handle hoisting?
3. Explain closures with a real-life example.
4. What is the difference between == and ===?
5. What are primitive and non-primitive data types?
6. What are truthy and falsy values in JavaScript?
7. How does the this keyword work in different scenarios?
8. What is the difference between arrow functions and normal functions?
9. What is the event loop? How do microtasks and macrotasks work?
10. Explain promises and their states.
11. What is async/await and how is it better than promises?
12. How does setTimeout work internally?
13. What is event bubbling and event capturing?
14. What is event delegation and why is it used?
15. What is the difference between localStorage, sessionStorage, and cookies?
16. What is CORS and how do you fix CORS errors?
17. What are shallow copy and deep copy? How do you implement them?
18. Explain call, apply, and bind.
19. What is destructuring in JavaScript?
20. Explain the spread and rest operators.
21. What are map, filter, and reduce? When would you use each?
22. What is debouncing and throttling? Where are they used?
23. What are memory leaks in JavaScript and how can you avoid them?
24. What is a polyfill and why is it needed?
25. What is the difference between synchronous and asynchronous code?
26. How does JavaScript work behind the scenes?
```


```
𝗧𝗵𝗲 𝗯𝗮𝘀𝗶𝗰𝘀 𝗲𝘃𝗲𝗿𝘆𝗼𝗻𝗲 𝗲𝘅𝗽𝗲𝗰𝘁𝘀 𝘆𝗼𝘂 𝘁𝗼 𝗸𝗻𝗼𝘄:
 1. What is the difference between React Node, Element, and Component?
 2. Why do we need keys in React lists?
 3. Controlled vs Uncontrolled components.
 4. What are React Fragments and why use them?

𝗧𝗵𝗲 𝗼𝗻𝗲𝘀 𝘁𝗵𝗮𝘁 𝘀𝗲𝗽𝗮𝗿𝗮𝘁𝗲 𝗷𝘂𝗻𝗶𝗼𝗿 𝗳𝗿𝗼𝗺 𝘀𝗲𝗻𝗶𝗼𝗿 𝗱𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿𝘀:
 5. When to use useEffect vs useLayoutEffect.
 6. How reconciliation works in React.
 7. What is hydration in server-side rendering.
 8. Higher-order components and when to use them.

𝗧𝗵𝗲 𝗽𝗲𝗿𝗳𝗼𝗿𝗺𝗮𝗻𝗰𝗲 𝗾𝘂𝗲𝘀𝘁𝗶𝗼𝗻𝘀 𝘁𝗵𝗮𝘁 𝘀𝗵𝗼𝘄 𝘆𝗼𝘂 𝘂𝗻𝗱𝗲𝗿𝘀𝘁𝗮𝗻𝗱 𝗼𝗽𝘁𝗶𝗺𝗶𝘇𝗮𝘁𝗶𝗼𝗻:
 9. How to use useMemo and useCallback effectively.
 10. Why you should not mutate state directly.
 11. Code splitting and lazy loading techniques.
 12. Testing strategies for React applications.

 𝗧𝗵𝗲 𝘁𝗿𝗶𝗰𝗸𝘆 𝗼𝗻𝗲𝘀 𝘁𝗵𝗮𝘁 𝗼𝗳𝘁𝗲𝗻 𝗰𝗮𝘁𝗰𝗵 𝗽𝗲𝗼𝗽𝗹𝗲 𝗼𝗳𝗳 𝗴𝘂𝗮𝗿𝗱:
 13. Difference between createElement and cloneElement.
 14. When to use useReducer over useState.
 15. How useImperativeHandle works.
 16. Why array indices make bad keys.
```


```
This round focused on real debugging scenarios, tricky edge cases, and how senior engineers reason under pressure.
These are the questions that test experience, not just knowledge 👇

🧠 1️⃣ A State Update Works but UI Doesn’t Change — Why?

Expected reasons:
✔ State mutation instead of immutability
✔ Shallow comparison failing
✔ Same reference passed again
✔ Memoized component blocking re-render

They want root-cause analysis, not guesses.

🧠 2️⃣ API Returns Correct Data but UI Shows Old Data

Expected explanation:
✔ Cached response not invalidated
✔ RSC cache not revalidated
✔ Client state not refreshed
✔ Missing revalidatePath() / revalidateTag()

Tests understanding of Next.js caching model.

🧠 3️⃣ Hydration Error Appears Only in Production

Strong answers mention:
✔ Server vs client mismatch
✔ Random/time-based values
✔ Browser-only APIs in server components
✔ Conditional rendering differences

Fix approach: make output deterministic.

🧠 4️⃣ useEffect Runs Twice — Is It a Bug?

Correct explanation:
✔ React Strict Mode (dev only)
✔ Helps detect side-effect bugs
✔ Effects must be idempotent

This is a classic trick question.

🧠 5️⃣ Infinite Re-render Loop — How Do You Debug It?

Expected steps:
✔ Check dependency array
✔ Look for setState inside render/effect
✔ Stabilize objects/functions
✔ Move logic to event handlers

Shows debugging maturity.

🧠 6️⃣ Search Feature Lags When Typing Fast

Expected reasoning:
✔ Missing debounce
✔ Heavy computation on main thread
✔ No memoization
✔ Race conditions

Fix: debounce + request cancellation + memo.

🧠 7️⃣ Production Issue: API Called Multiple Times

Common causes:
✔ Strict Mode
✔ Duplicate fetch in client + server
✔ useEffect misuse
✔ Missing cache config

Interviewers want systematic reasoning.

🧠 8️⃣ User Reports “Page Freezes Sometimes”

Strong answer includes:
✔ Long JS tasks
✔ Blocking loops
✔ Large DOM renders
✔ Missing virtualization

Solution approach matters more than tools.

🎯 What This Round Really Tested

✔ Debugging mindset under pressure
✔ Understanding of React + Next.js internals
✔ Ability to isolate issues logically
✔ Knowledge of caching, hydration, and rendering
✔ Senior-level problem-solving approach
```

```
In a Javascript L1 & L2 round the following questions can be asked from interviewer.

1. What is the difference between 'Pass by Value' and 'Pass by Reference'?
2. What is the difference between map and filter ?
3. What is the difference between map() and forEach() 
4. What is the difference between Pure and Impure functions?
5. What is the difference between for-in and for-of ?
6. What are the differences between call(), apply() and bind() ?
7. List out some key features of ES6 ?
8. What’s the spread operator in javascript ?
9. What is rest operator in javascript ?
10. What are DRY, KISS, YAGNI, SOLID Principles ?
11. What is temporal dead zone ?
12. Different ways to create object in javascript ?
13. Whats the difference between Object.keys,values and entries
14. Whats the difference between Object.freeze() vs Object.seal()
15. What is a polyfill in javascript ?
16. What is generator function in javascript ?
17. What is prototype in javascript ?
18. What is IIFE ?
19. What is CORS ?
20. What are the different datatypes in javascript ?
21. What are the difference between typescript and javascript ?
22. What is authentication vs authorization ?
23. Difference between null and undefined ?
24. What is the output of 3+2+”7” ?
25. Slice vs Splice in javascript ?
26. What is destructuring ?
27. What is setTimeOut in javascript ?
28. What is setInterval in javascript ?
29. What are Promises in javascript ?
30. What is a callstack in javascript ?
31. What is a closure ?
32. What are callbacks in javascript ?
33. What are Higher Order Functions in javascript ?
34. What is the difference between == and === in javascript ?
35. Is javascript a dynamically typed language or a statically typed language 
36. What is the difference between Indexeddb and sessionstorage ?
37. What are Interceptors ?
38. What is Hoisting ?
39. What are the differences let, var and const ?
41. Differences between Promise.all, allSettled, any, race ?
42. What are limitations of arrow functions?
43. What is difference between find vs findIndex ?
44. What is tree shaking in javascrip
45. What is the main difference between Local Storage and Session storage
46. What is eval()
47. What is the difference between Shallow copy and deep copy
48. What are the difference between undeclared and undefined variables
49. What is event bubbling
50. What is event capturing
51. What are cookies
52. typeOf operator
53. What is this in javascript and How it behaves in various scenarios 
54. How do you optimize the performance of application
55. What is meant by debouncing and throttling.
```

```
• JavaScript internals: execution context, event loop, closures, promises, async/await
 • ES6+ concepts, immutability, debouncing/throttling
 • React fundamentals: props vs state, keys, reconciliation, Virtual DOM
 • Hooks in depth: useState, useEffect, useRef, useContext, useReducer
 • Performance optimization: memoization, lazy loading, preventing re-renders
 • Component lifecycle with hooks and cleanup patterns
 • Error handling, memory leaks, and debugging production issues
 • Controlled vs uncontrolled components
 • React architecture decisions: Context vs Redux
 • Next.js concepts: CSR, SSR, SSG, ISR, routing, data fetching
 • Real interview scenarios and output-based questions

Big takeaway: interviews are less about memorizing answers and more about explaining the “why” behind how React actually works.

```

```
1️⃣ Call, Apply, Bind → Difference + Polyfill implementation
2️⃣ Flatten an Array without Array.flat()
👉 Input: [1,2,3,[4,5,6,[7,8,[10,11]]],9]
👉 Output: [1,2,3,4,5,6,7,8,10,11,9]
3️⃣ Inline 5 divs in a row without flex/margin/padding (Hint: display: inline-block)
4️⃣ Find sum of numbers without a for loop (Hint: reduce() / recursion)
5️⃣ Deep Copy vs Shallow Copy — behavior & how to achieve it
6️⃣ Promise & Async/Await output puzzle
7️⃣ Find first repeating character (e.g., "success" → "c")
8️⃣ Stopwatch Implementation (Start, Stop, Reset + live timer)
9️⃣ Build a To-Do List (Vanilla JS/React) → optimize re-renders
🔟 Currying for Infinite Sum
👉 sum(10)(20)(30)() → 60
👉 sum(10)(20)(30)(40)(50)(60)() → 210
```

```
Career note from a real interview moment.

I landed a remote Full-Stack Developer role without a degree, in a single interview, based on one core React question:

“Why can’t we use Hooks in Server Components?”

A beginner answer might stop at: React doesn’t allow it.


The senior-level reasoning goes deeper: React Hooks are built on top of the component lifecycle. Lifecycle phases like mount and unmount exist only on the client. Server Components don’t have a lifecycle, so there’s no underlying mechanism for Hooks to run.

Sometimes depth of understanding matters more than credentials.
```

```
Situation-Based ReactJS Questions (for 5-7 Years Experience)

1. A React screen is slow. How do you handle performance issues?
Answer:
I first identify the bottleneck using React DevTools Profiler. Then I optimize by memoizing components with React.memo, using useCallback and useMemo where needed, reducing unnecessary re-renders, splitting code using lazy loading, and optimizing API calls and list rendering with virtualization if required.

2. You joined a project with poorly written React code. What do you do?
Answer:
I avoid rewriting everything. I first stabilize the app, understand critical flows, and gradually refactor components into reusable and maintainable ones. I introduce linting, folder structure, and coding standards while ensuring no business impact.

3. How do you handle global state in a large React application?
Answer:
I choose the solution based on complexity. For simple apps, Context API works well. For complex workflows and async logic, I prefer Redux Toolkit. I also ensure minimal global state and keep UI state local wherever possible.

4. A production bug occurs after deployment. What’s your approach?
Answer:
I first analyze logs and user impact. If critical, I rollback immediately. Then I debug using error tracking tools, identify the root cause, add proper validation or fallback handling, write test cases, and ensure the fix is reviewed before redeployment.

5. How do you handle API failure or slow response in React?
Answer:
I implement proper loading states, error boundaries, retry logic where applicable, and graceful fallbacks. User feedback is important, so I always show meaningful error messages instead of blank screens.

Bonus question: How do you handle security concerns in React apps?
Answer:
I avoid storing sensitive data in localStorage, prevent XSS using proper sanitization, follow secure authentication flows, validate API data, and ensure environment variables are not exposed.

```

```
20 JavaScript Interview Questions for Frontend Developers in 2025

1. Explain the difference between Promise.all(), Promise.allSettled(), and Promise.any().
2. How does the Nullish Coalescing Operator (??) differ from OR (||)?
3. What are WeakMap and WeakSet, and when would you use them?
4. Explain the concept of Top-Level Await.
5. How do you implement proper error boundaries in JavaScript applications?
6. What happens when you mix async/await with .then()/.catch()?
7. Explain the event loop with microtasks and macrotasks.
8. How would you implement a retry mechanism for failed API calls?
9. What is the difference between debouncing and throttling? Implement both.
10. How does JavaScript garbage collection work, and how can you optimize for it?
11. Explain tree shaking and how it affects your code.
12. What are Web Workers and when would you use them?
13. How do you handle state management without external libraries?
14. Explain the Module Federation pattern.
15. What are JavaScript Proxies and how can they be used?
16. How would you implement a custom hook pattern in vanilla JavaScript?
17. How do you prevent XSS attacks in JavaScript applications?
18. What is Content Security Policy and how does it affect JavaScript?
19. How would you test asynchronous code without external testing frameworks?
20. Explain different types of JavaScript testing (unit, integration, e2e) and their trade-offs.

```


```
Mansi Gupta
 • 1st
1st
Lead Software Engineer at devtools.tech
Lead Software Engineer at devtools.tech
3d •  
3 days ago • Visible to anyone on or off LinkedIn


🧑‍💻 Okta — SDE-2 Frontend Interview (React · JavaScript · System Design)
Role: Software Development Engineer 2 — Frontend

## Round 1 — React + JavaScript deep dive
Live task: Build a Dynamic Grid Generation web-app with user interactivity. This question evaluates:

- Thinking in React and structuring state correctly
- Avoiding unnecessary re-renders
- Choosing the right data structure for dynamic UI
- Handling controlled updates with useState, useRef, and useCallback
- Ensuring scalability when the UI grows
- Writing predictable, side-effect-free update logic

Exact Question link: https://lnkd.in/dQxFu6X6

JavaScript/knowledge checks:

* Event loop, microtasks vs macrotasks
* Promise resolve() then() vs setTimeout()
* async vs defer script loading
* async/await vs then/catch
* Memory management, debouncing/throttling patterns, sync vs async APIs
 What they assessed: depth of understanding of JS internals and ability to reason about async behavior and memory.

## Round 2 — System Design: Content Publishing Platform
Problem: Design a scalable system where admins publish news (markdown MD files) and users read them.

Discussion areas: RBAC, storage & rendering of markdown, client vs server rendering, CDN necessity for static content, SQL vs NoSQL trade-offs, sitemap & SEO, caching (CDN/browser/server), auth strategies (JWT vs sessions), pagination and feed delivery, and rough capacity estimates.

What they assessed: practicality, scalability, trade-offs, and real-world awareness of web-architecture patterns.

## Key takeaways:

1. Practice lots of machine coding round questions as they check for code writing skills, problem solving, and UI skills. (Highly recommended resource: https://lnkd.in/dV4tSJaW)
2. Deep JavaScript fundamentals are non-negotiable for SDE-2 frontend roles.
3. Being good at React isn’t enough — know how React interacts with JavaScript and the browser.
4. Expect system design at SDE-2 frontend interviews; be ready to reason about architecture & trade-offs.
5. Explain your choices clearly — working code + clear rationale > code alone.
6. Drill into the event loop, call stack, microtask queue, and memory behavior.

```

```

1️⃣ How does the browser render a page?
(DOM → CSSOM → Render Tree → Layout → Paint → Composite)

2️⃣ What causes reflows & repaints?
And how do you avoid them when building UI?

3️⃣ Explain event delegation.
A 30-second question that reveals deep JS understanding.

4️⃣ Local state vs global state — when to use which?
90% just say “Redux” without reasoning.

5️⃣ What’s the difference between SSR, CSR, SSG & hydration?
Modern frontend = modern rendering patterns.

6️⃣ How do you optimize a large frontend app?
Lazy loading, caching, code splitting, memoization — name them with use-cases.

```


```
Mansi Gupta
Mansi Gupta
 • 1st
1st
Lead Software Engineer at devtools.tech
Lead Software Engineer at devtools.tech
5d •  
5 days ago • Visible to anyone on or off LinkedIn


If you’re aiming for 𝗺𝗶𝗱/𝘀𝗲𝗻𝗶𝗼𝗿 𝗳𝗿𝗼𝗻𝘁𝗲𝗻𝗱 𝗿𝗼𝗹𝗲𝘀 or frontend-heavy full-stack roles — 𝗙𝗿𝗼𝗻𝘁𝗲𝗻𝗱 𝗦𝘆𝘀𝘁𝗲𝗺 𝗗𝗲𝘀𝗶𝗴𝗻 (𝗙𝗦𝗗) has officially become a 𝗰𝗼𝗿𝗲 𝗽𝗮𝗿𝘁 of the interview loop.

Companies aren’t just looking for people who can build pages.
They’re looking for engineers who can design complete, scalable, reliable web applications — covering rendering strategy, data fetching, performance, security, accessibility, and more.

Here are some real FSD questions you might encounter 👇

1️⃣ Design a scalable frontend architecture for a real-time dashboard.
2️⃣ Choose between CSR, SSR, SSG, and ISR for a large React app — and justify your trade-offs.
3️⃣ Design image-heavy pages (Instagram/Pinterest-style) for slow networks.
4️⃣ Architect the frontend for a global e-commerce platform (caching, CDN, i18n, accessibility).
5️⃣ Implement robust authentication + authorization flows on the client.
6️⃣ Decide between REST, GraphQL, or streaming for complex data-fetching patterns.
7️⃣ Build a real-time collaborative UI (like Google Docs).
8️⃣ Set up performance monitoring and optimisation strategies for production.
9️⃣ Architect error handling, logging, and frontend observability.
🔟 Ensure accessibility at scale across a large design system/codebase.

These questions are intentionally open-ended — interviewers want to see how you think, how you architect, and how well you can communicate trade-offs.

For many mid-level and most senior frontend roles in big tech and top startups, 𝗙𝗦𝗗 𝗶𝗻𝘁𝗲𝗿𝘃𝗶𝗲𝘄𝘀 𝗮𝗿𝗲 𝗻𝗼𝘄 𝘀𝘁𝗮𝗻𝗱𝗮𝗿𝗱 𝗮𝗻𝗱 𝗵𝗲𝗮𝘃𝗶𝗹𝘆 𝘄𝗲𝗶𝗴𝗵𝘁𝗲𝗱.

If you skip frontend system design prep, you risk falling short — even if your coding skills are solid.

--
Frontend System Design Guide that helped many candidates get 50+ LPA Offers: https://lnkd.in/ddmuKVs8
Advanced Frontend Interview Preparation: https://lnkd.in/dMPbUR4z

```

```
🚀 Experienced React.js Developer — Coding Round (Part-1)
If you're preparing for a mid/senior React.js role, the coding round will test more than JavaScript — it checks state management, component behavior, rendering patterns, and real-world logic.
Here are the must-know questions and best solutions every React.js developer should master 👇

🧠 1️⃣ Build a Debounce Function (Core JS + React Use Case)

Why it’s asked:
✔ Prevent unnecessary API calls
✔ Common in search inputs
✔ Tests async thinking

Solution:

function debounce(fn, delay) {
 let timer;
 return (...args) => {
 clearTimeout(timer);
 timer = setTimeout(() => fn(...args), delay);
 };
}


Explain like an interviewer:
Debounce waits until the user stops typing. Every keystroke resets the timer.

🧠 2️⃣ Throttle Function (Very Important for Scroll + Resize)

Why it’s asked:
✔ Prevent UI lag
✔ Used in scroll listeners, drag events

Solution:

function throttle(fn, limit) {
 let lastCall = 0;
 return (...args) => {
 const now = Date.now();
 if (now - lastCall >= limit) {
 lastCall = now;
 fn(...args);
 }
 };
}

🧠 3️⃣ Find the Second Largest Number in an Array

Solution 1 (Efficient):

function secondLargest(nums) {
 let first = -Infinity, second = -Infinity;
 for (let n of nums) {
 if (n > first) {
 second = first;
 first = n;
 } else if (n > second && n !== first) {
 second = n;
 }
 }
 return second;
}


Time: O(n)
Space: O(1)

🧠 4️⃣ Create a Custom Hook: usePrevious()

Very common in React interviews.

function usePrevious(value) {
 const ref = React.useRef();
 React.useEffect(() => {
 ref.current = value;
 }, [value]);
 return ref.current;
}


Why important:
Used for comparing current vs previous state/props.

🧠 5️⃣ Flatten a Nested Array
function flatten(arr) {
 return arr.reduce(
 (acc, item) => acc.concat(Array.isArray(item) ? flatten(item) : item),
 []
 );
}


Tests recursion + array manipulation.

🧠 6️⃣ React Coding Task: Remove Duplicate Items Using useState
const [items, setItems] = useState([1,2,2,3,3,4]);

const uniqueItems = [...new Set(items)];


Simple but commonly asked to check thinking.

🎯 What This Round Really Tests

✔ How well you use JavaScript + React together
✔ Ability to write clean, efficient functions
✔ Understanding of async behavior
✔ Comfort with hooks and custom hooks
✔ Problem-solving under pressure

This is just Part-1.
More coding questions + real React patterns coming in the next parts.

```


```
Here are 15 questions top frontend engineers are being asked right now:
 1️⃣ How would you optimize a React application rendering 100k+ items in a list?
 2️⃣ What strategies would you use to improve page load time for a global audience?
 3️⃣ You notice a memory leak in a production SPA—how do you identify and fix it?
 4️⃣ A component breaks when upgrading a library version—how do you manage dependencies?
 5️⃣ How would you debug a performance bottleneck in a React app using DevTools?
 6️⃣ You need to migrate a legacy frontend codebase to a modern framework—what’s your plan?
 7️⃣ How do you ensure secure handling of sensitive user data on the client side?
 8️⃣ Users report intermittent UI glitches in different browsers—how would you troubleshoot?
 9️⃣ A critical UI feature is failing during peak traffic—how do you mitigate the issue?
 🔟 How do you manage state in a complex app to avoid unnecessary re-renders?
 1️⃣1️⃣ How would you implement a robust frontend monitoring and logging system?
 1️⃣2️⃣ You need to render a large dataset without blocking the main thread—how do you approach it?
 1️⃣3️⃣ How would you implement A/B testing without affecting current users?
 1️⃣4️⃣ A CSS animation is janky on mobile devices—how do you identify and fix the issue?
 1️⃣5️⃣ How do you handle real-time updates in a React application efficiently?
```


```
My Friend recently appeared for a Frontend Developer Interview, and it was a really insightful experience! 
The interview focused mainly on React and JavaScript, covering both conceptual and hands-on coding questions.

Here’s what he was asked 👇

 React.js Questions ➡️
- What is useRef Hook?
- What are the use cases of useRef other than accessing DOM elements?
- Explain the useEffect Hook.
- What is the cleanup function inside useEffect?
- Difference between localStorage and sessionStorage (with practical examples).

 JavaScript Concepts ➡️
- Explain Closures in JavaScript.
- What is the difference between Event Bubbling and Event Capturing?

JavaScript Coding Questions ➡️
1️⃣ Given the sentence "India is my country."
 Return the same sentence but with the first letter of each word capitalized.
 👉 Output: India Is My Country.

2️⃣ Print numbers from 1 to 10, with a 1-second delay between each print (e.g., 1… 2… 3…).

🧠React Coding Question ➡️
Create a small app with:
- Three buttons — Start, Stop, and Pause.
- A counter that starts from 0 and increases every second after clicking Start.
- Stop should reset the timer.
- Pause should pause and Resume should continue the count.

Overall, it was a great discussion that tested both React fundamentals and JavaScript logic building.

Every interview is a learning opportunity — and this one definitely helped me sharpen my understanding of React Hooks and asynchronous JavaScript! 


𝗜 𝗵𝗮𝘃𝗲 𝗽𝗿𝗲𝗽𝗮𝗿𝗲𝗱 𝗜𝗻𝘁𝗲𝗿𝘃𝗶𝗲𝘄 𝗣𝗿𝗲𝗽𝗮𝗿𝗮𝘁𝗶𝗼𝗻 𝗚𝘂𝗶𝗱𝗲 𝗳𝗼𝗿 𝗙𝗿𝗼𝗻𝘁𝗲𝗻𝗱 𝗘𝗻𝗴𝗶𝗻𝗻𝗲𝗿𝘀.
covering JavaScript, React, Next.js, System Design, and more.

```


```
Here are 15 questions top frontend engineers are being asked right now:
 1️⃣ How would you optimize a React application rendering 100k+ items in a list?
 2️⃣ What strategies would you use to improve page load time for a global audience?
 3️⃣ You notice a memory leak in a production SPA—how do you identify and fix it?
 4️⃣ A component breaks when upgrading a library version—how do you manage dependencies?
 5️⃣ How would you debug a performance bottleneck in a React app using DevTools?
 6️⃣ You need to migrate a legacy frontend codebase to a modern framework—what’s your plan?
 7️⃣ How do you ensure secure handling of sensitive user data on the client side?
 8️⃣ Users report intermittent UI glitches in different browsers—how would you troubleshoot?
 9️⃣ A critical UI feature is failing during peak traffic—how do you mitigate the issue?
 🔟 How do you manage state in a complex app to avoid unnecessary re-renders?
 1️⃣1️⃣ How would you implement a robust frontend monitoring and logging system?
 1️⃣2️⃣ You need to render a large dataset without blocking the main thread—how do you approach it?
 1️⃣3️⃣ How would you implement A/B testing without affecting current users?
 1️⃣4️⃣ A CSS animation is janky on mobile devices—how do you identify and fix the issue?
 1️⃣5️⃣ How do you handle real-time updates in a React application efficiently?
```


```
𝟭. 𝗧𝗲𝗹𝗹 𝗠𝗲 𝗔𝗯𝗼𝘂𝘁 𝗬𝗼𝘂𝗿𝘀𝗲𝗹𝗳
- How do you structure your response?
- What should you include and exclude?
- How do you tailor it to the role?

𝟮. 𝗪𝗵𝘆 𝗗𝗼 𝗬𝗼𝘂 𝗪𝗮𝗻𝘁 𝘁𝗼 𝗪𝗼𝗿𝗸 𝗛𝗲𝗿𝗲?
- How do you research the company?
- What specific aspects should you mention?
- How do you align your goals with company values?

𝟯. 𝗗𝗲𝘀𝗰𝗿𝗶𝗯𝗲 𝗮 𝗖𝗵𝗮𝗹𝗹𝗲𝗻𝗴𝗶𝗻𝗴 𝗣𝗿𝗼𝗷𝗲𝗰𝘁
- What made it challenging?
- How did you approach the problem?
- What was the outcome?

𝟰. 𝗧𝗲𝗹𝗹 𝗠𝗲 𝗔𝗯𝗼𝘂𝘁 𝗮 𝗧𝗶𝗺𝗲 𝗬𝗼𝘂 𝗙𝗮𝗶𝗹𝗲𝗱
- What was the failure?
- What did you learn from it?
- How did you apply those learnings?

𝟱. 𝗗𝗲𝘀𝗰𝗿𝗶𝗯𝗲 𝗮 𝗖𝗼𝗻𝗳𝗹𝗶𝗰𝘁 𝘄𝗶𝘁𝗵 𝗮 𝗧𝗲𝗮𝗺𝗺𝗮𝘁𝗲
- What was the root cause?
- How did you handle it?
- What was the resolution?

𝟲. 𝗛𝗼𝘄 𝗗𝗼 𝗬𝗼𝘂 𝗛𝗮𝗻𝗱𝗹𝗲 𝗧𝗶𝗴𝗵𝘁 𝗗𝗲𝗮𝗱𝗹𝗶𝗻𝗲𝘀?
- What is your prioritization strategy?
- How do you manage stress?
- Can you give a specific example?

𝟳. 𝗗𝗲𝘀𝗰𝗿𝗶𝗯𝗲 𝗬𝗼𝘂𝗿 𝗟𝗲𝗮𝗱𝗲𝗿𝘀𝗵𝗶𝗽 𝗘𝘅𝗽𝗲𝗿𝗶𝗲𝗻𝗰𝗲
- When did you take initiative?
- How did you motivate others?
- What was the impact?

𝟴. 𝗧𝗲𝗹𝗹 𝗠𝗲 𝗔𝗯𝗼𝘂𝘁 𝗮 𝗧𝗶𝗺𝗲 𝗬𝗼𝘂 𝗗𝗶𝘀𝗮𝗴𝗿𝗲𝗲𝗱 𝘄𝗶𝘁𝗵 𝗬𝗼𝘂𝗿 𝗠𝗮𝗻𝗮𝗴𝗲𝗿
- What was the disagreement about?
- How did you communicate your perspective?
- What was the outcome?

𝟵. 𝗛𝗼𝘄 𝗗𝗼 𝗬𝗼𝘂 𝗛𝗮𝗻𝗱𝗹𝗲 𝗙𝗲𝗲𝗱𝗯𝗮𝗰𝗸?
- Can you describe receiving constructive criticism?
- How did you implement the feedback?
- How did it improve your work?

𝟭𝟬. 𝗗𝗲𝘀𝗰𝗿𝗶𝗯𝗲 𝗮 𝗧𝗶𝗺𝗲 𝗬𝗼𝘂 𝗪𝗲𝗻𝘁 𝗔𝗯𝗼𝘃𝗲 𝗮𝗻𝗱 𝗕𝗲𝘆𝗼𝗻𝗱
- What was the situation?
- Why did you go the extra mile?
- What was the result?
```

```
** Intuit Senior Software Engineer Frontend Interview Experience **
** 50 LPA Offer **

# Round 1: Project Discussion
- Discussion around the most challenging project in the past experience. Challenges I faced and how did I resolve them?

# Round 2: DSA Round
- You are given a string with characters and brackets. Tell whether the string is balanced or not.

Examples:
- ((abd)) - Balanced
- )(())abc - Not balanced
- {{[abcfGHTY]()UUffU}} - Balanced

- Second question: How would you check if a graph is connected or not?

# Round 3 - JavaScript Based
- Output based questions (Try here: https://lnkd.in/deTGQaBK)
- Discussion around Promise, Web Security, Performance, Optimisations, State Management, and Web accessibility.

# Round 4 - Machine Coding
- Retry function (Exact question: https://lnkd.in/divq4yeJ)
- DOM Tree Question (Exact question: https://lnkd.in/duZAV78U)

# Round 5 - Engineering Manager Round
- Discussion around past experiences, micro frontends, web workers, service worker, frontend system design, and more.

Overall good experience and positive conversations! For advanced frontend interview prep: https://lnkd.in/dV4tSJaW

Like. Repost. Save this post.

```