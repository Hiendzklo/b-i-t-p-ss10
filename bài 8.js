"use strict";
class Rectangle {
    constructor(width, height) {
        this._width = width;
        this._height = height;
    }
    get width() {
        return this._width;
    }
    set width(value) {
        this._width = value;
    }
    get height() {
        return this._height;
    }
    set height(value) {
        this._height = value;
    }
    calculateArea() {
        return this._width * this._height;
    }
    calculatePerimeter() {
        return 2 * (this._width + this._height);
    }
}
// Khởi tạo một đối tượng từ lớp Rectangle với chiều dài và chiều rộng là 5 và 10
const myRectangle = new Rectangle(5, 10);
// In ra chiều dài, chiều rộng, chu vi và diện tích của đối tượng
console.log("Chieu dai cua hinh chu nhat:", myRectangle.width);
console.log("Chieu rong cua hinh chu nhat:", myRectangle.height);
console.log("Chu vi cua hinh chu nhat:", myRectangle.calculatePerimeter());
console.log("Dien tich cua hinh chu nhat:", myRectangle.calculateArea());
// Cập nhật lại kích cỡ của đối tượng và in ra kết quả mới
myRectangle.width = 7;
myRectangle.height = 14;
console.log("Chieu dai moi cua hinh chu nhat:", myRectangle.width);
console.log("Chieu rong moi cua hinh chu nhat:", myRectangle.height);
console.log("Chu vi moi cua hinh chu nhat:", myRectangle.calculatePerimeter());
console.log("Dien tich moi cua hinh chu nhat:", myRectangle.calculateArea());
