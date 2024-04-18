class Department {
    public readonly id: number;
    private name: string;
    private employees: string[];

    constructor(id: number, name: string, employees: string[]) {
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
