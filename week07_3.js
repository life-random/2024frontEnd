// Product class 정의
class Product{
    //객체 생성 함수
    constructor(name, price){
        this.name = name;
        this.price = price;
        this.판매처;
    }
    //객체들이 공유할 메서드 정의
    intro() {
        console.log(`[${this.name}]: (${this.price})원 (판매처: ${this.판매처})`)
    }
}
//--------------------------------------------------------------
//위에서 정의한 class product를 이용하여 객체(instance)들을 생성하기
let p1 = new Product("볼펜", 500);
let p2 = new Product("샤프", 1000);
p1.intro();
p2.intro();
p1.판매처 = "DIT";
p2.판매처 = "Korea";
p1.intro();
p2.intro();