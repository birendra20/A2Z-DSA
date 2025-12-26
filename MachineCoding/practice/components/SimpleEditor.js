import React, { useRef, useState, useEffect, useCallback } from 'react'
import Toolbar from './Toolbar'
import MentionPopup from './MentionPopup'
import {
  executeFormatCommand,
  getCurrentLineText,
  deleteTextRange,
  findLastAtPosition
} from '../utils/formatting'
import '../styles/editor.css'

function SimpleEditor() {
  const editorRef = useRef(null)
  
  // Toolbar state
  const [showToolbar, setShowToolbar] = useState(false)
  const [toolbarPosition, setToolbarPosition] = useState({ top: 0, left: 0 })
  
  // Mention state
  const [showMentions, setShowMentions] = useState(false)
  const [mentionPosition, setMentionPosition] = useState({ top: 0, left: 0 })
  const [mentionQuery, setMentionQuery] = useState('')
  const [highlightedIndex, setHighlightedIndex] = useState(0)

  // Track selection for toolbar
  useEffect(() => {
    const handleSelectionChange = () => {
      const selection = window.getSelection()
      
      if (!selection || !editorRef.current) {
        setShowToolbar(false)
        return
      }

      // Check if selection is within our editor
      const isInEditor = editorRef.current.contains(selection.anchorNode)
      const hasSelection = !selection.isCollapsed && selection.toString().length > 0

      if (isInEditor && hasSelection) {
        setShowToolbar(true)

        // Calculate toolbar position
        const range = selection.getRangeAt(0)
        const rect = range.getBoundingClientRect()
        const editorRect = editorRef.current.getBoundingClientRect()

        const top = rect.top - editorRect.top - 50
        const left = rect.left - editorRect.left + rect.width / 2

        setToolbarPosition({ top, left })
      } else {
        setShowToolbar(false)
      }
    }

    document.addEventListener('selectionchange', handleSelectionChange)
    return () => document.removeEventListener('selectionchange', handleSelectionChange)
  }, [])

  // Handle keyboard shortcuts and auto-formatting
  const handleKeyDown = useCallback((e) => {
    // Auto-formatting for lists
    if (e.key === ' ' && !e.ctrlKey && !e.metaKey && !e.altKey) {
      const selection = window.getSelection()
      if (selection.rangeCount > 0) {
        const range = selection.getRangeAt(0)
        const container = range.startContainer

        if (container.nodeType === Node.TEXT_NODE) {
          const cursorPos = range.startOffset
          const currentLine = getCurrentLineText(container, cursorPos)

          // Check for list patterns
          if (currentLine === '1.') {
            e.preventDefault()
            const lineStart = container.textContent.lastIndexOf('\n', cursorPos - 1) + 1
            deleteTextRange(container, lineStart, cursorPos)
            executeFormatCommand('insertOrderedList')
            return
          }

          if (currentLine === '*' || currentLine === '-') {
            e.preventDefault()
            const lineStart = container.textContent.lastIndexOf('\n', cursorPos - 1) + 1
            deleteTextRange(container, lineStart, cursorPos)
            executeFormatCommand('insertUnorderedList')
            return
          }
        }
      }
    }

    // Keyboard shortcuts
    if (e.ctrlKey || e.metaKey) {
      // List shortcuts with Shift
      if (e.shiftKey) {
        if (e.key === '7') {
          e.preventDefault()
          executeFormatCommand('insertOrderedList')
          return
        }
        if (e.key === '8') {
          e.preventDefault()
          executeFormatCommand('insertUnorderedList')
          return
        }
      }

      // Basic formatting shortcuts
      switch (e.key.toLowerCase()) {
        case 'b':
          e.preventDefault()
          executeFormatCommand('bold')
          return
        case 'i':
          e.preventDefault()
          executeFormatCommand('italic')
          return
        case 'u':
          e.preventDefault()
          executeFormatCommand('underline')
          return
        default:
          break
      }
    }

    // Navigate mentions with arrow keys
    if (showMentions) {
      if (e.key === 'ArrowDown') {
        e.preventDefault()
        setHighlightedIndex((prev) => Math.min(prev + 1, 14)) // Max 15 items
        return
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault()
        setHighlightedIndex((prev) => Math.max(prev - 1, 0))
        return
      }
      if (e.key === 'Escape') {
        e.preventDefault()
        setShowMentions(false)
        return
      }
    }
  }, [showMentions])

  // Handle content changes
  const handleInput = useCallback(() => {
    if (!editorRef.current) return

    const textContent = editorRef.current.textContent || ''
    
    // Update placeholder
    const isEmpty = !textContent.trim()
    if (isEmpty) {
      editorRef.current.setAttribute('data-empty', 'true')
    } else {
      editorRef.current.removeAttribute('data-empty')
    }

    // Check for @ mentions
    const selection = window.getSelection()
    if (!selection.rangeCount) {
      setShowMentions(false)
      return
    }

    const range = selection.getRangeAt(0)
    const cursorPos = range.startOffset
    const container = range.startContainer

    if (container.nodeType === Node.TEXT_NODE) {
      const text = container.textContent

      // Check if just typed @
      if (text[cursorPos - 1] === '@') {
        setShowMentions(true)
        setMentionQuery('')
        setHighlightedIndex(0)

        // Calculate mention popup position
        const rect = range.getBoundingClientRect()
        const editorRect = editorRef.current.getBoundingClientRect()
        
        setMentionPosition({
          top: rect.bottom - editorRect.top + 5,
          left: rect.left - editorRect.left
        })
        return
      }

      // Find last @ position
      const lastAtPos = findLastAtPosition(text, cursorPos)
      
      if (lastAtPos !== -1) {
        const afterAt = text.substring(lastAtPos + 1, cursorPos)
        
        // Only show if no spaces (still typing)
        if (!afterAt.includes(' ') && !afterAt.includes('\n')) {
          setShowMentions(true)
          setMentionQuery(afterAt.trim())
          setHighlightedIndex(0)
          return
        }
      }
    }

    setShowMentions(false)
  }, [])

  // Handle mention selection
  const handleMentionSelect = useCallback((suggestion) => {
    const selection = window.getSelection()
    if (!selection.rangeCount) return

    const range = selection.getRangeAt(0)
    const container = range.startContainer

    if (container.nodeType === Node.TEXT_NODE) {
      const text = container.textContent
      const cursorPos = range.startOffset
      
      // Find @ position
      const atPos = findLastAtPosition(text, cursorPos)
      
      if (atPos !== -1) {
        // Delete @ and query text
        deleteTextRange(container, atPos, cursorPos)

        // Insert mention token
        const mentionToken = document.createElement('span')
        mentionToken.className = 'mention-token'
        mentionToken.contentEditable = 'false'
        mentionToken.innerHTML = `
          <span class="mention-token-icon">${suggestion.icon}</span>
          <span>${suggestion.displayName}</span>
        `

        // Insert at cursor
        const insertRange = document.createRange()
        insertRange.setStart(container, atPos)
        insertRange.insertNode(mentionToken)

        // Add space after token
        const space = document.createTextNode(' ')
        mentionToken.parentNode.insertBefore(space, mentionToken.nextSibling)

        // Move cursor after space
        const newRange = document.createRange()
        newRange.setStartAfter(space)
        newRange.collapse(true)
        selection.removeAllRanges()
        selection.addRange(newRange)
      }
    }

    setShowMentions(false)
    editorRef.current.focus()
  }, [])

  return (
    <div className="editor-wrapper">
      <div className="editor-header">
        <h1>📝 InstructionsEditor Practice</h1>
        <p>Try the features: Select text for toolbar, type @ for mentions, or use auto-formatting!</p>
      </div>

      <div className="editor-container">
        <Toolbar
          editorRef={editorRef}
          visible={showToolbar}
          position={toolbarPosition}
        />

        <div
          ref={editorRef}
          className="editor-content"
          contentEditable="true"
          data-placeholder="Start typing instructions here...

Try these features:
• Select text to see the formatting toolbar
• Type @ to mention tools
• Type '1. ' followed by space for numbered list
• Type '* ' or '- ' followed by space for bullet list
• Use Cmd+B for bold, Cmd+I for italic, Cmd+U for underline"
          onInput={handleInput}
          onKeyDown={handleKeyDown}
          data-empty="true"
        />

        <MentionPopup
          visible={showMentions}
          position={mentionPosition}
          query={mentionQuery}
          onSelect={handleMentionSelect}
          highlightedIndex={highlightedIndex}
        />
      </div>

      <div className="editor-info">
        <h3>🎯 Quick Reference</h3>
        <div className="editor-info-grid">
          <div className="editor-info-item">
            <strong>Bold:</strong> <code>Cmd/Ctrl + B</code>
          </div>
          <div className="editor-info-item">
            <strong>Italic:</strong> <code>Cmd/Ctrl + I</code>
          </div>
          <div className="editor-info-item">
            <strong>Underline:</strong> <code>Cmd/Ctrl + U</code>
          </div>
          <div className="editor-info-item">
            <strong>Numbered List:</strong> <code>Cmd/Ctrl + Shift + 7</code>
          </div>
          <div className="editor-info-item">
            <strong>Bullet List:</strong> <code>Cmd/Ctrl + Shift + 8</code>
          </div>
          <div className="editor-info-item">
            <strong>Mentions:</strong> <code>Type @</code>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SimpleEditor
