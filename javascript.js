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
const cancelBtn = document.querySelector("#cancelBtn");

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
  addScreen(book[i].title, book[i].author, book[i].pages, book[i].read);
});

cancelBtn.addEventListener("click", () => {
  theForm.setAttribute("style", "visibility: hidden;");
  resetForms();
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

let titles = [];
let cancelTitle = [];
let breaks = "";
// cancelTitle;

function addScreen(title, authors, pages, read) {
  titles[i] = document.createElement("div");
  cancelTitle[i] = document.createElement("button");
  breaks = document.createElement("br");
  titles[i].classList.add("title", `nr${i}`);

  titles[i].textContent = title + " " + authors + " " + pages + " " + read;

  cancelTitle[i].classList.add(`deleteTitle${i}`, "delBtn");
  cancelTitle[i].textContent = "X";
  printBooks.appendChild(titles[i]);
  titles[i].appendChild(cancelTitle[i]);
  let delta = titles[i];
  cancelTitle[i].addEventListener("click", () => {
    delta.remove();
  });
  i++;
}

const book1 = new Book("Harry Potter", "J. K. Rowling", "309", "No");
const book2 = new Book("Vampire Diaries", "L. J. Smith", "272", "Yes");
const book3 = new Book("Lord of the Rings", "J. R. R. Tolkien", "432", "No");

myLibrary.push(book1, book2, book3);

myLibrary.forEach((book) => {
  let titles = document.createElement("div");
  titles.classList.add("title", `nr${i++}`);
  titles.textContent = book.title + book.author + book.pages + book.read;
  printBooks.appendChild(titles);
});

let print = "";
let o = 0;

let contentEl = document.querySelector(`.nr${i}`);
myLibrary.forEach((n) => {
  for (const property in n) {
    print[o] += `${property}: ${n[property]}`;
    console.log(print[o]);
    o++;
  }
  // console.log(print1, print2, print3);
});
