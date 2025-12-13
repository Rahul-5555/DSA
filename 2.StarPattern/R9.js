/*
1
01
010
1010
10101
*/
let n = 5;
let toggle = 1;
for (i = 0; i < n; i++) { // i less than n loop ke under condition is true
  let row = "";
  for (j = 0; j < i + 1; j++) {
    row = row + toggle;
    // switch the toggle
    if (toggle == 1) {
      toggle = 0;
    }
    else {
      toggle = 1;
    }
  }
  console.log(row)
}