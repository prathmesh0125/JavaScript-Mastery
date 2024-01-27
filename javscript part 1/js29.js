// how to clone array

// how to concate two arrays
let array1 = ["iteam1", "item2"];
// let array2 = ["iteam1", "item2"]; //first way(not good pratice) to clone array
// let array2=array1.slice(0).//second way of clone array--> it is faster than all
// let array2=[].concat(array1);//third way of clone array
// new way
// spread operator
// let array2=[...array1]//fourth way of clone array->> it recomanded

// let array2=array1.slice(0).concat(["item3","item4"]);//for adding item in array 
array1.push("item3");
// let array2=[].concat(array1,["item3","item4"])//for adding item in array


let onemorearray=["item3","item4"]
// let array2=[...array1,"item3","item4"]//for adding item in array 
let array2=[...array1,...onemorearray]// for adding item in array 




console.log(array1 === array2); //for array is same or not
console.log(array1);
console.log(array2);
