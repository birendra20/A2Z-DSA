import { useState, useEffect, useMemo } from 'react';
import useDebounce from './useDebounce';
import './UserListAdvanced.css';

// Step 1: Define User interface
interface User {
  id: number;
  name: string;
  email: string;
}

type SortOrder = 'asc' | 'desc';
type EmailFilter = 'all' | '@gmail.com' | '@yahoo.com' | '@biz.com';

function UserListAdvanced() {
  // Step 2: Add states
  const [users, setUsers] = useState<User[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [emailFilter, setEmailFilter] = useState<EmailFilter>('all');
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc');
  const [loading, setLoading] = useState<boolean>(false);

  // Step 5: Add debounced search (300-500ms)
  const debouncedSearch = useDebounce(searchQuery, 300);

  // Step 3: Fetch data
  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Step 8: Wrap derived data in useMemo
  // Logical order: search → filter → sort
  const processedUsers = useMemo(() => {
    let result = [...users];

    // Step 5: Search by name OR email (case-insensitive)
    if (debouncedSearch) {
      const query = debouncedSearch.toLowerCase();
      result = result.filter((user) =>
        user.name.toLowerCase().includes(query) ||
        user.email.toLowerCase().includes(query)
      );
    }

    // Step 6: Filter by email domain
    if (emailFilter !== 'all') {
      result = result.filter((user) => user.email.includes(emailFilter));
    }

    // Step 7: Sort by name
    result.sort((a, b) => {
      const comparison = a.name.localeCompare(b.name);
      return sortOrder === 'asc' ? comparison : -comparison;
    });

    return result;
  }, [users, debouncedSearch, emailFilter, sortOrder]);

  // Step 9: Delete with confirmation
  const handleDelete = (id: number) => {
    const confirmed = window.confirm('Are you sure you want to delete this user?');
    if (confirmed) {
      // Optimistic UI update - no array mutation
      setUsers(users.filter((user) => user.id !== id));
    }
  };

  // Toggle sort order
  const toggleSort = () => {
    setSortOrder((prev) => (prev === 'asc' ? 'desc' : 'asc'));
  };

  // Step 10: Handle loading state
  if (loading) {
    return (
      <div className="user-list-container">
        <h1 className="user-list-heading">User List Advanced</h1>
        <div className="loading-message">Loading users...</div>
      </div>
    );
  }

  return (
    <div className="user-list-container">
      <h1 className="user-list-heading">User List Advanced</h1>

      {/* Step 5: Search input */}
      <input
        type="text"
        placeholder="Search by name or email"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-input"
      />

      {/* Controls container */}
      <div className="controls-container">
        {/* Step 6: Filter by email domain */}
        <div className="filter-group">
          <label htmlFor="email-filter">Filter by domain:</label>
          <select
            id="email-filter"
            value={emailFilter}
            onChange={(e) => setEmailFilter(e.target.value as EmailFilter)}
            className="filter-select"
          >
            <option value="all">All</option>
            <option value="@gmail.com">@gmail.com</option>
            <option value="@yahoo.com">@yahoo.com</option>
            <option value="@biz.com">@biz.com</option>
            <option value=".net">.net</option>
          </select>
        </div>

        {/* Step 7: Sort by name */}
        <button onClick={toggleSort} className="sort-button">
          Sort by Name: {sortOrder === 'asc' ? '↑ Ascending' : '↓ Descending'}
        </button>
      </div>

      {/* Step 10: Handle empty state */}
      {processedUsers.length === 0 ? (
        <div className="empty-message">No users found</div>
      ) : (
        // Step 4: Render list
        <div className="user-list">
          {processedUsers.map((user) => (
            <div key={user.id} className="user-card">
              <div className="user-info">
                <div className="user-name">{user.name}</div>
                <div className="user-email">{user.email}</div>
              </div>
              {/* Step 9: Delete button */}
              <button onClick={() => handleDelete(user.id)} className="delete-button">
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default UserListAdvanced;
