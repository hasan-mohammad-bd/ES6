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