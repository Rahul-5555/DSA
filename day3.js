// DAY 3: if else
function calculateAge(age) {
  if (age < 0) {
    console.log("Age cannot be negative.");
  }
  else if (age < 18) {
    console.log("You are a minor.");
  }
  else {
    console.log("You are an adult.");
  }
}
calculateAge(19)
calculateAge(-5)
calculateAge(15)


// create a function to check if a number is even or odd
function checkEvenOdd(num) {
  let remainder = num % 2; // gives remainder when num is divided by 2
  if (remainder === 0) {
    console.log(num + " is even.");
  }
  else {
    console.log(num + " is odd.");
  }
}
checkEvenOdd(10)