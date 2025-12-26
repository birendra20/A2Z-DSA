# 🔄 InstructionsEditor Flow Diagrams

## 1. Component Hierarchy

```
App
 └── SimpleEditor
      ├── Toolbar (conditional)
      │    └── Format Buttons
      │
      ├── Editor Content (contentEditable div)
      │
      └── MentionPopup (conditional)
           └── Suggestion Items
```

---

## 2. Data Flow - Text Selection → Toolbar

```
User selects text
      ↓
selectionchange event fires (global)
      ↓
handleSelectionChange()
      ↓
Check: Is selection in editor? Has text?
      ↓
     YES → Calculate position
      ↓
getBoundingClientRect() for selection
      ↓
Calculate relative to editor container
      ↓
setShowToolbar(true)
setToolbarPosition({ top, left })
      ↓
Toolbar component renders
      ↓
Positioned absolutely at calculated coords
```

---

## 3. Data Flow - Auto-formatting

```
User types "1."
      ↓
User presses SPACE
      ↓
handleKeyDown(e)
      ↓
Check: e.key === ' '?
      ↓
     YES → Get current line text
      ↓
getCurrentLineText(container, cursorPos)
      ↓
Check: currentLine === '1.'?
      ↓
     YES → e.preventDefault()
      ↓
deleteTextRange(container, lineStart, cursorPos)
      ↓
executeFormatCommand('insertOrderedList')
      ↓
Browser inserts <ol><li></li></ol>
      ↓
Cursor positioned in first list item
```

---

## 4. Data Flow - @Mentions

```
User types "@"
      ↓
handleInput()
      ↓
Get cursor position and text
      ↓
Check: Last character is '@'?
      ↓
     YES → Calculate popup position
      ↓
setShowMentions(true)
setMentionQuery('')
      ↓
MentionPopup renders
      ↓
Shows all tools (no filter)
      ↓
User types "slack"
      ↓
handleInput() again
      ↓
Find last @ position
      ↓
Extract text after @ ("slack")
      ↓
setMentionQuery('slack')
      ↓
MentionPopup re-renders
      ↓
getToolSuggestions('slack')
      ↓
Filters to Slack tools only
      ↓
User clicks suggestion
      ↓
handleMentionSelect(suggestion)
      ↓
Find @ position
      ↓
Delete @ and "slack"
      ↓
Create mention token element
      ↓
Insert token at cursor
      ↓
Add space after token
      ↓
Move cursor after space
      ↓
setShowMentions(false)
```

---

## 5. Keyboard Shortcut Flow

```
User presses Cmd+B
      ↓
handleKeyDown(e)
      ↓
Check: e.metaKey && e.key === 'b'?
      ↓
     YES → e.preventDefault()
      ↓
executeFormatCommand('bold')
      ↓
document.execCommand('bold', false, null)
      ↓
Browser wraps selection in <b> or <strong>
      ↓
Text appears bold
      ↓
selectionchange event fires
      ↓
Toolbar updates active state
      ↓
Bold button shows as active
```

---

## 6. Position Calculation (Toolbar)

```
Selection Rectangle (from getBoundingClientRect):
┌─────────────────────────────┐
│   Editor Container          │
│                             │
│   Some text [SELECTED] text │ ← Selection
│                             │
└─────────────────────────────┘

Step 1: Get selection rect
  rect = range.getBoundingClientRect()
  → { top: 150, left: 200, width: 80, ... }

Step 2: Get editor rect
  editorRect = editorRef.current.getBoundingClientRect()
  → { top: 100, left: 50, ... }

Step 3: Calculate relative position
  top = rect.top - editorRect.top - 50
      = 150 - 100 - 50
      = 0 (0px from editor top)
  
  left = rect.left - editorRect.left + (rect.width / 2)
       = 200 - 50 + 40
       = 190 (190px from editor left)

Step 4: Apply to toolbar
  <div style={{ 
    position: 'absolute',
    top: '0px',
    left: '190px',
    transform: 'translateX(-50%)'  // Center it
  }}>

Result:
┌─────────────────────────────┐
│   [Toolbar appears here]    │ ← 50px above
│   Editor Container          │
│                             │
│   Some text [SELECTED] text │
│                             │
└─────────────────────────────┘
```

---

## 7. State Management

