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

// Show and remove sections
const allBooks = document.getElementById('all-books');
const addNewBook = document.getElementById('add-new-book');
const contact = document.getElementById('contact');
const list = document.getElementById('list-link');
const add = document.getElementById('add-link');
const contactLink = document.getElementById('contact-link');

allBooks.classList.add('active');
allBooks.classList.remove('hide-class');

function showSection(activeElement) {
  activeElement.classList.toggle('active');
  activeElement.classList.remove('hide-class');
}

function removeSection(element1, element2) {
  element1.classList.remove('active');
  element1.classList.add('hide-class');

  element2.classList.remove('active');
  element2.classList.add('hide-class');
}

list.addEventListener('click', () => {
  showSection(allBooks);
  removeSection(addNewBook, contact);
});

add.addEventListener('click', () => {
  showSection(addNewBook);
  removeSection(allBooks, contact);
});

contactLink.addEventListener('click', () => {
  showSection(contact);
  removeSection(allBooks, addNewBook);
});
