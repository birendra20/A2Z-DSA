// function rectangularPattern(n) {
//   let bag;
//   for (let row = 0; row < n; row++) {
//     bag = "";
//     for (let col = 0; col < n; col++) {
//       bag = bag + "* ";
//     }
//     console.log(bag);
//   }
// }

// rectangularPattern(5);

// function rightAnglePattern(n) {
//   let bag;
//   for (let row = 0; row < n; row++) {
//     bag = "";
//     for (let col = 0; col <= row; col++) {
//       bag = bag + "* ";
//     }
//     console.log(bag);
//   }
// }

// rightAnglePattern(5);

// function numberRightAnglePatternCol(n) {
//   let bag;
//   for (let row = 1; row <= n; row++) {
//     bag = "";
//     for (let col = 1; col <= row; col++) {
//       bag = bag + col + " ";
//     }
//     console.log(bag);
//   }
// }

// numberRightAnglePatternCol(5);

// function numberRightAnglePatternRow(n) {
//   let bag;
//   for (let row = 1; row <= n; row++) {
//     bag = "";
//     for (let col = 1; col <= row; col++) {
//       bag = bag + row + " ";
//     }
//     console.log(bag);
//   }
// }

// numberRightAnglePatternRow(5);

// function invertedRightPyramid(n) {
//   let bag;
//   // for (let row = n; row >= 1; row--) {
//   //   bag = "";
//   //   for (let col = row; col >= 1; col--) {
//   //     bag = bag + "* ";
//   //   }
//   //   console.log(bag);
//   // }
//   for (let row = 0; row < n; row++) {
//     bag = "";
//     for (let col = 0; col < n - row; col++) {
//       bag = bag + "* ";
//     }
//     console.log(bag);
//   }
// }

// invertedRightPyramid(5);

// function numberInvertedRightPyramid(n) {
//   let bag;

//   for (let row = 0; row < n; row++) {
//     bag = "";
//     for (let col = 0; col < n - row; col++) {
//       num = col + 1;
//       bag = bag + num + " ";
//     }
//     console.log(bag);
//   }
// }

// numberInvertedRightPyramid(5);
