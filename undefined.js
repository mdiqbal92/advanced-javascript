//undefined conditions

//did not set any value
let janPakhi;
console.log(janPakhi);

//did not return anything
function add(num1, num2){
    console.log(num1 + num2);
    // return num1 + num2;
}
const result = add(13, 12);
console.log(result);

// did not pass 2 parameters
function add(num1, num2){
    console.log(num1 + num2);
    return num1 + num2;
}
const result = add(13, /*19*/);
console.log(result);

// you are searching something that doesnt exist
const loverBoy = {name:"akash", phone:457689, /*camera:"DSLR"*/}
console.log(loverBoy.camera);

// if you set a value of a variable "undefined" output will be undefined.
const fun = undefined;
console.log(fun);
