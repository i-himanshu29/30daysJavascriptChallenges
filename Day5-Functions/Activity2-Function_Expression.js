// Task3-----------
// WAF expression to find the maximum of two number of two numbers and log the result to the console

function maximumOfTwoNumbers(num1, num2) {
  let ans = Math.max(num1, num2);
  console.log(`Maximum of two number is:`, ans);
  return ans;
}
maximumOfTwoNumbers(100, 10);

// Task4-----------
// WAF expression to concatenate two strings and return the result

function concatenateTwoStrings(string1, string2) {
  let ans = string1 + " " + string2;
  console.log(`Concatenation of two string ${string1} and ${string2} is:`, ans);
  return ans;
}
concatenateTwoStrings("Himanshu", "Maurya");
