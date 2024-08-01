const value = {
    n1 : 0,
    op : '+',
    n2 : 0,
    result : 0,
}

value.n1 = parseInt(prompt())
value.op = prompt()
value.n2 = parseInt(prompt())

if(value.op == '+') value.result = value.n1 + value.n2
else if(value.op == '-') value.result = value.n1 - value.n2
else if(value.op == '*') value.result = value.n1 * value.n2
else if(value.op == '/') value.result = value.n1 / value.n2

alert(`${value.n1}${value.op}${value.n2}는 ${value.result}입니다.`)
