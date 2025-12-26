import React, { useEffect, useState } from 'react'
import { executeFormatCommand, isFormatActive } from '../utils/formatting'
import '../styles/toolbar.css'

function Toolbar({ editorRef, visible, position }) {
  const [activeFormats, setActiveFormats] = useState({
    bold: false,
    italic: false,
    underline: false,
    strikeThrough: false,
    insertUnorderedList: false,
    insertOrderedList: false
  })

  // Update active formats based on current selection
  useEffect(() => {
    if (!visible) return

    const updateFormats = () => {
      setActiveFormats({
        bold: isFormatActive('bold'),
        italic: isFormatActive('italic'),
        underline: isFormatActive('underline'),
        strikeThrough: isFormatActive('strikeThrough'),
        insertUnorderedList: isFormatActive('insertUnorderedList'),
        insertOrderedList: isFormatActive('insertOrderedList')
      })
    }

    updateFormats()
    document.addEventListener('selectionchange', updateFormats)
    return () => document.removeEventListener('selectionchange', updateFormats)
  }, [visible])

  const handleFormat = (command) => {
    executeFormatCommand(command)
    
    // Refocus editor
    if (editorRef.current) {
      editorRef.current.focus()
    }
  }

  if (!visible) return null

  const buttons = [
    { command: 'bold', icon: 'B', tooltip: 'Bold (⌘B)', style: { fontWeight: 'bold' } },
    { command: 'italic', icon: 'I', tooltip: 'Italic (⌘I)', style: { fontStyle: 'italic' } },
    { command: 'underline', icon: 'U', tooltip: 'Underline (⌘U)', style: { textDecoration: 'underline' } },
    { command: 'strikeThrough', icon: 'S', tooltip: 'Strikethrough', style: { textDecoration: 'line-through' } },
    { type: 'divider' },
    { command: 'insertUnorderedList', icon: '•', tooltip: 'Bullet List (⌘⇧8)' },
    { command: 'insertOrderedList', icon: '1.', tooltip: 'Numbered List (⌘⇧7)' }
  ]

  return (
    <div
      className="toolbar-container"
      style={{
        top: `${position.top}px`,
        left: `${position.left}px`
      }}
    >
      <div className="toolbar">
        {buttons.map((button, index) => {
          if (button.type === 'divider') {
            return <div key={`divider-${index}`} className="toolbar-divider" />
          }

          const isActive = activeFormats[button.command]

          return (
            <button
              key={button.command}
              className={`toolbar-button ${isActive ? 'active' : ''}`}
              onClick={() => handleFormat(button.command)}
              onMouseDown={(e) => e.preventDefault()} // Prevent editor blur
              data-tooltip={button.tooltip}
              style={button.style}
            >
              {button.icon}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default Toolbar
