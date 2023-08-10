// sample use innerText
const para = document.querySelector('p');

para.innerText += " Sorry to keep you waiting!"

const paras = document.querySelectorAll('p')

paras.forEach(para => {
    para.innerText += " <Oak Speech>"
})

// sample use innerHTML
const content = document.querySelector('.content');

content.innerHTML = '<h2> Starter Pokemon </h2>'

// sample modifying content using foreach
const pokemon = ["bulbasaur","squirtle","charmander"]
pokemon.forEach(poke =>{
    content.innerHTML += `<p>${poke}</p>`;
})

