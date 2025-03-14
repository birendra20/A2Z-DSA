let a = { x: 1, y: 2 };
let b = a;
b.x = 3;
// console.log(a);
// console.log(b);

`
In JavaScript, objects are stored and assigned by reference, not by value. Let’s break down the code step-by-step:

Code Analysis:

let a = { x: 1, y: 2 };
let b = a;
b.x = 3;
console.log(a);
console.log(b);

Step 1: Object Creation

let a = { x: 1, y: 2 };

	•	Here, we created an object { x: 1, y: 2 } and assigned it to the variable a.
	•	The variable a stores the reference (or address) of the object, not the object itself.

Step 2: Reference Assignment

let b = a;

	•	We assigned a to b, meaning b now holds the same reference to the object that a is pointing to.
	•	Both a and b are referring to the same object in memory.

Step 3: Modifying the Object

b.x = 3;

	•	Since b points to the same object as a, modifying b.x directly changes the property of the shared object.
	•	The value of x in the object referenced by both a and b is now 3.

Step 4: Logging the Results

console.log(a); // { x: 3, y: 2 }
console.log(b); // { x: 3, y: 2 }

	•	Both a and b output the same object { x: 3, y: 2 }, because they both reference the same object in memory.

Understanding Object References in JavaScript
	•	In JavaScript, primitive types (like number, string, boolean, etc.) are stored and copied by value.
	•	Objects, on the other hand, are stored and copied by reference.

Visualization in Memory:

   a -----> { x: 1, y: 2 }   // Initially
   b -----> Same Reference as 'a'

   After b.x = 3:

   a -----> { x: 3, y: 2 }
   b -----> Same Reference as 'a'

How to Create an Independent Copy (Avoid Shared Reference):

If you want to create a separate, independent object, you can use:
	1.	Spread Operator:

let b = { ...a };
b.x = 3;
console.log(a); // { x: 1, y: 2 }
console.log(b); // { x: 3, y: 2 }


	2.	Object.assign():

let b = Object.assign({}, a);
b.x = 3;


	3.	Structured Clone (Deep Copy for Nested Objects):

let b = JSON.parse(JSON.stringify(a));
b.x = 3;

Summary:
	•	a and b are pointing to the same object because objects in JavaScript are assigned by reference.
	•	Changing b.x also changes a.x because both share the same underlying object.
	•	Use techniques like spread operators or Object.assign() to create independent copies if needed.

Would you like me to explain deep copies or how this works with arrays? 😊`;

for (var i = 0; i < 10; i++) {
  setTimeout(() => {
    // console.log(i);
  }, 1000);
}

`

🧠 Understanding var Scope

🔑 1. var has Function Scope, Not Block Scope
	•	In JavaScript, var is function-scoped, which means it is visible throughout the entire function it is declared in, not just inside loops or blocks.
	•	let is different—it has block scope, meaning it is only visible inside the block ({ ... }) where it is declared.

    📦 Example of var Scope:
    if (true) {
     var x = 5;
    }
   console.log(x); // 5  (Visible outside the block)

   📦 Example of let Scope:
   
   if (true) {
     let y = 5;
    }
   console.log(y); // Error: y is not defined (Block scoped)

    2. for Loop with var and setTimeout:
    
    for (var i = 0; i < 10; i++) {
      setTimeout(() => {
       console.log(i);
      }, 1000);
    }

    🧩 What Happens Step-by-Step:
	1.	for loop runs from i = 0 to i = 9 very quickly (before setTimeout runs).
	2.	Each time, setTimeout() is called, but it doesn’t run immediately.
	3.	Instead, setTimeout waits for 1 second (1000 ms) before printing.
	4.	But because var is function-scoped, all setTimeouts share the same i.

    🚀 The Event Loop Behavior:
	•	JavaScript is single-threaded and uses an Event Loop.
	•	The loop finishes first, setting i = 10.
	•	Only after 1 second, the setTimeouts execute.
	•	By then, i is already 10, so all 10 console.log() print 10.

    🛑 Why All 10s?
	•	The loop finished in milliseconds, so when setTimeout finally runs, the value of i is already 10.
	•	Since var has function scope, there is only one shared i, not separate ones for each setTimeout.


    📌 Summary:
	•	var is function-scoped, meaning there is only one i shared by all timeouts.
	•	By the time the 1-second delay finishes, the loop is already complete, and i is 10.
	•	All setTimeouts print the same final value (10).
`;

for (let i = 0; i < 10; i++) {
  setTimeout(function () {
    console.log("value is " + i);
  });
}

`
🧠 Key Concept: let Has Block Scope

🔑 1. let Creates a New i for Each Loop Iteration
	•	let has block scope, meaning that a new i is created for every iteration of the loop.
	•	Each setTimeout callback remembers the i from the iteration when it was created.

    What Happens Internally:

In simple terms, JavaScript treats the loop like this:

{
  let i = 0;
  setTimeout(() => console.log(i), 1000);
}
{
  let i = 1;
  setTimeout(() => console.log(i), 1000);
}
{
  let i = 2;
  setTimeout(() => console.log(i), 1000);
}
// ... and so on until i = 9


💡 Why the Correct Output with let?
	•	Each setTimeout remembers its own i from the loop iteration.
	•	No shared variable because let creates a separate i for each iteration.
	•	When the Event Loop executes the timeouts after 1 second, it prints the correct i from each iteration.

    outputBase/image.png
    

`;
