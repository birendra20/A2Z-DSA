import React, { useRef, useState, useEffect, useCallback } from 'react'
import Toolbar from './Toolbar'
import {
  executeFormatCommand,
  getCurrentLineText,
  deleteTextRange
} from '../utils/formatting'
import '../styles/editor.css'

function SimpleEditor() {
  const editorRef = useRef(null)
  
  // Toolbar state
  const [showToolbar, setShowToolbar] = useState(false)
  const [toolbarPosition, setToolbarPosition] = useState({ top: 0, left: 0 })

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
          
        default:
          break
      }
    }
  }, [])

  // Handle content changes (just for placeholder)
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
  }, [])

  return (
    <div className="editor-wrapper">
      <div className="editor-header">
        <h1>📝 Simple Editor Practice</h1>
        <p>Try the features: Select text for toolbar or use auto-formatting!</p>
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
• Type '1. ' followed by space for numbered list
• Type '* ' or '- ' followed by space for bullet list
• Use Cmd+B for bold, Cmd+I for italic, Cmd+U for underline"
          onInput={handleInput}
          onKeyDown={handleKeyDown}
          data-empty="true"
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
        </div>
      </div>
    </div>
  )
}

export default SimpleEditor
