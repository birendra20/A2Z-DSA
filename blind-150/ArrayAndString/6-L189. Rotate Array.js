/* 
Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

 

Example 1:

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
Example 2:

Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]

*/

/* 
key Insights
Rotating an array by k steps is equivalent to 
- Taking the last k elements
- moving them to the front
- keeping the order correct

*/

/* 
solution approaches

A. Extra array (simple but O(N) space);

- copy last k elem + first n-k elem into new array
- then overwrite back into nums. (not in-place)


B. Reversal Method
1 - reverse the entire array
[1,2,3,4,5,6,7] =>  [7,6,5,1,2,3,4]
2 - reverse the ist k element
 [7,6,5] => [5,6,7]
3 - reverse the rest (n-k element)
 [4,3,2,1] => [1,2,3,4]
4 - combined Res => [5,6,7,1,2,3,4]
*/

function rotateBruteForce(nums, k) {
  const n = nums.length;
  k = k % n; // handle cases where k > n

  const rotated = new Array(n);

  // step 1: copy last k elements

  let idx = 0;

  for (let j = n - k; j < n; j++) {
    rotated[idx] = nums[j];
    idx++;
  } // rotated => [5,6,7,<4 empty slots>]

  // step 2 copy first n-k elements
  for (let j = 0; j < n - k; j++) {
    rotated[idx] = nums[j];
    idx++;
  } // rotated => [5,6,7,1,2,3,4]

  // step 3 copy back to original nums

  for (let i = 0; i < n; i++) {
    nums[i] = rotated[i];
  }
}

// TC = O(N);
// SC = O(N);

/* 
Excellent question, Birendra — and this shows you’re thinking like an interviewer 👏

Let’s break it down carefully.

---

### 🧩 Short Answer

No —
you **cannot** just do

```ts
nums = rotated;
```

because that **doesn’t modify the original array in-place**,
and **LeetCode requires in-place modification**.

---

### 🔍 Detailed Explanation

In JavaScript (and TypeScript), arrays are **reference types**.

When you write:

```ts
nums = rotated;
```

you are **reassigning** the local variable `nums` to point to a **new array object** (`rotated`).
But the *original* array (the one outside the function) stays **unchanged**.

So inside the LeetCode test runner, your function will seem to “do nothing” because LeetCode checks the *same array reference* you received as input.

---

### ✅ Example to Prove It

```ts
function rotate(nums, k) {
  const rotated = [5,6,7,1,2,3,4];
  nums = rotated; // reassigns local variable only
}

const arr = [1,2,3,4,5,6,7];
rotate(arr, 3);
console.log(arr); // ❌ Still [1,2,3,4,5,6,7]
```

But if you copy values:

```ts
function rotate(nums, k) {
  const rotated = [5,6,7,1,2,3,4];
  for (let i = 0; i < nums.length; i++) {
    nums[i] = rotated[i];
  }
}

const arr = [1,2,3,4,5,6,7];
rotate(arr, 3);
console.log(arr); // ✅ [5,6,7,1,2,3,4]
```

---

### 🧠 Why LeetCode Cares

The function signature is:

```ts
function rotate(nums: number[], k: number): void
```

Notice the return type is `void`.
That means LeetCode expects you to **mutate `nums` in-place**,
not return or reassign a new array.

---

### ✅ Correct Approach (must use Step 3)

```ts
for (let i = 0; i < n; i++) {
  nums[i] = rotated[i];
}
```

This copies elements **into the same array reference**,
which is what LeetCode checks after the function runs.

---

Would you like me to show how this same problem is solved **in-place (O(1) space)** using **array reversal**, step by step? It’s the optimal version.


*/
function rotate(nums, k) {
  let n = nums.length;
  k = k % n; // handle cases where k > n;

  // step 1: reverse whole array;
  reverse(0, n - 1);

  // step 2: reverse first k elem
  reverse(0, k - 1);

  // step 3: reverse remaining n-k elem
  reverse(k, n - 1);

  function reverse(start, end) {
    while (start < end) {
      [nums[start], nums[end]] = [nums[end], nums[start]];
      start++;
      end--;
    }
  }
}

/* 
dry run
nums = [1,2,3,4,5,6,7] , k = 3

1) reverse all => [7,6,5,4,3,2,1]
2) reverse 1st k => [5,6,7,4,3,2,1]
2) reverse last 4 (n-k) => [5,6,7,1,2,3,4]

TC = O(N)
Sc = O(1)
*/
