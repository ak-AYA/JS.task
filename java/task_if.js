"use strict"

// password
function pass(word){

    if (word.length>=8){
        console.log("your password is strong")
    }
}

let password="mypassword123";
pass(password);

//  primary color

function prim(colors){

    if (colors=== "red" ||colors==="green" || colors==="blue"){
        console.log("color is a primary color")
    }
}
let color = "red";
 prim(color);

 //  negative number

 function neg(num){
    if (num<0){
        console.log("Y is a negative number")
    }
 }
 let Y=-5;
 neg(Y);

//  list identify

function arr(item){

    if(Array.isArray(item)){
        console.log("It's an array");
    }
}
let list = [1, 2, 3];
arr(list)
