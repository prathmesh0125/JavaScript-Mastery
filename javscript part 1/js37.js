// difrance between dot and bracket notation

//task --> we want add this email key into the person object
const key = "emial";
const person = {
  name: "prathmesh",
  age: 22,
  "person hobbies": ["chess", "biking", "swiming", 3, 53, 654], //javascript does not allowed space//"we don't acces it by using dot notation"
};
person["person hobbies"].push("hi"); //just for revise

console.log(person["person hobbies"]);

// person["key"]="prathmesh@gmail.com"// it add the key
person[key] = "prathmesh@gmail.com"; //it add above key value
console.log( typeof person["person hobbies"]);
