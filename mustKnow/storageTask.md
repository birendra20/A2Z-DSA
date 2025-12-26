Below are **realistic machine-coding tasks involving Cookies, Local Storage, and Session Storage** that are **commonly used in frontend interviews** (React / JS).
These are phrased exactly like interview prompts and ordered from **easy → hard**, so you can practice progressively.

I am **not implementing yet**—this is the **task set**. If you want, we can implement **one task at a time with clean code and explanation** (JS or React + TS).

---

## LEVEL 1: BASIC STORAGE TASKS (Warm-up)

### Task 1: Theme Persistence (Local Storage)

**Problem Statement**
Implement a toggle button to switch between **Light** and **Dark** theme.
The selected theme should persist even after browser refresh.

**Requirements**

* Use `localStorage`
* Default theme should be Light
* On page load, read from storage and apply theme
* Update storage on toggle

**Evaluates**

* localStorage usage
* Page load initialization
* State persistence

---

### Task 2: Remember Username (Local Storage)

**Problem Statement**
Create a login form with a **“Remember Me”** checkbox.

**Requirements**

* If checked, store username in `localStorage`
* Autofill username on next visit
* If unchecked, remove stored username

**Evaluates**

* Conditional storage
* Clearing storage
* Real-world UX logic

---

### Task 3: Page Visit Counter (Session Storage)

**Problem Statement**
Show how many times the user refreshed the page in the current tab.

**Requirements**

* Use `sessionStorage`
* Counter resets when tab is closed
* Increment on every refresh

**Evaluates**

* sessionStorage lifecycle understanding

---

## LEVEL 2: INTERMEDIATE TASKS (Interview Standard)

### Task 4: Multi-Step Form (Session Storage)

**Problem Statement**
Implement a **3-step form** (Personal → Address → Review).

**Requirements**

* Save each step’s data in `sessionStorage`
* Restore data on refresh
* Clear data on final submit
* Data should not persist after tab close

**Evaluates**

* Stepwise storage
* Controlled form state
* sessionStorage use case clarity

---

### Task 5: Product Filters Persistence (Local Storage)

**Problem Statement**
Implement filters (category, price range, rating) on a product list.

**Requirements**

* Save selected filters in `localStorage`
* Restore filters on page reload
* Clear filters option should clear storage

**Evaluates**

* Object serialization (`JSON.stringify`)
* State rehydration
* UX consistency

---

### Task 6: Recently Viewed Items

**Problem Statement**
Track and display the last **5 viewed products**.

**Requirements**

* Use `localStorage`
* Avoid duplicates
* Maintain insertion order
* Remove oldest item when limit exceeds

**Evaluates**

* Array manipulation
* Storage limits
* Real e-commerce logic

---

## LEVEL 3: ADVANCED TASKS (Senior-Level Signal)

### Task 7: Auth State Handling (Cookie + Local Storage)

**Problem Statement**
Simulate login/logout behavior.

**Requirements**

* Store auth token in **cookie**
* Store user profile in `localStorage`
* On logout:

  * Clear cookie
  * Clear localStorage
* Prevent UI access if token not present

**Evaluates**

* Correct storage selection
* Security awareness
* Auth flow understanding

---

### Task 8: Cross-Tab Logout Sync (Local Storage Event)

**Problem Statement**
If user logs out in one tab, all other tabs should log out automatically.

**Requirements**

* Use `localStorage`
* Listen to `storage` event
* Trigger logout UI update in all tabs

**Evaluates**

* Browser events
* Multi-tab behavior
* Real production scenario

---

### Task 9: Draft Autosave (Local Storage)

**Problem Statement**
Implement a text editor that auto-saves draft content.

**Requirements**

* Save text after user stops typing (debounce)
* Restore draft on reload
* Clear draft on submit

**Evaluates**

* Debouncing
* Performance awareness
* localStorage best practices

---

## LEVEL 4: TRICK / EDGE-CASE TASKS (Interviewers Love These)

### Task 10: Storage Quota Handling

**Problem Statement**
Safely store large data in localStorage.

**Requirements**

* Catch quota exceeded errors
* Show user-friendly message
* Prevent app crash

**Evaluates**

* Error handling
* Defensive coding

---

### Task 11: Secure Preference Storage

**Problem Statement**
Store user preferences but **avoid XSS risks**.

**Requirements**

* Never store sensitive data
* Sanitize before rendering
* Explain why cookies are safer for auth

**Evaluates**

* Security mindset
* Explanation ability

---

## What Interviewers ACTUALLY Check (Important)

They are NOT checking UI polish.
They are checking:

1. Correct storage choice
2. Lifecycle understanding
3. Serialization/deserialization
4. Cleanup logic
5. Security awareness
6. Code clarity

---

## Recommended Practice Order (For You)

Given your interview prep level:

1. Theme Persistence
2. Multi-Step Form
3. Recently Viewed Items
4. Cross-Tab Logout
5. Draft Autosave

---

### Next Step (Your Call)

Tell me **which task number you want to implement first**, and I will:

* Specify **exact file names**
* Implement using **JavaScript or React + TypeScript**
* Explain logic line-by-line
* Add **interview talking points**

Just reply with:
**“Implement Task X”**
