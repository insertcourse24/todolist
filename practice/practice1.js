let op = prompt()
let n1 = parseInt(prompt())
let n2 = parseInt(prompt())
let result

if(op == '+') result = n1+n2
else if(op == '-') result = n1-n2
else if(op == '*') result = n1*n2
else if(op == '/') result = n1/n2

alert(`${n1}${op}${n2}는 ${result}입니다.`)