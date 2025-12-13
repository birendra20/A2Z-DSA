const users = [
  { id: 1, name: "Amit", isActive: true },
  { id: 2, name: "Rahul", isActive: false },
  { id: 3, name: "Sneha", isActive: true },
  { id: 4, name: "Priya", isActive: false },
];

// filterByBoolean

//active users

const activeUsers = users.filter((user) => user.isActive);

console.log("activeUsers", activeUsers);

// Filter Inactive Users
const inactiveUsers = users.filter((user) => !user.isActive);
console.log("Inactive Users:", inactiveUsers);

// reusable function
function filterByStatus(status) {
  return users.filter((user) => user.isActive === status);
}

// Usage
console.log("Using Function - Active:", filterByStatus(users, true));
console.log("Using Function - Inactive:", filterByStatus(users, false));
