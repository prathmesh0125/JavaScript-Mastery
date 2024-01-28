// synchronous programing vs asynchronous programing
// synchrous programing is songle threaded
// console.log("script start")
// for(let i=0;i<1;i++){
//   console.log("inside loop")
// }
// console.log("script end")
// async

console.log("script start");

const id=setTimeout(function(){
console.log("inside settimeout")
},1000)

console.log(id);
for(let i=0;i<1;i++){
  console.log("hello")
}
clearTimeout(id);
console.log("script end");


