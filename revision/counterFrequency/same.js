function FindSame(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  let obj1 = {};
    let obj2 = {};

    for (let elem1 of arr1) {
      obj1[elem1] = obj1[elem1] ? obj1[elem1] + 1 : 1;
    }

    for (let elem2 of arr2) {
      obj2[elem2] = obj2[elem2] ? obj2[elem2] + 1 : 1;
    }

  for (let key in obj1) {
    let squaredKey = key ** 2;
    if (obj1[key] !== obj2[squaredKey]) {
      return false;
    }
  }
  return true;
}

console.log("FindSame", FindSame([1, 2, 3], [4, 1, 9]));
console.log("FindSame", FindSame([1, 2, 3], [1, 9]));
console.log("FindSame", FindSame([1, 2, 1], [4, 4, 1]));
