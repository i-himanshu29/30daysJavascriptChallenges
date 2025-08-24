// Task7-------
// WAP to check if a year is a leap year using multiple conditions 
// (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console

function checkLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
      console.log(year + " is a Leap Year ✅");
    } else {
      console.log(year + " is NOT a Leap Year ❌");
    }
  }
  
  // Example usage
  checkLeapYear(2024); // Leap Year
  checkLeapYear(2100); // Not a Leap Year
  checkLeapYear(2000); // Leap Year
  checkLeapYear(2023); // Not a Leap Year
  