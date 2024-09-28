"use strict"

let txt1 = "Orange Jordan";
let array1 = txt1.split(" ");
console.log(array1);






function capitalizeFLetter() {
    let string = 'coding academy by orange';
    console.log(string[0].toUpperCase() +
        string.slice(1));
}
capitalizeFLetter()


function capitalizeWords() {
    let txt2 = 'coding academy by orange';
    return txt2.split(' ').map(word =>
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ')
  }
  