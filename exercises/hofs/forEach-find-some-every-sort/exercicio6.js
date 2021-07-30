const assert = require('assert');
let {books} = require('./database')

//6 - Faça uma função que retorne true , se algum livro foi lançado na década de 80, e false , caso contrário.

const expectedResult = true;

const someBookWasReleaseOnThe80s = () => {
  return books.some((book) => {
    return book.releaseYear > 1979 && book.releaseYear < 1990
  })
}

assert.strictEqual(someBookWasReleaseOnThe80s(), expectedResult);