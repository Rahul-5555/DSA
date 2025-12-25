function powerTwo(n) {
  // base case
  if (n === 1) {
    return true;
  }

  // invalid cases
  if (n < 1 || n % 2 !== 0) {
    return false;
  }

  // recursive call
  return powerTwo(n / 2);
}

console.log(powerTwo(4));   // false
console.log(powerTwo(8));   // true
console.log(powerTwo(16));  // true
