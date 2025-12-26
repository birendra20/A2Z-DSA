Excellent choice.
These 15 questions are the ones that separate a real senior from someone who just knows React APIs.

For each question, I’ll give you a “perfect” senior answer:
	•	Clear
	•	Structured
	•	No over-engineering
	•	Interview-ready (spoken, not blog-style)

⸻

🔥 TOP 15 MOST-IMPORTANT PERFORMANCE QUESTIONS

(Senior Frontend / React)

⸻

1️⃣ Explain the browser rendering pipeline.

Perfect Senior Answer:

The browser parses HTML to build the DOM and parses CSS to build the CSSOM. These are combined into the Render Tree, which contains only visible elements.

Then it performs layout to calculate sizes and positions, paints pixels like text and colors, and finally composites layers, often on the GPU.

From a performance perspective, layout is the most expensive, paint is moderate, and composite is cheapest. That’s why I try to keep frequent UI updates limited to the composite phase using transform and opacity.

⸻

2️⃣ Difference between reflow, repaint, and composite?

Perfect Senior Answer:

Reflow recalculates layout and is the most expensive. Repaint redraws pixels without changing layout. Composite just recombines existing layers on the GPU and is the cheapest.

Performance optimizations usually aim to avoid reflow and repaint and stay within the composite phase.

⸻

3️⃣ Why does JavaScript block rendering?

Perfect Senior Answer:

JavaScript runs on the main thread, which also handles layout, paint, and user input. While JavaScript is executing, the browser cannot render or respond to interactions.

That’s why long synchronous JavaScript tasks cause UI freezes and hurt interaction metrics like INP.

⸻

4️⃣ Explain the Event Loop in relation to UI rendering.

Perfect Senior Answer:

JavaScript runs synchronously. After execution, the browser processes all microtasks like Promises, then gets a chance to render, and only after that moves to the next macrotask.

If microtasks keep running, rendering can be delayed, which is why Promise-heavy code can still cause jank.

⸻

5️⃣ What are Core Web Vitals and why do they matter?

Perfect Senior Answer:

Core Web Vitals measure real user experience. LCP reflects loading performance, INP measures interaction responsiveness, and CLS measures visual stability.

They matter because they focus on how fast and stable the app feels to users, not just technical benchmarks.

⸻

6️⃣ How do you improve LCP?

Perfect Senior Answer:

First, I identify the LCP element. Then I reduce render-blocking resources, preload critical assets, optimize images, use a CDN, and consider SSR if appropriate.

The goal is not to load everything faster, but to prioritize what the user sees first.

⸻

7️⃣ What is INP and how do you improve it?

Perfect Senior Answer:

INP measures the time from user interaction to the next paint. Poor INP usually comes from long event handlers or blocked main thread work.

I improve it by breaking long tasks, deferring non-critical work, and keeping event handlers lightweight.

⸻

8️⃣ What causes CLS and how do you prevent it?

Perfect Senior Answer:

CLS is caused by unexpected layout shifts, often from images without dimensions, late-loading fonts, or injected content.

I prevent it by reserving space upfront, defining image sizes, using proper font loading strategies, and avoiding DOM insertions above existing content.

⸻

9️⃣ How does React rendering work?

Perfect Senior Answer:

React rendering has two phases: render and commit. In the render phase, React calculates what the UI should look like. In the commit phase, it applies changes to the DOM.

The render phase is cheap and interruptible; the commit phase is expensive. Performance issues usually come from unnecessary commits, not re-renders.

⸻

🔟 What causes a React component to re-render?

Perfect Senior Answer:

A component re-renders when its state changes, its props change, its context changes, or its parent re-renders.

Understanding this flow is essential before applying memoization.

⸻

1️⃣1️⃣ When should you use React.memo?

Perfect Senior Answer:

React.memo helps when a component renders often due to parent re-renders and receives stable props.

It doesn’t help if props change frequently or the component is cheap to render, so I only use it when there’s a measurable benefit.

⸻

1️⃣2️⃣ Why is over-memoization bad?

Perfect Senior Answer:

Memoization has overhead — memory usage and dependency checks. Overusing it can actually hurt performance and make code harder to reason about.

I prefer to optimize architecture and state flow first, then memoize only where necessary.

⸻

1️⃣3️⃣ How do you optimize large lists in React?

Perfect Senior Answer:

I use virtualization to render only visible items using libraries like react-window.

I also ensure stable keys and avoid expensive work inside list item renders.

⸻

1️⃣4️⃣ What problem does Concurrent React solve?

Perfect Senior Answer:

Concurrent React allows React to interrupt low-priority rendering work to keep the UI responsive.

It improves perceived performance and UX consistency rather than making rendering faster.

⸻

1️⃣5️⃣ How do you decide what to optimize?

Perfect Senior Answer:

I always measure first using real user metrics. I focus on user-visible issues and prioritize perceived performance over micro-optimizations.

If an optimization isn’t measurable, I usually don’t do it.

⸻

✅ How to Practice These Answers
	•	Speak them out loud
	•	Keep answers under 60–90 seconds
	•	Add 1 real example from your projects

If you can confidently answer these 15, you are absolutely senior-level in performance.

⸻

Next step (choose one):
	1.	Turn these into spoken interview scripts
	2.	Add project-based examples to each answer
	3.	Do a mock performance interview

Tell me what you want next.