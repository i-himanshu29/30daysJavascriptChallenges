//Activity1-Variable declaration
// Task1-------------
// Declare a variable using var , assign it a number , and log the values to the console 
var number = 20;
console.log(number)

// Task2-----------------
// Declare a variable using let , assign it a string , and log the value to the console 

let String = "Himanshu"
console.log(String)


//Activity2-Constant declaration
// Task3-----------------
// Declare a vaariable using const , assign it a boolean value , and log the value to the console 
const boolean = true
console.log(boolean)

// Activity3-Data Types
// Task4----------------
// Create a variable of different data types (number, string, boolean, object,array) and log each variable's type using the 'typeof' operator 

let num=10;
console.log("This is :" ,typeof(num));

let str='10';
console.log("This is :",typeof(str));

let Hey = true;
console.log("This is :",typeof(Hey));

//Array and Objects
let students = ["Himanshu","Aditya","Aman"];
console.log("This is Array of Students :",students);

let myObject = {
    name:"Himanshu",
    age:22,
}
console.log("This is Object:",myObject)


// Reassigning Variables 
// Task5------------
// Declare a variable using 'let', assign it an initial value , reassign a new value , and log both values to the console 
let num1 = 10;
let number2 = 4;
// num1=number2;
number2=num1;
console.log(num1);
console.log(number2);


// Activity5-Understanding const 
// Task6----------------
// Try reassigning a variable declared with const and observe the error 
const Number = 10;
const Number2 = 4;
// num1=number2;
Number2=Number;
console.log(Number);
console.log(Number2);

