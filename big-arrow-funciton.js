//array function
//implicit return: if the return can be write in one line 
const add = (num1, num2) => num1 + num2;
const sum = add(22, 90);
console.log(sum);

const multiply = (num1, num2, num3) => num1 * num2 * num3;
const result = multiply(4,12,3);
console.log(result);

const tenTimes = (num) => num * 10;
const output = tenTimes(17);
console.log(output);

//you dont need to use parentheses if there is one parameter
const fiveTimes = num => num * 5;
const value = fiveTimes(17);
console.log(value);

//there is no parameter, the parentheses if without any value, can be written as below.
const getName = () => "Brandon Sam";
const name = getName();
console.log(name);


//for multiline operation the second bracket can be used.
//explicit return: if the function has multiple line 
const doMath = (x,y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result
}
const total = doMath(12, 5);
console.log(total);


//problem
//same as above where function has no parameter name
// document.getElementById("my-btn").addEventListener(event => {

// })

const y = x => x*x; const z = y(5); 
console.log(25);

