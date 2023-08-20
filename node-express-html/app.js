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
  // __dirname can be used to get current directory name
  res.sendFile('./views/index.html',{root: __dirname});
}

app.get('/', homepage)

//create 404
// add status 404 and this section can be placed anywhere
// otherwise by default app.use will always run after all previous codes are not a match
const page404 = (req, res) => {
  // __dirname can be used to get current directory name
  res.status(404).sendFile('./views/404.html',{root: __dirname});
}

// create about page
const about = (req, res) => {
  // __dirname can be used to get current directory name
  res.sendFile('./views/about.html',{root: __dirname});
}

app.get('/about', about)

// create redirect
const about_redirect = (req, res) => {
  res.redirect('/about')
}

app.get('/about-pokemon', about_redirect)




// listen for request
app.listen(3000)