// Mock tools data for @mention functionality
export const mockTools = [
  {
    id: 1,
    name: 'Slack',
    slug: 'slack',
    icon: '💬',
    actions: [
      { id: 1, name: 'Send Message', slug: 'send_message' },
      { id: 2, name: 'Create Channel', slug: 'create_channel' },
      { id: 3, name: 'Invite User', slug: 'invite_user' }
    ]
  },
  {
    id: 2,
    name: 'Gmail',
    slug: 'gmail',
    icon: '📧',
    actions: [
      { id: 4, name: 'Send Email', slug: 'send_email' },
      { id: 5, name: 'Read Email', slug: 'read_email' },
      { id: 6, name: 'Search Emails', slug: 'search_emails' }
    ]
  },
  {
    id: 3,
    name: 'Google Calendar',
    slug: 'google_calendar',
    icon: '📅',
    actions: [
      { id: 7, name: 'Create Event', slug: 'create_event' },
      { id: 8, name: 'List Events', slug: 'list_events' },
      { id: 9, name: 'Delete Event', slug: 'delete_event' }
    ]
  },
  {
    id: 4,
    name: 'Notion',
    slug: 'notion',
    icon: '📝',
    actions: [
      { id: 10, name: 'Create Page', slug: 'create_page' },
      { id: 11, name: 'Update Page', slug: 'update_page' },
      { id: 12, name: 'Search Pages', slug: 'search_pages' }
    ]
  },
  {
    id: 5,
    name: 'GitHub',
    slug: 'github',
    icon: '🐙',
    actions: [
      { id: 13, name: 'Create Issue', slug: 'create_issue' },
      { id: 14, name: 'Create PR', slug: 'create_pr' },
      { id: 15, name: 'List Repos', slug: 'list_repos' }
    ]
  }
]

// Convert tools to flat suggestions list
export function getToolSuggestions(query = '') {
  const suggestions = []
  const lowerQuery = query.toLowerCase()

  mockTools.forEach(tool => {
    tool.actions.forEach(action => {
      const displayName = `${tool.name} - ${action.name}`
      const searchText = `${tool.name} ${action.name}`.toLowerCase()

      if (!query || searchText.includes(lowerQuery)) {
        suggestions.push({
          id: `${tool.slug}-${action.slug}`,
          tool,
          action,
          displayName,
          icon: tool.icon
        })
      }
    })
  })

  return suggestions
}
