let myLibrary = ["Harry Potter", "Vampire Diaries", "Lord of the Rings"];

function Book() {
  // the constructor...
}

function addBookToLibrary() {
  // do stuff here
}

const printBooks = document.querySelector(".books");

// for (n of myLibrary) {
//   console.log(n);
//   let titles = document.createElement("div");
//   titles.classList.add("titles");
//   titles.textContent = n;
//   printBooks.appendChild(titles);
// }

myLibrary.forEach((n) => {
  console.log(n);
  let titles = document.createElement("div");
  titles.classList.add("titles");
  titles.textContent = n;
  printBooks.appendChild(titles);
});
