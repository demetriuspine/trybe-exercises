function titleCreation () {
  let frase = 'Exercício 5.2 - JavaScript DOM';//frase
  let h1Creation = document.createElement('h1');//criação do elemento
  h1Creation.innerText = frase//atribuição
  document.body.appendChild(h1Creation);
}
function mainContentCreation () {
  let divCreation = document.createElement('div');
  divCreation.className = 'main-content'
  document.body.appendChild(divCreation);
  
}
function centerContentCreation () {
  let divCreation = document.createElement('div');
  divCreation.className = 'center-content';
  document.querySelector('div').appendChild(divCreation)
}
function paragraphCreationCC () {
  let text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  let pCreation = document.createElement('p')
  document.querySelector('.center-content').appendChild(pCreation);
  pCreation.innerText = text
}
function leftContentCreation () {
  let divCreation = document.createElement('div');
  divCreation.className = 'left-content'
  document.querySelector('.main-content').appendChild(divCreation)
}
function rightContentCreation () {
  let divCreation = document.createElement('div');
  divCreation.className = 'right-content'
  document.querySelector('.main-content').appendChild(divCreation)
}
function imageLeftContent () {
  let imgCreation = document.createElement('img');
  imgCreation.className = 'small-image'
  imgCreation.setAttribute('src', 'https://picsum.photos/200')
  document.querySelector('.left-content').appendChild(imgCreation)
}
function listRightContent () {
  let unorderedListCreation = document.createElement('ul');
  document.querySelector('.right-content').appendChild(unorderedListCreation)
}
function listItems () {
  let selection = document.querySelector('ul')
  let list = [];
  for (let index = 0; index < 10; index += 1) {
    list.push(index + 1)
  }
  for (let index = 0; index < 10; index += 1) {
    let item = list[index]
    let items = document.createElement('li')
    items.innerText = item;
    selection.appendChild(items)
  }
}
// a ordem das funções será a ordem das criações
titleCreation() 
mainContentCreation()
centerContentCreation()
paragraphCreationCC()
leftContentCreation()
rightContentCreation()
imageLeftContent()
listRightContent()
listItems()


