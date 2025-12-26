# 📝 InstructionsEditor Practice Project

## 🎯 Purpose
This is a simplified, standalone version of the InstructionsEditor component designed for learning and experimentation in CodeSandbox.

## 🚀 How to Use in CodeSandbox

### Step 1: Create New React Sandbox
1. Go to [codesandbox.io](https://codesandbox.io)
2. Click "Create Sandbox"
3. Select "React" template

### Step 2: Copy Files
Copy all files from this `practice/` directory into your CodeSandbox project:
- Replace `App.js` with our `App.js`
- Copy all files from `components/` folder
- Copy all files from `styles/` folder
- Copy all files from `utils/` folder
- Update `package.json` if needed

### Step 3: Run
The app should automatically run. You'll see a rich text editor with:
- Floating toolbar (select text to see it)
- Auto-formatting (type `1.` + space or `*` + space)
- @Mentions (type `@` to see suggestions)
- Keyboard shortcuts

## 🎓 Learning Path

### 1. Start with the Basics
- Open `components/SimpleEditor.js`
- Understand how `contentEditable` works
- See how we track cursor position

### 2. Explore Formatting
- Check `utils/formatting.js`
- See how `document.execCommand` works
- Try adding new formatting options

### 3. Study the Toolbar
- Open `components/Toolbar.js`
- Understand selection tracking
- Learn about position calculation

### 4. Dive into Mentions
- Open `components/MentionPopup.js`
- See how @ detection works
- Understand filtering logic

### 5. Experiment!
- Try modifying styles in `styles/` folder
- Add new keyboard shortcuts
- Create custom formatting buttons

## 📚 Key Concepts Demonstrated

### 1. contentEditable
```javascript
<div
  contentEditable="true"
  onInput={handleInput}
  onKeyDown={handleKeyDown}
/>
```

### 2. Selection API
```javascript
const selection = window.getSelection()
const range = selection.getRangeAt(0)
const rect = range.getBoundingClientRect()
```

### 3. document.execCommand
```javascript
document.execCommand('bold', false, null)
document.execCommand('insertUnorderedList', false, null)
```

### 4. Event Handling
```javascript
// Global selection tracking
document.addEventListener('selectionchange', handleSelectionChange)

// Keyboard shortcuts
if (e.metaKey && e.key === 'b') {
  e.preventDefault()
  document.execCommand('bold', false, null)
}
```

## 🔧 Customization Ideas

1. **Add More Formatting:**
   - Headings (H1, H2, H3)
   - Code blocks
   - Blockquotes

2. **Enhance Mentions:**
   - Add icons
   - Group by category
   - Show descriptions

3. **Improve UX:**
   - Add animations
   - Better keyboard navigation
   - Undo/redo support

4. **Styling:**
   - Dark mode
   - Custom themes
   - Different toolbar positions

## 📖 Related Documentation

See `InstructionsEditor.md` for detailed explanation of the full implementation.

## 🐛 Troubleshooting

### Toolbar not appearing?
- Make sure you're selecting text (not just clicking)
- Check browser console for errors

### Auto-formatting not working?
- Ensure you're typing at the start of a line
- Check that space key is triggering the handler

### Mentions not showing?
- Verify @ character is being detected
- Check mockTools.js has data

## 💡 Tips

- Use browser DevTools to inspect the contentEditable element
- Console.log selection and range objects to understand them
- Experiment with different execCommand values
- Try breaking things to learn how they work!

---

**Happy Learning! 🚀**
