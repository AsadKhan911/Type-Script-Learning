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
var Persons = /** @class */ (function () {
    function Persons(name, age, hobbies) {
        this._name = name;
        this._age = age;
        this.hobbies = hobbies;
    }
    Object.defineProperty(Persons.prototype, "name", {
        // ✅ GETTER for name
        get: function () {
            return this._name;
        },
        // ✅ SETTER for name
        set: function (newName) {
            if (newName.length > 0) {
                this._name = newName;
            }
            else {
                console.log("Name must not be empty.");
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persons.prototype, "age", {
        // ✅ GETTER for age
        get: function () {
            return this._age;
        },
        // ✅ SETTER for age
        set: function (newAge) {
            if (newAge > 0) {
                this._age = newAge;
            }
            else {
                console.log("Age must be positive.");
            }
        },
        enumerable: false,
        configurable: true
    });
    Persons.prototype.introduce = function () {
        return "Hi I'm ".concat(this._name, " and I'm ").concat(this._age, " years old. I love ").concat(this.hobbies.join(", "), ".");
    };
    return Persons;
}());
// 🔽 Student extends Persons
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, hobbies, grade) {
        var _this = _super.call(this, name, age, hobbies) || this;
        _this.grade = grade;
        return _this;
    }
    Student.prototype.introduce = function () {
        return "Hi I'm ".concat(this.name, ", I'm ").concat(this.age, " years old, I love ").concat(this.hobbies.join(", "), ", and I'm in grade ").concat(this.grade, ".");
    };
    return Student;
}(Persons));
// 🔽 Testing
var persons1 = new Persons("Asad", 12, ["painting", "walking"]);
console.log(persons1.introduce());
// 🔁 Using SETTER to update name
persons1.name = "Asad Khan"; // ✅ valid
persons1.age = -5; // ❌ invalid: shows warning message
// 🔁 Using GETTER to read name and age
console.log(persons1.name); // Asad Khan
console.log(persons1.age); // 12 (unchanged due to validation)
var student1 = new Student("Adil", 25, ["coding", "sports"], 10);
console.log(student1.introduce());
