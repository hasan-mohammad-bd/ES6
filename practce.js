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

//template string
const hasan = "28";
const shoaib = "27";

const templateString = `
This is Hasan Mohammad
currently ${hasan.length} code
would like to work in IT sector
`

console.log(templateString);

//arrow function

// const adding = (num1, num2) => num1 + num2;

// const sum = adding(1,2)
// console.log(sum);

//big arrow function

//arrow function.

//if there is one parameter.

const hello = number => number * 2;
console.log(hello(10));
//dont need parenthesis if there is one parameter.
const hellos = numbers => numbers.length
console.log(hellos("hasan Mohammad"));

//if there is no parameter.
const getName = () => "Hasan Mohammad"
console.log(getName());

//if there is long condition or calculation second bracket must be used.

const doMath = (x,y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}

console.log(doMath(10,5));


//spread operator(...)
const theNumbers = [1,2,3,4,5,6,7,8,9];
const maxValue = Math.max(...theNumbers);
console.log(maxValue);


//new array creating.
const theSecondArray = [12,...theNumbers, 99]
console.log(theSecondArray);






