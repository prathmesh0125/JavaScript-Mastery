// primitive and refrence data types

// primitive type -->if one value change other value does not change it take less space in memorey
let num1=3;
let num2=num1;
console.log("value of num1 is ",num1);
console.log("value of num2 ",num2);
num1++;
console.log("value of num1 is ",num1);
console.log("value of num2 ",num2);

// refrence types -->if one value change then other values also changes ->it take more sapce // it sore the valuein heap by using pointer

let array1=["item1","item2"]
let array2=array1;//two poniters point same array

console.log('value of array 1',array1);
console.log('value of array 2',array2);
array1.push('item3');
console.log('value of array 1',array1);
console.log('value of array 2',array2);