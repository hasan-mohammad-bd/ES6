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


