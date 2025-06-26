// 1. Multiplier Factory:
function createMultiplier(factor) {
  function multiplier(number) {
    return number * factor;
  }
  return multiplier;
}
//check:
const double = createMultiplier(2);
console.log(double(5));
const triple = createMultiplier(3);
console.log(triple(5));
const half = createMultiplier(0.5);
console.log(half(10));

//2. Once Function:
function once(fn) {
  let called = false;
  return function (...arg) {
    if (!called) {
      called = true;
      return fn(...arg);
    }
    return undefined;
  };
}

function greet(name) {
  console.log("Hello, " + name + "!");
}

const greetOnce = once(greet);

greetOnce("Ygor"); // Output: Hello, Ygor!
greetOnce("John"); // No output
greetOnce("Jane"); // No output

//3. Factorial:

function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}
console.log(factorial(0)); // 1
console.log(factorial(5)); // 120
