// find sum of first n number using recursion?

function sum(n) {
  if (n == 0) return 0;
  return n + sum(n - 1)
}

console.log(sum(5))