"use strict"

//concat

function combine(num1, num2){
    
    let arry = num1.concat(num2);

    return(arry)
}

let num1=[1, 2, 3];
let num2= [4, 5, 6];
// let combine0 = num1.concat(num2);
console.log(combine(num1, num2))


//slice
function slicer(p){
    let x = p.slice(0, 2).concat(p.slice(4));

    return(x)
}

let w = [1, 2, 3, 4, 5, 6];
console.log(slicer(w));

// splice
function splicer(p){
    let x = p.splice(1, 1);

    return(x)
}

let z = [1, 2, 3, 4, 5];
console.log(splicer(z));

// 

function showArray(c) {
    for (let i = 0; i<c.length; i++) {
        console.log(c[i]);
    }
}
let newArray = [1, 2, 3, 4, 5];
showArray(newArray);

// forEach

function each(all) {
    all.forEach(function(item)
    {
    console.log(item);
    })
 }
let otherArray = [1, 2, 3, 4, 5];
each(otherArray);


