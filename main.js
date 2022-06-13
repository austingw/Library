const modalBtn = document.getElementById('modalBtn')

const modal = document.querySelector('.modal')

const closeBtn = document.querySelector('.closeBtn')

modalBtn.onclick = function(){
  modal.style.display = 'block'
}
closeBtn.onclick = function(){
  modal.style.display = 'none'
}
window.onclick = function(e){
  if(e.target == modal){
    modal.style.display = 'none'
  }
}

let books = document.querySelector('.books');

class Book {
    constructor(title, author, pages, readStatus) {
    this.title = title
    this.author = author
    this.pages = pages
    this.readStatus = readStatus
    this.id = Math.floor(Math.random() * 1000000);
  }
}

let myLibrary = [];

function addBookToLibrary(title, author, pages, readStatus) {
  myLibrary.push(new Book(title, author, pages, readStatus));
  saveAndDisplay();
}

const addBookForm = document.querySelector('.bookForm');
addBookForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const title = document.querySelector('#bookTitle').value;
  const author = document.querySelector('#bookAuthor').value;
  const pages = document.querySelector('#bookPages').value;
  const readStatus = document.querySelector('input[name="bookReadStatus"]:checked').value;

  addBookToLibrary(title, author, pages, readStatus)
  addBookForm.reset();
  modal.style.display = "none";
});

function deleteBook(index) {
  myLibrary.splice(index, 1);
  saveAndDisplay();
}

function addLocalStorage() {
    myLibrary = JSON.parse(localStorage.getItem('library')) || [];
    saveAndDisplay();
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
    bookItem.setAttribute('class', 'cards');
    bookItem.appendChild(
      createBookElement('h1', `Title: ${book.title}`, 'bookTitle')
    );
    bookItem.appendChild(
      createBookElement('h1', `Author: ${book.author}`, 'bookAuthor')
    );
    bookItem.appendChild(
      createBookElement('h1', `Pages: ${book.pages}`, 'bookPages')
    );
    bookItem.appendChild(
        createBookElement('h1', `Read: ${book.readStatus}`, 'bookReadStatus')
    );
    
    bookItem.appendChild(createBookElement('button', 'Update Read Status', 'toggleReadStatus'));
    
    bookItem.appendChild(createBookElement('button', 'X', 'delete'));
    
    bookItem.querySelector('.toggleReadStatus').addEventListener('click', () => {
      if (book.readStatus = 'no'){
        book.readStatus = 'yes'
        saveAndDisplay();
      }
    });

    bookItem.querySelector('.delete').addEventListener('click', () => {
      deleteBook(index);
    });

    books.insertAdjacentElement('afterbegin', bookItem);
  }

  function displayBooks() {
    books.textContent = '';
    myLibrary.map((book, index) => {
      createBookItem(book, index);
    });
  }

  function saveAndDisplay() {
    localStorage.setItem('library', JSON.stringify(myLibrary));
    displayBooks();
  }

addLocalStorage();

