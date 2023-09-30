`
Example 1:
Input: n = 36
Output: 1 2 3 4 6 9 12 18 36
Explanation: All the divisors of 36 are printed.

Example 2:
Input: n = 97
Output: 1 97
Explanation: Since 97 is a prime number, only 1 and 97 are printed.

`;

function printDivisorBrute(n) {
  for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
      console.log(i);
    }
  }
}

printDivisorBrute(36);

`
Time Complexity: O(n), because the loop has to run from 1 to n always.

Space Complexity: O(1), we are not using any extra space.
`;

function printDivisorOptimal(n) {
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      console.log(i);
      if (i !== n / i) {
        console.log(Math.floor(n / i));
      }
    }
  }
}
printDivisorOptimal(36);

`
Time Complexity: O(sqrt(n)), because every time the loop runs only sqrt(n) times.

Space Complexity: O(1), we are not using any extra space.

https://takeuforward.org/data-structure/print-all-divisors-of-a-given-number/




`;
