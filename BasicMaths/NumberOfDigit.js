`
Example 1:
Input: N = 12345
Output: 5
Explanation: N has 5 digits

Example 2:
Input: N = 8394
Output: 4
Explanation: N has 4 digits


`;

function NumberOfDigit(n) {
  let count = 0;

  while (n > 0) {
    n = Math.round(n / 10);
    count++;
  }
  console.log(count);
  return count;
}

console.log(NumberOfDigit(122334));

// tc=O(log10(N))  if number of iteration based on number of division tc will always be logarithmic.

`



function countDigits(n) {
  let digits = Math.floor(Math.log10(n) + 1);
  return digits;
}

let n = 12345;
console.log("Number of digits in " + n + " is " + countDigits(n));

Time Complexity: O (n) where n is the number of digits in the given integer

Space Complexity: O(1)




function countDigits(n) {
  let x = n.toString();
  return x.length;
}

let n = 12345;
console.log("Number of digits in " + n + " is " + countDigits(n));


Time Complexity: O (1) 

Space Complexity: O(1)


function countDigits(n) {
  let digits = Math.floor(Math.log10(n) + 1);
  return digits;
}

let n = 12345;
console.log("Number of digits in " + n + " is " + countDigits(n));

Time Complexity: O (1) 

Space Complexity: O(1)


`;
