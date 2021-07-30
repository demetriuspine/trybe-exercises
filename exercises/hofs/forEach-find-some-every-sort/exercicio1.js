const assert = require('assert');
let {books} = require('./database')

//1 - Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.

// console.log(books.find((element) => element.author.birthYear === 1947))

// const findAuthorByBirthYear = (year) => (books.find((book) => book.author.birthYear === year)).author.name;
// console.log(findAuthorByBirthYear(1947));

///////////////////////////////////////////////////////////

// console.log(books.find((book) => (book.author.birthYear === 1947)).author.name)

const authorBornIn1947 = () => books.find((book) => book.author.birthYear === 1947).author.name

assert.strictEqual(authorBornIn1947(), 'Stephen King');
