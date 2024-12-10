// 문장열 => 수로 변환하는 함수

// let str = "365일50";
// let str2 = "36.5"
// let str3 = "일년365일"

// console.log(parseFloat(str2));

// setTimeout(함수, 시간)
// 지정한 시간이 지나면 함수를 호출하도록 예약하는 함수

let bomb = function(){
    console.log("Bomb!!!");
}

// let keyTimeout = setTimeout(=>{console.log("Boooom!!")}, 3000)

let deletBomb = function(){
    clearTimeout(keyTimeout);
    console.log("Bomb Disabled")
}

setTimeout(deletBomb,5000);