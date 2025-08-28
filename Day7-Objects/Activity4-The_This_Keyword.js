// Task7------------------
// Add a method to the book object that uses the "this" keyword to return a string with the book's title and the year , and log the result of calling this method

const book = {
  title: "Atomic Habits",
  author: "James Clear",
  year: 2018,
  getSummary: function () {
    return `${this.title} was published in ${this.year}`;
  },
};

// Call the method and log result
console.log(book.getSummary());
