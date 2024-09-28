"use strict"


let new_item = document.getElementById("new_item");
let add = document.getElementById("add");
let list = document.getElementById("list");

add.addEventListener("click", function() {
    let item = new_item.value; 
    if (item) {

        let li = document.createElement("li");
        li.textContent = item;

        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";

        deleteButton.addEventListener("click", function() {
            list.removeChild(li);

        });

        li.appendChild(deleteButton);
        list.appendChild(li);
        new_item.value = ""; 
        
    }
});

