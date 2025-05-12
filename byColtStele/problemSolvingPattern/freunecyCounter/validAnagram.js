/*
Frequency Counter - validAnagram
Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, 
or name formed by rearranging the letters of another, such as cinema, formed from iceman.

Examples:

validAnagram('', '') // true
validAnagram('aaz', 'zza') // false
validAnagram('anagram', 'nagaram') // true
validAnagram("rat","car") // false) // false
validAnagram('awesome', 'awesom') // false
validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') // false
validAnagram('qwerty', 'qeywrt') // true
validAnagram('texttwisttime', 'timetwisttext') // true

*/

//check str1.length !==str2.length return false
// obj1 = {a:2,z:1} , obj2 = {z:2 ,a:1}

function validAnagram(str1, str2) {
  // If the lengths of the strings are not equal, they cannot be anagrams
  if (str1.length !== str2.length) return false;

  // Create frequency counter objects for both strings
  let freqCounter1 = {};
  let freqCounter2 = {};

  // Count the frequency of each character in the first string
  for (elem of str1) {
    freqCounter1[elem] = (freqCounter1[elem] || 0) + 1;
  }

  // Count the frequency of each character in the second string
  for (elem of str2) {
    freqCounter2[elem] = (freqCounter2[elem] || 0) + 1;
  }

  // Compare the frequency of each character in the first string
  // with the corresponding frequency in the second string
  for (key in freqCounter1) {
    // If the frequency of any character doesn't match, return false
    if (freqCounter1[key] !== freqCounter2[key]) {
      return false;
    }
  }

  // If all frequencies match, the strings are anagrams
  return true;
}

// console.log(validAnagram("", "")); // true
// console.log(validAnagram("aaz", "zza")); // false
// console.log(validAnagram("anagram", "nagaram")); // true
// console.log(validAnagram("rat", "car")); // false) // false
// console.log(validAnagram("awesome", "awesom")); // false
// console.log(validAnagram("amanaplanacanalpanama", "acanalmanplanpamana")); // false
// console.log(validAnagram("qwerty", "qeywrt")); // true
// console.log(validAnagram("texttwisttime", "timetwisttext")); // true

function validAnagramByColt(str1, str2) {
  if (str1.length !== str2.length) return false;

  const lookupObj = {};

  // if letter exists, increment, otherwise set to 1
  for (let elem of str1) {
    lookupObj[elem] = lookupObj[elem] ? lookupObj[elem] + 1 : 1;
  }

  console.log("lookupObj", lookupObj); //{ a: 3, n: 1, g: 1, r: 1, m: 1 }
  for (let elem of str2) {
    // can't find letter or letter is zero than it's not an anagram
    if (!lookupObj[elem]) {
      return false;
    }

    lookupObj[elem] = lookupObj[elem] - 1;
  }

  console.log(lookupObj); //{ a: 0, n: 0, g: 0, r: 0, m: 0 }

  return true;
}

// console.log(validAnagramByColt("", "")); // true
// console.log(validAnagramByColt("aaz", "zza")); // false
console.log(validAnagramByColt("anagram", "nagaram")); // true
// console.log(validAnagramByColt("rat", "car")); // false) // false
// console.log(validAnagramByColt("awesome", "awesom")); // false
// console.log(validAnagramByColt("amanaplanacanalpanama", "acanalmanplanpamana")); // false
// console.log(validAnagramByColt("qwerty", "qeywrt")); // true
// console.log(validAnagramByColt("texttwisttime", "timetwisttext")); // true
