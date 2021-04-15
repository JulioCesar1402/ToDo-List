const cabecalho = document.createElement('header');
document.body.appendChild(cabecalho);
const title = document.createElement('h1');
title.innerText = 'Minha Lista de Tarefas';
cabecalho.appendChild(title);

const paragrafo = document.createElement('p');
paragrafo.innerText = 'Clique duas vezes em um item para marcá-lo como completo';
paragrafo.id = 'funcionamento';
document.body.appendChild(paragrafo);

function createInputText() {
  const div = document.createElement('div');
  document.body.appendChild(div);
  const input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.id = 'texto-tarefa';
  div.appendChild(input);
}

createInputText();

function createList() {
  const div2 = document.createElement('div');
  document.body.appendChild(div2);
  const list = document.createElement('ol');
  list.id = 'lista-tarefas';
  div2.appendChild(list);
  const button = document.createElement('button');
  button.id = 'criar-tarefa';
  button.innerText = 'Adicionar';
  div2.appendChild(button);

  button.addEventListener('click', () => {
    const getInput = document.getElementById('texto-tarefa');
    const itemList = document.createElement('li');
    list.appendChild(itemList);
    itemList.innerText = getInput.value;
    itemList.className = 'item';
    getInput.value = '';
  });
}
createList();

function backgroundList(event) {
  const getListItem = document.querySelectorAll('li');
  const targetItem = event.target;

  for (let index = 0; index < getListItem.length; index += 1) {
    getListItem[index].classList.remove('selected');
  }
  targetItem.classList.add('selected');
}
const list = document.querySelector('#lista-tarefas');
list.addEventListener('click', backgroundList);

function completed() {
  const getList = document.querySelector('#lista-tarefas');

  getList.addEventListener('dblclick', (evt) => {
    evt.target.classList.toggle('completed');
  });
}
completed();
// function clear() {
//   const div3 = document.createElement('div');
//   document.body.appendChild(div3);
//   div3.className = 'buttons';
//   const clearButton = document.createElement('button');
//   clearButton.id = 'apaga-tudo';
//   clearButton.innerText = 'Apaga tudo';
//   div3.appendChild(clearButton);

//   const getList

//   clearButton.addEventListener('click', () => {

//   })

// }
// clear();
