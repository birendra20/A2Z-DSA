/*
s1 = anagram, s2 = nagaram, ==> true

s1 = car,  s2 = rat ==> false


*/

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  let obj1 = {};
  let obj2 = {};

  for (let elem of str1) {
    obj1[elem] = obj1[elem] ? obj1[elem] + 1 : 1;
  }
  for (let elem of str2) {
    obj2[elem] = obj2[elem] ? obj2[elem] + 1 : 1;
  }

  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) return false;
  }

  return true;
}

function validAnagramColt(str1, str2) {
  if (str1.length !== str2.length) return false;

  let lookupObj = {};

  for (let elem of str1) {
    lookupObj[elem] = lookupObj[elem] ? lookupObj[elem] + 1 : 1;
  }

  for (let elem of str2) {
    if (!lookupObj[elem]) return false;

    lookupObj[elem] = lookupObj[elem] - 1;
  }

  return true;
}

// console.log(validAnagram("anagram", "nagaram"));
// console.log(validAnagram("car", "rat"));

console.log(validAnagramColt("anagram", "nagaram"));
console.log(validAnagramColt("car", "rat"));
