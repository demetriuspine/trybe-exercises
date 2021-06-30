function changeText () {
  let paragraph = document.getElementsByTagName('p')[1];
  paragraph.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
}

function mainContentColorToTrybeGreen () {
  let mainContentBox = document.getElementsByClassName('main-content');
  mainContentBox[0].style.backgroundColor = 'rgb(76,164,109)';
}
function centerContentColorToWhite () {
  let centerContentBox = document.getElementsByClassName('center-content');
  centerContentBox[0].style.backgroundColor = 'white';
}
function titleCorrection () {
  let titleHeader = document.getElementsByTagName('h1');
  titleHeader[0].innerHTML = 'Exercício 5.1 - <i> JavaScript </i>';
}
function upperCaseParagraphs () {
  let paragraph = document.getElementsByTagName('p');
  for (index = 0; index < paragraph.length; index += 1) {
    iteratedParagraph = paragraph[index]
    iteratedParagraph.innerHTML = iteratedParagraph.innerHTML.toUpperCase();
  }
}
function showParagraphs () {
  let paragraphs = document.getElementsByTagName('p');
  for (index = 0; index < paragraphs.length; index += 1) {
    iteratedParagraph = paragraphs[index]
    console.log(iteratedParagraph.innerHTML)
  }
}

changeText();
mainContentColorToTrybeGreen();
centerContentColorToWhite();
titleCorrection();
upperCaseParagraphs();
showParagraphs();
