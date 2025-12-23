// Print 1 to n using recursioon

let n = 5;

function print(x) {
  if(x > n) { // base case
    return;
  }
  console.log(x)
  print(++x)
}
print(1)