//31-4 Function default parameter for not provided values

//default can be set as below if there is no argument the default value will be taken. otherwise the default will be executed.
function add(num1, num2 =0){

    // before es6
    //option-1
    // num2 = num2 || 0;
    //or

    //option-2
    //if(num2 == undefined){
    //   num2 = 0;
    //}
    const total = num1 + num2;
    return total;
}

const result = add (15, 17);
console.log((result));


