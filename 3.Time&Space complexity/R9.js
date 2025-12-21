var MissingSum = function (arr) {
  let n = arr.length // calculating length of arr n
  let totalSum = n * (n + 1) / 2; // formula for sum of first n natural numbers
  let partialSum = 0; // initializing partialSum to 0

  for (let i = 0; i < n; i++) {
    partialSum = partialSum + arr[i]; // calculating sum of elements in arr wh
  }
  return totalSum - partialSum; // returning the missing number
}

let arr = [0, 3, 4, 2]
let res = MissingSum(arr)
console.log(res)



/*

Let's **dry run step-by-step** 👇

---

## **Code**

```js
var MissingSum = function (arr) {
  let n = arr.length
  let totalSum = n * (n + 1) / 2;
  let partialSum = 0;

  for (let i = 0; i < n; i++) {
    partialSum = partialSum + arr[i];
  }
  return totalSum - partialSum;
}

let arr = [0, 3, 4, 2]
let res = MissingSum(arr)
console.log(res)
```

---

## **Dry Run**

### **Given array**

```
arr = [0, 3, 4, 2]
```

### **Step 1: length**

```
n = arr.length = 4
```

### **Step 2: totalSum**

```
totalSum = n*(n + 1)/2
         = 4*(4 + 1)/2
         = 4*5/2
         = 20/2
         = 10
```

### **Step 3: Calculate partialSum using loop**

Initial:

```
partialSum = 0
```

---

### **Loop iteration i = 0**

```
partialSum = 0 + arr[0]
           = 0 + 0
           = 0
```

---

### **Loop iteration i = 1**

```
partialSum = 0 + arr[1]
           = 0 + 3
           = 3
```

---

### **Loop iteration i = 2**

```
partialSum = 3 + arr[2]
           = 3 + 4
           = 7
```

---

### **Loop iteration i = 3**

```
partialSum = 7 + arr[3]
           = 7 + 2
           = 9
```

---

### **partialSum after loop**

```
partialSum = 9
```

---

### **Step 4: Return result**

```
result = totalSum - partialSum
       = 10 - 9
       = 1
```

---

## **Final Output**

```
1
```

---

## **Answer**

The missing number is **1** 🎉

If you want, I can also:

* explain logic
* convert to map solution
* solve when numbers start from 1
* dry run another example
  Just tell me 😄


*/