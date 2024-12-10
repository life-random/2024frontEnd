// min <= n <= max 범위의 정수형 난수 생성하기
function rangeRandom(min, max){
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

let fruits = ["사과", "배", "포도", "샤인머스캣", "감", "키위"];

let fruitBox = [];

let keyFarmer;  // 다음 생산 일정 등록 키값 저장
let keyConsumer;    // 다음 구입 일정 등록 키값 저장

let farmer = function() {
    // fruits 배열에서 아무 과일 생성
    let nextFruitIndex = rangeRandom(0,fruits.length-1);
    fruitBox.push(fruits[nextFruitIndex]);
    // console.log(`[${fruits[nextFruitIndex]}]를 생산하여 과일 박스에 추가하였습니다`);
    console.log(`수확:[${fruits[nextFruitIndex]}] => [${fruitBox}]`);  

    // 다음 생산할 일정
    let nextTime = (1000 * rangeRandom(2,7));
    keyFarmer = setTimeout(farmer,nextTime);
}

let consumer = function() {
    // 과일 박스에 과일있으면 과일을 하나 구입한다
    if(fruitBox.length > 0){
        let fruit = fruitBox.shift();   // 과일 박스의 앞에 있는 과일 1개 꺼낸다.(배열에서 제거)
        console.log(`구입:[${fruit}] => [${fruitBox}]`);
    } else {
        console.log(`구입 : 실패 (재고 없음)`);
    }
     // 다음 구입할 일정
     let nextTime = (1000 * rangeRandom(2,7));
     keyConsumer = setTimeout(consumer, nextTime);
}

// 명령어 중지
function stopSimulation(){
    clearTimeout(keyFarmer, 60000);
    clearTimeout(keyConsumer, 60000);
    console.log("생산-구입 시뮬레이션이 중단되었습니다");
    console.log(`남은 과일:[ ${fruitBox} ]`);
} 

// 시뮬레이션 시작
farmer();
consumer();
setTimeout(stopSimulation,30*1000);