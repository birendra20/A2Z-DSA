https://www.itsindianguy.in/tutorials/react-performance/content

---


Below is a senior-level, structured learning roadmap for Web Performance + React Performance, designed so you don’t just know techniques, but understand why, when, and trade-offs.
This is the level interviewers expect from a Senior Frontend Engineer.

⸻

🌐 Web Performance (Platform-level Fundamentals)

You should understand these before touching React optimizations.

⸻

1. Core Web Vitals (Must-know)

Understand what they measure, why they matter, and how to improve them.
	•	LCP (Largest Contentful Paint)
	•	What counts as LCP
	•	Why images/fonts/blocking scripts affect it
	•	Improving LCP with preload, SSR, CDN, image optimization
	•	INP (Interaction to Next Paint) (replaced FID)
	•	Long tasks
	•	Event handler blocking
	•	Breaking work using requestIdleCallback, setTimeout, scheduler
	•	CLS (Cumulative Layout Shift)
	•	Layout instability causes
	•	Fonts, images without dimensions
	•	CSS strategies to prevent shifts

⸻

2. Browser Rendering Pipeline (Very Important)

You must be able to explain this step-by-step.
	•	HTML parsing → DOM
	•	CSS parsing → CSSOM
	•	Render Tree
	•	Layout (reflow)
	•	Paint
	•	Composite (GPU acceleration)

Key topics:
	•	Reflow vs Repaint
	•	Layout thrashing
	•	will-change
	•	transform vs top/left
	•	When browser hits the GPU

⸻

3. JavaScript Execution & Performance
	•	Main thread blocking
	•	Call stack, task queue, microtasks
	•	Long tasks (>50ms)
	•	Event Loop impact on UI
	•	requestAnimationFrame
	•	requestIdleCallback
	•	Web Workers (when and why)

⸻

4. Network Performance
	•	DNS lookup
	•	TCP handshake
	•	TLS
	•	HTTP/1.1 vs HTTP/2 vs HTTP/3
	•	Connection reuse
	•	CDN fundamentals

Optimization techniques:
	•	Resource prioritization
	•	preload, prefetch, preconnect
	•	Compression (Gzip vs Brotli)
	•	Caching strategies (HTTP cache headers)

⸻

5. Assets Optimization
	•	Image formats (JPEG vs PNG vs WebP vs AVIF)
	•	Responsive images (srcset, sizes)
	•	Lazy loading (loading="lazy")
	•	Font loading strategies
	•	FOIT vs FOUT
	•	font-display
	•	CSS & JS minification

⸻

6. Measuring Web Performance

Tools you must know deeply:
	•	Lighthouse (lab vs field data)
	•	Chrome DevTools Performance tab
	•	Network tab
	•	Web Vitals API
	•	RUM vs Synthetic monitoring

⸻

⚛️ React Performance (Framework-level)

Once web fundamentals are clear, move to React.

⸻

7. React Rendering Model (Critical)
	•	Reconciliation
	•	Virtual DOM vs Real DOM
	•	Fiber architecture (conceptual understanding)
	•	Render vs Commit phase
	•	Why renders are cheap, commits are not

⸻

8. Re-renders & State Management
	•	What causes re-render
	•	Parent → child propagation
	•	Props reference equality
	•	State colocation
	•	Lifting state too high (anti-pattern)

⸻

9. Memoization Techniques (When to use / When NOT)
	•	React.memo
	•	useMemo
	•	useCallback

Senior-level understanding:
	•	Referential equality
	•	Memory vs CPU trade-offs
	•	Over-memoization pitfalls

⸻

10. Lists & Large Data Rendering
	•	key importance
	•	Windowing / Virtualization
	•	react-window
	•	react-virtualized
	•	Infinite scrolling
	•	Pagination vs virtualization trade-offs

⸻

11. Expensive Computations
	•	Avoiding calculations in render
	•	Pre-computing vs lazy computing
	•	Memoizing selectors
	•	Derived state anti-patterns

⸻

12. Concurrent Features (Modern React)
	•	Concurrent Rendering (concept)
	•	useTransition
	•	startTransition
	•	useDeferredValue

Understanding:
	•	Interruptible rendering
	•	Keeping UI responsive
	•	Priority lanes

⸻

13. Code Splitting & Lazy Loading
	•	React.lazy
	•	Suspense
	•	Route-based splitting
	•	Component-level splitting
	•	Waterfall loading problems

⸻

14. Effects & Performance
	•	useEffect vs useLayoutEffect
	•	Effect cleanup importance
	•	Dependency array correctness
	•	Avoiding unnecessary effects

⸻

15. Context Performance
	•	Why Context causes re-renders
	•	Splitting contexts
	•	Selector pattern
	•	Alternatives (Redux, Zustand, Jotai)

⸻

