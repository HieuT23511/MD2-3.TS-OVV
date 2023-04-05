"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookManager = void 0;
var BookManager = /** @class */ (function () {
    function BookManager() {
        this.books = [];
    }
    BookManager.prototype.addBook = function (book) {
        this.books.push(book);
    };
    BookManager.prototype.getList = function () {
        return this.books;
    };
    BookManager.prototype.findBook = function (ID) {
        var i = -1;
        this.books.forEach(function (book, index) {
            if (book.ID === ID) {
                i = index;
            }
        });
        if (i == -1) {
            console.log("The book's ".concat(ID, " is not in Library"));
        }
        return i;
    };
    BookManager.prototype.deleteBook = function (deleteID) {
        var indexBookDelete = this.findBook(deleteID);
        if (indexBookDelete != -1) {
            this.books.splice(indexBookDelete, 1);
        }
        else {
            throw new Error("Delete Error, the book is not in Library");
        }
    };
    BookManager.prototype.updateBookInArray = function (ID, nameUpdate) {
        var indexBookUpdate = this.findBook(ID);
        if (indexBookUpdate != -1) {
            this.books[indexBookUpdate].setName(nameUpdate);
        }
        else {
            throw new Error("update error");
        }
    };
    return BookManager;
}());
exports.BookManager = BookManager;
