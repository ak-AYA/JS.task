"use strict";

let apiURL = "https://pokeapi.co/api/v2/pokemon?"; 
let displayList = [];

fetch(apiURL)
  .then(response => response.json())
  .then(data => {
    let pokemonURLs = [];
    for (let i = 0; i < data.results.length; i++) {
      pokemonURLs.push(data.results[i].url);
    }

    pokemonURLs.forEach(url => {
      fetch(url)
        .then(response => response.json())
        .then(pokemonData => {
          let abilities = [];
          for (let p = 0; p < pokemonData.abilities.length; p++) {
            abilities.push(pokemonData.abilities[p].ability.name);
          }

          displayList.push({
            name: pokemonData.name,  
            image: pokemonData.sprites.front_default, 
            abilities: abilities.join(', ')
          });

          display();
        });
    });
  });

function display() {
  let container = document.getElementById('pokemon');
  container.innerHTML = '';  

  displayList.forEach(element => {
    let pokemonElement = document.createElement('div');
    pokemonElement.classList.add('pokemon');
    pokemonElement.innerHTML = `<h1>${element.name}</h1> 
                                <img src="${element.image}"> 
                                <p>Abilities: ${element.abilities}</p>`;
    container.appendChild(pokemonElement);
  });
}
