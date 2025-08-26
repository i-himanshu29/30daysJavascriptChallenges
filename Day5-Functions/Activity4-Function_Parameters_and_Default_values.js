// Task7---------------------
// WAF that takes two parameters and returns their product .
//Providde a default value for the second parameter

function getProduct(num1, num2 = 6) {
  return num1 * num2;
}

// Examples
console.log(getProduct(5, 3)); // 15
console.log(getProduct(7)); // 7 (because num2 defaults to 1)

// Task8-----------------
// WAF that takes a person's name and age and returns a greeting
// message , Provide a default value for the age.

function greetingMessage(name, age = 18) {
  console.log(`Hey Welcome ${name} and you are ${age} years old right.`);
}
greetingMessage("Himanshu", 20);
greetingMessage("Himanshu");
