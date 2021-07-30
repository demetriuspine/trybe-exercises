const assert = require('assert');
let {books} = require('./database')

//Retorne o nome do livro de menor nome.

const smallerName = () => {
  let nameBook;
  // escreva aqui o seu código
  nameBook = books[0].name
  books.forEach((book) => {
    if (book.name.length < nameBook.length) {
      nameBook = book.name;
    }
  })

  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
}

assert.strictEqual(smallerName(), 'Duna');