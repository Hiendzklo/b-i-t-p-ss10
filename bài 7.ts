class Circle {
    private _radius: number;

    constructor(radius: number) {
        this._radius = radius;
    }

    get radius(): number {
        return this._radius;
    }

    set radius(value: number) {
        this._radius = value;
    }

    calculateArea(): number {
        return Math.PI * this._radius ** 2;
    }

    calculatePerimeter(): number {
        return 2 * Math.PI * this._radius;
    }
}

// Khởi tạo một đối tượng từ lớp Circle với bán kính là 5
const myCircle = new Circle(5);

// In ra bán kính, chu vi và diện tích của đối tượng
console.log("Ban kinh cua hinh tron:", myCircle.radius);
console.log("Chu vi cua hinh tron:", myCircle.calculatePerimeter());
console.log("Dien tich cua hinh tron:", myCircle.calculateArea());

// Cập nhật lại bán kính của đối tượng và in ra kết quả mới
myCircle.radius = 7;
console.log("Ban kinh moi cua hinh tron:", myCircle.radius);
console.log("Chu vi moi cua hinh tron:", myCircle.calculatePerimeter());
console.log("Dien tich moi cua hinh tron:", myCircle.calculateArea());
