//@ts-ignore
class Person {
public static commonName : string = "Asad"

public static add(num1:number , num2:number) : number {
    return num1+num2;
}
}

console.log(Person.commonName)
console.log(Person.add(5,5))