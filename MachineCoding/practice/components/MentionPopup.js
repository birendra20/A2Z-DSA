import React, { useState } from 'react'
import { getToolSuggestions } from '../utils/mockTools'
import '../styles/popup.css'

function MentionPopup({ visible, position, query, onSelect, highlightedIndex }) {
  const [suggestions] = useState(() => getToolSuggestions(query))

  if (!visible) return null

  const filteredSuggestions = getToolSuggestions(query)

  return (
    <div
      className="mention-popup"
      style={{
        top: `${position.top}px`,
        left: `${position.left}px`
      }}
    >
      {filteredSuggestions.length === 0 ? (
        <div className="mention-popup-empty">No tools found</div>
      ) : (
        filteredSuggestions.map((suggestion, index) => (
          <button
            key={suggestion.id}
            className={`mention-item ${index === highlightedIndex ? 'highlighted' : ''}`}
            onClick={() => onSelect(suggestion)}
            onMouseDown={(e) => e.preventDefault()} // Prevent editor blur
          >
            <div className="mention-item-icon">{suggestion.icon}</div>
            <div className="mention-item-text">
              <div className="mention-item-name">{suggestion.displayName}</div>
            </div>
          </button>
        ))
      )}
    </div>
  )
}

export default MentionPopup
