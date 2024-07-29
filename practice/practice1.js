// Mission 1
// 1단계 - 계산기 만들기
let num1 = prompt('첫번째 수를 입력하세요.');
const operater = prompt('연산자 (+, -, *, /)를 입력하세요.');
let num2 = prompt('두번째 수를 입력하세요.');

const intNum1 = parseInt(num1);
const intNum2 = parseInt(num2);

if(operater === '+'){
    alert(`${num1} + ${num2}는 ${intNum1 + intNum2} 입니다.`);
} else if(operater === '-'){
    alert(`${num1} - ${num2}는 ${intNum1 - intNum2} 입니다.`);
} else if(operater === '*'){
    alert(`${num1} * ${num2}는 ${intNum1 * intNum2} 입니다.`);
} else if(operater === '/'){
    if(num2 === 0){
        alert("0으로는 나눌 수 없습니다.");
    } else {
        alert(`${num1} / ${num2}는 ${intNum1 / intNum2} 입니다.`);
    }
}

//2단계 - 함수로 분리하기
//입력을 받아서 변수에 저장하는 함수
function getInputValues() {
    const num1 = prompt('첫번째 수를 입력하세요.');
    const operater = prompt('연산자 (+, -, *, /)를 입력하세요.');
    const num2 = prompt('두번째 수를 입력하세요.');
    return {
        num1: parseInt(num1),
        num2: parseInt(num2),
        operator: operater
    };
}

//입력값들을 계산해서 alert창으로 띄우는 함수
function calculateAndShowResult(num1, num2, operator) {
    if(operator === '+'){
        alert(`${num1} + ${num2} = ${num1 + num2}`);
    } else if(operator === '-'){
        alert(`${num1} - ${num2} = ${num1 - num2}`);
    } else if(operator === '*'){
        alert(`${num1} * ${num2} = ${num1 * num2}`);
    } else if(operator === '/'){
        if(num2 === 0){
            alert("0으로 나눌수 없습니다.");
        } else {
            alert(`${num1} / ${num2} = ${num1 / num2}`);
        }
    }
}

//프로그램 시작 함수
function startProgram() {
    const { num1, num2, operator } = getInputValues();
    calculateAndShowResult(num1, num2, operator);
}
startProgram();


//3단계 - 객체 사용해보기
const calculate = {
    num1: parseInt(prompt('첫번째 수를 입력하세요.')),
    operator: prompt('연산자 (+, -, *, /)를 입력하세요.'),
    num2: parseInt(prompt('두번째 수를 입력하세요.')),
}

function calculateResult() {
    if(calculate.operator === '+'){
        alert(`${calculate.num1} + ${calculate.num2} = ${calculate.num1 + calculate.num2}`);
    } else if(calculate.operator === '-'){
        alert(`${calculate.num1} - ${calculate.num2} = ${calculate.num1 - calculate.num2}`);
    } else if(calculate.operator === '*'){
        alert(`${calculate.num1} * ${calculate.num2} = ${calculate.num1 * calculate.num2}`);
    } else if(calculate.operator === '/'){
        if(calculate.num2 === 0){
            alert("0으로 나눌수 없습니다.");
        } else {
            alert(`${calculate.num1} / ${calculate.num2} = ${calculate.num1 / calculate.num2}`);
        }
    }
}
calculateResult();

//4단계 - 화살표 함수 익히기
const calculate2 = {
    num1: parseInt(prompt('첫번째 수를 입력하세요.')),
    operator: prompt('연산자 (+, -, *, /)를 입력하세요.'),
    num2: parseInt(prompt('두번째 수를 입력하세요.')),
}

const calculateResult2 = () => {
    if(calculate2.operator === '+'){
        alert(`${calculate2.num1} + ${calculate2.num2} = ${calculate2.num1 + calculate2.num2}`);
    } else if(calculate2.operator === '-'){
        alert(`${calculate2.num1} - ${calculate2.num2} = ${calculate2.num1 - calculate2.num2}`);
    } else if(calculate2.operator === '*'){
        alert(`${calculate2.num1} * ${calculate2.num2} = ${calculate2.num1 * calculate2.num2}`);
    } else if(calculate2.operator === '/'){
        if(calculate2.num2 === 0){
            alert("0으로 나눌수 없습니다.");
        } else {
            alert(`${calculate2.num1} / ${calculate2.num2} = ${calculate2.num1 / calculate2.num2}`);
        }
    }
}
calculateResult2();