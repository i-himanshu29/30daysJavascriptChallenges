// Task3--------------
// Use array destructuring to extract the first and second elements from an array of numbers and log them to the console. 

const numbers = [10, 20, 30, 40, 50];

// Destructuring the first and second elements
const [first, second] = numbers;

// Log them to the console
console.log("First element:", first);
console.log("Second element:", second);



// Task4------------
// Use object destructuring to extract the title and author from a book object and log them to the console 

const book = {
    title: "The Alchemist",
    author: "Paulo Coelho",
    year: 1988
  };
  
  // Object destructuring
  const { title, author } = book;
  
  // Log to the console
  console.log("Title:", title);
  console.log("Author:", author);
  