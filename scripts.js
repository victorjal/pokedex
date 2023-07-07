let pokemonPic = document.getElementById('pokemonPic');
let pokemonName = document.getElementById('pokemonName');
let pokemonNum = document.getElementById('pokemonNum');
let pokemonList = document.getElementById('pokemonList');
let inputPokemon = document.getElementById('inputPokemon');
const apiUrl = 'https://pokeapi.co/api/v2/pokemon';

fetch(apiUrl)
.catch(error =>{
    console.error('Error:', error);
})
.then(response => response.json())
.then(data => {
    let list = data.results
    console.log(list);
    const listHTML = list.map((element) => '<option>'+ element.name + '</option>').join('');
    pokemonList.innerHTML = listHTML;
    search('charizard');
})

function details(params) {
    search(params);
}

function search(params) {
    console.log(params);
    fetch('https://pokeapi.co/api/v2/pokemon/'+params)
    .catch(error => {
        console.error('Error:', error);
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        pokemonPic.src = data.sprites.front_default;
        pokemonName.innerText = data.name;
        pokemonNum.innerText = data.id;
    })
}