//todo How we use types, in scenario such union or intersections.

//? type Student = {
//?     name : string;
//?     age : number;
//? }

//? type StudentAddress = {
//?     city : string;
//?     state : string;
//? }

//? type Data = Student | StudentAddress;

//? const BioData : Data = {
//?     name : "Asad",
//?     city : "Rawalpindi",
//?     state : "Punjab"
//? }

//? console.log(BioData)

//todo How we use interfaces

//* interface Student  {
//*     name : string;
//*     age : number;
//* }

//* interface StudentAddress  {
//*     city : string;
//*     state : string;
//* }

//* interface Data extends Student , StudentAddress {}

//* const BioData : Data = {
//*     name : "Asad",
//*     age : 24,
//*     city : "Rawalpindi",
//*     state : "Punjab"
//* }

//* console.log(BioData)

//todo We can also use same name interfaces with different properties
//? interface Student  {
//?     name : string;
//?     age : number;
//? }

//? interface Student  {
//?     city : string;
//?     state : string;
//? }

//? interface Data extends Student {}

//? const BioData : Data = {
//?     name : "Asad",
//?     age : 24,
//?     city : "Rawalpindi",
//?     state : "Punjab"
//? }

//? console.log(BioData)

//todo How we use interfaces in classes
interface Student  {
    name : string;
    age : number;
}

interface StudentAddress  {
    city : string;
    state : string;
}

interface Data extends Student , StudentAddress {}

class BioData implements Data  {
    constructor(
    public name : string,
    public age : number,
    public city : string,
    public state : string
    ) {}
}

const student1 =  new BioData("Asad" , 24 , "Rawalpindi" , "Punjab")
console.log(student1)