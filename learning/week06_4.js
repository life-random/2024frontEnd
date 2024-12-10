// min <= n <= max 범위의 정수형 난수 생성하기
function rangeRandom(min, max){
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

let fruits = ["사과", "배", "포도", "샤인머스캣", "감", "키위"];

let fruitBox = [];

let farmer = function() {
    let nextFruitIndex = rangeRandom(0,fruits.length-1);
    fruitBox.push(fruits[nextFruitIndex]);
    console.log(`[${fruits[nextFruitIndex]}]를 생산하여 과일 박스에 추가하였습니다`);
}



for(let i=0; i<=10; i++)
    setTimeout(farmer,rangeRandom(1,10)*1000)


// 과일박스 확인
console.log(fruitBox);  