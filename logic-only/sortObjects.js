const users = [
  { id: 1, name: "Sneha", age: 28 },
  { id: 2, name: "Amit", age: 22 },
  { id: 3, name: "Rahul", age: 30 },
  { id: 4, name: "Priya", age: 25 },
];

// Sort by name (Ascending - A to Z)
const sortByNameAsc = [...users].sort((a, b) => a.name.localeCompare(b.name));
console.log("sortByNameAsc", sortByNameAsc);
/*

[
  'sortByNameAsc',
  [
    { id: 2, name: 'Amit', age: 22 },
    { id: 4, name: 'Priya', age: 25 },
    { id: 3, name: 'Rahul', age: 30 },
    { id: 1, name: 'Sneha', age: 28 }
  ]
]

*/

// Sort by name (Descending - Z to A)

const sortByNameDesc = [...users].sort((a, b) => b.name.localeCompare(a.name));
console.log("sortByNameDesc", sortByNameDesc);

/*

[
  'sortByNameDesc',
  [
    { id: 1, name: 'Sneha', age: 28 },
    { id: 3, name: 'Rahul', age: 30 },
    { id: 4, name: 'Priya', age: 25 },
    { id: 2, name: 'Amit', age: 22 }
  ]
]

*/

// Sort by age (Ascending - Smallest to Largest)
const sortByAgeAsc = [...users].sort((a, b) => a.age - b.age);

// Sort by age (Descending - Largest to Smallest)
const sortByAgeDesc = [...users].sort((a, b) => b.age - a.age);

/*

## Quick Visual Summary

| Approach            | Mutates Original Array? | React Safe? |
| ------------------- | ----------------------- | ----------- |
| `users.sort()`      | Yes                     | No          |
| `[...users].sort()` | No                      | Yes         |

---

*/
