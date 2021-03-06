const assert = require('assert');
const { books } = require('./database');

//6 - Crie um array com o nome de todos os livros com mais de 60 anos de publicação.

const expectedResult = [
  'O Senhor dos Anéis',
  'Fundação',
  'O Chamado de Cthulhu',
];

function oldBooks() {
  return books.filter((book) => {
    return book.releaseYear < 1961
  }).map((book) => {
    return `${book.name}`
  })
}

assert.deepStrictEqual(oldBooks(), expectedResult);