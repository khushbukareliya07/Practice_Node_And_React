//var generateName = require("sillyName"); 
import generateName from "sillyname";
import superheroes from "superheroes";


var names = generateName();

console.log(`Name is : ${names.toUpperCase()}`);


//superheroes code
var superHeroName = superheroes.random();
console.log(`SUPERHERO Package: My name is: ${superHeroName}`);