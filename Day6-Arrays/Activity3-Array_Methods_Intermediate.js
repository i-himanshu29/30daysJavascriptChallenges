// Task7--------------
// Use the map method to create a new array where each number is doubled and log the new array

let array = [1, 2, 3, 4, 5];
const doubledEachElement = array.map((num) => num * 2);
console.log(doubledEachElement);

// Task8-----------------
// Use the filter method to create a new array with only even numbers and log the new array

let elements = [1, 3, 2, 6, 4, 5];
const filterElement = elements.filter((nums) => nums % 2 === 0);
console.log(filterElement);

// Task9------------------
// Use the reduce method to calculate the sum of all numbers in the array and log the result

const numbers = [1, 2, 37, 4, 5];

const sum = numbers.reduce((acc, num) => acc + num, 0);

console.log(sum); // 15
