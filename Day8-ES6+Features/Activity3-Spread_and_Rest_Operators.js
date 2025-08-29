// Task5------------------
// Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console 

const numbers = [1, 2, 3];

// Create new array with spread operator and extra elements
const newNumbers = [...numbers, 4, 5, 6];

// Log the new array
console.log(newNumbers);


// Task6--------------
// Use the rest operators in a function to accept an arbitrary number of arguments, sum them , and return the result 


function sumAll(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
  }
  
  // Example usage
  console.log(sumAll(1, 2, 3));        // 6
  console.log(sumAll(5, 10, 15, 20)); // 50
  console.log(sumAll());              // 0
  