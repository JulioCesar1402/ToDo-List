const toDoList = document.querySelector('#lista-tarefas');
const input = document.querySelector('#texto-tarefa');
const createTaskBtn = document.querySelector('#criar-tarefa');

function addTask() {
  const newTask = document.createElement('li');
  newTask.innerText = input.value;
  toDoList.appendChild(newTask);
  input.value = '';
}

createTaskBtn.addEventListener('click', addTask);

function highlightItem(event) {
  const item = event.target;
  const highlighted = document.querySelector('.highlighted');
  if (highlighted) {
    highlighted.classList.remove('highlighted');
  }
  item.classList.add('highlighted');
}

toDoList.addEventListener('click', highlightItem);

function completeTask(event) {
  const task = event.target;
  if (task.className.includes('completed')) {
    task.classList.remove('completed');
  } else {
    task.classList.add('completed');
  }
}

toDoList.addEventListener('dblclick', completeTask);

const clearBtn = document.querySelector('#apaga-tudo');

function clearList() {
  const listItems = document.querySelector('#lista-tarefas');
  while (listItems.firstChild) {
    listItems.firstChild.remove();
  }
}

clearBtn.addEventListener('click', clearList);

const clearCompletedBtn = document.querySelector('#remover-finalizados');

function removeCompleted() {
  const completedItems = document.querySelectorAll('.completed');
  for (let index = 0; index < completedItems.length; index += 1) {
    completedItems[index].remove();
  }
}

clearCompletedBtn.addEventListener('click', removeCompleted);
