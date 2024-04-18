"use strict";
// Định nghĩa lớp Student
class Student {
    // Constructor để khởi tạo đối tượng sinh viên với các thuộc tính đã cho
    constructor(id, age, email) {
        this.id = id;
        this.age = age;
        this.email = email;
    }
}
// Khai báo mảng để chứa các sinh viên
let students = [];
// Tạo ra các thực thể sinh viên và lưu vào mảng
students.push(new Student(1, 20, "DuyHien@example.com"));
students.push(new Student(2, 22, "DuyHien2@example.com"));
students.push(new Student(3, 21, "DuyHien3@example.com"));
// Duyệt mảng và in ra thông tin của các sinh viên
students.forEach((student) => {
    console.log(`Student ID: ${student.id}, Age: ${student.age}, Email: ${student.email}`);
});
