`
Problem Statement: Given a number, check whether it is prime or not. A prime number is a natural number that is only divisible by 1 and by itself.

Example 1:
Input: N = 3
Output: Prime
Explanation: 3 is a prime number

Example 2:
Input: N = 26
Output: Non-Prime
Explanation: 26 is not prime
`;

`
a prime number is a number which has exactly 2 factors, 1 and itself.
`;

function isPrimeBrute(n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
      count++;
    }
  }

  if (count == 2) {
    return true;
  } else {
    return false;
  }
}

`
Time Complexity: O(n)

Space Complexity: O(1)


`;
// console.log(isPrimeBrute(33));

function isPrimeOptimal(n) {
  let count = 0;
  // or run till i*i <=n
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      count++;

      if (i !== n / i) {
        count++;
      }
    }
  }

  if (count == 2) {
    return true;
  } else {
    return false;
  }
}

console.log(isPrimeOptimal(33));

`
Time Complexity: O(sqrt(n)), because every time the loop runs only sqrt(n) times.

Space Complexity: O(1), we are not using any extra space.

`;
