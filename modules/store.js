export default class Store {
  static getBooks() {
    let book;
    if(localStorage.getItem('bookListss') === null){
      book = []
    }else {
      book = JSON.parse(localStorage.getItem('bookListss'))
    }
    return book
  }

  static addBooks(book) {
    const books = Store.getBooks()
    books.push(book)
    localStorage.setItem('bookListss', JSON.stringify(books))
  }

  static deleteBookStorage(id) {
    let books = Store.getBooks();
    id = parseInt(id, 10);
    books = books.filter((book) => book.id !== id);
    localStorage.setItem('bookListss', JSON.stringify(books));
  }
}