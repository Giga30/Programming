class Book {
  constructor(title, author) {
      this.title = title;
      this.author = author;
    }
  }
  
  class Library {
    constructor() {
      this.books = [];
    }
  
    addBook(book) {
      this.books.push(book);
    }
  
    removeBook(book) {
      const index = this.books.indexOf(book);
      if (index !== -1) {
        this.books.splice(index, 1);
      }
    }
  
    findBookByTitle(title) {
      return this.books.find(book => book.title === title);
    }
  
    findBooksByAuthor(author) {
      return this.books.filter(book => book.author === author);
    }
}

const library = new Library();
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald");
const book2 = new Book("To Kill a Mockingbird", "Harper Lee");

library.addBook(book1);
library.addBook(book2);

console.log(library.books);

const foundBook = library.findBookByTitle("The Great Gatsby");
library.removeBook(foundBook);
console.log(library.books);
  