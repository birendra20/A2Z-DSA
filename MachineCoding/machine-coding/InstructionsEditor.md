# 📝 InstructionsEditor Component Documentation

## Overview

The **InstructionsEditor** is a sophisticated rich text editor component built for creating AI agent instructions. It combines rich text formatting, @mentions for tools/actions, a floating Slack-like toolbar, and auto-formatting capabilities.

---

## 🏗️ Architecture

### Technology Stack
- **React** (with hooks)
- **contentEditable** API for rich text editing
- **document.execCommand** for formatting operations
- **Custom hooks** for state management and functionality separation
- **Ant Design** components (Button, Tooltip, Dropdown)

### File Structure
```
instructions/
├── components/
│   ├── InstructionsEditor.js       # Main editor component
│   ├── EditorToolbar.js            # Floating formatting toolbar
│   ├── SuggestionPopup.js          # @mention suggestions popup
│   └── styles.module.scss          # Component styles
└── hooks/
    ├── useToolSearch.js            # Fetches and filters tools
    ├── useMentionState.js          # Manages mention popup state
    ├── useContentEditableRef.js    # Handles content serialization
    ├── useKeyboardHandlers.js      # Keyboard navigation for mentions
    └── usePopupPosition.js         # Calculates popup positions
```

---

## 🎯 Core Features

### 1. Rich Text Formatting 🎨

Supports the following formatting options:
- **Bold** (Cmd/Ctrl + B)
- **Italic** (Cmd/Ctrl + I)
- **Underline** (Cmd/Ctrl + U)
- **Strikethrough**
- **Numbered Lists** (Cmd/Ctrl + Shift + 7)
- **Bullet Lists** (Cmd/Ctrl + Shift + 8)

### 2. Floating Toolbar 🎪

