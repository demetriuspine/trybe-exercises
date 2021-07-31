const assert = require('assert');
const { books } = require('./database');

//Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.

const expectedResult = 'O Senhor dos Anéis';

function authorWith3DotsOnName() {
  return books.find((book) => {
    return (book.author.name.split(' ').filter((authorName) => {
      return authorName.endsWith('.')
    }).length === 3)
  }).name

}



assert.deepStrictEqual(authorWith3DotsOnName(), expectedResult);