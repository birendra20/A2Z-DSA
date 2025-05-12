function areThereDuplicates() {
  let collection = {};
  for (let val in arguments) {
    console.log("val", val);
    console.log("collection[arguments[val]]", collection[arguments[val]]);
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1;
  }
  for (let key in collection) {
    if (collection[key] > 1) return true;
  }
  return false;
}

// areThereDuplicates(1, 2, 2);
console.log(areThereDuplicates(1, 2, 3));
console.log(areThereDuplicates(1, 2, 2));
