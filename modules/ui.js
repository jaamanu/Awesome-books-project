import Store from './store.js';

export default class UI {
  static showBooks() {
    const books = Store.getBooks();
    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const bookHolder = document.querySelector('.bookDisplay');
    const newDiv = document.createElement('div');
    newDiv.innerHTML = `
    <div>
    <div class="flexIt">
    <h4 class="">${book.title} &nbsp; &nbsp; &nbsp; by &nbsp; &nbsp; &nbsp; ${book.author}</h4>
    <h4 class="hidey">${book.id}</h4>
    <button class="remove">Remove</button>
    </div>
    <hr>
    </div>
    `;
    newDiv.classList.add('newDiv');
    bookHolder.appendChild(newDiv);
  }

  static deleteBook(el) {
    if (el.classList.contains('remove')) {
      el.parentElement.parentElement.remove();
    }
  }

  static clearFields() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
  }
}