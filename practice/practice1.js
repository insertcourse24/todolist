// Mission 1
const getInput = () => {
    let a = parseInt(prompt(" 첫번째 숫자를 입력하세요."));
    let mark = prompt("기호를 입력하세요.");
    let b = parseInt(prompt(" 두번째 숫자를 입력하세요."));
    
    return {a, mark, b};
}

const calculate = ({a, mark, b}) => {
    let result;
    switch(mark){
        case '+':
            result = a+b;
            break;
        case '-':
            result = a-b;
            break;
        case '/':
            result = a/b;
            break;
        case '*':
            result = a*b;
            break;
        default:
            alert('잘못된 기호입니다.')
            return;
    }
    alert(`${a} ${mark} ${b} = ${result}`);
}

calculate(getInput());