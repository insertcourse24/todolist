const todoSection = document.getElementById('todo-section');

/**
 * 계획추가하기 함수
 */
function createTodo(){
    const todo = document.getElementById('create-title-name');
    if(!!todo.value){
        const todoBlock = document.createElement('todo-block');
        let today = new Date();
        
        todoBlock.title = todo.value;
        todoBlock.setAttribute('date', today.toLocaleString());;
        todoSection.appendChild(todoBlock);
        
        // createTodoDiv.classList.remove('show');
        
    }
    else{
        alert("빈 내용은 추가할 수 없어요")
    }
}

/**
 * 계획성공여부
 */
function successCheck(element){ 
    element.style.backgroundColor = '#ff701d';
    element.style.borderColor = '#dc6e32';
    element.innerHTML = `<svg width="14" height="14" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg" style="transform: translateY(-2px);"><path d="M11 5L6 10L3 7" stroke="white" stroke-width="2" stroke-linecap="butt" stroke-linejoin="miter"/></svg>`;
}

let createTodoBtn = true; 
const createTodoDiv = document.getElementById('create-todo-div');

/**
 * 작업추가하기, 작업접기가 토글되면서 createTODO창이 토글
 */
function isShowCreateTodo(element){
    createTodoDiv.style.display = 'flex';
    element.innerText = createTodoBtn ? '- 작업접기' : '+ 작업추가';
    createTodoDiv.classList.toggle('show', createTodoBtn);
    createTodoBtn = !createTodoBtn;
}

/**
 * 작업수정하기
 */
function editTodo(element){
    element.innerText = prompt("변경할 내용을 적어주세요",element.innerText);
}

/*
* 작업삭제하기
*/
function deleteTodo(e){
    e.target.parentElement.remove();
}