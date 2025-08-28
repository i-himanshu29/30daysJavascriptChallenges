// Task5-----------------
// Create a nested object representing a library with properties like name and book (an array of book objects), and log the library object to the console
const library = {
  name: "City Central Library",
  books: [
    {
      title: "The Power of Your Subconscious Mind",
      author: "Dr Joseph Murphy",
      year: 2015,
    },
    {
      title: "Atomic Habits",
      author: "James Clear",
      year: 2018,
    },
    {
      title: "Deep Work",
      author: "Cal Newport",
      year: 2016,
    },
  ],
};

// Log the library object
console.log(library);

// Task6---------------------
// Access and log the name of the library and the titles of all the books in the library

// Log library name
console.log("Library Name:", library.name);

// Log all book titles
console.log("Books in Library:");
library.books.forEach((book) => {
  console.log(book.title);
});
