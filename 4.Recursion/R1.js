// RECURSION

function fun(num) {
  // base case to stop function call itself
  if (num == 0) {
    return
  }
  console.log(num)
  num = num - 1;
  fun(num)
}
a = 6
fun(a)