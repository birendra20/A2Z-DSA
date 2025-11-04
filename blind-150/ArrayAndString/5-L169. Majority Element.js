/* 
169. Majority Element

Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. 
You may assume that the majority element always exists in the array.


Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2
*/

/* 
Approaches
1. Brute Force (Counting with HashMap)

Count the frequency of each element using a hash map.

Return the element whose count > n/2.

*/

// using map
function majorityElementsBrute1(nums) {
  const map = new Map();

  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);

    if (map.get(num) > nums.length / 2) {
      return nums;
    }
  }
}

// using {}

function majorityElementsBrute2(nums) {
  const obj = {};

  for (let num of nums) {
    obj[num] = (obj[num] || 0) + 1;

    if (obj[num] > nums.length / 2) {
      return num;
    }
  }
}

// using sort

function majorityElementsUsingSort(nums) {
  nums.sort((a, b) => a - b);

  return nums[Math.floor(nums.length / 2)];
}

// boyer-moore voting algo (most optimal)

function majorityElement(nums) {
  let count = 0;
  let candidate = null;

  for (let num of nums) {
    if (count === 0) {
      candidate = num;
    }

    count = num === candidate ? count + 1 : count - 1;
  }
}

/* 
No worries 👍
Let’s simplify the **dry run** step-by-step — without the confusing column names.

We’ll just track what happens at each step **in plain English**.

---

### Code Reminder:

```js
function majorityElement(nums) {
  let count = 0;
  let candidate = null;

  for (let num of nums) {
    if (count === 0) {
      candidate = num;
    }
    count = (num === candidate) ? count + 1 : count - 1;
  }

  return candidate;
}
```

---

### Example:

`nums = [2, 2, 1, 1, 1, 2, 2]`

---

#### Step 1 → num = 2

* `count` is 0 → set `candidate = 2`
* `num` is same as `candidate` → increase count
  → `count = 1`, `candidate = 2`

---

#### Step 2 → num = 2

* `num` is same as `candidate (2)` → increase count
  → `count = 2`, `candidate = 2`

---

#### Step 3 → num = 1

* `num` is different from `candidate (2)` → decrease count
  → `count = 1`, `candidate = 2`

---

#### Step 4 → num = 1

* `num` is different → decrease count again
  → `count = 0`, `candidate = 2`

---

#### Step 5 → num = 1

* `count` is 0 → set new `candidate = 1`
* `num` equals `candidate` → increase count
  → `count = 1`, `candidate = 1`

---

#### Step 6 → num = 2

* `num` is different → decrease count
  → `count = 0`, `candidate = 1`

---

#### Step 7 → num = 2

* `count` is 0 → set new `candidate = 2`
* `num` equals `candidate` → increase count
  → `count = 1`, `candidate = 2`

---

✅ **Final Answer:** `candidate = 2`

---

### Simple Intuition

Think like a **vote system**:

* Each number “votes” for itself.
* Every time a different number comes, it cancels one vote.
* The majority element (which appears most) will always **end up with extra votes** and remain at the end.

---

Would you like me to show this same logic visually — like a simple “vote balance timeline” (like count rising and falling with each number)?

 */
