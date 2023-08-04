let myLibrary = [];

function Book(title, author, pages, read) {
  (this.title = title),
    (this.author = author),
    (this.pages = pages),
    (this.read = read);
}

let i = 0;
let titleInfo = "";
let authorInfo = "";
let pagesInfo = "";
let readInfo = "";
let book = [];

const printBooks = document.querySelector(".books");
const titleEl = document.querySelector("#addTitle");
const authorEl = document.querySelector("#addAuthor");
const noPEl = document.querySelector("#addNoP");
const readEl = document.querySelector("#addRead");
const addBtn = document.querySelector(".addBtn");
const newBtn = document.querySelector("#newBtn");
const theForm = document.querySelector(".theForm");

titleEl.addEventListener("input", updateValue);
authorEl.addEventListener("input", updateValue2);
noPEl.addEventListener("input", updateValue3);
readEl.addEventListener("input", updateValue4);

newBtn.addEventListener("click", () => {
  theForm.setAttribute("style", "visibility: visible;");
});

addBtn.addEventListener("click", () => {
  createBook(titleInfo, authorInfo, pagesInfo, readInfo);
  addBookToLibrary(i);
  resetForms();
  theForm.setAttribute("style", "visibility: hidden;");
  addScreen(book[i].title);
  console.log(myLibrary);
});

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

function addBookToLibrary(n) {
  myLibrary.push(book[n]);
}

function resetForms() {
  document.querySelector("#leForm").reset();
}

function createBook(title, authors, pages, read) {
  book[i] = new Book(title, authors, pages, read);
}

function addScreen(n) {
  let titles = document.createElement("div");
  titles.classList.add("title", `nr${i++}`);
  titles.textContent = n;
  printBooks.appendChild(titles);
}

const book1 = new Book("Harry Potter", "J. K. Rowling", "309", "No");
const book2 = new Book("Vampire Diaries", "L. J. Smith", "272", "Yes");
const book3 = new Book("Lord of the Rings", "J. R. R. Tolkien", "432", "No");

myLibrary.push(book1, book2, book3);

myLibrary.forEach((book) => {
  let titles = document.createElement("div");
  titles.classList.add("title", `nr${i++}`);
  titles.textContent = book.title;
  printBooks.appendChild(titles);
});
