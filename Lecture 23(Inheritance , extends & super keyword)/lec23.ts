//@ts-nocheck
class Persons {
  name: string;
  age: number;
  hobbies: string[];

  constructor(name: string, age: number, hobbies: string[]) {
    this.name = name;
    this.age = age;
    this.hobbies = hobbies;
  }

  introduce(): string {
    return `Hi I'm ${this.name} and I'm ${this.age} years old. I love ${this.hobbies.join(", ")}.`;
  }
}

// 🔽 Student extends Persons: means Student inherits from Persons
class Student extends Persons {
  grade: number;

  constructor(name: string, age: number, hobbies: string[], grade: number) {
    // 🟩 super is used to call the constructor of the parent class
    super(name, age, hobbies);  
    this.grade = grade;
  }

  // override introduce() method
  introduce(): string {
    return `Hi I'm ${this.name}, I'm ${this.age} years old, I love ${this.hobbies.join(", ")}, and I'm in grade ${this.grade}.`;
  }
}

// Creating instances
const persons1: Persons = new Persons("Asad", 12, ["painting", "walking"]);
const persons2: Persons = new Persons("Ali", 14, ["dancing", "reading"]);

console.log(persons2.introduce());

const student1: Student = new Student("Adil", 25, ["coding", "sports"], 10);
console.log(student1.introduce());