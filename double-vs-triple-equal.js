// == vs ===. what will be the output???
//this output will be true as 0 is considered as false.
// let x = 0;
// let y = false;
// if(x == y){
//     console.log('Condition is true');
// }
// else{
//     console.log('condition is false');
// }

//this output will be false as === checks the value and type both.
let x = 0;
let y = false;
if(x === y){
    console.log('Condition is true');
}
else{
    console.log('condition is false');
}