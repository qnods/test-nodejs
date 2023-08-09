// use function within function

const battle = (callback1, pokemon, callback2, attack) => {
    callback1(pokemon);
    callback2(attack);
}; 

const throw_pokeball = (pokemon_name) => {
    console.log(`I choose you ${pokemon_name} !!!`)
};

const use_attack =  (attack_name) => {
    console.log(`use ${attack_name} !!!`)
}

battle(throw_pokeball,"bulbasaur",use_attack,"razor_leaf")