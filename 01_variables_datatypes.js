let name = "sachin";
const pi = 3.14;

let number = 42.4; //Number
let text = "Hello" //String
let isTrue = null; //Object
let undefinedVar = undefined; //undefined
let undefinedVar2  //undefined
let symbolVar = Symbol(); //Symbol

// Object

let person = {
    name: "Sachin",
    age: 19,
    isStudent: true,
};

let num = "42";
// let convertedNum = Number(num);
// let convertedNum = +num;

let convertedNum = parseInt(num);

console.log(typeof convertedNum);
console.log(typeof num);

let str = 123;
let convertedString = String(str);
console.log(typeof str);
console.log(typeof convertedString);

let a = 10;
let b = 3;

let sum = a+b;
let difference = a-b;
let product = a*b;
let quotient = a/b;
let remainder = a%b;
let power = a**b;

let x = 10;
let y = 10;

console.log(x==y);
console.log(x!=y);
console.log(x>y);
console.log(x<y);
console.log(x<=y);

console.log(Math.max(5,10,15,20));
console.log(Math.min(5,10));
let array1 = [1,2,3,4,5,6,7];
console.log(Math.max(...array1));

let firstName = "Sachin";
let lastName = "Shakya";

let fullName = firstName + " " + lastName;
let message =  "Hello World";

console.log(message.toLowerCase());
console.log(message.toUpperCase());
console.log(message.indexOf("W"));
console.log(message.slice(0,5));

let myName = "Sachin"

let greeting = `Hello ${myName}, from Chaicode`