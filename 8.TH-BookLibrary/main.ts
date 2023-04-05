import {Book} from "./Book";
import {BookManager} from "./BookManager";

let book1 = new Book('A01','Java');
let book2 = new Book('A02','Python');
let book3 = new Book('A03','PHP');
let bookManager = new BookManager();
bookManager.addBook(book1);
bookManager.addBook(book2);
bookManager.addBook(book3);
bookManager.deleteBook('A03');
console.log(bookManager.findBook('A04'))
bookManager.updateBookInArray('A01','JavaScript');
console.log(bookManager);

