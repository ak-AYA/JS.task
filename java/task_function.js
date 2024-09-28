"use strict"

// smallest
function small(item){
    let new_item=item[0];
    for (let i=1; i<item.length; i++) {
      if( item[i] < new_item){
        new_item = item[i]}
    }
    return (new_item);
}
let findSmallest= [30, 45, 60, 7];
console.log(small(findSmallest)); 

// sort Letters

function sortLetters(word) {
    return word.split("").sort().join("");
}
let x="hello"
console.log(sortLetters(x));


// count words

function count(sample) {
    let arr=sample.trim().split(/\s+/);
    return arr.length;
}
let countWords='hello from CodingAcademy!';
console.log(count(countWords));

//multiply numbers

function multi(num1){
    let m = [];
    for (let i=0; i<=num1.length-1; i++){
        m.push(num1[i] * num1.length);
    }
    return (m);

}
let multiByLength=[4, 2, 5];
console.log(multi(multiByLength))

//multiply letters

function multi(txt){
    let z="";
    for (let i=0; i<=txt.length-1; i++){
        z+= (txt[i] + txt[i]);
    }
    return (z);

}
let repeat=("Coding");
console.log(multi(repeat))

