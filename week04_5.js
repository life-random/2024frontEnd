// 익명함수 활용하기

let doublesX = function (n) {
 return n * 2;
}

//-----------------------------------
// 매개변수 배열 ar의 모든 요소가 number이면 true, 아니면 false 반환하기
let isAllNumber = function(ar){
    let result = true;
    for(let item of ar){
        if(typeof(item) != 'number') {
            result = false;
            break;
        }
    }
    return result;
}
//----------------------------------------
// 배열이 아닌 값이 들어왔을 때 대처방법 Array.isArray
//---------------------------------------
let sumArray = function (ar){
    if(Array.isArray(ar) == false){
        console.log("sumArray : 오류: 배열이 아닙니다.");
        return NaN;
    }

    if(isAllNumber(ar) == false){
        console.log("sumArray : 오류: 합게를 계산할 수 있는 배열이 아닙니다.");
        return NaN;
    }

    sum = 0;

    for(let item of ar){
        sum += item;
    }
    return sum;
}
//----------------------------------------------------
let max = (a, b) => {
    if(a>b)
        return a;
    else
        return b;
}
//----------------------------
let max3 = (a, b, c) => {
    if(a>b)
        return a;
    else
    if((b)>c)
        return b;
    else
        return c;
}
//-----------------------
let maxValue = (ar) =>{
    max = 0;
    for(item of ar){
        if(item > max)
            max = item;
    }
    return max;
}
console.log(Array.isArray([10, 2000,150]));