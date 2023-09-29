`
Example 1:
Input: N = 123
Output: Not Palindrome Number
Explanation: 123 read backwards is 321.Since these are two different numbers 123 is not a palindrome.

Example 2:
Input: N =  121 
Output: Palindrome Number
Explanation: 121 read backwards as 121.Since these are two same numbers 121 is a palindrome.
`;

function checkPalindrome(num) {
  let n = num;
  let revNum = 0;

  while (num > 0) {
    let lastDigit = num % 10;
    revNum = revNum * 10 + lastDigit;
    num = Math.round(num / 10);
  }
  if (n === revNum) {
    console.log("true");
  } else {
    console.log("false");
  }
}

console.log(checkPalindrome(121));
