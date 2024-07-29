// Mission 1
// 1단계 - 계산기 만들기
let num1 = prompt('첫번째 수를 입력하세요.');
const yeonsan = prompt('연산자 (+, -, *, /)를 입력하세요.');
let num2 = prompt('두번째 수를 입력하세요.');

const intNum1 = parseInt(num1);
const intNum2 = parseInt(num2);

if(yeonsan === '+'){
    alert(`${num1} + ${num2}는 ${intNum1 + intNum2} 입니다.`);
} else if(yeonsan === '-'){
    alert(`${num1} - ${num2}는 ${intNum1 - intNum2} 입니다.`);
} else if(yeonsan === '*'){
    alert(`${num1} * ${num2}는 ${intNum1 * intNum2} 입니다.`);
} else if(yeonsan === '/'){
    if(num2 === 0){
        alert("0으로는 나눌 수 없습니다.");
    } else {
        alert(`${num1} / ${num2}는 ${intNum1 / intNum2} 입니다.`);
    }
}