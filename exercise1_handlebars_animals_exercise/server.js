var express = require('express');
var app = express();

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');//grabbing handlebars joining it 
//to express, line 5 plugs it in, l6 is the view engine

var animals = [
  {animalType: 'dog', pet: true, fierceness: 4},
  {animalType: 'cat', pet: true, fierceness: 10},
  {animalType: 'giraffe', pet: false, fierceness: 4},
  {animalType: 'zebra', pet: false, fierceness: 8},
  {animalType: 'lion', pet: false, fierceness: 10}
];

app.get('/all-pets', function(req,res) {
  var data={
    allPets:[animals[0],animals[1]]
  }
  res.render('index',data);
});

app.get('/dog', function(req,res) {
  
  //lucky for us, animals[0] is an object!
  res.render('dog',animals[0])
  //2. send the animal object inside of the animals array to the dog handlebars file.
});

app.get('/all-non-pets', function(req,res) {
  //handlebars requires an object to be sent to the index template file. This is why we do this.
  res.render()
  //3. send all the animals that are not pets to the non-pets handlebars file. There is an animals array full of animal objects up above. The animal objects have a key called pet that is either true or false.

});

var port = 3000;
app.listen(port);
