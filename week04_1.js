//배열 ar에서 원소를 하나씩 꺼내서 홀수 , 짝수 판별 결과에 따라 해당 배열에 넣는다
let arr = [23, 63, 42, 78, 96, 46, 22, 76, 91, 60];
let odd = [];    // 홀수 저장용 배열
let even = [];    // 짝수 저장용 배열

// for-of 반복문 사용하기
for(let item of arr){
    if(item % 2 == 0)
        even.push(item);
    else
        odd.push(item);
}

// 최종 결과 배열 2개, odd,even을 출력하기
console.log("even : " + even);
console.log("odd : " + odd);