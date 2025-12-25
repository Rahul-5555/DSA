// fibonnaci number

function fib(n) {
  // base case
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}
console.log(fib(8));  // 5


/*
Perfect 👍
Chalo **fib(5)** ka **dry run step-by-step** dekhte hain (recursive version).

---

## 🧠 Code (Reference)

```js
function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}

fib(5);
```

---

## 🔁 Dry Run (Call Stack Flow)

```
fib(5)
= fib(4) + fib(3)

fib(4)
= fib(3) + fib(2)

fib(3)
= fib(2) + fib(1)

fib(2)
= fib(1) + fib(0)
= 1 + 0 = 1

fib(3)
= 1 + 1 = 2

fib(4)
= 2 + 1 = 3

fib(5)
= 3 + 2 = 5
```

---

## 📊 Tree View (Easy to Remember)

```
                fib(5)
           /                \
       fib(4)               fib(3)
      /      \             /      \
  fib(3)   fib(2)      fib(2)   fib(1)
   /   \     /   \
fib(2) fib(1) fib(1) fib(0)
```

---

## 🎯 Key Observation (Interview Gold)

* Same calls repeat (`fib(3)`, `fib(2)`)
* That’s why **memoization** is useful

---

## 🧠 1 Line Interview Answer

**Recursive Fibonacci breaks the problem into smaller subproblems until base cases `0` and `1` are reached.**

---

Next step bole?

* **fib(8) dry run**
* **Memoization dry run**
* **Iterative dry run**
* **Practice question**

Bas likho 👍
9934
.   ॉk,  
*/