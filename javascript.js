const myLibrary = [];

const createTableData = [];
const createTableRow = [];
let titleInfo = "";
let authorInfo = "";
let pagesInfo = "";
let readInfo = "";
const createDelBtn = [];
const statusChange = [];
const createTableBody = document.querySelector("tbody");

class Book {
  constructor(title, author, pages, read) {
    (this.title = title), (this.author = author), (this.pages = pages), (this.read = read);
  }
}

// Delete all Rows and buttons
function deleteAll() {
  const row = document.querySelectorAll(`tbody > tr`);
  row.forEach((k) => {
    k.remove();
  });
  const cell = document.querySelectorAll("td");
  cell.forEach((l) => {
    l.remove();
  });
  const delRow = document.querySelectorAll(".del");
  delRow.forEach((m) => {
    m.remove();
  });
}

// Create table content
function libraryAddScreen(getBook) {
  getBook.forEach((book) => {
    createTableRow[getBook.indexOf(book)] = document.createElement(`tr`);
    createTableRow[getBook.indexOf(book)].classList.add(`row${getBook.indexOf(book)}`);
    createTableBody.appendChild(createTableRow[getBook.indexOf(book)]);

    Object.values(book).forEach((value) => {
      createTableData[getBook.indexOf(book)] = document.createElement(`td`);
      createTableData[getBook.indexOf(book)].classList.add(`lastCell${getBook.indexOf(book)}`);
      createTableData[getBook.indexOf(book)].textContent = value;
      createTableRow[getBook.indexOf(book)].appendChild(createTableData[getBook.indexOf(book)]);
    });
    statusChange[getBook.indexOf(book)] = document.querySelector(`.row${getBook.indexOf(book)}`);
    statusChange[getBook.indexOf(book)].addEventListener("dblclick", () => {
      getBook[getBook.indexOf(book)].changeStatus();
    });
    createDelBtn[getBook.indexOf(book)] = document.createElement("button");
    createDelBtn[getBook.indexOf(book)].classList.add(`delBtn${getBook.indexOf(book)}`, "del");
    createDelBtn[getBook.indexOf(book)].textContent = "X";
    createTableRow[getBook.indexOf(book)].appendChild(createDelBtn[getBook.indexOf(book)]);
    createDelBtn[getBook.indexOf(book)].addEventListener("click", () => {
      createTableRow[getBook.indexOf(book)].remove();
      myLibrary.splice(getBook.indexOf(book), 1);
      deleteAll();
      libraryAddScreen(myLibrary);
    });
  });
}

Book.prototype.changeStatus = () => {
  if (this.read === "has been read") {
    this.read = "not read yet";
  } else {
    this.read = "has been read";
  }
  deleteAll();
  libraryAddScreen(myLibrary);
};

// Clear forms after submitting or cancelling
function resetForms() {
  document.querySelector("#leForm").reset();
}

// Search in myLibrary Array for match
function searchBook(book) {
  let x = myLibrary.length;
  do {
    if (x === 0) {
      myLibrary.push(book);
      deleteAll();
      libraryAddScreen(myLibrary);
      break;
    } else {
      if (myLibrary[x - 1].title === book.title && myLibrary[x - 1].author === book.author) {
        alert("You already have this book in your list");
        break;
      }
    }
    // x--;
    x -= x;
  } while (x >= -1);
}

// Default books
const harryPotter = new Book("Harry Potter", "J. K. Rowling", "309", "not read yet");
const vampireDieres = new Book("Vampire Diaries", "L. J. Smith", "272", "has been read");
const lordOfTheRings = new Book("Lord of the Rings", "J. R. R. Tolkien", "432", "not read yet");
myLibrary.push(harryPotter, vampireDieres, lordOfTheRings);

// Add books to array
function addBookToLibrary(gettitleInfo, getauthorInfo, getpagesInfo, getreadInfo) {
  const getBook = new Book(gettitleInfo, getauthorInfo, getpagesInfo, getreadInfo);
  searchBook(getBook);
}

libraryAddScreen(myLibrary);

// -------------------Forms-----------------------
const titleEl = document.querySelector("#addTitle");
const authorEl = document.querySelector("#addAuthor");
const noPEl = document.querySelector("#addNoP");
const addBtn = document.querySelector(".addBtn");
const newBtn = document.querySelector("#newBtn");
const theForm = document.querySelector(".theForm");
const cancelBtn = document.querySelector("#cancelBtn");
const radioEl = document.querySelectorAll('input[type="radio"]');

// ------------------Form EventListeners-----------------------
function getInfo() {
  titleInfo = titleEl.value;
  authorInfo = authorEl.value;
  pagesInfo = noPEl.value;
  radioEl.forEach((radio) => {
    if (radio.checked === true) {
      readInfo = radio.defaultValue;
    }
  });
}

// ------------------3 Button EventListener-------------------------
newBtn.addEventListener("click", () => {
  theForm.setAttribute("style", "display: block; visibility: visible;");
  newBtn.setAttribute("style", "visibility: hidden;");
});

addBtn.addEventListener("click", () => {
  if (titleEl.validity.valid === true && authorEl.validity.valid === true && noPEl.validity.valid === true) {
    event.preventDefault();
    getInfo();
    addBookToLibrary(titleInfo, authorInfo, pagesInfo, readInfo);
    resetForms();
    theForm.setAttribute("style", "display: none; visibility: hidden;");
    newBtn.setAttribute("style", "visibility: visible;");
  }
});

cancelBtn.addEventListener("click", () => {
  theForm.setAttribute("style", "display: none; visibility: hidden;");
  newBtn.setAttribute("style", "visibility: visible;");
  resetForms();
});
