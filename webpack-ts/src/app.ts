import Book from "./model/book";
import $ from 'jquery'

const book = new Book('Dom Quixote', 108.80, 0.1)
// console.log(book.discountedPrice());

$('body').append(`<h1>Nome: ${book.name}</h1>`)
$('body').append(`<h2>Preço: ${book.discountedPrice()}</h2>`)