# 🚀 CodeSandbox Setup Guide

## Quick Start (Recommended)

### Option 1: Direct Upload to CodeSandbox

1. **Go to CodeSandbox**: Visit [codesandbox.io](https://codesandbox.io)

2. **Create New Sandbox**: Click "Create Sandbox" → Select "React" template

3. **Upload Files**: 
   - Delete the default `src/` folder content
   - Upload all files from this `practice/` directory maintaining the folder structure

4. **File Structure Should Look Like**:
   ```
   practice/
   ├── public/
   │   └── index.html
   ├── components/
   │   ├── SimpleEditor.js
   │   └── Toolbar.js
   ├── styles/
   │   ├── editor.css
   │   └── toolbar.css
   ├── utils/
   │   └── formatting.js
   ├── App.js
   ├── index.js
   ├── package.json
   └── README.md
   ```

5. **Run**: CodeSandbox will automatically install dependencies and run the app!

---

## Option 2: Manual File Creation

If you prefer to create files manually in CodeSandbox:

### Step 1: Create Folder Structure
```
src/
├── components/
├── styles/
└── utils/
```

### Step 2: Copy Files in This Order

1. **Utils first** (no dependencies):
   - `utils/formatting.js`

2. **Styles** (pure CSS):
   - `styles/editor.css`
   - `styles/toolbar.css`

3. **Components** (depend on utils/styles):
   - `components/Toolbar.js`
   - `components/SimpleEditor.js`

4. **Main files**:
   - `App.js`
   - `index.js`

5. **Config**:
   - `package.json` (CodeSandbox will auto-install)
   - `public/index.html`

---

## Option 3: Local Development

If you want to run locally first:

```bash
# 1. Navigate to practice directory
cd practice/

# 2. Install dependencies
npm install

# 3. Start development server
npm start

# 4. Open browser to http://localhost:3000
```

Then copy the working code to CodeSandbox!

---

## ✅ Verification Checklist

After setup, verify these features work:

- [ ] Editor loads with placeholder text
- [ ] Can type and see text
- [ ] Select text → Toolbar appears above selection
- [ ] Click toolbar buttons → Text formats (bold, italic, etc.)
- [ ] Type `1.` + space → Numbered list starts
- [ ] Type `*` + space → Bullet list starts
- [ ] Keyboard shortcuts work (Cmd+B, Cmd+I, etc.)

---

## 🐛 Troubleshooting

### Issue: "Module not found"
**Solution**: Make sure folder structure matches exactly. Check import paths.

### Issue: Styles not applying
**Solution**: Verify CSS files are imported in the correct components.

### Issue: Toolbar not appearing
**Solution**: 
- Check browser console for errors
- Make sure you're **selecting text** (not just clicking)
- Verify `styles/toolbar.css` is imported

### Issue: Auto-formatting not working
**Solution**:
- Type at the **start of a line**
- Pattern must be exact: `1.` or `*` or `-`
- Must press **space** after the pattern

---

## 📚 Learning Tips

1. **Start Simple**: 
   - First, just get the editor rendering
   - Then add toolbar
   - Then auto-formatting

2. **Use Console**:
   ```javascript
   // Add console.logs to understand flow
   console.log('Selection:', window.getSelection())
   console.log('Range:', selection.getRangeAt(0))
   ```

3. **Inspect Elements**:
   - Right-click editor → Inspect
   - See the contentEditable div
   - Watch how HTML changes as you format

4. **Experiment**:
   - Change toolbar position calculation
   - Add new formatting buttons
   - Try different auto-format patterns

---

## 🎯 Next Steps

Once you understand the basics:

1. **Add Features**:
   - Headings (H1, H2, H3)
   - Code blocks
   - Links
   - Images

2. **Improve UX**:
   - Animations
   - Better keyboard navigation
   - Undo/redo

3. **Optimize**:
   - Debounce input handler
   - Memoize expensive calculations
   - Add loading states

4. **Compare**:
   - Open the full InstructionsEditor
   - See how concepts map to production code
   - Understand the custom hooks

---

## 📖 Resources

- **contentEditable API**: [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/contentEditable)
- **document.execCommand**: [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/API/Document/execCommand)
- **Selection API**: [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/API/Selection)
- **Range API**: [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/API/Range)

---

**Happy Coding! 🎉**

If you have questions, check the comments in the code or refer to `InstructionsEditor.md` for detailed explanations.
