
for (i = 0; i < 3; i++) {
  for (j = i; j > 0; j--) {
    console.log("output", i, j)
  }
}


for (i = 5; i > 0; i--) {
  for (j = 0; j < i; j++) {
    console.log(i + " " + j) // run 15 times
  }
}