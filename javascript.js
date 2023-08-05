let myLibrary = [];

function Book(title, author, pages, read) {
  (this.title = title),
    (this.author = author),
    (this.pages = pages),
    (this.read = read);
}

function addBookToLibrary() {
  let getBook = prompt("What book do you want to add?");
  myLibrary.push(getBook);
  console.log(myLibrary);
  addScreen(myLibrary);
}

const createTableBody = document.querySelector("tbody");
const createTableData = document.createElement("td");
addBookToLibrary();

function addScreen(library) {
  for (let book of library) {
    console.log(book);
    createTableData.textContent = book;
    createTableBody.appendChild(createTableData);
    // For the properties
    // for (let property in book) {
    //   console.log(property + book[property]);
    // }
  }
}

// const book1 = new Book("Harry Potter", "J. K. Rowling", "309", "No");
// const book2 = new Book("Vampire Diaries", "L. J. Smith", "272", "Yes");
// const book3 = new Book("Lord of the Rings", "J. R. R. Tolkien", "432", "No");

// myLibrary.push(book1, book2, book3);

//----------------------------------------------------------------------------------
// let i = 0;
// let titleInfo = "";
// let authorInfo = "";
// let pagesInfo = "";
// let readInfo = "";
// let book = [];

// const printBooks = document.querySelector(".books");
// const titleEl = document.querySelector("#addTitle");
// const authorEl = document.querySelector("#addAuthor");
// const noPEl = document.querySelector("#addNoP");
// const readEl = document.querySelector("#addRead");
// const addBtn = document.querySelector(".addBtn");
// const newBtn = document.querySelector("#newBtn");
// const theForm = document.querySelector(".theForm");
// const cancelBtn = document.querySelector("#cancelBtn");

// titleEl.addEventListener("input", updateValue);
// authorEl.addEventListener("input", updateValue2);
// noPEl.addEventListener("input", updateValue3);
// readEl.addEventListener("input", updateValue4);

// newBtn.addEventListener("click", () => {
//   theForm.setAttribute("style", "visibility: visible;");
// });

// addBtn.addEventListener("click", () => {
//   createBook(titleInfo, authorInfo, pagesInfo, readInfo);
//   addBookToLibrary(i);
//   resetForms();
//   theForm.setAttribute("style", "visibility: hidden;");
//   addScreen(book[i].title, book[i].author, book[i].pages, book[i].read);
// });

// cancelBtn.addEventListener("click", () => {
//   theForm.setAttribute("style", "visibility: hidden;");
//   resetForms();
// });

// function updateValue(e) {
//   titleInfo = e.target.value;
// }
// function updateValue2(e) {
//   authorInfo = e.target.value;
// }
// function updateValue3(e) {
//   pagesInfo = e.target.value;
// }
// function updateValue4(e) {
//   readInfo = e.target.value;
// }
