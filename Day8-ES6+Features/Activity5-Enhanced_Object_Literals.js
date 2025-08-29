// Task8---------------
// Use enhanced object literals to create an object with method and properties , and log the object to the console 

let name = "Laptop";
let price = 55000;

// enhanced object literals
const product = {
  name,   // shorthand property
  price,  // shorthand property
  display() {   // shorthand method
    return `Product: ${this.name}, Price: ₹${this.price}`;
  }
};

// Log the object
console.log(product);

// Call the method
console.log(product.display());


// Task9------------------
// Create an object with computed property names based on variables and log the object to the console 

let key1 = "firstName";
let key2 = "age";

// Object with computed property names
const person = {
  [key1]: "Himanshu",
  [key2]: 22
};

// Log the object
console.log(person);
