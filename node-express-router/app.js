const express = require('express')
const mongoose = require('mongoose')
const { render } = require('ejs')
const pokemonRoutes = require('./routes/pokemonRouter')

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

// create pokemon creation page
const create = (req, res) => {
  // __dirname can be used to get current directory name
  res.render('create', { guard : "persian"});
}

app.get('/pokemon/create', create)

// pokemon Routes
app.use('/pokemon/',pokemonRoutes)



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