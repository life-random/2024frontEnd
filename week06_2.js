// setInterval(함수, 시간)
// 시간마다 함수를 반복 호출해주는 일정을 시스템에 등록

let alarm = function(){
    console.log("Wakeup!!!!");
}

let keyInterval = setInterval(alarm, 1000);

let stopAlarm = function() {
    clearInterval(keyInterval);
    console.log("Stopped Alarm!!!");
}

setTimeout(stopAlarm, 11000);