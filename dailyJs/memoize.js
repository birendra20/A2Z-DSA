function memoize(fn) {
  const cache = {}; // Stores computed results

  return function (...args) {
    const key = JSON.stringify(args); // Convert arguments into a unique key

    if (cache[key]) {
      console.log("Returning from cache");
      return cache[key]; // Return cached result
    }

    const result = fn(...args); // Compute the result
    cache[key] = result; // Store in cache
    return result;
  };
}

// Example Usage
const slowFunction = (num) => {
  console.log("Computing...");
  return num * num;
};

const memoizedFunction = memoize(slowFunction);

console.log(memoizedFunction(5)); // 🟢 Computes and caches: 25
console.log(memoizedFunction(5)); // 🟢 Returns cached: 25
