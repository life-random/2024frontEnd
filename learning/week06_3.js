// JS에서 난수 처리는 Math객체의 메소드 random()을 이용한다.

// Math.random()은 [0, 1)  (0<= n < 1) 범위의 난수를 생성한다.

for(let i=1; i<=10; i++){
    console.log(Math.floor(Math.random()*10 + 1) * 10);
}