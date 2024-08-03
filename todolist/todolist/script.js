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

function toggleTodoCompletion(event) {
    const checkbox = event.target;
    const li = checkbox.parentElement;
    const todo = todos.find((todo) => todo.id === parseInt(li.id));
    todo.completed = checkbox.checked;
    saveTodos();
}

function paintTodo(newTodo) {
    const li = document.createElement('li');
    li.id = newTodo.id;

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = newTodo.completed || false; // 초기 상태는 완료 여부 반영
    checkbox.addEventListener('change', toggleTodoCompletion);

    const span = document.createElement('span');
    span.innerText = newTodo.text;

    const btn = document.createElement('button');
    btn.innerText = 'X';
    btn.addEventListener('click', deleteTodo);

    const editBtn = document.createElement('button');
    editBtn.innerText = '수정';
    editBtn.addEventListener('click', editTodo);

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(btn);
    li.appendChild(editBtn);

    todoList.appendChild(li);
}

function editTodo(event) {
    const li = event.target.parentElement;
    const todo = todos.find((todo) => todo.id === parseInt(li.id));

    // 기존의 span 요소를 입력 필드로 교체
    const span = li.querySelector('span');
    const input = document.createElement('input');
    input.type = 'text';
    input.value = span.innerText;
    input.classList.add('editInput');

    // 입력 필드가 엔터 키를 누르면 수정 완료
    input.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const newText = input.value.trim();
            if (newText !== '') {
                todo.text = newText;
                span.innerText = newText;
                saveTodos();
                li.replaceChild(span, input); // 입력 필드를 다시 span으로 교체
            }
        }
    });

    // 입력 필드로 교체
    li.replaceChild(input, span);

    // 입력 필드에 포커스 주기
    input.focus();
}


function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value.trim();
    if (newTodo === '') return; // 빈 문자열은 추가하지 않음

    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
        completed: false // 초기 상태는 미완료
    };
    todos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodos();

    todoInput.value = ''; // 입력 필드 초기화
}

todoForm.addEventListener('submit', handleTodoSubmit);

// 페이지 로드 시 localStorage에서 Todos 불러오기
const savedTodos = localStorage.getItem(TODOS_KEY);
if (savedTodos) {
    const parsedTodos = JSON.parse(savedTodos);
    todos = parsedTodos;
    parsedTodos.forEach(paintTodo);
}
