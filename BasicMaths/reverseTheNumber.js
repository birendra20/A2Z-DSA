`
Example 1:
Input: N = 123
Output: 321
Explanation: The reverse of 123 is 321

Example 2:
Input: N = 234
Output: 432
Explanation: The reverse of 234 is 432


`;

function reverseTheNumber(n) {
  let revNum = 0;
  while (n > 0) {
    let lastDigit = n % 10;
    revNum = revNum * 10 + lastDigit;
    n = Math.round(n / 10);
  }
  return revNum;
}

console.log(reverseTheNumber(234));

`
Time Complexity: O(n), where n is the length of the given number

Space Complexity: O(1)

`;
