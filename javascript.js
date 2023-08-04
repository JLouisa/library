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

testLibrary.forEach((n) => {
  console.log(n);
  let titles = document.createElement("div");
  titles.classList.add("title", `nr${i++}`);
  titles.textContent = n;
  printBooks.appendChild(titles);
});
