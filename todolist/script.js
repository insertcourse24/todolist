const todoSection = document.getElementById('todo-section');

function createTodo(){
    const todo = document.getElementById('create-title-name');
    const todoBlock = document.createElement('todo-block');

    todoBlock.title = todo.value;
    todoBlock.date = new Date();
    todoSection.appendChild(todoBlock);
}