"use strict";
class Employee {
    // Constructor để khởi tạo đối tượng Employee với các thuộc tính đã cho
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    // Phương thức để in ra tất cả thuộc tính
    printInfo() {
        console.log(`Name: ${this.name}, Company: ${this.company}, Phone: ${this.phone}`);
    }
}
// Tạo ra một thực thể từ lớp Employee
let employee = new Employee("John", "ABC Company", "1234567890");
// Gọi phương thức printInfo() để in ra các thuộc tính
employee.printInfo();
