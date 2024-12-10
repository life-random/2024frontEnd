function doublex(n=0) {
    // if(n === undefined){
    //     return 0;
    // }
    return 2 * n;
}
//-------------------------------------------------
function welcome (guest = "손", host = "홍길동"){
    console.log(`안녕하세요! ${guest}님, 저는 ${host}이라고 합니다`);
}
//-------------------------------------------------
function tagString(message="", tagName='p', className=""){
    if(className == "")
        console.log(`<${tagName}>${message}</${tagName}>`);
    else
        console.log(`<${tagName} class="${className}">${message}</${tagName}>`);
}
//-------------------------------------------------
// welcome();
// welcome("이순신");
// welcome("이순신", "강감찬");
tagString();
tagString("Hello");                     //  <p>Hello</p>
tagString("Hello", "div");              //  <div>Hello</div>
tagString("Hello", "hi", "maintitle");  //  <h1 class='maintitle'>Hello</h1>