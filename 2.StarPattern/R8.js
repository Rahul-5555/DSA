/*
1
10
101
1010
10101
101010
*/
let n = 5;
for(i=0; i<n; i++){ // i less than n loop ke under condition is true
  let row = "";  
  let toggle = 1;
  for(j=0; j<i+1; j++){
    row = row + toggle;
    // switch the toggle
    if(toggle == 1) {
      toggle =0;
    }
    else {
      toggle = 1;
    }
  }
  console.log(row)
}