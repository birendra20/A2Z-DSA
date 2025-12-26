// Formatting utilities for the editor

/**
 * Execute a formatting command on the current selection
 */
export function executeFormatCommand(command, value = null) {
  document.execCommand(command, false, value)
}

/**
 * Check if a format is currently active
 */
export function isFormatActive(command) {
  return document.queryCommandState(command)
}

/**
 * Get the current line text before cursor
 */
export function getCurrentLineText(container, cursorPos) {
  if (container.nodeType !== Node.TEXT_NODE) {
    return ''
  }

  const {textContent} = container
  const lineStart = textContent.lastIndexOf('\n', cursorPos - 1) + 1
  const currentLine = textContent.substring(lineStart, cursorPos)

  return currentLine.trim()
}

/**
 * Delete text range
 */
export function deleteTextRange(container, start, end) {
  const deleteRange = document.createRange()
  deleteRange.setStart(container, start)
  deleteRange.setEnd(container, end)
  deleteRange.deleteContents()
}

/**
 * Get cursor position in text content
 */
export function getCursorPosition(contentRef) {
  const selection = window.getSelection()
  if (!selection.rangeCount) return 0

  const range = selection.getRangeAt(0)
  let cursorPosition = 0
  let foundCursor = false

  const walker = document.createTreeWalker(
    contentRef,
    NodeFilter.SHOW_TEXT,
    null,
    false
  )

  let currentPosition = 0
  while (walker.nextNode() && !foundCursor) {
    const textNode = walker.currentNode
    const textLength = textNode.textContent.length

    if (textNode === range.startContainer) {
      cursorPosition = currentPosition + range.startOffset
      foundCursor = true
    } else {
      currentPosition += textLength
    }
  }

  return cursorPosition
}

/**
 * Simple serialization - convert HTML to plain text with formatting markers
 */
export function serializeContent(contentRef) {
  if (!contentRef) return ''
  
  // For this simple version, just return the HTML
  // In production, you'd convert to a custom format
  return contentRef.innerHTML
}

/**
 * Simple deserialization - load HTML content
 */
export function deserializeContent(contentRef, html) {
  if (!contentRef) return
  
  contentRef.innerHTML = html
}
