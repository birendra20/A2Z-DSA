/*

Intro to problem solving

Write a function which takes in a string and returns counts of each character in a string.

charCount("hello")  //  {h:1, e:1, l:2, o:1 }

*/

function charCount(str) {
  // make an object to return result at the end
  let result = {};

  for (let i = 0; i < str.length; i++) {
    char = str[i].toLowerCase();

    if (result[char] > 0) {
      result[char]++;
    } else {
      result[char] = 1;
    }
  }
  return result;
}

console.log(charCount("hello"));
