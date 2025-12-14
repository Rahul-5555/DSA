// Loop within loop

for (i = 0; i < 3; i++) {
  for (j = 0; j < 3; j++) {
    console.log("i=" + i + " " + "j=" + j)
  }
}

console.log("for j < i")
for (i = 0; i < 3; i++) {
  for (j = 0; j < i; j++) {
    console.log("i=" + i + " " + "j=" + j)
  }
}

console.log("For j<= ")
for (i = 0; i < 3; i++) {
  for (j = 0; j <= i; j++) {
    console.log("i=" + i + " " + "j=" + j)
  }
}


