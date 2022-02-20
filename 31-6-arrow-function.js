//31-6 Arrow function, multiple parameter, function body


//normal function
function add(num1, num2) {
    return num1 + num2;
}

//function in variable
const add2 = function add2(num1, num2){
    return num1 + num2;
}
//function expression (anonymous)
//===========================================================
//function in variable where function name dont mandatory.
const add3 = function(num1, num2){
    return num1 + num2;
}

//arrow function (new and most useful)
//===========================================================
const add4 = (num1, num2) => num1 + num2;

//the colling function will be same
const sum1 = add(15, 17);
const sum2 = add2(15, 17);
const sum3 = add3(15, 17);
const sum4 = add4(15, 17);
console.log(sum1, sum2, sum3, sum4);
// document.getElementById("my-btn").onClick = function haleEvent(){

// }