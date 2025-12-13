/*
12345
1234
123
12
1
*/
let n = 5

for (i = 0; i < n; i++) {
  let row = ""
  // adding empty spaces 
  for (j = 0; j < n - (i + 1); j++) {
    row = row + ("-")
  }
  // adding stars
  for (k = 0; k < i + 1; k++) {
    row = row + "*"
  }
  console.log(row)
}