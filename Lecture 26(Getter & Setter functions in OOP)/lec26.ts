//@ts-nocheck
class Persons {
  private _name: string;
  private _age: number;
  hobbies: string[];

  constructor(name: string, age: number, hobbies: string[]) {
    this._name = name;
    this._age = age;
    this.hobbies = hobbies;
  }

  // ✅ GETTER for name
  get name(): string {
    return this._name;
  }

  // ✅ SETTER for name
  set name(newName: string) {
    if (newName.length > 0) {
      this._name = newName;
    } else {
      console.log("Name must not be empty.");
    }
  }

  // ✅ GETTER for age
  get age(): number {
    return this._age;
  }

  // ✅ SETTER for age
  set age(newAge: number) {
    if (newAge > 0) {
      this._age = newAge;
    } else {
      console.log("Age must be positive.");
    }
  }

  introduce(): string {
    return `Hi I'm ${this._name} and I'm ${this._age} years old. I love ${this.hobbies.join(", ")}.`;
  }
}

// 🔽 Student extends Persons
class Student extends Persons {
  grade: number;

  constructor(name: string, age: number, hobbies: string[], grade: number) {
    super(name, age, hobbies);
    this.grade = grade;
  }

  override introduce(): string {
    return `Hi I'm ${this.name}, I'm ${this.age} years old, I love ${this.hobbies.join(", ")}, and I'm in grade ${this.grade}.`;
  }
}

// 🔽 Testing
const persons1: Persons = new Persons("Asad", 12, ["painting", "walking"]);
console.log(persons1.introduce());

// 🔁 Using SETTER to update name
persons1.name = "Asad Khan"; // ✅ valid
persons1.age = -5;           // ❌ invalid: shows warning message

// 🔁 Using GETTER to read name and age
console.log(persons1.name); // Asad Khan
console.log(persons1.age);  // 12 (unchanged due to validation)

const student1: Student = new Student("Adil", 25, ["coding", "sports"], 10);
console.log(student1.introduce());
