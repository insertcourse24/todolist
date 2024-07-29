const todoForm = document.getElementById('todoForm');
const todoInput = document.querySelector('#todoForm input');
const todoList = document.getElementById('todoList');

let todos = [];

function saveTodos() {
    localStorage.setItem(todos, JSON.stringify(todos));
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();
}

function paintTodo(newTodo) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.innerText = newTodo;
    const btn = document.createElement('button');
    btn.innerText = 'X';
    btn.addEventListener('click', deleteTodo);
    li.appendChild(span);
    li.appendChild(btn);
    todoList.appendChild(li);
    console.log(li);
}

function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = '';
    todos.push(newTodo);
    paintTodo(newTodo);
    saveTodos();
}

todoForm.addEventListener('submit', handleTodoSubmit);