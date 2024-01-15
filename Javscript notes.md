<!-- **intro to variables -->

variable can store some information
we can use or change that information later

ex:var firstname ="parthmesh";

only use var when declare varible firstime letter we don't need it ex: firstname ="ritesh";
or we use it var firstname ="parthmesh";

Rules for nameing varibles
1.You can't start with number
2.you can only use dollar(\$) and \_ symbol
3.you cannot use spaces
convetion
start with small letter ans use camelcases
when we use underscore betwen varible this is called snake case writting

<!-- Let vs var vs const -->

1. In JavaScript, we have three keywords for declaring variables: `var`, `let`, and `const`.
2. `var` was introduced from the early versions of JavaScript, while `let` and `const` were introduced in ECMAScript 6 (ES6) or ECMAScript 2015.
3. Variables declared with `var` are function-scoped, while those declared with `let` are block-scoped.
4. `var` variables are added to the global object (e.g., `window` in a browser context), but `let` variables are not.
5. With `var`, you can declare the same variable name multiple times within the same scope. However, with `let`, you can't redeclare the same variable name in the same scope.
6. `const` is used to declare constants; the value assigned to a `const` variable cannot be changed once it's set.

<!-- String -->

String indexing:

```javascript
let firstName = "parthmesh";

// Accessing individual characters
console.log(firstName[0]); // Output: "p"

// Finding the length of the string (including spaces)
console.log(firstName.length); // Output: 9

// Accessing the last character
console.log(firstName[firstName.length - 1]); // Output: "h"


Note:String is immutable so we have to store there  ans into another variable

// string Methods

trim()
toUpperCase()
toLowerCase()
SLice();


<---------------data types----->
string "harshit"
number 2,4,5,6
boolean
undefined
null
Bigint
Symbol


// convert number to string
age=age+" ";

// convert string to number
String n=20;
n=number(n);
console.log(typeof(n))

let myStr=+"22";

```

<!-- Template String  -->

```javascript
let age = 22;
let firstname = "prathmesh";

let about = "mu name is " + firstname + " and my age is " + age;
console.log(about);

console.log(`My name is ${firstname} and my age is ${age}`);
```

<!-- undefind || null || Big Int -->

when we create varible(let,var) without intializing value then it is undefined
let firstname;
console.log( typeof firstname)

<!-- null -->

let myvar=null;
console.log( myvar);

console.log(typeof null)//it is bug in js it give object but it is null

<!-- bigint -->

we can't perforom operation with big int + not value only bigint + bigint

console.log(Number.MAX_SAFE_INTEGER)//it gives maxmimum value we can store in variblae

let var1=BigInt(1212);//both are bigint
let var2=2323n;//both are bigint

// booleans & comparison operator
Booleans
true or false

// == vs ===

console.log(num1 == num2) //== does not check data types it check only value
but === check datatypes and value

// != vs !==

let n1=13;
let n2='13';
console.log(n1 != n2);
console.log(n1 !== n2);//!== it check datatypes and value but != check only values

<!-- falsy values -->

false
""
null
undefined
0
nan
document.all

let firstname="";
let firstname=false;
let firstname=0;
let firstname = null;
let firstname=undefined;
these are the falsy value

<!-- Truthy value except falsey values   -->

negativie value also truthy values

<!-- if else -->

let age =4;
if(age>=5){
console.log(drink='coffee');
}
else{
console.log(drink='milk');
}

 <!-- ternary operator / conditional operator -->

let age = 3;
let drink=age>=5?"coffee":"chai" //ternary operator
console.log(drink);
<!-- 
let userguess = prompt("guess a number"); 
//promt takes input in string for changing string to number just add + before prompt. -->