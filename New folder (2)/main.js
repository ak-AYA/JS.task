'use strict';

let apiURL = "https://vpic.nhtsa.dot.gov/api/vehicles/GetVehicleTypesForMake/merc?format=json"; // URL
let displayList = [];

fetch(apiURL)
    .then(response => response.json())
    .then(data => {
        data.Results.forEach(item => {
            displayList.push({ MakeName: item.MakeName, VehicleTypeName: item.VehicleTypeName });
        });
        display(); 
    });

function display() {
    let container = document.getElementById('CarsList');
    container.innerHTML = '';

    displayList.forEach(element => {
        let carsElement = document.createElement('div');
        carsElement.classList.add('Car');
        carsElement.innerHTML = `${element.MakeName} <br> ${element.VehicleTypeName}`;
        container.appendChild(carsElement);
    });
}
