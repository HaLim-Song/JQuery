function Product(name, price) {
    this.name = name;
    this.price = price;
}

product.prototype.print = function () {
    console.log(`${this.name}의 가격은 ${this.price}원 입니다.`);
};

let products = [
    new product('바나나',1200);
]

for (let product of products) {
    product.print();
}