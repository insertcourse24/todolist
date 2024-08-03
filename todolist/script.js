function addTodolist() {
    let swt = true
    let li = document.createElement('li')
    let text = document.createElement('span')
    let btn = document.createElement('button')
    let delbtn = document.createElement('button')

    delbtn.className = 'delbtn'
    delbtn.innerHTML = "삭제"

    li.appendChild(btn)
    li.appendChild(text)
    li.appendChild(delbtn)
    
    const todo = document.getElementById('text-container')
    if (!todo.value)
        alert("해야할 일을 작성해주세요!")
    else {
        text.innerHTML = todo.value //li안에 들어갈 span 태그 안에 텍스트박스 value 값 넣어주기
        const todolist = document.getElementById('todolist')
        todolist.appendChild(li) // ul에 li 연결
        todo.value = '' // 텍스트 박스 비우기
    }
    console.log(todolist)

    btn.addEventListener('click', () => {
        li.style.textDecoration = swt?"line-through":"none"
        li.style.color = swt?"#a1a1a1":"black"
        btn.style.backgroundColor = swt?"#e37e8e":"white"
        swt = !swt
    }) // 버튼 한번 클릭 시 텍스트에 줄 긋기

    text.addEventListener('dblclick', () => {
        let newtext = prompt("변경할 내용을 입력해주세요")
        if(!(!!newtext))
            alert("잘못된 요청입니다!") // 내용이 비워져있으면 수정x
        else
            text.innerHTML = newtext
    }) // 텍스트 더블클릭 시 내용 수정

    delbtn.addEventListener('click', () => {
        todolist.removeChild(li)
    }) // 딜리트 버튼 누를 시 리스트 삭제
}