```
SimpleEditor Component State:
┌──────────────────────────────────────┐
│ Toolbar State:                       │
│  - showToolbar: boolean              │
│  - toolbarPosition: { top, left }    │
│                                      │
│ Mention State:                       │
│  - showMentions: boolean             │
│  - mentionPosition: { top, left }    │
│  - mentionQuery: string              │
│  - highlightedIndex: number          │
│                                      │
│ Refs:                                │
│  - editorRef: HTMLDivElement         │
└──────────────────────────────────────┘

Event Listeners (Global):
┌──────────────────────────────────────┐
│ document.addEventListener(           │
│   'selectionchange',                 │
│   handleSelectionChange              │
│ )                                    │
└──────────────────────────────────────┘

Props Flow:
┌──────────────────────────────────────┐
│ SimpleEditor                         │
│   ↓ props                            │
│ Toolbar                              │
│   - editorRef                        │
│   - visible                          │
│   - position                         │
│                                      │
│ MentionPopup                         │
│   - visible                          │
│   - position                         │
│   - query                            │
│   - onSelect                         │
│   - highlightedIndex                 │
└──────────────────────────────────────┘
```

---

## 8. Mention Token Structure

```
Before Selection:
"Send a message using @slack"
                        ↑
                     cursor

After Selection:
"Send a message using [Slack - Send Message] "
                      └────────┬────────┘
                        mention token

HTML Structure:
<div contenteditable="true">
  Send a message using 
  <span class="mention-token" contenteditable="false">
    <span class="mention-token-icon">💬</span>
    <span>Slack - Send Message</span>
  </span>
  (space)
</div>
```

---

## 9. Auto-format Detection Logic

```
Text: "1."
Cursor: "1.|"  (after the dot)
         ↑
    
User presses SPACE

Step 1: Get text before cursor
  textBeforeCursor = "1."

Step 2: Find line start
  lineStart = textBeforeCursor.lastIndexOf('\n') + 1
            = -1 + 1
            = 0

Step 3: Extract current line
  currentLine = textBeforeCursor.substring(0, 2)
              = "1."

Step 4: Trim and check
  trimmedLine = currentLine.trim()
              = "1."
  
  if (trimmedLine === '1.') {
    // MATCH! Convert to list
  }

Step 5: Delete "1."
  deleteTextRange(container, 0, 2)

Step 6: Insert list
  executeFormatCommand('insertOrderedList')

Result:
  <ol>
    <li>|</li>  ← cursor here
  </ol>
```

---

## 10. Complete User Journey

```
1. User opens editor
   └─→ Sees placeholder text
   
2. User starts typing
   └─→ Placeholder disappears
   └─→ Text appears
   
3. User selects text
   └─→ Toolbar appears above
   └─→ Can click format buttons
   
4. User clicks Bold
   └─→ Text becomes bold
   └─→ Bold button shows active
   
5. User types "1. "
   └─→ Auto-converts to numbered list
   └─→ Cursor in first item
   
6. User types "@"
   └─→ Mention popup appears
   └─→ Shows all tools
   
7. User types "slack"
   └─→ Popup filters to Slack
   └─→ Shows 3 Slack actions
   
8. User clicks "Send Message"
   └─→ Token inserted
   └─→ Popup closes
   └─→ Cursor after token
   
9. User continues typing
   └─→ Normal text after token
   
10. User presses Cmd+B
    └─→ Text becomes bold
    └─→ No toolbar needed
```

---

## 11. File Dependencies

```
index.js
  └─→ App.js
       └─→ SimpleEditor.js
            ├─→ Toolbar.js
            │    ├─→ formatting.js
            │    └─→ toolbar.css
            │
            ├─→ MentionPopup.js
            │    ├─→ mockTools.js
            │    └─→ popup.css
            │
            ├─→ formatting.js
            ├─→ mockTools.js
            └─→ editor.css
```

---

## 12. Browser APIs Used

```
┌─────────────────────────────────────────┐
│ window.getSelection()                   │
│  └─→ Returns Selection object           │
│       └─→ selection.getRangeAt(0)       │
│            └─→ Returns Range object     │
│                 └─→ range.getBoundingClientRect() │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ document.execCommand(cmd, false, value) │
│  └─→ 'bold'                             │
│  └─→ 'italic'                           │
│  └─→ 'underline'                        │
│  └─→ 'strikeThrough'                    │
│  └─→ 'insertUnorderedList'              │
│  └─→ 'insertOrderedList'                │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ document.queryCommandState(cmd)         │
│  └─→ Returns true if format is active   │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ document.createRange()                  │
│  └─→ range.setStart(node, offset)       │
│  └─→ range.setEnd(node, offset)         │
│  └─→ range.deleteContents()             │
│  └─→ range.insertNode(element)          │
└─────────────────────────────────────────┘
```

---

These diagrams should help visualize how everything works together! 🎯
