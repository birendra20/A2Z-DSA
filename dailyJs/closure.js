/**
 # What is closure
 => a closure is a combination of a function and it's lexical environment (the scope in which it was created)
 => in simple term, a closures allow to access a variable from its outer scope even after that the outer scope has finished executing.

 ---

 # why does closures exist
 => Closures are created when :
    1. a function is defined inside another function, and the inner function references variables from the outer function.
    2. the inner function is returned or assigned to a variable, preserving the reference to it's lexical environment.

 */

// Basic Example

function outerFunction() {
  let outerVar = "i m from  a outer scope!";

  function innerFunction() {
    console.log("called outerVar from inner ", outerVar);
  }

  return innerFunction;
}

const closureFun = outerFunction();
closureFun();

/*

“Encapsulate” means to enclose something in a container or to wrap it up, but in programming (especially in JavaScript or object-oriented programming), it refers to:

Hiding the internal details or state of an object/function and only exposing a controlled interface.

In the context of closures, encapsulation happens when:
	•	The outer function defines some variables (outerVar in your code).
	•	The inner function can access those variables, but nothing outside can directly change or use them.
	•	This way, the variables are protected from the outside world, kind of like being “wrapped” inside.

Quick example of encapsulation with closure:

function createCounter() {
  let count = 0;

  return {
    increment() {
      count++;
      return count;
    },
    decrement() {
      count--;
      return count;
    }
  };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1

Here, count is encapsulated — it can’t be accessed directly, only through increment() and decrement().

Let me know if you’d like a simpler or visual explanation too!

*/
