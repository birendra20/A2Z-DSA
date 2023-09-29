function invertedPyramid(n) {
  let bag;
  for (let row = 0; row < n; row++) {
    bag = "";
    // space
    for (let col = 0; col < row; col++) {
      bag = bag + " ";
    }
    // star
    for (let col = 0; col < n * 2 - (2 * row + 1); col++) {
      bag = bag + "*";
    }
    // space
    for (let col = 0; col < row; col++) {
      bag = bag + " ";
    }
    console.log(bag);
  }
}

invertedPyramid(5);

// n=5
// 1  9 (n*2-row) =9
// 2  7 (n*2-row-1) =7
// 3  5 (n*2-row-2)
// 4  3
// 5  1
