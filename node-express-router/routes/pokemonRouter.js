const express = require('express');
const pokemonController = require('../controllers/pokemonController')

const router = express.Router();

// pokemon route

router.get('/', pokemonController.pokemon_route)

router.post('/', pokemonController.post_pokemon)

router.get('/:id', pokemonController.mons_id)

router.delete('/:id', pokemonController.del_mons)

module.exports = router;
  