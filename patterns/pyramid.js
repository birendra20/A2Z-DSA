function pyramid(n) {
  let bag;
  for (let row = 0; row < n; row++) {
    bag = "";
    // space
    for (let col = 0; col < n - row - 1; col++) {
      bag = bag + " ";
    }
    // star
    for (let col = 0; col < 2 * row + 1; col++) {
      bag = bag + "*";
    }
    // space
    for (let col = 0; col < n - row - 1; col++) {
      bag = bag + " ";
    }
    console.log(bag);
  }
}

pyramid(5);