**Behavior:**
- Appears only when text is selected
- Positioned 50px above the selection
- Horizontally centered on the selection
- Dark theme styling (#1a1d21 background)
- Follows selection changes in real-time

**Implementation:**
```javascript
// Listens to global selectionchange events
useEffect(() => {
  const handleSelectionChange = () => {
    const selection = window.getSelection()
    const isInEditor = contentRef.current.contains(selection.anchorNode)
    const hasSelection = !selection.isCollapsed && selection.toString().length > 0
    
    if (isInEditor && hasSelection) {
      setHasTextSelection(true)
      
      // Calculate position
      const range = selection.getRangeAt(0)
      const rect = range.getBoundingClientRect()
      const editorRect = contentRef.current.getBoundingClientRect()
      
      const top = rect.top - editorRect.top - 50
      const left = rect.left - editorRect.left + (rect.width / 2)
      
      setToolbarPosition({ top, left })
    }
  }
  
  document.addEventListener('selectionchange', handleSelectionChange)
  return () => document.removeEventListener('selectionchange', handleSelectionChange)
}, [contentRef])
```

### 3. Auto-formatting Lists 📋

**Slack-like auto-formatting:**

| Input | Result |
|-------|--------|
| `1.` + space | Numbered list |
| `*` + space | Bullet list |
| `-` + space | Bullet list |

**Implementation Flow:**
1. Detect space key press
2. Look backward from cursor to find line start
3. Check if line matches pattern (`1.`, `*`, `-`)
4. Prevent default space insertion
5. Delete the pattern text
6. Execute appropriate list command

```javascript
if (e.key === ' ' && !e.ctrlKey && !e.metaKey && !e.altKey) {
  const currentLine = getCurrentLineText()
  const trimmedLine = currentLine.trim()
  
  if (trimmedLine === '1.') {
    e.preventDefault()
    deletePatternText()
    document.execCommand('insertOrderedList', false, null)
  }
  
  if (trimmedLine === '*' || trimmedLine === '-') {
    e.preventDefault()
    deletePatternText()
    document.execCommand('insertUnorderedList', false, null)
  }
}
```

### 4. @Mention System 🏷️

**Features:**
- Type `@` to trigger tool/action suggestions
- Real-time filtering as you type
- Keyboard navigation (↑/↓ arrows, Enter to select)
- Displays tool icons and names
- Inserts special mention tokens

**Workflow:**

```
User types "@"
    ↓
Detect @ character
    ↓
Show SuggestionPopup with all tools
    ↓
User types "slack"
    ↓
Filter suggestions (search("slack"))
    ↓
User selects "Slack - Send Message"
    ↓
Insert mention token
    ↓
Replace @ and query text with token element
```

**Mention Detection Logic:**
```javascript
// 1. Detect @ character
if (charBeforeCursor === '@') {
  setIsTypingMention(true)
  openSuggestionsAt(range.getBoundingClientRect())
  search('')  // Show all tools
}

// 2. Track query after @
const lastAtPos = findLastAtSymbol()
if (lastAtPos !== -1) {
  const afterAt = textContent.substring(lastAtPos + 1, cursorPosition)
  
  // Only show if no spaces (still typing)
  if (!afterAt.includes(' ')) {
    const queryText = afterAt.trim()
    search(queryText)  // Filter tools
  }
}
```

**Token Insertion:**
```javascript
const handleTokenSelect = (suggestion) => {
  const tokenData = {
    tool: suggestion.tool.slug,
    action: suggestion.action?.slug,
    name: `${suggestion.tool.name} - ${suggestion.action.name}`,
    icon: suggestion.icon
  }
  
  // Delete @ and typed text
  deleteRange.setStart(container, atPosition)
  deleteRange.setEnd(container, cursorPosition)
  deleteRange.deleteContents()
  
  // Insert token as special HTML element
  insertTokenAtRange(tokenData, insertRange)
}
```

### 5. Content Serialization 💾

**Purpose:** Convert between HTML (for display) and a custom format (for storage)

#### Serialization (HTML → Storage)
```javascript
const getSerializedContentWithTokens = () => {
  // Converts HTML to Markdown-like format
  // Mention tokens become JSON objects
  return getSerializedContent()
}
```

**Example:**
```javascript
// HTML in editor:
<p>Send a message using <span data-mention-token>Slack - Send Message</span></p>

// Serialized output:
"Send a message using {\"tool\":\"slack\",\"action\":\"send_message\",\"name\":\"Slack - Send Message\"}"
```

#### Deserialization (Storage → HTML)
```javascript
useEffect(() => {
  if (initialSerialized) {
    loadSerializedContent(initialSerialized)
    // Converts JSON tokens back to HTML mention elements
  }
}, [initialSerialized])
```

### 6. Keyboard Shortcuts ⌨️

| Shortcut | Action |
|----------|--------|
| `Cmd/Ctrl + B` | Bold |
| `Cmd/Ctrl + I` | Italic |
| `Cmd/Ctrl + U` | Underline |
| `Cmd/Ctrl + Shift + 7` | Numbered List |
| `Cmd/Ctrl + Shift + 8` | Bullet List |
| `↑` / `↓` | Navigate mentions (when popup open) |
| `Enter` | Select mention (when popup open) |
| `Esc` | Close mention popup |

---

## 🔧 Component API

### Props

```typescript
interface InstructionsEditorProps {
  initialSerialized?: string;      // Initial content (serialized format)
  onChange?: (content: string) => void;  // Called when content changes
  placeholder?: string;             // Placeholder text
  className?: string;               // Additional CSS class
  style?: React.CSSProperties;      // Inline styles
}
```

### Ref Methods

```typescript
interface InstructionsEditorRef {
  serialize: () => string;          // Get current content (serialized)
  deserialize: (content: string) => void;  // Load content
}
```

### Usage Example

```javascript
import InstructionsEditor from './components/InstructionsEditor'

function MyComponent() {
  const editorRef = useRef(null)
  const [content, setContent] = useState('')
  
  const handleSave = () => {
    const serialized = editorRef.current.serialize()
    // Save to backend
  }
  
  return (
    <InstructionsEditor
      ref={editorRef}
      initialSerialized={content}
      onChange={setContent}
      placeholder="Enter instructions..."
    />
  )
}
```

---

## 🎨 State Management

### Component State

```javascript
// UI State
const [isTypingMention, setIsTypingMention] = useState(false)
const [isSelecting, setIsSelecting] = useState(false)
const [hasTextSelection, setHasTextSelection] = useState(false)
const [toolbarPosition, setToolbarPosition] = useState({ top: 0, left: 0 })

// Refs
const isInitialized = useRef(false)
const lastSerializedContent = useRef('')
const isMountedRef = useRef(true)
```

### Custom Hooks

```javascript
// Tool search and filtering
const { tools, loading, search } = useToolSearch()

// Mention popup state
const { isOpen, highlightedIndex, suggestions, openSuggestionsAt, close } = useMentionState()

// Content management
const { contentRef, insertTokenAtRange, loadSerializedContent, getSerializedContent } = useContentEditableRef()

// Popup positioning
const { position, updatePosition, hidePosition } = usePopupPosition()
```

---

## 🔄 Data Flow

```
┌─────────────────────────────────────────────────────────────┐
│                       User Interaction                       │
└───────────────────────────┬─────────────────────────────────┘
                            │
                ┌───────────┴───────────┐
                │                       │
        ┌───────▼────────┐      ┌──────▼──────┐
        │  handleKeyDown │      │ Toolbar     │
        │  - Shortcuts   │      │ Click       │
        │  - Auto-format │      └──────┬──────┘
        └───────┬────────┘             │
                │                      │
                └──────────┬───────────┘
                           │
                ┌──────────▼──────────┐
                │  contentEditable    │
                │  content updates    │
                └──────────┬──────────┘
                           │
                ┌──────────▼──────────┐
                │  onInput event      │
                └──────────┬──────────┘
                           │
                ┌──────────▼──────────┐
                │ handleContentChange │
                │  - Check for @      │
                │  - Update placeholder│
                │  - Serialize        │
                └──────────┬──────────┘
                           │
                ┌──────────▼──────────┐
                │  onChange callback  │
                │  (notify parent)    │
                └─────────────────────┘
```

---

## 🎭 Event Handlers

### handleKeyDown
**Purpose:** Handle keyboard shortcuts and auto-formatting

**Responsibilities:**
1. Auto-formatting detection (`1.`, `*`, `-`)
2. Keyboard shortcuts (Cmd+B, Cmd+Shift+7, etc.)
3. Delegate to mention keyboard handler

### handleContentChange
**Purpose:** Respond to content changes

**Responsibilities:**
1. Update placeholder visibility
2. Detect @ mentions
3. Calculate cursor position
4. Filter mention suggestions
5. Serialize and trigger onChange

### handleTokenSelect
**Purpose:** Insert selected mention token

**Responsibilities:**
1. Create token data object
2. Find and delete @ and query text
3. Insert token element
4. Close suggestion popup
5. Trigger content change

### handleBlur
**Purpose:** Final cleanup on blur

**Responsibilities:**
1. Close mention popup (if not selecting)
2. Update placeholder state
3. Final onChange call

---

## 🎨 Styling

### Toolbar Styles
```scss
.editorToolbar {
  background: #1a1d21;           // Dark background
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  
  .toolbarButton {
    color: #e9e9ea;              // Light text
    
    &:hover {
      background: #35373b;
    }
    
    &.active {
      background: #35373b;
    }
  }
}
```

### Editor Container
```scss
.editorContainer {
  position: relative;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  background: #fff;
  
  .editorContent {
    max-height: 65vh;
    overflow-y: auto;
    padding: 12px;
    min-height: 400px;
    
    // Placeholder
    &[data-empty="true"]::before {
      content: attr(data-placeholder);
      color: #a1a1a1;
      pointer-events: none;
    }
  }
}
```

---

## 🐛 Common Issues & Solutions

### Issue 1: Cursor jumps when clicking toolbar
**Solution:** Use `onMouseDown={(e) => e.preventDefault()}` on toolbar buttons to prevent focus loss

### Issue 2: Mention popup appears at wrong position
**Solution:** Calculate position relative to editor container, not viewport

### Issue 3: Content not saving
**Solution:** Ensure `onChange` is called only when content actually changes (use `lastSerializedContent` ref)

### Issue 4: Placeholder not showing
**Solution:** Use `data-empty` attribute and CSS `::before` pseudo-element

### Issue 5: Formatting lost on reload
**Solution:** Properly deserialize content using `loadSerializedContent`

---

## 🚀 Performance Optimizations

1. **useCallback** for event handlers to prevent re-renders
2. **Refs** for values that don't need to trigger re-renders
3. **Debouncing** onChange calls (only when content changes)
4. **Event delegation** for selection tracking (single global listener)
5. **Conditional rendering** of toolbar (only when needed)

---

## 🔮 Future Enhancements

- [ ] Add link insertion support
- [ ] Support for images/attachments
- [ ] Code block formatting
- [ ] Markdown import/export
- [ ] Collaborative editing
- [ ] Undo/redo history
- [ ] Custom emoji picker
- [ ] Slash commands (like Notion)

---

## 📚 Related Components

- **EditorToolbar**: Formatting toolbar with buttons
- **SuggestionPopup**: Autocomplete popup for mentions
- **useToolSearch**: Hook for fetching and filtering tools
- **useMentionState**: Hook for managing mention popup state
- **useContentEditableRef**: Hook for content serialization

---

## 🤝 Contributing

When modifying this component:

1. **Test all keyboard shortcuts** on both Mac and Windows
2. **Verify serialization/deserialization** doesn't lose data
3. **Check toolbar positioning** with various selection sizes
4. **Test mention filtering** with different queries
5. **Ensure accessibility** (ARIA labels, keyboard navigation)

---

## 📝 License

Part of the CometChat Customer Dashboard project.

---

**Last Updated:** December 16, 2025
**Maintainer:** Development Team
