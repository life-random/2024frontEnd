//callback 함수 연습

let printDIT = function() {
    console.log("Hello DIT!!!")
}

let sayHello = function(){
    console.log("안녕하세요, 반갑습니다")
}

function call5Times(cbf){
    for(let i=1; i<=5; i++)
        cbf();
}

//--------------------------
call5Times(printDIT);
call5Times(sayHello);