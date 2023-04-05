import {Book} from "./Book";

export class BookManager {
    books: Book[] = [];

    constructor() {
    }

    addBook(book: Book) {
        this.books.push(book);
    }

    getList() {
        return this.books;
    }

    findBook(ID: string) {
        let i = -1;
        this.books.forEach(
            function (book, index) {
                if (book.ID === ID) {
                    i = index;
                }
            }
        )
        if(i==-1){
            console.log(`The book's ${ID} is not in Library`);
        }
        return i;
    }

    deleteBook(deleteID: string) {
        let indexBookDelete = this.findBook(deleteID);
        if (indexBookDelete != -1) {
            this.books.splice(indexBookDelete, 1);
        } else {
            throw new Error(`Delete Error, the book is not in Library`);
        }
    }
    updateBookInArray(ID:string, nameUpdate:string){
        let indexBookUpdate = this.findBook(ID);
        if (indexBookUpdate != -1){
            this.books[indexBookUpdate].setName(nameUpdate);
        } else {
            throw new Error(`update error`);
        }
    }
}