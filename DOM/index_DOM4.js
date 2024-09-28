"use strict"


let names = ["John", "Jane", "Mike", "Emily"];
let scores = [85, 92, 99, 76];


    let addScore= document.getElementById("add");
    let displayResults = document.getElementById("result") ;
    let displayScores =  document.getElementById("scores")
    




function displayResults() {
    let total = 0; 
    let highest = scores[0];



    for (let i = 0; i < scores.length; i++) {
        total += scores[i];
        if (scores[i] > highest) {
            highest = scores[i];

        }
    }


}




    }


}
