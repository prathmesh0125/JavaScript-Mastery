// and(&&) or(||) operator

let firstName = "Prathmesh";
let age = 20;

// if (firstName[0] === "p") {
//   console.log("your Name start with p..");
// }

// if (age > 18) {
//   console.log("your age is above 18");
// }

if (firstName[0] === "P" && age > 18) {
  // && operator check all condition
  console.log("your name strat with p and your age is above 18");
}
else{
    console.log("if block is in error")
}

if (firstName[0] === "p" || age > 18) {
  // || operator check any one condition correct then run the program
  console.log("your name strat with p and your age is above 18");
}
