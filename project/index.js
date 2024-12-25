// ========================================================
// global variable zone
// --------------------------------------------------------
let draggingMenu = null;    // 현재 드래깅 시작한 객체
let dragOverBox = null;     // 드래깅 중인 menu 객체가 올라간 box객체
let dragOverMenu = null;    // 드래깅 중인 menu 객체가 올라간 menu객체
let totalPrice = 0;         // 현재 메뉴판 가격
// ========================================================
// function zone
// --------------------------------------------------------
function updateTotalPrice() {
    let totalPrice = 0; // 초기화

    // 모든 cartItems 안의 menu 요소를 탐색
    $("#cartItems .menu").each(function () {
        const price = parseInt($(this).attr("price")); // 메뉴의 가격
        const quantity = parseInt($(this).attr("quantity")); // 메뉴의 수량

        if (!isNaN(price) && !isNaN(quantity)) {
            totalPrice += price * quantity; // 총 가격 계산
        }
    });

    // Total Price를 화면에 업데이트
    $("#totalPrice").text(`Total: ${totalPrice.toLocaleString()}원`);
}
// // 속성 보이기
// function hideAttr(object){
//     $(this).attr("quantity") = 1;
//     $(this).children("btn").show();
//     $(this).children(".quantity-display").show();
// }

// // 속성 숨기기
// function showAttr(object){
//     $(this).children("btn").hide();
//     $(this).children(".quantity-display").hide();
// }

// 지금 추가해야할 항목
// up, down 버튼 클릭시, 메뉴의 quantity의 값 조정하는 것 추가
// 구매 버튼 클릭시

function onDragStartMenu(event) {
    draggingMenu = this;    // 자신이 드래깅 객체임을 공지.
    console.log(`Started ${$(this).attr("name")} of ${this.parentNode.id} Dragging<br>`);
}

function onDragEndMenu(event) {
    draggingMenu = null;    // 더 이상 드래깅 중인 객체가 없음으로 설정
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

function addQuantity(event){
    let currentQuantity = parseInt($(this).parent("div").attr("quantity")) || 0;
    $(this).parent("div").attr("quantity", currentQuantity + 1);

    // 추력된 갯수 출력
    $(this).siblings(".quantity-display").html(`${currentQuantity + 1}개`);
    updateTotalPrice();
}

function minusQuantity(event){
    let currentQuantity = parseInt($(this).parent("div").attr("quantity")) || 0;
    if(currentQuantity <= 1)
        return console.log(`${this}의 값을 더 이상 내릴 수 없습니다`);
    $(this).parent("div").attr("quantity", currentQuantity - 1);

    // 추력된 갯수 출력
    $(this).siblings(".quantity-display").html(`${currentQuantity - 1}개`);
    updateTotalPrice();
}

// --------------------------------------------------------
// 메뉴가 들어간 박스에서 드래그하는 동작
function onDragOverMenu(event) {
    event.preventDefault(); // 기본 동작 방지
    dragOverMenu = this;
    this.classList.add("overMenu");
}

// 메뉴에서 벗어날 때의 동작
function onDragLeaveMenu(event) {
    dragOverMenu = null;
    this.classList.remove("overMenu");
}

// 메뉴 아이템을 다른 박스로 드래그해서 떨어뜨릴 때
function onDropMenu(event) {
    event.stopPropagation();
    this.parentNode.insertBefore(draggingMenu, this); // 메뉴 아이템을 다른 메뉴 안으로 이동
    updateTotalPrice();
}

// ========================================================
// Box Event Handler Zone
// --------------------------------------------------------
// 박스 안에 드래그될 때
function onDragOverBox(event) {
    event.preventDefault();  //시스템에서 사전에 설정해 놓은 처리 기능을 해제.
    dragOverBox = this;
    this.classList.add("overBox");
}

// 박스 밖으로 드래그될 때
function onDragLeaveBox(event) {
    dragOverBox = null;
    this.classList.remove("overBox");
}

// 박스에 드래그된 메뉴 아이템을 놓을 때
function onDropBox(event) {
    event.preventDefault();
    // 메뉴 아이템을 현재 드래그 중인 박스로 이동
    if (draggingMenu) {
        this.appendChild(draggingMenu);
        draggingMenu.classList.remove("overMenu");
    }
    updateTotalPrice();
}

// ========================================================
// Document Ready Zone
// --------------------------------------------------------
$(document).ready(function() {
    // 메뉴 핸들러
    let menuArray = document.getElementsByClassName("menu");
    for (let menu of menuArray) {
        menu.addEventListener("dragstart", onDragStartMenu);
        menu.addEventListener("dragend", onDragEndMenu);
        menu.addEventListener("dragover", onDragOverMenu);
        menu.addEventListener("dragleave", onDragLeaveMenu);
        menu.addEventListener("drop", onDropMenu);
    }

    // 박스 핸들러
    let boxArray = document.getElementsByClassName("box");
    for (let box of boxArray) {
        box.addEventListener("dragover", onDragOverBox);
        box.addEventListener("dragleave", onDragLeaveBox);
        box.addEventListener("drop", onDropBox);
    }

    // 증감 버튼 이벤트
    let upBut = document.getElementsByClassName("upBut");

    for (let up of upBut) 
        up.addEventListener("click", addQuantity);
    

    let downBut = document.getElementsByClassName("downBut");
    
    for (let down of downBut) // downBut에 대한 반복문 수정
        down.addEventListener("click", minusQuantity);
    
});