16. Redux / Global State Performance
	•	Selector memoization
	•	Normalized state
	•	Avoiding deep objects
	•	Redux vs Context performance

(You already use Redux + Saga — this is very relevant for you)

⸻

17. Forms Performance
	•	Controlled vs uncontrolled inputs
	•	Debouncing input handlers
	•	Large form optimization
	•	Libraries performance trade-offs

⸻

18. Animations & UI Performance
	•	CSS vs JS animations
	•	Avoiding layout shifts
	•	Using transform and opacity
	•	React animation libraries impact

⸻

19. Server Rendering Performance
	•	CSR vs SSR vs SSG
	•	Hydration cost
	•	Partial hydration
	•	Streaming SSR (conceptual)
	•	TTFB vs TTI trade-offs

⸻

20. Measuring React Performance

Tools:
	•	React DevTools Profiler
	•	Flame graphs
	•	Why did this render?
	•	Custom performance marks

⸻

🧠 Senior-Level Mindset Topics (Very Important)

These separate mid → senior engineers.
	•	Measure before optimizing
	•	Performance vs readability trade-offs
	•	Perceived performance vs actual performance
	•	User-centric metrics
	•	Performance budgets
	•	Preventing regressions

⸻

Suggested Learning Order (Important)
	1.	Browser rendering + JS execution
	2.	Core Web Vitals
	3.	Network & assets
	4.	Measuring performance
	5.	React rendering model
	6.	Re-renders & memoization
	7.	Lists, code splitting, concurrent features
	8.	Profiling & real-world trade-offs

⸻

If you want, next I can:
	•	Convert this into a 30-day learning plan
	•	Create interview questions + model senior answers
	•	Give real React performance anti-patterns from production
	•	Map this directly to your current CometChat/VCB project

Just tell me what you want next.
----

Perfect — thanks for the clarification.
We’ll strictly follow YOUR roadmap, and I’ll do only what you asked now:
	1.	Convert this into a 30-day learning plan
	2.	Create senior-level interview questions + model answers
(no deviation, no re-ordering, no extra topics)

⸻

✅ PART 1: 30-DAY LEARNING PLAN (Senior Frontend Performance)

This plan assumes ~1–1.5 hours/day, realistic for a working engineer.

We move exactly in the Suggested Learning Order you provided.

⸻

🔹 DAYS 1–5: Browser Rendering + JavaScript Execution

Day 1 – Browser Rendering Pipeline
	•	DOM, CSSOM, Render Tree
	•	Layout vs Paint vs Composite
	•	Reflow vs Repaint

Outcome

You can explain why changing width causes reflow but transform doesn’t.

⸻

Day 2 – Layout Thrashing & GPU
	•	Layout thrashing patterns
	•	transform vs top/left
	•	will-change
	•	When browser uses GPU

Practice
	•	Animate an element with top
	•	Animate same with transform
	•	Compare performance

⸻

Day 3 – JS Execution Model
	•	Main thread responsibilities
	•	Call stack
	•	Blocking JS

Outcome

You can explain why heavy JS freezes UI.

⸻

Day 4 – Event Loop Deep Dive
	•	Macrotasks vs microtasks
	•	Rendering between tasks
	•	Why Promises can block paint

Practice
	•	Write small snippets with setTimeout, Promise.then

⸻

Day 5 – Breaking Long Tasks
	•	Long tasks (>50ms)
	•	requestAnimationFrame
	•	requestIdleCallback
	•	Web Workers (concept)

⸻

🔹 DAYS 6–9: Core Web Vitals

Day 6 – LCP
	•	What counts as LCP
	•	Images vs text
	•	Blocking scripts

Practice
	•	Identify LCP element in DevTools

⸻

Day 7 – Improving LCP
	•	Preload
	•	Image optimization
	•	SSR vs CSR impact
	•	CDN role

⸻

Day 8 – INP (Very Important for Interviews)
	•	Long event handlers
	•	Input delay causes
	•	Breaking work

Practice
	•	Simulate slow click handler

⸻

Day 9 – CLS
	•	Layout shift causes
	•	Fonts, images
	•	CSS strategies

⸻

🔹 DAYS 10–12: Network & Assets

Day 10 – Network Fundamentals
	•	DNS, TCP, TLS
	•	HTTP/1.1 vs HTTP/2 vs HTTP/3
	•	Connection reuse

⸻

Day 11 – Resource Loading Strategies
	•	preload vs prefetch vs preconnect
	•	Compression (gzip vs brotli)
	•	Cache headers

⸻

Day 12 – Asset Optimization
	•	Image formats
	•	Responsive images
	•	Font loading
	•	Minification

⸻

🔹 DAYS 13–14: Measuring Web Performance

Day 13 – Lighthouse & Metrics
	•	Lab vs Field data
	•	Why Lighthouse can lie

⸻

