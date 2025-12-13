// Star patten
/*
****
****
****
****
*/
let n = 4
for (i = 0; i < n+2  // when we increase value of n row will increase
  ; i++) {
  let row = ""
  for (j = 0; j < n+2  ; j++) {
    // when we increase value of j column increase
    row = row + "*"
  }
  console.log(row)
}