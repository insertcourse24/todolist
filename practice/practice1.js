let op
let n1
let n2
let result

input()
calculate()

function input() {
    op = prompt()
    n1 = parseInt(prompt())
    n2 = parseInt(prompt())
    result
}

function calculate() {
    if(op == '+') result = n1+n2
    else if(op == '-') result = n1-n2
    else if(op == '*') result = n1*n2
    else if(op == '/') result = n1/n2
    
    alert(`${n1}${op}${n2}는 ${result}입니다.`)
}