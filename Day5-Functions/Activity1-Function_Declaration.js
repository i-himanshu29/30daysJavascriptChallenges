// Task1-------------
// WAF to check if a number is even or odd and log the result to the console

function checkEvenOdd(n) {
  if (n % 2 == 0) {
    console.log(`${n} is an Even number`);
  } else {
    console.log(`${n} is an Odd number`);
  }
}
checkEvenOdd(1111);

// Task2------
// WAF to calculate the square of a number and return the result

function calculateSquare(num) {
  let ans = num * num;
  console.log(`The Square of ${num} is :`, ans);
  return ans;
}
calculateSquare(20);
