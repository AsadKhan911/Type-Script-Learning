var Person = /** @class */ (function () {
    function Person() {
    }
    Person.add = function (num1, num2) {
        return num1 + num2;
    };
    Person.commonName = "Asad";
    return Person;
}());
console.log(Person.commonName);
console.log(Person.add(5, 5));
