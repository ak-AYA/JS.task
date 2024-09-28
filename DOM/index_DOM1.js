"use strict"

document.getElementsByClassName("container")[0].addEventListener("input", function(){
    let password = document.getElementsByClassName("input_pass")[0].value;
    let confirm = document.getElementsByClassName("input_confirm")[0].value;
    let error_message = document.getElementsByClassName("error_message")[0];
    let button = document.getElementsByClassName("registerButton")[0];
    let username = document.getElementsByClassName("input_name")[0].value;
    let errorMessage = document.getElementsByClassName("errorMessage")[0];


    if (password !== confirm){
       error_message.textContent = "Password do not match!";
    }
    else{
        error_message.textContent  = "";
    }

    if (!username) {
        errorMessage.textContent = "Required!";
    } else if (!password) {
        errorMessage.textContent = "Required!";
    } else if (!confirm) {
        errorMessage.textContent = "Required!";
    } else {
        errorMessage.textContent = "";
    }

    if (username && password && confirm && password === confirm){
        button.disabled = false;
    }
        else{
            button.disabled = true;
        }
    });
        document.getElementsByClassName("container")[0].addEventListener("submit", function(event){
            event.preventDefault();
            alert("Submit successfully")
        });




