"use strict"

let highlighted = document.getElementById("text");
let word = highlighted.innerHTML.split(" ");

for (let i = 0; i < word.length; i++) {
    if (word[i].length > 8) {
        word[i] = `<span class="highlight">${word[i]}</span>`;
}}

highlighted.innerHTML = word.join(" ");


let x = highlighted.innerHTML.split(". ");
highlighted.innerHTML = x.join(".<br>");

let length = word.length;
document.getElementById("length").innerText=`paregraph length: ${length}`;

