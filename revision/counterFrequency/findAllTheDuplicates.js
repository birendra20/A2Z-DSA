/*
findAllDuplicates

find all the element that appears twice or more than one in an array

const arr = [4,3,2,7,8,2,3,1] ==> [2,3]
const arr = [4,3,2,1] ==> []

*/

function findAllDuplicates(arr) {
  const frequencyMap = {};
  const duplicates = [];

  for (const elem of arr) {
    frequencyMap[elem] = frequencyMap[elem] ? frequencyMap[elem] + 1 : 1;
  }

  for (let key in frequencyMap) {
    if (frequencyMap[key] > 1) {
      console.log(frequencyMap[key]);
      duplicates.push(Number(key));
    }
  }

  return duplicates;
}

console.log(findAllDuplicates([4, 3, 2, 7, 8, 2, 3, 1]));
console.log(findAllDuplicates([4, 3, 2, 1]));
