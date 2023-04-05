"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ListBook_1 = require("./ListBook");
var book1 = new ListBook_1.Book('Kinh van hoa', 'Nguyen Nhat Anh', true);
var book2 = new ListBook_1.Book('HarryPotter', 'J.K.Roling', false);
var books = [];
books.push(book1, book2);
books.forEach(function (book) {
    if (book.alreadyRead) {
        return console.log("This book ".concat(book.title, " by ").concat(book.author, " was already read"));
    }
    return console.log("This book ".concat(book.title, " by ").concat(book.author, " was not already read"));
});
