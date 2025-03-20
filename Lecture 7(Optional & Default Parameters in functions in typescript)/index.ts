const sum = (a: number, b: number=5): number => {
    return a + b
}

let output = sum(1)
console.log(output)

const sumOptional = (a: number, b: number , c?:number): number => {
    if(c) {
    return a + b + c
    }
    else{
        return a + b
    }
}

let output1 = sum(1,2)
console.log(output1)