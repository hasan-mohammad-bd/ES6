//31-5 Template string, multiple line string, dynamic string

//use of back tick 
//================================================
const priya = 'Asif Akbar'; //with single quat 
const meye = "Meye tumi ki dukkho chino"; //with dabble quat
const kobita = `Kobita tumi sopno charini`; //with back tick

// \n is for breaking the line

//to write multiline string
const multiline = `
this is multi line string
this is second line string
this is third line`

console.log(multiline);

const friends = ["hasan", "hola",]
const count = 5;
const old1 =  "<h3 class = 'friend -name'>Friend-5</h3>";
const old2 = "<h3 class = 'friend-name'>Friend-" + count + '</h3>'

//ES6 
const new1 = `<h3 class = "friend-name"> Friend-${friends.length} </h3>`

//old
const first = "Mamun";
const last = "chowdhury";
const fullOld = first + " " + last;
//new
const fullNew = `this person name is ${first} ${last}`; //the middle gap will remain;
console.log(fullNew);

