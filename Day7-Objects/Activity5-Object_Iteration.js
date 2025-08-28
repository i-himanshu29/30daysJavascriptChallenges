// Task8-----------------
// Use a 'for...in' loop to iterate over the properties of the book object and log the property and its value

const book = {
  title: "Atomic Habits",
  author: "James Clear",
  year: 2018,
  getSummary: function () {
    return `${this.title} was published in ${this.year}`;
  },
};

// Use for...in loop to log properties and their values
for (let prop in book) {
  console.log(`${prop}: ${book[prop]}`);
}

// Task9--------------------
// Use 'Object.Keys' and 'Object.values' method to log all the keys and values of the book Object.
const myBook = {
  title: "Atomic Habits",
  author: "James Clear",
  year: 2018,
  summary: function () {
    return `${this.title} was published in ${this.year}`;
  },
};

// Log all keys
console.log("Keys:", Object.keys(myBook));

// Log all values
console.log("Values:", Object.values(myBook));
