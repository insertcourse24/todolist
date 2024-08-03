// 오늘의 날짜를 출력하기 위한 코드
const week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const today = document.getElementById('today')
const date = new Date()

const week_index = date.getDay()
const day = date.getDate()
const month_index = date.getMonth()

today.innerText = `${week[week_index-1]}, ${day} ${month[month_index]}`

const insert = document.getElementById('insert_button')

let count = 0

 insert.addEventListener('click', () => {
    // 일정 추가 코드
    let todo = prompt("오늘 할 일을 입력해주세요!")

    if(!todo.length) alert('공백은 입력이 불가합니다!')
    else {
        const text = document.createElement('div')
        const div = document.querySelector('#text_box')
    
        text.innerHTML = 
            `
                <div class="todo_list">
                    <div class="finish_checkBox"></div>
                    <h1>${todo}</h1>
                    <button class="success" id="success">Success</button>
                    <button class="delete" id="delete">Delete</button>
                </div>
                <div class="underbar">
            `
    
        div.appendChild(text)

        // 일정 삭제 코드
        const delete_id = document.getElementById('delete')

        delete_id.addEventListener('click', (e) => {
            const todo_listDel = e.target.parentElement
            todo_listDel.remove()
        })


        // 일정 개수 변경 코드
        count+=1
        const task = document.getElementById('tasks_h2')
    
        task.innerText = `${count} tasks`
    }
 })

 







