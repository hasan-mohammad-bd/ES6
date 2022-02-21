//31-3 Breakup with var to have a relationship with Let and const

//================================
//var vs let vs const 

//var variable is not black variable, it can be access and reassign. 

//let variable is black variable, cant not be reassigned. let solve the problem rewrite a variable name twice.

//const variable is black variable, can not change the value and reassign. only can be modified.const allow to change its object property value. const must be assign and declaring value in one line. cant not be assign and declared value in separate line.
//================================


//if we dont change the value of the variable const can be used.
const balance = 1340;
balance = 1355; //will not work , can be concatenate add with other variable//or can be modified
let balance = 1340;
balance = 1355; //will work


const numbers = [35,35, 54, 644,43];
numbers = [99, 344,6] //cant reassign.
numbers.push(555); //can be pushed.
number[1] = 333; //can be changed;

for(let i = 0; i< numbers.length; i++){
    const number = numbers[i];
    console.log(number); //here number new const are creating.
}

const student = {roll : 101, name: "mofij", job: "inter"};
student.name = "MOfazzol";
//student = {name: "mofozzol"} can't reassign.

//bottom line is var can reassign, const cant not be reassign.
//var can be changed const can be changed but can be modified.


