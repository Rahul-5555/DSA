// Print n to 1 using recursion?
function print(n) {
  // base case
  if(n<1){
    return;
  }
  console.log(n)
  print(--n)
}
n = 3
print(n)