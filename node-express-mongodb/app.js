const express = require('express')
const mongoose = require('mongoose')
const Monster = require('./models/pokemon')
const { render } = require('ejs')

// connect to mongodb
const dbURI = 'mongodb+srv://user0:200-Birth-nice@test-node.iphsre3.mongodb.net/jumping-horse?retryWrites=true&w=majority'
mongoose.connect(dbURI)
  .then((res) => console.log("connected to db"))
  .catch((err) => console.log(err))



// express app
const app = express()

// register view engine
app.set('view engine', 'ejs')

// middleware
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))

// pokemon route
// GET
const pokemon_route = (req,res) => {
  Monster.find().sort({ createdAt: -1 })
  .then((output)=>{
    res.render('index', {guard: "All Pokemons", pocket_mons: output})
  })
  .catch((err)=> console.log(err))
}
app.get('/pokemon', pokemon_route)

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

app.post('/pokemon', post_pokemon)

// GET Single Pokemon
const mons_id = (req,res) => {
  // the id in req.params.id correspond to the id parametes that is defined in the url via app.get below
  const id = req.params.id
  Monster.findById(id)
  .then((output)=>{
    res.render('detail', {pokemon: output, guard: "Pokedex"})
  })
  .catch((err)=> console.log(err))

}

app.get('/pokemon/:id', mons_id)

//DELETE
const del_mons= (req,res) => {
  // the id in req.params.id correspond to the id parametes that is defined in the url via app.get below
  const id = req.params.id
  Monster.findByIdAndDelete(id)
  .then((output)=>{
    res.json({redirect: '/pokemon/'})
  })
  .catch((err)=> console.log(err))

}


app.delete('/pokemon/:id', del_mons)

// mongoose and mongo db routes
const add_pokemon = (req, res) => {
  const monster =  new Monster({
    name: 'Charmander',
    element: 'Fire',
    description: 'its health can be gauged by the fire on the tip of its tail, which burns hotter as it gets healthier and stronger.'
  })

  monster.save()
  .then((output) => {
    res.send(output)
  })
  .catch((err)=> console.log(err))

  console.log("pokemon added")
}


app.get('/add-pokemon', add_pokemon)


// all pokemon page
const all_pokemon = (req,res) => {
  Monster.find()
  .then((output)=>{
    res.send(output)
  })
  .catch((err)=> console.log(err))
}

app.get('/all-pokemons', all_pokemon)





// single pokemon page
const single_pokemon = (req,res) => {
  Monster.findById('64db8cba332ae8425307dc72')
  .then((output)=>{
    res.send(output)
  })
  .catch((err)=> console.log(err))
}

app.get('/bulbasaur', single_pokemon)



// create homepage
const homepage = (req, res) => {

  res.redirect('/pokemon')
}

app.get('/', homepage)

// create about page
const about = (req, res) => {
  // __dirname can be used to get current directory name
  res.render('about',{ guard : "alakazam"});
}

app.get('/about', about)

// custom middleware
app.use((req,res, next) => {
  console.log('a middleware is created')
  next()
})

// create pokemon creation page
const create = (req, res) => {
  // __dirname can be used to get current directory name
  res.render('create', { guard : "persian"});
}

app.get('/pokemon/create', create)


//create 404
// add status 404 and this section can be placed anywhere
// otherwise by default app.use will always run after all previous codes are not a match
const page404 = (req, res) => {
    // __dirname can be used to get current directory name
    res.status(404).render('404', { guard : "snorlax"});
}

app.use(page404)
  




// listen for request
app.listen(3000)