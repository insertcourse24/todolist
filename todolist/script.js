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

    const text = document.createElement('div')
    const div = document.querySelector('#text_box')

    text.innerHTML = 
        `
            <div class="todo_list">
                <div class="finish_checkBox"></div>
                <h1>${todo}</h1>
            </div>
            <div class="underbar">
        `

    div.appendChild(text)

    // 일정 개수 변경 코드
    count+=1
    const task = document.getElementById('tasks_h2')

    task.innerText = `${count} tasks`


    

 })








