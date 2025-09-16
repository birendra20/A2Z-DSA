/*

You’re given a sorted array nums.
Remove duplicates in-place such that each unique element appears at most twice.
Return the new length k, where the first k elements are valid.


Input:  nums = [0,0,1,1,1,1,2,3,3]
Output: [0,0,1,1,2,3,3,_,_], length = 7

Explanation:

0 appears twice → keep [0,0]

1 appears four times → keep only two [1,1]

2 appears once → [2]

3 appears twice → [3,3]

---
Approach: Two Pointers

We want to allow at most 2 duplicates:

Keep a write pointer i (next valid index).

Scan with pointer j.

For each nums[j]:

If i < 2, always keep it (first 2 elements always valid).

Else, compare nums[j] with nums[i-2].

If nums[j] != nums[i-2], it means we haven’t added more than 2 duplicates → keep it.

Otherwise skip.
*/

const nums = [0, 0, 1, 1, 1, 1, 2, 3, 3];

function removeDuplicates2(nums) {
  if (nums.length <= 2) {
    return nums.length;
  }

  let i = 2; // position to write next valid elem

  for (let j = 2; j < nums.length; j++) {
    if (nums[j] !== nums[i - 2]) {
      nums[i] = nums[j];
      i++;
    }
  }

  console.log("nums", nums);
  return i;
}

console.log(removeDuplicates2(nums));
