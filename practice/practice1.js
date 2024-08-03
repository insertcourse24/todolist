let num = {
    a: 0,
    sign: 0,
    b: 0
}

const input = () => {
    num.a = prompt("첫번째 값 입력")
    num.sign = prompt("계산 부호")
    num.b = prompt("두번쨰 값 입력")

    num.a = parseInt(num.a)
    num.b = parseInt(num.b)
}

const calc = (a, b, sign) => {
    if (sign == '+')
        alert(a + sign + b + '=' + (a + b))
    else if (sign == '-')
        alert(a + sign + b + '=' + (a - b))
    else if (sign == '*')
        alert(a + sign + b + '=' + (a * b))
    else if (sign == '/')
        alert(a + sign + b + '=' + (a / b))
    else if (sign == '%')
        alert(a + sign + b + '=' + (a % b))
}

input()
calc(num.a, num.b, num.sign)