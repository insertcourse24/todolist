// Mission 2 - 나만의 예제 만들기
//Strict Equal 연산자와 조건부 연산자와 삼항 연산자, Double Exclamation Marks 연산자를 모두 한 번씩 이상 사용

const inputString = prompt('문장을 입력하세요.(10글자 미만: 10원, 10글자 이상: 글자 당 100원) 공백포함');
const length = inputString.length;
const isEmpty = length === 0;

if (!!inputString) {
    alert('공백입니다.');
} else if (length < 10) {
    alert(`${length}자 입력, 10원이 부과됩니다. 메세지를 보내려면 확인을 눌러주세요.`);
} else {
    const cost = length * 100;
    alert(`${length}자 입력, ${cost}원이 부과됩니다. 메세지를 보내려면 확인을 눌러주세요.`);
}