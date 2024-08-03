// Mission 2

//숫자의 크기, 짝수 홀수 여부를 판단하는 예제
const num = parseInt(prompt("숫자를 입력해주세요"));
const realValue = !!num;
const evenNum = num % 2;

console.log(realValue ? (num > 10 ? "숫자가 10보다 큼" : "숫자가 10 이하") : "숫자가 0");
console.log(!evenNum ? "짝수" : "홀수");