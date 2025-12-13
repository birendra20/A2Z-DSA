const users = [
  { id: 1, name: "Amit Sharma" },
  { id: 2, name: "Rahul Verma" },
  { id: 3, name: "Sneha Patil" },
  { id: 4, name: "Priya Singh" },
  { id: 5, name: "Amita Joshi" },
];

// function to search by partial text (case-insensitive)

function searchUsers(data, keyword) {
  const res = data.filter((user) =>
    user.name.toLowerCase().includes(keyword.toLowerCase())
  );

  console.log("res", res); //[ { id: 1, name: 'Amit Sharma' }, { id: 5, name: 'Amita Joshi' } ]
}

searchUsers(users, "amit");