Day 14 – DevTools Deep Dive
	•	Performance tab
	•	Network waterfall
	•	RUM vs Synthetic

⸻

🔹 DAYS 15–17: React Rendering Model

Day 15 – How React Renders
	•	Reconciliation
	•	Virtual DOM
	•	Render vs Commit

⸻

Day 16 – Fiber & Scheduling
	•	Fiber concept
	•	Interruptible rendering
	•	Why React batches updates

⸻

Day 17 – Why Renders Are Cheap
	•	Render vs DOM mutation
	•	Commit cost

⸻

🔹 DAYS 18–20: Re-renders & Memoization

Day 18 – Re-render Triggers
	•	State
	•	Props
	•	Context
	•	Parent renders

⸻

Day 19 – Memoization (Correct Usage)
	•	React.memo
	•	useMemo
	•	useCallback
	•	Overuse pitfalls

⸻

Day 20 – State Colocation
	•	Lifting state too high
	•	Local vs global state

⸻

🔹 DAYS 21–23: Lists, Expensive Work, Concurrent React

Day 21 – Lists & Virtualization
	•	Keys
	•	react-window
	•	Infinite scroll vs pagination

⸻

Day 22 – Expensive Computations
	•	Avoid work in render
	•	Derived state anti-pattern
	•	Selector memoization

⸻

Day 23 – Concurrent Features
	•	useTransition
	•	useDeferredValue
	•	UX vs speed

⸻

🔹 DAYS 24–26: Code Splitting, Effects, Context

Day 24 – Code Splitting
	•	React.lazy
	•	Suspense
	•	Waterfall issues

⸻

Day 25 – Effects & Performance
	•	useEffect vs useLayoutEffect
	•	Dependency mistakes
	•	Cleanup

⸻

Day 26 – Context & Redux Performance
	•	Context re-render issues
	•	Selector pattern
	•	Redux vs Context

⸻

🔹 DAYS 27–28: Forms & Animations

Day 27 – Forms Performance
	•	Controlled vs uncontrolled
	•	Debouncing
	•	Large forms

⸻

Day 28 – Animations
	•	CSS vs JS animations
	•	Avoiding layout shifts
	•	Transform & opacity

⸻

🔹 DAYS 29–30: SSR & Profiling

Day 29 – Server Rendering
	•	CSR vs SSR vs SSG
	•	Hydration cost
	•	Streaming SSR

⸻

Day 30 – Measuring React Performance
	•	React Profiler
	•	Flame graphs
	•	“Why did this render?”

⸻

✅ PART 2: SENIOR-LEVEL INTERVIEW QUESTIONS + MODEL ANSWERS

These are exactly aligned with your roadmap.

⸻

Q1. What happens between a user click and UI update?

Model Answer (Senior)

When a user clicks, the event is handled on the main thread. The handler runs as a task. Any synchronous JavaScript blocks rendering. After the task completes, microtasks are flushed, then the browser gets a chance to run layout, paint, and composite. If the handler is long, it delays input response and affects INP.

⸻

Q2. Why is transform better than top/left?

Model Answer

top and left trigger layout and paint, while transform only affects the composite step, which is GPU-accelerated and avoids main-thread layout work.

⸻

Q3. Difference between LCP and INP?

Model Answer

LCP measures loading performance — when meaningful content appears. INP measures interactivity — how responsive the app is after user input. LCP is about assets and render blocking, INP is about JavaScript execution and long tasks.

⸻

Q4. Why are re-renders not necessarily bad in React?

Model Answer

Re-renders only execute the render phase, which is cheap. Performance issues happen when re-renders cause expensive commits or unnecessary DOM mutations. Optimizing re-renders blindly often hurts more than it helps.

⸻

Q5. When should you use useCallback?

Model Answer

Only when referential equality matters — for memoized child components or dependency arrays. Using it everywhere increases memory usage and can worsen performance.

⸻

Q6. How does React Concurrent Rendering help performance?

Model Answer

It doesn’t make code faster. It allows React to interrupt low-priority work to keep the UI responsive, improving perceived performance.

⸻

Q7. Redux vs Context for performance?

Model Answer

Context causes all consumers to re-render on value change. Redux allows fine-grained updates using selectors and memoization, making it more performant for large apps.

⸻

Q8. How do you decide what to optimize?

Model Answer

I measure first using real user metrics. I prioritize user-visible issues, not Lighthouse scores. I optimize only when there’s measurable impact.

⸻

Final Note (Important)

This plan + answers are already senior-level.
If you actually complete this, you’ll outperform most “senior” candidates.

⸻

What we should do next (choose ONE):
	1.	Start Day 1 together (I’ll teach + quiz you)
	2.	Convert interview answers into story-based answers
	3.	Apply this plan directly to your current React dashboard code

Tell me the next step and we’ll continue cleanly, one step at a time.