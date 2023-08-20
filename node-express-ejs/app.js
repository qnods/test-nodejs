const express = require('express')





// express app
const app = express()

// register view engine
app.set('view engine', 'ejs')



//example of app get

const encounter = (req, res) => {
  res.send("<p>Look ! It's a Bulbasaur </p>")
}

app.get('/encounter', encounter)

// create homepage
const homepage = (req, res) => {

  const pocket_mons = [
    {name: "Chicorita", element: "Grass"},
    {name: "Cyndaquil", element: "Fire"},
    {name: "Totodile", element: "Water"}
  ]


  // __dirname can be used to get current directory name
  res.render('index',{ guard : "eevee", pocket_mons});
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