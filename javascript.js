let myLibrary = [];

let createTableData = [];
let createTableRow = [];
let createTableDataHead = [];
let titleInfo = "";
let authorInfo = "";
let pagesInfo = "";
let readInfo = "";
let createDelBtn = [];

function Book(title, author, pages, read) {
  (this.title = title),
    (this.author = author),
    (this.pages = pages),
    (this.read = read);
}

const book1 = new Book("Harry Potter", "J. K. Rowling", "309", "No");
const book2 = new Book("Vampire Diaries", "L. J. Smith", "272", "Yes");
const book3 = new Book("Lord of the Rings", "J. R. R. Tolkien", "432", "No");

myLibrary.push(book1, book2, book3);

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
        singleAddScreen(book);
        break;
      }
    }
  }
}

const createTableBody = document.querySelector("tbody");

libraryAddScreen(myLibrary);

//Create on screen
function libraryAddScreen(getBook) {
  for (let book of getBook) {
    createTableRow[getBook.indexOf(book)] = document.createElement("tr");
    createTableBody.appendChild(createTableRow[getBook.indexOf(book)]);

    for (let property in book) {
      createTableData[getBook.indexOf(book)] = document.createElement(`td`);
      createTableData[getBook.indexOf(book)].textContent = book[property];
      createTableRow[getBook.indexOf(book)].appendChild(
        createTableData[getBook.indexOf(book)]
      );
    }
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
      console.log(myLibrary);
    });
  }
}

function singleAddScreen(book) {
  createTableRow[myLibrary.indexOf(book)] = document.createElement("tr");
  createTableBody.appendChild(createTableRow[myLibrary.indexOf(book)]);

  for (let property in book) {
    createTableData[myLibrary.indexOf(book)] = document.createElement(`td`);
    createTableData[myLibrary.indexOf(book)].textContent = book[property];
    createTableRow[myLibrary.indexOf(book)].appendChild(
      createTableData[myLibrary.indexOf(book)]
    );
  }
  createDelBtn[myLibrary.indexOf(book)] = document.createElement("button");
  createDelBtn[myLibrary.indexOf(book)].classList.add(
    `delBtn${myLibrary.indexOf(book)}`,
    "del"
  );
  createDelBtn[myLibrary.indexOf(book)].textContent = "X";
  createTableRow[myLibrary.indexOf(book)].appendChild(
    createDelBtn[myLibrary.indexOf(book)]
  );
  createDelBtn[myLibrary.indexOf(book)].addEventListener("click", () => {
    createTableRow[myLibrary.indexOf(book)].remove();
    myLibrary.splice(myLibrary.indexOf(book), 1);
    console.log(myLibrary);
  });
}

//-------------------Forms-----------------------
const printBooks = document.querySelector(".books");
const titleEl = document.querySelector("#addTitle");
const authorEl = document.querySelector("#addAuthor");
const noPEl = document.querySelector("#addNoP");
const readEl = document.querySelector("#addRead");
const addBtn = document.querySelector(".addBtn");
const newBtn = document.querySelector("#newBtn");
const theForm = document.querySelector(".theForm");
const cancelBtn = document.querySelector("#cancelBtn");

//------------------Typing EventListeners-----------------------
titleEl.addEventListener("input", updateValue);
authorEl.addEventListener("input", updateValue2);
noPEl.addEventListener("input", updateValue3);
readEl.addEventListener("input", updateValue4);

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

function resetForms() {
  document.querySelector("#leForm").reset();
}

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

const deleteEverything = document.querySelector(".deleteEverything");
deleteEverything.addEventListener("click", () => {
  deleteAll();
});
