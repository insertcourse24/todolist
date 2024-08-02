// Mission 1
const getInput = () => {
    let firstInput = parseInt(prompt(" 첫번째 숫자를 입력하세요."));
    let mark = prompt("기호를 입력하세요.");
    let secondInput = parseInt(prompt(" 두번째 숫자를 입력하세요."));
    
    return {firstInput, mark, secondInput};
}

const calculate = ({firstInput, mark, secondInput}) => {
    let result;
    switch(mark){
        case '+':
            result = firstInput+secondInput;
            break;
        case '-':
            result = firstInput-secondInput;
            break;
        case '/':
            result = firstInput/secondInput;
            break;
        case '*':
            result = firstInput*secondInput;
            break;
        default:
            alert('잘못된 기호입니다.')
            return;
    }
    alert(`${firstInput} ${mark} ${secondInput} = ${result}`);
}

calculate(getInput());