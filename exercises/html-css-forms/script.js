let stateSelection = document.querySelector('#states');
let extendedStatesBrazil = ['Acre','Alagoas','Amapá','Amazonas','Bahia','Ceará','Distrito Federal','Espírito Santo','Goiás','Maranhão','Mato Grosso','Mato Grosso do Sul','Minas Gerais','Pará','Paraíba','Paraná','Pernambuco','Piauí','Rio de Janeiro','Rio Grande do Norte','Rio Grande do Sul','Rondônia','Roraima','Santa Catarina','São Paulo','Sergipe','Tocantins']
let statesBrazil = ['AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO'];

function statesIntroduction() {
  for (let index = 0; index < statesBrazil.length; index++) {
    let optionCreation = document.createElement('option');
    optionCreation.innerText = extendedStatesBrazil[index];
    optionCreation.value = statesBrazil[index]
    stateSelection.appendChild(optionCreation)
  }
}

statesIntroduction()