const express = require('express');
const morgan = require('morgan');

//this is the server we call it here app istead of const server
const app = express();
const port = 8080;

app.set("view engine", "ejs");

app.use(morgan('dev'))

app.use(express.urlencoded({ extended: true }));

//middleware
/* app.use( (req, res, next) => {
  console.log(req.method, req.url);

  next();
}); */

const urlDatabase = {
  "b2xVn2": "http://www.lighthouselabs.ca",
  "9sm5xK": "http://www.google.com"
};

function generateRandomString() {}

app.get("/urls.json", (req, res) => {
  res.json(urlDatabase);
});

app.get("/urls/new", (req, res) => {
  res.render("urls_new");
});

app.post("/urls", (req, res) => {
  console.log(req.body); // Log the POST request body to the console
  res.send("Ok"); // Respond with 'Ok' (we will replace this)
});

app.get("/urls/:id", (req, res) => {
  //console.log(req.params)
  //console.log(urlDatabase)

  const templateVars = { id: req.params.id, longURL: urlDatabase[req.params.id]/* What goes here? */ };
  res.render("urls_show", templateVars);
});

app.get("/urls", (req, res) => {
  const templateVars = { urls: urlDatabase };
  res.render("urls_index", templateVars);
});

//GET /home
app.get('/', (req, res) => {
  res.send('hello')
});

app.get("/hello", (req, res) => {
  res.send("<html><body>Hello <b>World</b></body></html>\n");
});

//GET /about
/* app.get('/about', (req, res) => {
  res.send('all about us!')
}) */

app.get("/urls/:id", (req, res) => {
  res.render('edit-form')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

