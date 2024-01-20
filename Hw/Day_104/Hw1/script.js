class Rectangle {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
  
    calculateArea() {
      return this.width * this.height;
    }
  
    calculatePerimeter() {
      return 2 * (this.width + this.height);
    }
}
  
const rectangle1 = new Rectangle(5, 8);
const rectangle2 = new Rectangle(3, 6);
  
console.log("Rectangle 1 Area:", rectangle1.calculateArea());
console.log("Rectangle 1 Perimeter:", rectangle1.calculatePerimeter());
  
console.log("Rectangle 2 Area:", rectangle2.calculateArea());
console.log("Rectangle 2 Perimeter:", rectangle2.calculatePerimeter());
  


class Square extends Rectangle {
    constructor(sideLength) {
      super(sideLength, sideLength);
    }
}
  
const square1 = new Square(4);
const square2 = new Square(7);
  
console.log("Square 1 Area:", square1.calculateArea());
console.log("Square 1 Perimeter:", square1.calculatePerimeter());
  
console.log("Square 2 Area:", square2.calculateArea());
console.log("Square 2 Perimeter:", square2.calculatePerimeter());
  