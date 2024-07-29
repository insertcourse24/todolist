const todoForm = document.getElementById('todoForm');
const todoInput = document.querySelector('#todoForm input');
const todoList = document.getElementById('todoList');

function paintTodo(newTodo) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    li.appendChild(span);
    span.innerText = newTodo;
    todoList.appendChild(li);
    console.log(li);
}

function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = '';
    paintTodo(newTodo);
}

todoForm.addEventListener('submit', handleTodoSubmit);