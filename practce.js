//javascript basic 

var deposit = 4000;

const  numbers = [ 58.57,97,83,28,84]
const countingNumber = numbers.length;
console.log(countingNumber);

const addNumber = numbers.push(87);
console.log(numbers);
const removeNumber = numbers.pop();
console.log(numbers);

//option 1
//for(const number of numbers){

//}

//option 2
//for(i = 0; i <= 7; i++) {

//}

function fullName(first, second) {
    return first + " " + second;
}

console.log(fullName("hasan", "Mohammad"));

//object:
const bottle = {
    color: "yellow",
    contain: "Water",
    price : 50
}


//var vs let vs const 

//var variable is not black variable, it can be access and reassign. 

//let variable is black variable, cant not be reassigned. let solve the problem rewrite a variable name twice.

//const variable is black variable, can not change the value and reassign. only can be modified.const allow to change its object property value. const must be assign and declaring value in one line. cant not be assign and declared value in separate line.


//default function parameters 

function adding(num1, num2 = 8){
    return num1 + num2;
}

console.log(adding(4,7,7,5));
