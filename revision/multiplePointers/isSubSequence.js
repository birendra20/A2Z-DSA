/*
isSubSequence
problem statement
you are given two string, and you need to determine if the first string is subsequence of the second.


what is subSequence

a subSequence is a sequence of the characters that appears in the same relative order,but no necessarily
contiguously.


abc  => abracadabra => true
abc => acb => false


 */

function isSubSequence(str1, str2) {
  let i = 0; // pointer for str1
  let j = 0; // pointer for str2

  while (j < str2.length) {
    if (str1[i] === str2[j]) {
      i++;
    }

    if (i === str1.length) return true; // all character in str1 matched
    j++;
  }

  return i === str1.length;
}

console.log(isSubSequence("abc", "abracadabra"));
console.log(isSubSequence("abc", "acb"));
