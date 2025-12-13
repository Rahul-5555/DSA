/*
*
**
***
****
*/
let n = 5;

for (let i = 0; i < 5; i++) {
  let row = "";
  for (let j = 0; j < i + 1; j++) {
    row = row + (i + 1)
  }
  console.log(row)
}