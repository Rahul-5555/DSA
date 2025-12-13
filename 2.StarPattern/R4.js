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
  for (j = 0; j < n - i; j++) {
    row = row + (j + 1)
  }
  console.log(row)
}