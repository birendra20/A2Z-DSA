`
Example 1:
Input:153 
Output: Yes, it is an Armstrong Number
Explanation: 1^3 + 5^3 + 3^3 = 153

Input:170 
Output: No, it is not an Armstrong Number
Explanation: 1^3 + 7^3 + 0^3 != 170


`;

function isArmstrong(n) {
  let num = n;

  let sum = 0;

  while (n > 0) {
    let lastDigit = n % 10;

    sum = sum + lastDigit * lastDigit * lastDigit;

    n = Math.floor(n / 10);
  }
  console.log(sum, num);
  return num === sum;
}

console.log(isArmstrong(153));

`
Time Complexity: O(n) where n is the number of digits since we need to traverse every digit and add digits raised to power no. of digits to sum.

Space Complexity: O(1) since no extra space is required

let link = https://youtu.be/1xNbjMdbjug?si=uTcDlFktb13mxLf3&t=2031

`;
