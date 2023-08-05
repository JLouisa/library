let myLibrary = [];
let createTableData = [];
let createTableRow = [];
let createTableDataHead = [];

function Book(title, author, pages, read) {
  (this.title = title),
    (this.author = author),
    (this.pages = pages),
    (this.read = read);
}

let i = 1;

const book1 = new Book("Harry Potter", "J. K. Rowling", "309", "No");
const book2 = new Book("Vampire Diaries", "L. J. Smith", "272", "Yes");
const book3 = new Book("Lord of the Rings", "J. R. R. Tolkien", "432", "No");

myLibrary.push(book1, book2, book3);

function addBookToLibrary() {
  // let getBook = new Book("Harry Potter", "J. K. Rowling", "309", "No");
  // myLibrary.push(getBook);
  addScreen(myLibrary);
}

const createTableBody = document.querySelector("tbody");
createTableBody.classList;

addBookToLibrary();

function addScreen(library) {
  for (let book of library) {
    createTableRow[i] = document.createElement("tr");
    createTableBody.appendChild(createTableRow[i]);
    createTableDataHead[i] = document.createElement("td");
    createTableDataHead[i].classList.add(`td${i}`);
    createTableDataHead[i].textContent = `Book ${i}`;
    createTableRow[i].appendChild(createTableDataHead[i]);

    for (let property in book) {
      createTableData[i] = document.createElement(`td`);
      createTableData[i].textContent = book[property];
      createTableRow[i].appendChild(createTableData[i]);
    }
    i++;
  }
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
let titleInfo = "";
let authorInfo = "";
let pagesInfo = "";
let readInfo = "";
let book = [];

newBtn.addEventListener("click", () => {
  theForm.setAttribute("style", "visibility: visible;");
});

addBtn.addEventListener("click", () => {
  createBook(titleInfo, authorInfo, pagesInfo, readInfo);
  addBookToLibrary(i);
  addScreen(book[i].title, book[i].author, book[i].pages, book[i].read);
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
