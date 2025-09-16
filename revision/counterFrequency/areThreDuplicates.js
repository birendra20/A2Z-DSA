// areThereDuplicates(1,2,3) ==> false
// areThereDuplicates(1,2,2) ==> true

function areThereDuplicates(...args) {
  const collection = {};

  for (let val of args) {
    collection[val] = collection[val] ? collection[val] + 1 : 1;

    if (collection[val] > 1) return true;
  }

  return false;
}
console.log(areThereDuplicates(1, 2, 2));
