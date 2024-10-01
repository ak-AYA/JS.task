'use strict';

let apiURL = "https://restcountries.com/v3.1/all"; // URL
let displayList = [];

fetch(apiURL)
        .then(response => response.json())
        .then(data => {
        data.forEach(item => {
                    displayList.push({ 
                        name: item.name.common, 
                        flag: item.flags.png 
                    });
                });
                display(); 
            });

        function display() {
            let container = document.getElementById('Countries');
            container.innerHTML = '';

            displayList.forEach(element => {
                let countryElement = document.createElement('div');
                countryElement.classList.add('country');
                countryElement.innerHTML = `<img src="${element.flag}"> ${element.name}`;
                container.appendChild(countryElement);
            });
        }
        
