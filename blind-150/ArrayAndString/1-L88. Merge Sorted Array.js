/*

88. Merge Sorted Array.js

You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

 

Example 1:

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
Example 2:

Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
Explanation: The arrays we are merging are [1] and [].
The result of the merge is [1].
Example 3:

Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]
Explanation: The arrays we are merging are [] and [1].
The result of the merge is [1].
Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1


*/

/*
Problem Statement (simplified)

You’re given two sorted arrays:

nums1 of length m + n, where the first m elements are valid and sorted, and the remaining n slots are 0 (placeholders).

nums2 of length n, sorted.

Task: Merge nums2 into nums1 in sorted order, in-place

Key Idea

Since both arrays are sorted, the best way is to start from the end.
This way, we can put the largest element at the back of nums1 without overwriting anything important.

Multiple Pointers Used

p1 → pointer for the end of the valid part of nums1 (m - 1)

p2 → pointer for the end of nums2 (n - 1)

p → pointer for the end of the whole nums1 array (m + n - 1)

Algorithm

While p1 >= 0 and p2 >= 0:

Compare nums1[p1] and nums2[p2].

Put the larger one at nums1[p].

Move the respective pointer (p1 or p2) backward.

Move p backward.

If any elements remain in nums2 (i.e., p2 >= 0), copy them into nums1.

*/

var merge = function (nums1, m, nums2, n) {
  let p1 = m - 1; // pointer of nums1
  let p2 = n - 1; // pointer of nums2
  let p = m + n - 1; // pointer for placement

  // compare from the end
  while (p1 >= 0 && p2 >= 0) {
    if (nums1[p1] > nums2[p2]) {
      nums1[p] = nums1[p1];
      p1--;
    } else {
      nums1[p] = nums2[p2];
      p2--;
    }
    p--;
  }

  // if any elements remain in nums2

  while (p2 >= 0) {
    nums1[p] = nums2[p2];
    p2--;
    p--;
  }
};
