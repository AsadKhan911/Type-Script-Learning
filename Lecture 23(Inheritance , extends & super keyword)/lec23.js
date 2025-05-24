var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//@ts-nocheck
var Persons = /** @class */ (function () {
    function Persons(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    Persons.prototype.introduce = function () {
        return "Hi I'm ".concat(this.name, " and I'm ").concat(this.age, " years old. I love ").concat(this.hobbies.join(", "), ".");
    };
    return Persons;
}());
// 🔽 Student extends Persons: means Student inherits from Persons
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, hobbies, grade) {
        // 🟩 super is used to call the constructor of the parent class
        var _this = _super.call(this, name, age, hobbies) || this;
        _this.grade = grade;
        return _this;
    }
    // override introduce() method
    Student.prototype.introduce = function () {
        return "Hi I'm ".concat(this.name, ", I'm ").concat(this.age, " years old, I love ").concat(this.hobbies.join(", "), ", and I'm in grade ").concat(this.grade, ".");
    };
    return Student;
}(Persons));
// Creating instances
var persons1 = new Persons("Asad", 12, ["painting", "walking"]);
var persons2 = new Persons("Ali", 14, ["dancing", "reading"]);
console.log(persons2.introduce());
var student1 = new Student("Adil", 25, ["coding", "sports"], 10);
console.log(student1.introduce());
