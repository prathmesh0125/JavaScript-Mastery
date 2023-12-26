// switch statement

// normal if else statement
// let day = +prompt("enter your number");
// let day=3;

// if (day === 0) {
//   console.log("sunday");
// } else if (day === 1) {
//   console.log("monday");
// } else if (day === 2) {
//   console.log("tuesday");
// } else if (day === 3) {
//   console.log("wednesday");
// } else if (day === 4) {
//   console.log("thrusday");
// } else if (day === 5) {
//   console.log("friday");
// } else if (day === 6) {
//   console.log("saturday");
// } else {
//   console.log("invalid day");
// }

// by using switch statement
let day = 5;
// let day = +prompt("inter the number between 0 to 6");
switch (day)  {
  case 0:
    console.log("sunday");
    break;
  case 1:
    console.log("monday");
    break;
  case 2:
    console.log("tuesday");
    break;

  case 3:
    console.log("wednesday");
    break;
  case 4:
    console.log("thrusday");
    break;
  case 5:
    console.log("friday");
    break;
  case 6:
    console.log("saturaday");
    break;
  default:
    console.log("invalid day");
}
