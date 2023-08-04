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
const titleEl = document.querySelector("#addTitle");
titleEl.addEventListener("input", updateValue);

let titleInfo = "";
function updateValue(e) {
  titleInfo = e.target.value;
}
// ---------------------------

function authorName(evt) {
  console.log(evt.key);
  const key = evt.key;
}

const authorEl = document.querySelector("#addAuthor");
authorEl.addEventListener("input", updateValue);

//----------------------------

function myFunction() {
  document.getElementById("leForm").reset();
}

function addScreen(n) {
  let titles = document.createElement("div");
  titles.classList.add("title", `nr${i++}`);
  titles.textContent = n;
  printBooks.appendChild(titles);
}

const addBtn = document.querySelector(".addBtn");
addBtn.addEventListener("click", () => {
  testLibrary.push(titleInfo);
  console.log(testLibrary);
  theForm.setAttribute("style", "visibility: hidden;");
  addScreen(titleInfo);
});
// ---------------------------

testLibrary.forEach((n) => {
  let titles = document.createElement("div");
  titles.classList.add("title", `nr${i++}`);
  titles.textContent = n;
  printBooks.appendChild(titles);
});

const newBtn = document.querySelector("#newBtn");
const theForm = document.querySelector(".theForm");
newBtn.addEventListener("click", () => {
  theForm.setAttribute("style", "visibility: visible;");
});
