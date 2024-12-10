// 배열 요소들의 합계 계산하여 출력하기

let ar = [23, 43, 7, 23, 53, 32, 39, 68 ,15 ,38 ,25 ,46 ,73];
let sum = 0;    //합계용

// while 반복문을 이용하여 배열의 요소를 하나씩 꺼내서(배얄에서는 제서됨) 배얄의 합계 계산하되
// 합계가 100을 넘지 않는 최대값이 되는 지점 출력하기

console.log(ar);
while(ar.length != 0){  // 배열에 요소가 하나 이상 포함되어 있으면 반복문을 계속한다
    if(sum + ar[0] >=100)
        break;
    sum += ar.shift();
}

// 결과 출력
console.log(ar);
console.log(`sum of ar = ${sum}`);