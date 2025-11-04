function memoize(fn) {
  const cache = new Map();

  return function (...args) {
    const key = JSON.stringify(args);

    console.log("leys", key);
    console.log("letetst", cache.get(key));

    if (cache.has(key)) {
      console.log("returning from cache", cache.get(key));

      return cache.get(key);
    }

    const result = fn(...args);

    console.log("result", result);
    cache.set(key, result);
    return result;
  };
}

const memoizedAdd = memoize(add);

function add(a, b) {
  return a + b;
}

console.log("1", memoizedAdd(2, 3));
console.log("2", memoizedAdd(2, 3));
console.log("3", memoizedAdd(2, 3));
