let count = 0;

function printTillThree() {
  if (count >= 4) {
    return;
  }
  console.log(count);
  count++;
  printTillThree();
}

printTillThree();
