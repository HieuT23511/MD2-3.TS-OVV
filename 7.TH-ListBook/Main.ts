import {Book} from "./ListBook";

let book1 = new Book('Kinh van hoa','Nguyen Nhat Anh',true);
let book2 = new Book('HarryPotter','J.K.Roling',false);
let books : Book[]=[]
books.push(book1,book2);
books.forEach(
    (book)=>{
        if (book.alreadyRead){
            return console.log(`This book ${book.title} by ${book.author} was already read`)
        }
            return console.log(`This book ${book.title} by ${book.author} was not already read`)
    }
);



