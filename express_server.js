const express = require('express');
const morgan = require('morgan');

//this is the server we call it here app istead of const server
const app = express();
const port = 8080;

//middleware
/* app.use( (req, res, next) => {
  console.log(req.method, req.url);

  next();
}); */

const urlDatabase = {
  "b2xVn2": "http://www.lighthouselabs.ca",
  "9sm5xK": "http://www.google.com"
};

app.use(morgan('dev'))

//GET /home
app.get('/', (req, res) => {
  res.send('hello')
})

//GET /about
/* app.get('/about', (req, res) => {
  res.send('all about us!')
}) */

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});