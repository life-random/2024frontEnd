class Menu{
    constructor(menu, price = 1000) {
        this.menu = menu;
        this.price = price;
        this.count = 0;
        this.rating = 0;
    }
    order(menu){
        
    }
}


let r = new menubar("라면", 1000, 100);

r.intro()   // 라면: 1900원 (재고량 100개)
r.order(2); // 재고량에서 2개 뺌.
r.intro()   // 라면: 1900원 (재고량 98개)