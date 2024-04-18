"use strict";
// Định nghĩa lớp Vehicle
class Vehicle {
    // Constructor để khởi tạo đối tượng với các thuộc tính đã cho
    constructor(name, year, company) {
        this.name = name;
        this.year = year;
        this.company = company;
    }
}
// Tạo ra hai thực thể từ lớp Vehicle
const car = new Vehicle("Car", 2020, "Toyota");
const bike = new Vehicle("Bike", 2018, "Honda");
// Truy cập trực tiếp vào từng thuộc tính và in thông tin của hai thực thể ra màn hình
console.log(`Car: Name - ${car.name}, Year - ${car.year}, Company - ${car.company}`);
console.log(`Bike: Name - ${bike.name}, Year - ${bike.year}, Company - ${bike.company}`);
