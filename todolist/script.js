const week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const today = document.getElementById('today')
const date = new Date()

const week_index = date.getDay()
const day = date.getDate()
const month_index = date.getMonth()

today.innerText = `${week[week_index-1]}, ${day} ${month[month_index]}`

function insert() {
    let todo = prompt("오늘 할 일을 입력해주세요!")

    
}






