"use strict";
class Department {
    constructor(id, name, employees) {
        this.id = id;
        this.name = name;
        this.employees = employees;
    }
    describe() {
        console.log(`Department ID: ${this.id}, Department Name: ${this.name}`);
    }
}
// Example usage:
const department = new Department(1, "IT", ["John", "Alice", "Bob"]);
department.describe();
