/*
*
**
***
****
*/
let n = 4;

for (let i = 0; i < 4; i++) {
  let row = "";
  for (let j = 0; j < i + 1; j++) {
    row = row + "*"
  }
  console.log(row)
}