// Task5---------------
// write a arrow function to calculate the sum of two numbers and return the result

// const Sum = (num1,num2) => {
//     let ans = num1+num2;
//     console.log(`Sum of ${num1} and ${num2} is :`, ans);
//     return ans;
// }
// Sum(1,3);

// or

const Sum = (num1, num2) => num1 + num2;
console.log(Sum(1, 3)); // 4

// Task6 --------------
// write a arrow function to check if a string contains a specific character and return a boolean value

const specificCharacterChecker = (str, ch) => {
  return str.includes(ch);
};

console.log(specificCharacterChecker("Himanshu", "h")); // true
console.log(specificCharacterChecker("Maurya", "z")); // false
