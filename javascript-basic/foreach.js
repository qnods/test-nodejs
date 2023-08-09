let pokemon = ["bulbasaur", "squirtle", "charmander"]

const throw_pokeball = (pokemon_name, index) => {
    console.log(`Pokemon number ${index+1}, I choose you ${pokemon_name}`);
}

pokemon.forEach(throw_pokeball);