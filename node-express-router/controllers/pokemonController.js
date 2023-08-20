const Monster = require('../models/pokemon')

// GET
const pokemon_route = (req,res) => {
    Monster.find().sort({ createdAt: -1 })
    .then((output)=>{
        res.render('index', {guard: "All Pokemons", pocket_mons: output})
    })
    .catch((err)=> console.log(err))
    }


// GET Single Pokemon
const mons_id = (req,res) => {
    // the id in req.params.id correspond to the id parametes that is defined in the url via router.get below
    const id = req.params.id
    Monster.findById(id)
    .then((output)=>{
        res.render('detail', {pokemon: output, guard: "Pokedex"})
    })
    .catch((err)=> console.log(err))
    
    }


// POST
const post_pokemon = (req, res) => {
    const monster = new Monster(req.body)
    
    monster.save()
    .then((output) => {
        res.redirect('/pokemon')
    })
    .catch((err)=> console.log(err))
    
    console.log("pokemon added")
    }


//DELETE
const del_mons= (req,res) => {
    // the id in req.params.id correspond to the id parametes that is defined in the url via router.get below
    const id = req.params.id
    Monster.findByIdAndDelete(id)
    .then((output)=>{
        res.json({redirect: '/pokemon/'})
    })
    .catch((err)=> console.log(err))
    
    }

    module.exports = {
        pokemon_route, 
        mons_id, 
        post_pokemon, 
        del_mons
      }