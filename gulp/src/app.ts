import Book from "./model/book";

const book = new Book('Dom Quixote', 108.80, 0.1)
console.log(book.discountedPrice());
