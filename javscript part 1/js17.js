// nested if else

// winning number 19
// 19 your guess is right
// 17 too low
// 20 too high

// let a='prathmesh';
// let b='bidve';
// console.log(a,b) //for revision of adding string

let winningNumber = 19;
let userguess = +prompt("guess a number"); //promt gives input in string for changing string to number just add + before prompt.
console.log(typeof userguess, userguess);
if (userguess === 19) {
  console.log("your guess is corect");
} else {
  if (userguess >=20 && userguess<25) {
    console.log("too high");
  }
  if (userguess > 17 && userguess < 19) {
    console.log("too low");
   } 
   else {
  console.log("your are far away from winning number");
}
}
