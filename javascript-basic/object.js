let pokemon = {
    pkmn_name : "pikachu",
    pkmn_type : "electric",
    pkmn_shape : "rodent",
    attack_move : ["thundershock", "thunderwave"],
    hp: 50
}

console.log(pokemon.pkmn_shape)

pokemon.pkmn_shape = "mouse"

console.log(pokemon.pkmn_shape)