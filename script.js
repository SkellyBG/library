let myLibrary = [];

function Book(author, title, numberOfPages, isRead) {
  this.author = author;
  this.title = title;
  this.numberOfPages = numberOfPages;
  this.isRead = isRead;
}

function addBookToLibrary(author, title, numberOfPages, isRead) {
  myLibrary.push(new Book(author, title, numberOfPages, isRead));
}