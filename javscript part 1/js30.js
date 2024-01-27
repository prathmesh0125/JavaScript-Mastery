// for looops in array
let fruits = ["apple", "maongo", "graps" ,"banna",];

// for (let i = 0; i < 9; i++) {
//   console.log(i);
// }

console.log(fruits.length);//lenth is the most important of array
console.log(fruits[fruits.length-1]);//it gives the last index of array
 
let fruits2=[];
for(let i=0;i<=fruits.length-1;i++){
    fruits2.push(fruits[i].toUpperCase());//for storin in diffrant array 
    console.log(fruits[i].toUpperCase());
}
console.log(fruits2)
console.log(fruits===fruits2);



