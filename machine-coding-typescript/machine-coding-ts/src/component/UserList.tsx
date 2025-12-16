import { useState, useEffect } from 'react';
import './UserList.css';

// Step 1: Define User interface
interface User {
  id: number;
  name: string;
  email: string;
}

function UserList() {
  // Step 2: Create state
  const [users, setUsers] = useState<User[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

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

  // Step 5: Add search - filter users by name or email
  const filteredUsers = users.filter((user) => {
    const query = searchQuery.toLowerCase();
    return (
      user.name.toLowerCase().includes(query) ||
      user.email.toLowerCase().includes(query)
    );
  });

  // Step 6: Add delete
  const handleDelete = (id: number) => {
    const confirmed = window.confirm('Are you sure you want to delete this user?');
    if (confirmed) {
      setUsers(users.filter((user) => user.id !== id));
    }
  };

  // Step 7: Handle loading state
  if (loading) {
    return (
      <div className="user-list-container">
        <h1 className="user-list-heading">User List</h1>
        <div className="loading-message">Loading users...</div>
      </div>
    );
  }

  return (
    <div className="user-list-container">
      <h1 className="user-list-heading">User List</h1>
      
      {/* Step 5: Add search input */}
      <input
        type="text"
        placeholder="Search by name or email"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-input"
      />

      {/* Step 7: Handle empty list */}
      {filteredUsers.length === 0 ? (
        <div className="empty-message">No users found</div>
      ) : (
        // Step 4: Render list
        <div className="user-list">
          {filteredUsers.map((user) => (
            <div key={user.id} className="user-card">
              <div className="user-info">
                <div className="user-name">{user.name}</div>
                <div className="user-email">{user.email}</div>
              </div>
              {/* Step 6: Delete button */}
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

export default UserList;
