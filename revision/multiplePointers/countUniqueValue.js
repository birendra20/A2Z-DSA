// arr = [1,1,1,1,1,2];  ==> 2
// arr = [1,2,3,4,4,4,7,7,1,2,12,13]

function countUniqueValues(arr) {
  if (arr.length === 0) return 0;

  arr.sort((a, b) => a - b);

  let i = 0;

  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

countUniqueValues([1, 1, 1, 1, 1, 2]);
countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 1, 2, 12, 13]);

/*
✅ Complexity Analysis (Two Pointers)
	•	Sorting: O(n log n)
	•	Two-pointer scan: O(n)
	•	Total TC: O(n log n) (dominated by sort)
	•	SC: O(1) (in-place, no extra DS except a few vars)


*/
