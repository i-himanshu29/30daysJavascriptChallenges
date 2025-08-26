// Task9---------
// Write a higher order function that takes a function and a number , and calls the function that  many times

const repeatFunction = (fn, times) => {
  for (let i = 0; i < times; i++) fn();
};
// Example
repeatFunction(() => console.log("Himanshu here!"), 5);

// Task10-----------
// Write a higher order function that takes two functions and a value applies the first fuction to the value , and applies the second function to the result

// Higher-order arrow function
const applyTwoFunctions = (fn1, fn2, value) => fn2(fn1(value));

// Example functions
const double = (x) => x * 2;
const square = (x) => x * x;

// Usage examples
console.log(applyTwoFunctions(double, square, 5)); // 100 → double(5)=10 → square(10)=100
console.log(applyTwoFunctions(square, double, 5)); // 50 → square(5)=25 → double(25)=50
