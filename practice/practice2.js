// Mission 2
// 두 사람의 나이를 입력 받고 비교해주는 코드
let person1
let person2
let result

function input(){
  person1 = prompt('첫번째 사람의 나이')
  person2 = prompt('두번째 사람의 나이')
}

input()

result = person1===person2 ? '같다' : ((person1>person2) ? '첫번째가 더 크다' : '두번째가 더 크다' ) //삼항 연산자, Strict Equal 연산자
// 두 명의 나이가 같다면 result에 같다, 한 쪽이 크면 큰 쪽을 result에 저장.

if(!(!!person1) || !(!!person2)) // Double Exclamation Marks 연산자
  alert('나이가 입력되야 합니다!') // 만약 person1 혹은 person2에 null값이 입력되면 느낌표 두개 연산자로 false로 변환하여 명확히 걸러줌.
else
  alert(result)