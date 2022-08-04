/* eslint-disable max-classes-per-file */
const creatli = document.getElementById('list-cr');

const booktitle = document.getElementById('title');
const auth = document.getElementById('author');

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

class Bookadd {
  constructor() {
    this.books = [];
    if (localStorage.books) this.books = JSON.parse(localStorage.getItem('books'));
  }

  additems() {
    let cards = '';
    for (let i = 0; i < this.books.length; i += 1) {
      const items = `
        <ul class="book-items">
        <li>${this.books[i].title} by ${this.books[i].author} </li>
        <button type="button" data-index = "${i}" class="remove"  onclick="bookplus.removeBooks(event)">remove</button>
        </ul>
        `;

      cards += items;
    }

    creatli.innerHTML = cards;
  }

  addBook() {
    const book = new Book(booktitle.value, auth.value);
    this.books.push(book);
    this.additems();
    localStorage.setItem('books', JSON.stringify(this.books));
    booktitle.value = '';
    auth.value = '';
  }

  removeBooks(event) {
    const getindex = event.currentTarget.dataset.index;
    this.books.splice(parseInt(getindex, 5), 1);
    this.additems();
    localStorage.setItem('books', JSON.stringify(this.books));
  }
}

const bookplus = new Bookadd();
bookplus.additems();

const btnadd = document.getElementById('add');

btnadd.addEventListener('click', () => {
  bookplus.addBook();
});


/*
Activate and Deactivate Sections
*/
const allBooksSection = document.getElementById('all-books');
const addNewBookSection = document.getElementById('add-new-book');
const contactSection = document.getElementById('contact');
const listLink = document.getElementById('list-link');
const addLink = document.getElementById('add-link');
const contactLink = document.getElementById('contact-link');

allBooksSection.classList.add('active');
allBooksSection.classList.remove('hide-class');

function toggleVisbility(activeEle) {
  activeEle.classList.toggle('active');
  activeEle.classList.remove('hide-class');
}

function clearClasses(element1, element2) {
  element1.classList.remove('active');
  element1.classList.add('hide-class');

  element2.classList.remove('active');
  element2.classList.add('hide-class');
}

listLink.addEventListener('click', () => {
  toggleVisbility(allBooksSection);
  clearClasses(addNewBookSection, contactSection);
});

addLink.addEventListener('click', () => {
  toggleVisbility(addNewBookSection);
  clearClasses(allBooksSection, contactSection);
});

contactLink.addEventListener('click', () => {
  toggleVisbility(contactSection);
  clearClasses(allBooksSection, addNewBookSection);
});
