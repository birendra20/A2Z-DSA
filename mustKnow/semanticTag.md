### Semantic HTML Tags — Detailed Explanation (Interview-Oriented)

#### 1. What are Semantic Tags?

Semantic HTML tags are elements that **clearly describe their meaning and purpose** to both the browser and developers. Unlike non-semantic tags (`div`, `span`) that carry no inherent meaning, semantic tags convey **what type of content they contain**.

**Example**

```html
<header>Header content</header>   <!-- semantic -->
<div>Header content</div>         <!-- non-semantic -->
```

---

#### 2. Why Semantic Tags Matter

Semantic tags are critical for:

1. **Accessibility**

   * Screen readers and assistive technologies rely on semantic structure.
   * Improves navigation for visually impaired users.

2. **SEO (Search Engine Optimization)**

   * Search engines understand page structure better.
   * Content relevance and ranking improve.

3. **Code Readability & Maintainability**

   * Easier for developers to understand the layout.
   * Reduces dependency on class names.

4. **Consistent Document Structure**

   * Encourages standardized layouts across applications.

---

#### 3. Common Semantic HTML Tags and Their Purpose

##### 3.1 `<header>`

* Represents introductory content or navigational aids.
* Can be used inside `body`, `section`, or `article`.

```html
<header>
  <h1>Blog Title</h1>
  <nav>...</nav>
</header>
```

Do **not** confuse with page header only; multiple headers are allowed.

---

##### 3.2 `<nav>`

* Contains primary navigation links.
* Used for menus, table of contents, breadcrumbs.

```html
<nav>
  <a href="/">Home</a>
  <a href="/about">About</a>
</nav>
```

Avoid placing non-navigation links inside `nav`.

---

##### 3.3 `<main>`

* Represents the **main content** of the document.
* Must be **unique** (only one per page).
* Cannot be a child of `header`, `footer`, `article`, or `nav`.

```html
<main>
  <h2>Main Content</h2>
</main>
```

---

##### 3.4 `<section>`

* Groups related content with a **thematic purpose**.
* Usually contains a heading.

```html
<section>
  <h2>Features</h2>
  <p>Feature details...</p>
</section>
```

Use `section` only when content has a clear topic.

---

##### 3.5 `<article>`

* Represents **self-contained, independent content**.
* Suitable for blogs, news articles, comments, cards.

```html
<article>
  <h2>Blog Post</h2>
  <p>Post content...</p>
</article>
```

Rule of thumb:
If it can be reused or syndicated independently → `article`.

---

##### 3.6 `<aside>`

* Contains **supplementary content** related to main content.
* Examples: ads, sidebars, related links.

```html
<aside>
  <h3>Related Posts</h3>
</aside>
```

---

##### 3.7 `<footer>`

* Represents footer for a section or page.
* Contains metadata, copyright, author info, links.

```html
<footer>
  <p>© 2025 Company</p>
</footer>
```

Can be used multiple times.

---

##### 3.8 `<figure>` and `<figcaption>`

* Used for media content with a caption.

```html
<figure>
  <img src="chart.png" alt="Sales Chart">
  <figcaption>Monthly Sales</figcaption>
</figure>
```

---

##### 3.9 `<address>`

* Provides contact information for the author or owner.

```html
<address>
  Written by <a href="mailto:test@mail.com">John</a>
</address>
```

Not for arbitrary addresses—only author/contact info.

---

##### 3.10 `<time>`

* Represents a date or time in a machine-readable format.

```html
<time datetime="2025-12-18">Dec 18, 2025</time>
```

Helpful for SEO and crawlers.

---

#### 4. Semantic vs Non-Semantic Tags

| Semantic | Non-Semantic |
| -------- | ------------ |
| header   | div          |
| nav      | span         |
| main     | div          |
| section  | div          |
| article  | div          |

---

#### 5. Real-World Page Structure Example

```html
<body>
  <header>
    <nav>Navigation</nav>
  </header>

  <main>
    <article>
      <header>
        <h1>Post Title</h1>
      </header>
      <section>
        <p>Post content</p>
      </section>
      <footer>
        <time datetime="2025-12-18">Dec 18</time>
      </footer>
    </article>

    <aside>
      Related content
    </aside>
  </main>

  <footer>
    Copyright info
  </footer>
</body>
```

---

#### 6. Common Interview Follow-Up Questions

1. **Can semantic tags replace ARIA roles?**
   Yes, semantic tags reduce the need for ARIA, but ARIA is still required in complex UI components.

2. **Is `section` same as `div`?**
   No. `section` has semantic meaning; `div` does not.

3. **When to use `article` vs `section`?**

   * `article`: Independent content
   * `section`: Thematic grouping within content

4. **Can we style semantic tags like divs?**
   Yes, CSS applies the same way.

---

#### 7. Key Interview One-Liner (Must Remember)

> “Semantic HTML improves accessibility, SEO, and maintainability by providing meaningful structure to web content.”

If you want, I can convert this into **Notion-style toggle notes** or provide **grilling-level interview Q&A** specifically asked in frontend interviews.
