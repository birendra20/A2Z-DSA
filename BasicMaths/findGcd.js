`
Example 1:
Input: num1 = 4, num2 = 8
Output: 4
Explanation: Since 4 is the greatest number which divides both num1 and num2.

Example 2:
Input: num1 = 3, num2 = 6
Output: 3
Explanation: Since 3 is the greatest number which divides both num1 and num2.

`;

function findGcdBrute(num1, num2) {
  let ans;
  for (let i = 1; i < Math.min(num1, num2); i++) {
    if (num1 % 2 == 0 && num2 % 2 == 0) {
      ans = i;
    }
  }
  return ans;
}

// console.log(findGcdBrute(4, 8));

`
Time Complexity: O(N).

Space Complexity: O(1).
`;

function findGcdOptimal(a, b) {
  while (a > 0 && b > 0) {
    if (a > b) {
      a = a % b;
    } else {
      b = b % a;
    }
  }

  if (a == 0) {
    return b;
  }
  return a;
}

`
Solution 2: Using Euclidean’s theorem.
Time Complexity: O(logɸmin(a,b)), where ɸ is 1.61.

Space Complexity: O(1).

https://takeuforward.org/data-structure/find-gcd-of-two-numbers/     (check only approach solution is incorrect in docs)
`;

console.log(findGcdOptimal(14, 8));
