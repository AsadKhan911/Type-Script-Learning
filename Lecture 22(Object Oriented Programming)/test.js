var Persons = /** @class */ (function () {
    function Persons(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    return Persons;
}());
var persons1 = new Persons("Asad", 12, ["painting", "walking"]);
var persons2 = new Persons("Ali", 14, ["dancing", "reading"]);
console.log(persons1, persons2);
