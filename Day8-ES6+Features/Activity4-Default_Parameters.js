// Task7--------------
// Write a function that take two parameters and returns their product , with 
// the second parameter having a default value of 1 . Log the result of calling this function 
// with and without the second parameters . 


function multiply(a, b = 1) {
    return a * b;
  }
  
  // Calling with both parameters
  console.log(multiply(5, 4)); // 20
  
  // Calling with only one parameter
  console.log(multiply(7));    // 7 (since b defaults to 1)
  