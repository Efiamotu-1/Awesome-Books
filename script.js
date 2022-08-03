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