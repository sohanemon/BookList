// UI Element
let form = document.querySelector("#book-form");

// Classes
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

// Events
form.addEventListener("submit", addNewBook);

// Function
function addNewBook(e) {
  e.preventDefault();
}
