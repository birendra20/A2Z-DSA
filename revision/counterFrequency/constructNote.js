/*

=> write a function called constructNote , which accepts two string, a message and some letters.
=> the function should return true if the message can be built with the letters that you are given ,else it should return false

constructNote("aa","abc") ==> false
constructNote("abc","acba") ==> true
constructNote("aabbcc", "bcabcaddff")=> true

*/

function constructNote(message, letters) {
  let frequencyLetter = {};
  let frequencyMessage = {};

  for (let elem of letters) {
    frequencyLetter[elem] = frequencyLetter[elem]
      ? frequencyLetter[elem] + 1
      : 1;
  }

  for (let elem of message) {
    frequencyMessage[elem] = frequencyMessage[elem]
      ? frequencyMessage[elem] + 1
      : 1;
  }

  for (let key in frequencyMessage) {
    if (!frequencyLetter[key]) return false;

    if (frequencyMessage[key] > frequencyLetter[key]) return false;
  }
  return true;
}

console.log(constructNote("aa", "abc"));
console.log(constructNote("abc", "acba"));
console.log(constructNote("aabbcc", "bcabcaddff"));
