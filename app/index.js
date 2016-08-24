var express = require('express');
var app = express();

app.use(express.static('./app/public'));
var motivations = require('motivations');

var pick_one = require('pick-one');

var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({
  defaultLayout: 'main', 
  layoutsDir:'./app/views/layouts'
}));

app.set('views', './app/views');
app.set('view engine', 'handlebars');

const pickOne = require('pick-one');
//const motivations = require('motivations');
const catImages = [1, 2, 3, 4, 5, 6];


app.get('/', function(request, response) {
  var motivation = pickOne(motivations);
  var image = pickOne(catImages);
  response.render('motivation', { motivation, image});
});
module.exports = app; 