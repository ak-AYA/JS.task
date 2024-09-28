"use strict"

// object add
let person = { name: "Adam", age: 25 };
person["gender"] = "male";
console.log(person);

// object array
let person1 = { name: "Adam", age: 25,  gender: "male"};
console.log(Object.values(person1));

// key objects

let person2 = { name: "Adam", age: 25,  gender: "male"};
let entries = Object.entries(person2);
for (let [key, value] of entries) {
    console.log(`${key}: ${value}`);
}


// merge objects

let person3 = { name: "Adam", age: 25};
let obj =  {gender: "male"};
let new_= Object.assign(person3, obj) 
console.log(new_)


// seal objects
let person4 = { name: "Adam", age: 25};
console.log(Object.seal(person4))

