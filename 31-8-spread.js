//31-8 Spread operator, array max, copy arrays


//spread operator(...)
//========================================================
//find max value from a array / use of ... 
//========================================================
const numbers = [12,34,34,54,56,65,43]
console.log(numbers);//it will show the output as an array
console.log(...numbers); //it will show the output without the array type. (only number);

const max = Math.max(23, 99, 65);
console.log(max);

const maxInArray = Math.max(...numbers);
console.log(maxInArray); //Math.max can't get the max number out of an array. in this case ... can be used to get the number first than find max value.


//adding a new value in a new array will
//==================================================
// numbers.push(55);
// console.log(numbers);//here the 55 added in exist array.

//two dimensional array
const numbers2 = [22,...numbers,87];//array within an array, if the ... is used the previous array's value will be extracted in the new array. here 22 and 87 is adding with new array array.
numbers.push(55); //55 is not adding within the new array 
console.log(numbers);
console.log(numbers2);

