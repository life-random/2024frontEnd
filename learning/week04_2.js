// 배열 요소들의 합계 계산하여 출력하기

let ar = [23, 43, 7, 23, 553, 732, 739, 68 ,185 ,38 ,25 ,946 ,73];
let sum = 0;    //합계용

// while 반복문을 이용하여 배열의 합계 계산하기

while(ar.length != 0){
    sum += ar.shift();
}

// 결과 출력

console.log(`sum of ar = ${sum}`);