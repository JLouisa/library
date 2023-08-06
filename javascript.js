let myLibrary = [];

let createTableData = [];
let createTableRow = [];
let createTableDataHead = [];
let titleInfo = "";
let authorInfo = "";
let pagesInfo = "";
let readInfo = "";
let createDelBtn = [];

//Instructor
function Book(title, author, pages, read) {
  (this.title = title),
    (this.author = author),
    (this.pages = pages),
    (this.read = read);
  // (info = function () {
  //   return `${this.title} by ${this.author} has ${this.pages} pages and ${this.read}`;
  // }),
  // (changeStatus = function () {
  //   if (this.read == "Yes") {
  //     this.read = "No";
  //   } else {
  //     this.read = "Yes";
  //   }
  //   libraryAddScreen(myLibrary);
  // });
}

//Prototype Book
Book.prototype.sayHello = function () {
  console.log("Hello, It's working!");
};

//Default books
const harryPotter = new Book(
  "Harry Potter",
  "J. K. Rowling",
  "309",
  "not read yet"
);
const vampireDieres = new Book(
  "Vampire Diaries",
  "L. J. Smith",
  "272",
  "has been read"
);
const lordOfTheRings = new Book(
  "Lord of the Rings",
  "J. R. R. Tolkien",
  "432",
  "not read yet"
);
myLibrary.push(harryPotter, vampireDieres, lordOfTheRings);

//Add books to array
function addBookToLibrary(titleInfo, authorInfo, pagesInfo, readInfo) {
  let getBook = new Book(titleInfo, authorInfo, pagesInfo, readInfo);
  searchBook(getBook);
}

//Search in myLibrary Array for match
function searchBook(book) {
  let calcFound = false;
  for (let x = 0; x < myLibrary.length; x++) {
    if (myLibrary[x].title === book.title) {
      alert("You already have this book in your list");
      calcFound = true;
      break;
    } else {
      if (x == myLibrary.length - 1 && calcFound == false) {
        myLibrary.push(book);
        deleteAll();
        libraryAddScreen(myLibrary);
        break;
      }
    }
  }
}

const createTableBody = document.querySelector("tbody");

libraryAddScreen(myLibrary);

//Create table content
function libraryAddScreen(getBook) {
  for (let book of getBook) {
    createTableRow[getBook.indexOf(book)] = document.createElement(`tr`);
    createTableRow[getBook.indexOf(book)].classList.add(
      `row$${getBook.indexOf(book)}`
    );
    createTableBody.appendChild(createTableRow[getBook.indexOf(book)]);

    Object.values(book).forEach((value) => {
      createTableData[getBook.indexOf(book)] = document.createElement(`td`);
      createTableData[getBook.indexOf(book)].textContent = value;
      createTableRow[getBook.indexOf(book)].appendChild(
        createTableData[getBook.indexOf(book)]
      );
    });
    createDelBtn[getBook.indexOf(book)] = document.createElement("button");
    createDelBtn[getBook.indexOf(book)].classList.add(
      `delBtn${getBook.indexOf(book)}`,
      "del"
    );
    createDelBtn[getBook.indexOf(book)].textContent = "X";
    createTableRow[getBook.indexOf(book)].appendChild(
      createDelBtn[getBook.indexOf(book)]
    );
    createDelBtn[getBook.indexOf(book)].addEventListener("click", () => {
      createTableRow[getBook.indexOf(book)].remove();
      myLibrary.splice(getBook.indexOf(book), 1);
      deleteAll();
      libraryAddScreen(myLibrary);
    });
  }
}

//-------------------Forms-----------------------
const printBooks = document.querySelector(".books");
const titleEl = document.querySelector("#addTitle");
const authorEl = document.querySelector("#addAuthor");
const noPEl = document.querySelector("#addNoP");
const readEl = document.querySelector("#addReadYes");
const readEln = document.querySelector("#addReadNo");
const addBtn = document.querySelector(".addBtn");
const newBtn = document.querySelector("#newBtn");
const theForm = document.querySelector(".theForm");
const cancelBtn = document.querySelector("#cancelBtn");

//------------------Form EventListeners-----------------------
titleEl.addEventListener("input", updateValue);
authorEl.addEventListener("input", updateValue2);
noPEl.addEventListener("input", updateValue3);
readEl.addEventListener("input", updateValue4);
readEln.addEventListener("input", updateValue4);

function updateValue(e) {
  titleInfo = e.target.value;
}
function updateValue2(e) {
  authorInfo = e.target.value;
}
function updateValue3(e) {
  pagesInfo = e.target.value;
}
function updateValue4(e) {
  readInfo = e.target.value;
}

//------------------3 Button EventListener-------------------------
newBtn.addEventListener("click", () => {
  theForm.setAttribute("style", "visibility: visible;");
});

addBtn.addEventListener("click", () => {
  addBookToLibrary(titleInfo, authorInfo, pagesInfo, readInfo);
  resetForms();
  theForm.setAttribute("style", "visibility: hidden;");
});

cancelBtn.addEventListener("click", () => {
  theForm.setAttribute("style", "visibility: hidden;");
  resetForms();
});

//Clear forms after submitting or cancelling
function resetForms() {
  document.querySelector("#leForm").reset();
}

//Delete all Rows and buttons
function deleteAll() {
  let row = document.querySelectorAll("td");
  row.forEach((n) => {
    n.remove();
  });
  let delRow = document.querySelectorAll(".del");
  delRow.forEach((d) => {
    d.remove();
  });
}

//Change Read Status
function changeStatus() {
  if (book.read == "Yes") {
    book.read = "No";
  } else {
    book.read = "Yes";
  }
  libraryAddScreen(myLibrary);
}

// console.log(harryPotter.info());
// console.log(harryPotter);
