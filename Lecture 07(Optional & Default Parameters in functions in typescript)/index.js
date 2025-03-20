var sum = function (a, b) {
    if (b === void 0) { b = 5; }
    return a + b;
};
var output = sum(1);
console.log(output);
var sumOptional = function (a, b, c) {
    if (c) {
        return a + b + c;
    }
    else {
        return a + b;
    }
};
var output1 = sum(1, 2);
console.log(output1);
