const ul = document.querySelector('.pokemon');

const pokemon = ['bulbasaur','squirtle','charmander']

let html = ``;

const choose_pokemon = (pokemon) => {
    html += `<li>${pokemon}</li>`;
}

pokemon.forEach(choose_pokemon)

ul.innerHTML = html;