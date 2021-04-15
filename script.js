const addButton = document.querySelector('#criar-tarefa');
const delButton = document.querySelector('#apaga-tudo');
const removeCheckButton = document.querySelector('#remover-finalizados');

const olTaskList = document.querySelector('#lista-tarefas');

const input1 = document.querySelector('#texto-tarefa');

addButton.addEventListener('click', function () {
  const inputValue = input1.value;
  const newTask = document.createElement('li');
  newTask.innerHTML = inputValue;
  newTask.className = 'task';
  olTaskList.appendChild(newTask);
  input1.value = '';
});

const tasks = document.querySelector('ol');

function selectTask(event) {
  for (let index = 0; index < tasks.children.length; index += 1) {
    tasks.children[index].style.backgroundColor = '';
  }
  event.target.style.backgroundColor = 'rgb(128,128,128)';
}
tasks.addEventListener('click', selectTask);

function completed(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

tasks.addEventListener('dblclick', completed);

function deleteAll() {
  tasks.innerHTML = '';
}

delButton.addEventListener('click', deleteAll);

function removeChecked() {
  const complet = document.querySelector('.completed');
  if (complet) {
    for (let index = 0; index < tasks.children.length;) {
      if (tasks.children[index].classList.contains('completed')) {
        tasks.removeChild(tasks.children[index]);
        index = 0;
      } else {
        index += 1;
      }
    }
  }
}

removeCheckButton.addEventListener('click', removeChecked);
