let myLibrary = [];

function Book() {
  // the constructor...
}

function addBookToLibrary() {
  // do stuff here
}

const testLibrary = ["Harry Potter", "Vampire Diaries", "Lord of the Rings"];
const printBooks = document.querySelector(".books");
let i = 0;

// ---------------------------
function authorName(evt) {
  console.log(evt.key);
  const key = evt.key;
}

const authorEl = document.querySelector("#addAuthor");
authorEl.addEventListener("keydown", authorName);
// ---------------------------
function titleName(evt) {
  console.log(evt.key);
  const key = evt.key;
}

const titleEl = document.querySelector("#addTitle");
titleEl.addEventListener("keydown", titleName);
// ---------------------------

const addBtn = document.querySelector("addBtn");

testLibrary.forEach((n) => {
  console.log(n);
  let titles = document.createElement("div");
  titles.classList.add("title", `nr${i++}`);
  titles.textContent = n;
  printBooks.appendChild(titles);
});
