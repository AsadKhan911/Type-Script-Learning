// @ts-nocheck
class Persons {
  name: string;
  age: number;
  hobbies: string[];

  constructor(name: string, age: number, hobbies: string[]) {
    this.name = name;
    this.age = age;
    this.hobbies = hobbies;
  }
}

const persons1: Persons = new Persons("Asad", 12, ["painting", "walking"]);
const persons2: Persons = new Persons("Ali", 14, ["dancing", "reading"]);

console.log(persons1, persons2);
