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

class UI {
  constructor() {}
  addToTable(book) {
    let table = document.querySelector("#book-list");
    let row = document.createElement("tr");
    row.innerHTML = `<td>${book.title}</><td>${book.author}</><td>${book.isbn}</><td><a href="#" class="delete">x</>`;
    table.appendChild(row);
  }
  clearField(book) {
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#isbn").value = "";
  }
}
// Events
form.addEventListener("submit", addNewBook);

// Function
function addNewBook(e) {
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let isbn = document.querySelector("#isbn").value;
  let book = new Book(title, author, isbn);
  let ui = new UI();
  ui.addToTable(book);
  ui.clearField(book);
  e.preventDefault();
}
