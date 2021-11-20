// UI Element
let form = document.querySelector("#book-form");
let container = document.querySelector(".container");
let bookList = document.querySelector("#book-list");
// Classes
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  static addToTable(book) {
    let table = document.querySelector("#book-list");
    let row = document.createElement("tr");
    row.innerHTML = `<td>${book.title}</><td>${book.author}</><td>${book.isbn}</><td><a href="#" class="delete">x</>`;
    table.appendChild(row);
  }
  static clearField(book) {
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#isbn").value = "";
  }
  static showAlert(msg, className) {
    let div = document.createElement("div");
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(msg));
    container.insertBefore(div, form);
    setTimeout(() => {
      document.querySelector(".alert").remove();
    }, 3000);
  }
  static removeBook(target) {
    if (target.hasAttribute("href")) {
      Store.removeBook(
        target.parentElement.previousElementSibling.textContent.trim()
      );
      target.parentElement.parentElement.remove();
      UI.showAlert("Successfully removed", "removed");
    }
  }
}

class Store {
  static getBooks() {
    let books;
    if (localStorage.getItem("books") === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem("books"));
    }
    return books;
  }
  static addBook(book) {
    let books = Store.getBooks();
    books.push(book);
    localStorage.setItem("books", JSON.stringify(books));
  }
  static displayBooks() {
    let books = Store.getBooks();
    books.forEach((book) => {
      UI.addToTable(book);
    });
  }
  static removeBook(isbn) {
    let books = Store.getBooks();
    books.forEach((book, index) => {
      if (book.isbn === isbn) {
        books.splice(index, 1);
      }
    });
    localStorage.setItem("books", JSON.stringify(books));
  }
}

// Events
form.addEventListener("submit", addNewBook);
bookList.addEventListener("click", removeBook);
document.addEventListener("DOMContentLoaded", Store.displayBooks());
// Function
function addNewBook(e) {
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let isbn = document.querySelector("#isbn").value;
  let book = new Book(title, author, isbn);

  if (title === "" || author === "" || isbn === "") {
    UI.showAlert("Please fiil all forms!", "error");
  } else {
    UI.showAlert("Successfully added!", "success");
    UI.addToTable(book);

    Store.addBook(book);
    UI.clearField(book);
  }
  e.preventDefault();
}
// function bro() {
//   document.querySelector(".alert").remove();
// }
function removeBook(e) {
  UI.removeBook(e.target);

  e.preventDefault;
}
