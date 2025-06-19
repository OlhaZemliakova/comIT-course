//5. Create an obj let person1 = { name: "Alice", age: 25 };  create a deep copy of it with the same properties but add one more property called
// favoriteColor that should be a string. console log the original and the copy to make sure the original did not change.

let person1 = {
  name: "Alice",
  age: 25,
};

let person2 = {
  ...person1,
  favoriteColor: "red",
};
console.log("person1:", person1);
console.log("person2:", person2);

// 6. What are the primitive types in JS ? give example of each.

// Primitive data types in JavaScript are fundamental values. They are not objects and have no methods or properties.
// There are seven primitive types:

// 1. String:
let firstName = "Alice";

// 2. Numbers:
let age = 25;

// 3. Boolean:
let isActive = true;

// 4. Undefined:
let country;
console.log("country:", country); // Output: country: undefined

// 5. Null:
let user = null;
console.log("user:", user); // Output: user: null

// 6. Symbol: A unique and immutable primitive value that may be used as the key of an Object property.
const id1 = Symbol("id");

// 7. BigInt: A numeric primitive in JavaScript that can represent integers with arbitrary precision (larger than Number can safely handle).
const bigInt = 1234567890123456789012345678901234567890n;

// 7. When should you use an object ?
//We should use an Object ({}) in JavaScript when we need to store data as a collection of key-value pairs

// 8. When should you use an  array ?
// We should use an Array ([]) in JavaScript when we need to store an ordered collection of items.

// 9. Declare a function that takes two arguments, (name and favorite hobby)
// and console on the screen My name is {name} and my favorite color is {favorite color}

function createBioString(name, favoriteColor) {
  return `My name is ${name} and my favorite color is ${favoriteColor}`;
}

const bioMessage = createBioString("Olha", "black");
console.log(bioMessage);

const bio = (document.getElementById("bio").innerText = bioMessage);
