// Task3-------------
// Add a method to the book object that returns a string with the book's title and author and log the rresult of calling this method

const favBook = {
  title: "The Power of Your Subconscious Mind",
  author: "Dr Joseph Murphy",
  year: 2015,
  getDetails: function () {
    return `${this.title} by ${this.author}`;
  },
};

console.log(favBook.getDetails());

// Task4--------------------
// Add a method to the book object that take a parameter (year) and updates the book's year property , the log the updated object

const myBook = {
  title: "The Power of Your Subconscious Mind",
  author: "Dr Joseph Murphy",
  year: 2015,
  updateYear: function (newYear) {
    this.year = newYear; // update property
  },
};

// Call the method to update year
myBook.updateYear(2025);

// Log the updated object
console.log(myBook);
