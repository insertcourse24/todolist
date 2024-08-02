let coffee = 10



function cafe() {
    let name = '권민재'
    let temp = prompt("이름을 입력해주세요.")
    
    if(temp === name) {
        coffee > 0 ? alert("어서오세요!") : alert("장사 끝났습니다 ㅠㅠ")

        let count = parseInt(prompt("몇잔 주문하실건가요?"), 10)

        coffee - count >= 0 && (coffee -= count);

        let op = !!coffee

        if(!op) alert("마지막 손님이 되신 것을 축하드립니다!")
        
        alert(`총 커피 ${coffee}잔 남았습니다!`)    

    }
    else alert("이용하실 수 없습니다.")


}

cafe()
