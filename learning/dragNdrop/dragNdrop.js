// ========================================================
// global variable zone
// --------------------------------------------------------
let draggingMenu = null;    // 현재 드래깅 시작한 객체
let dragOverBox = null;     // 드래깅 중인 menu 객체가 올라간 box객체
let dragOverMenu = null;    // 드래깅 중인 menu 객체가 올라간 menu객체

// ========================================================
// Menu Event Handler Zone
// --------------------------------------------------------
function onDragStartMenu(event){
    draggingMenu = this;    // 자신이 드래깅 객체임을 공지.
    this.classList.add("draggingMenu");     // 드래깅 중인 객체의 시각적 강조
    console.log(`Started ${$(this).attr("menuname")} of ${this.parentNode.id} Dragging<br>`);
}
// --------------------------------------------------------
function onDragEndMenu(event){
    draggingMenu = null;    // 더 이상 드래깅 중인 객체가 없음으로 설정
    this.classList.remove("draggingMenu");    // 드래깅 중인 객체의 시각적 강조 해제
    console.log(`Ended ${$(this).attr("menuname")} Dragging<br>`);

    // 드래깅 중인 객체가 다른 객체 위에 있는 상태에서 종료되었으면 상태 해제
    if (dragOverBox != null) {
        dragOverBox.classList.remove("overBox");
        dragOverBox = null; // 초기화
    }
    if (dragOverMenu != null) {
        dragOverMenu.classList.remove("overMenu");
        dragOverMenu = null; // 초기화
    }
}
// --------------------------------------------------------
function onDragOverMenu(event){
    event.preventDefault(); // 기본 동작 방지
    dragOverMenu = this;
    this.classList.add("overMenu");
}
// --------------------------------------------------------
function onDragLeaveMenu(event){
    dragOverMenu = null;
    this.classList.remove("overMenu");
}
// --------------------------------------------------------
function onDropMenu(event){
    event.stopPropagation();
    this.parentNode.insertBefore(draggingMenu, this);
}
// ========================================================
// Box Event Handler Zone
// --------------------------------------------------------
function onDragOverBox(event){
    event.preventDefault();  //시스템에서 사전에 설정해 놓은 처리 기능을 해제.
    dragOverBox = this;
    this.classList.add("overBox");
}
// --------------------------------------------------------
function onDragLeaveBox(event){
    dragOverBox = null;
    this.classList.remove("overBox");
}
// --------------------------------------------------------
function onDropBox(event){
    event.preventDefault();
    this.appendChild(draggingMenu);
}
// ========================================================
$(document).ready(function(){
    // Menu Handler
    let menuArray = document.getElementsByClassName("menu");
    for (let menu of menuArray) {
        menu.addEventListener("dragstart", onDragStartMenu);
        menu.addEventListener("dragend", onDragEndMenu);
        menu.addEventListener("dragover", onDragOverMenu);
        menu.addEventListener("dragleave", onDragLeaveMenu); // 수정된 부분
        menu.addEventListener("drop", onDropMenu);
    }

    // Box Handler
    let boxArray = document.getElementsByClassName("box");
    for (let box of boxArray) {
        box.addEventListener("dragover", onDragOverBox);
        box.addEventListener("dragleave", onDragLeaveBox);
        box.addEventListener("drop", onDropBox);
    }
});
