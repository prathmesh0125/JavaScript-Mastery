// array destructing
// task--> storing the array in difffrant variabal
const  myArray=["value1","value2","value3","value4"];
// let a1=myArray[0];
// let a2=myArray[1];
// console.log(a1);
// console.log(a2);


//by adding extra "," we can skip the element
let [a1,a2,...myArray2]=myArray;//it is equvalent to the above two lines
// a1="value changed";//becase of let

// let myArray2=myArray.slice(2);//by using this we store remaining value
// console.log(myArray2)/
console.log(a1);
console.log(a2);
// console.log(a3);
// console.log(a4);

// console.log([a1,a2])


// just for revision of cloneing array
console.log(myArray2 )
Array3=[].concat(myArray);//first way
// Array3=myArray.slice(0);//second
// Array3=[...myArray];//third
console.log(Array3);










// just for practice
// let a=6;
//  let b=a===6?"ok":"notok";
//  console.log(a===6?"ok":"notok") 
//  console.log(b)



