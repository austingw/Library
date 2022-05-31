const modalBtn = document.getElementById("modalBtn")

const modal = document.querySelector(".modal")

const closeBtn = document.querySelector(".close-btn")

modalBtn.onclick = function(){
  modal.style.display = "block"
}
closeBtn.onclick = function(){
  modal.style.display = "none"
}
window.onclick = function(e){
  if(e.target == modal){
    modal.style.display = "none"
  }
}

let books = document.querySelector('.books');

let myLibrary = [];

function Book(title, author, pages, readStatus) {
    this.title = title
    this.author = author
    this.pages = pages
    this.readStatus = readStatus
    this.id = Math.floor(Math.random() * 1000000);
}

function addBookToLibrary(title, author, pages, readStatus) {
    let newBook = new Book(title, author, pages, readStatus);
    myLibrary.push(newBook);
}

function createBookElement(el, content, className) {
    const element = document.createElement(el);
    element.textContent = content;
    element.setAttribute('class', className);
    return element;
  }

function createBookItem(book, index) {
    const bookItem = document.createElement('div');
    bookItem.setAttribute('id', index);
    bookItem.setAttribute('key', index);
    bookItem.setAttribute('class', 'card book');
    bookItem.appendChild(
      createBookElement('h1', `Title: ${book.title}`, 'book-title')
    );
    bookItem.appendChild(
      createBookElement('h1', `Author: ${book.author}`, 'book-author')
    );
    bookItem.appendChild(
      createBookElement('h1', `Pages: ${book.pages}`, 'book-pages')
    );
    bookItem.appendChild(
        createBookElement('h1', `Read: ${book.readStatus}`, 'book-readStatus')
    );
    books.insertAdjacentElement('afterbegin', bookItem);
  }

  function renderBooks() {
    myLibrary.map((book, index) => {
      createBookItem(book, index);
    });
  }





const HarryPotter = addBookToLibrary('Harry Potter', 'Jk Rowling', '310', 'yes');
const Baphomet = addBookToLibrary('Baphomet The Temple Mystery Unveiled', 'Tracy Twyman & Alexander Rivera', '600', 'in progress')

renderBooks()

// EighthGrader.prototype = Object.create(Student.prototype) //


