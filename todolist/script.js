const todoForm = document.getElementById('todoForm');
const todoInput = document.querySelector('#todoForm input');
const todoList = document.getElementById('todoList');

const TODOS_KEY = 'todos';

let todos = [];

function saveTodos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function deleteTodo() {
    const li = event.target.parentElement;
    li.remove();
    todos = todos.filter((todo) => todo.id !== parseInt(li.id));
    saveTodos();
}

function paintTodo(newTodo) {
    const li = document.createElement('li');
    li.id = newTodo.id;
    const span = document.createElement('span');
    span.innerText = newTodo.text;
    const btn = document.createElement('button');
    btn.innerText = 'X';
    btn.addEventListener('click', deleteTodo);
    li.appendChild(span);
    li.appendChild(btn);
    span.innerText = newTodo.text;
    todoList.appendChild(li);
}

function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = '';
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    todos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodos();
}

todoForm.addEventListener('submit', handleTodoSubmit);
// 2단계 - localStorage에서 Todos 불러오기
const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos) {
    const parsedTodos = JSON.parse(savedTodos);
    todos = parsedTodos;
    parsedTodos.forEach(paintTodo);
}