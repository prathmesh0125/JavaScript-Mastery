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
or
String n=20;
n=number(n);
console.log(typeof(n))

// convert string to number
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
