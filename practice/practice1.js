let calculate = (n1, op, n2) => {
    let result

    n1 = parseInt(prompt())
    op = prompt()
    n2 = parseInt(prompt())

    if(op == '+') result = n1 + n2
    else if(op == '-') result = n1 - n2
    else if(op == '*') result = n1 * n2
    else if(op == '/') result = n1 / n2

    alert(`${n1}${op}${n2}는 ${result}입니다.`)
}

calculate()