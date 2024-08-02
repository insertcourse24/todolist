const week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const today = document.getElementById('today')
const date = new Date()

const week_index = date.getDay()
const day = date.getDate()
const month_index = date.getMonth()

today.innerText = `${week[week_index-1]}, ${day} ${month[month_index]}`

const insert = document.getElementById('insert_button')

 insert.addEventListener('click', () => {
    let todo = prompt("오늘 할 일을 입력해주세요!")

    const text = document.createElement('div')
    const div = document.querySelector('#text_box')

    text.innerHTML = 
    `<div class="todo_list">
        <div class="finish_checkBox"></div>
        <h1>${todo}</h1>
    </div>`

    div.appendChild(text)

 })








