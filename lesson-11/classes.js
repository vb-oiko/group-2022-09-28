// 1. Створити клас Книга
//     властивості
//         назва
//         автор
//         кому видано
//         коли видано
//     методи
//         конструктор, який приймає два параметри: назва та автор
//         видати книгу - метод приймає екземпляр класу Користувач, та зберігає його у полі кому видано

class Book {
  title;
  author;
  givenTo = null; // null | User
  lastGiven; // Date

  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  giveTo(user) {
    this.givenTo = user;
    this.lastGiven = new Date();
  }
}

// 2. Створити клас Користувач
//     властивості
//         імʼя
//         електронна пошта
//     методи
//         конструктор, який приймає два параметри: імʼя та електронна пошта

class User {
  name;
  email;

  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

// 3. клас Бібліотека
//     властивості
//         конструктор не потрібен
//         масив книг, який при створенні пустий
//         масив користувачів, який при створенні пустий
//     методи
//         додати користувача - метод повинен приймати екземпляр класу Користувач, та додавати до масиву користувачів
//         додати книгу - метод повинен приймати екземпляр класу Книга, та додавати до масиву книг
//         вивести наявні книги
//         вивести видані книги, вказавши кому вони видані

class Library {
  //   users = [];
  //   books = [];

  constructor() {
    this.users = [];
    this.books = [];
  }

  addUser(user) {
    this.users.push(user);
  }

  addBook(book) {
    this.books.push(book);
  }

  logAllBooks() {
    console.log("\nAll books:\n");
    this.books.forEach((book) =>
      console.log(`${book.title} by ${book.author}`)
    );
  }

  getAllBooks() {
    return this.books;
  }

  logGivenBooks() {
    console.log("\nGiven books:\n");
    this.books
      .filter((book) => book.givenTo !== null)
      .forEach((book) => console.log(`${book.title} by ${book.author}`));
  }

  getGivenBooks() {
    return this.books.filter((book) => book.givenTo !== null);
  }

  logAvailableBooks() {
    console.log("\nAvailable books:\n");
    this.books
      .filter((book) => book.givenTo === null)
      .forEach((book) => console.log(`${book.title} by ${book.author}`));
  }

  getAvailableBooks() {
    this.books.filter((book) => book.givenTo === null);
  }
}

const library = new Library();

const alice = new Book("Alice in Wonderland", "Louise Carroll");
const abc = new Book("Alphabet", "no name");
const lear = new Book("King Lear", "William Shakespeare");

const bob = new User("Bob", "bob@test.com");
const jake = new User("Jake", "jake@test.com");

library.addBook(alice);
library.addBook(abc);
library.addBook(lear);

library.addUser(bob);
library.addUser(jake);

alice.giveTo(bob);

library.logAllBooks();
library.logGivenBooks();
library.logAvailableBooks();

// console.warn(library.getAllBooks());
