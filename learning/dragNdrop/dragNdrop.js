// ========================================================
// global variable zone
// --------------------------------------------------------
let draggingMenu = null; // 현재 드래깅 시작한 객체
let dragOverBox = null; // 드래깅 중인 객체가 올라간 객체

// ========================================================
// Menu Event Hendler Zone
// --------------------------------------------------------
function onDragStartMenu(event){
    draggingMenu = this;    // 자신이 드래깅 객체임을 공지.
    this.classList.add("draggingMenu");
    document.querySelector("p").innerHTML += `Started ${$(this).attr("menuname")} Dragging<br>`;
}
// --------------------------------------------------------
function onDragEndMenu(event){
    draggingMenu = null;    // 더 이상 드래깅 중인 객체가 없음으로 설정
    this.classList.remove("draggingMenu");
    document.querySelector("p").innerHTML += `Ended ${$(this).attr("menuname")} Dragging<br>`;
}
// ========================================================
// Box Event Hendler Zone
// --------------------------------------------------------
function onDragOverBox(event){
    event.preventDefalt();  //시스템에서 사전에 설정해 놓은 처리 기능을 해제.
    dragOverBox = this;
    this.classList.add("overBox");
}
// --------------------------------------------------------
function onDragLeaveBox(event){
    dragOverBox = null;
    this.classList.remove("overBox");
}








// ========================================================
$(document).ready(function(){
    // Menu Handler
    let menuArray = document.getElementsByClassName("menu");
    for(let menu of menuArray){
        menu.addEventListener("dragstart", onDragStartMenu);
        menu.addEventListener("dragend", onDragEndMenu);
    }
    // Box Handler
    let boxArray = document.getElementsByClassName("box");
    for(let menu of menuArray){
        menu.addEventListener("dragover", onDragOverBox);
        menu.addEventListener("dragleave", onDragLeaveBox);
    }
})