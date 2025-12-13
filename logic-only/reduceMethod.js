// 1. Sum of numbers
const numbers = [1, 2, 3, 4];

const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 10

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// 2. Count occurrences
const fruits = ["apple", "banana", "apple", "orange", "banana"];

const counts = fruits.reduce((acc, curr) => {
  console.log(acc); // {}, { apple: 1}, { apple: 1, banana: 1}, { apple: 2, banana: 1 }, { apple: 2, banana: 1, orange: 1 }
  console.log(curr); // 'apple', 'banana', 'apple', 'orange', 'banana'

  acc[curr] = (acc[curr] || 0) + 1;

  return acc;
}, {});

console.log(counts); // { apple: 2, banana: 2, orange: 1 }

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const people = [
  { name: "A", age: 20 },
  { name: "B", age: 20 },
  { name: "C", age: 25 },
];


const grouped = people.reduce((acc,curr)=> {

    if(!acc[curr.age]) {
        acc[curre]
    }

},{})