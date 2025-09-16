// arr = [1,1,1,1,1,2];  ==> 2
// arr = [1,2,3,4,4,4,7,7,1,2,12,13]

function countUniqueValues(arr) {
  let obj = {};

  for (let elem of arr) {
    obj[elem] = true;
  }
  console.log(Object.keys(obj).length);
  return Object.keys(obj).length;
}

countUniqueValues([1, 1, 1, 1, 1, 2]);
countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 1, 2, 12, 13]);
