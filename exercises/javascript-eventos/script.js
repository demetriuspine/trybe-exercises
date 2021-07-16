function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

//exercicio1
function createDaysOfTheMonth () {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const daySelection = document.querySelector('#days');
  for (let index = 0; index < dezDaysList.length; index += 1) {
    const day = dezDaysList[index];
    const listItemCreation = document.createElement('li');
    listItemCreation.innerHTML = day;
    listItemCreation.className = 'day'
    if (dezDaysList[index] === 4) {
      listItemCreation.classList.add('friday')
    }
    if (dezDaysList[index] === 11) {
      listItemCreation.classList.add('friday')
    }
    if (dezDaysList[index] === 18) {
      listItemCreation.classList.add('friday')
    }
    if (dezDaysList[index] === 24) {
      listItemCreation.classList.add('holiday')
    }
    if (dezDaysList[index] === 25) {
      listItemCreation.classList.add('holiday')
      listItemCreation.classList.add('friday')
    }
    if (dezDaysList[index] === 31) {
      listItemCreation.classList.add('holiday')
    }
    daySelection.appendChild(listItemCreation)
  }
}

//exercicio2

function holidayButtonCreation(stringToAdd) {
  let divSelection = document.querySelector('.buttons-container');
  let holidayButtonCreation = document.createElement('button');
  holidayButtonCreation.innerText = stringToAdd;
  holidayButtonCreation.id = 'btn-holiday';
  divSelection.appendChild(holidayButtonCreation)

}

//Exercício 3

function clickEvent() {
  let holidays = document.querySelectorAll('.holiday')
  let button = document.querySelector('#btn-holiday')
  let previousColor = '#eee'
  let newColor = 'red'

  button.addEventListener('click', function(){
    for (let index = 0; index < holidays.length; index += 1) {
      if (holidays[index].style.backgroundColor === newColor) {
        holidays[index].style.backgroundColor = previousColor
      }
      else {
        holidays[index].style.backgroundColor = newColor
      }
    }
  })
}

createDaysOfTheMonth()
holidayButtonCreation('Feriados')
clickEvent()