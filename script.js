let books = [];
if (localStorage.books) books = JSON.parse(localStorage.getItem('books'));

function createbooks() {
  let card = '';

  const booklist = document.getElementById('list-cr');
  for (let i = 0; i < books.length; i += 1) {
    const eachBook = `
       <ul>
       <li>${books[i].name}</li>
       <li>${books[i].author}</li>
       <li><button data-index = "${i}" class="remove">remove</button></li>
       </ul>
       `;
    card += eachBook;
  }
  booklist.innerHTML = card;

  document.querySelectorAll('.remove').forEach((element) => element.addEventListener('click', (event) => {
    const getindex = event.currentTarget.dataset.index;
    books.splice(parseInt(getindex, 5), 1);
    createbooks();
    localStorage.setItem('books', JSON.stringify(books));
  }));
}

createbooks();

const newtitle = document.getElementById('title');
const auth = document.getElementById('author');

function addbook() {
  const book = {};
  book.name = newtitle.value;
  book.author = auth.value;
  books.push(book);
  createbooks();
  localStorage.setItem('books', JSON.stringify(books));
}

const addbtn = document.getElementById('add');

addbtn.addEventListener('click', () => {
  addbook();
});
