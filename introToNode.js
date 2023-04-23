/*
const fs = require('fs');

fs.copyFileSync('source.txt','destination.txt');
*/

/************************************************** */

var superheroes = require('superheroes');

var superHeroNames = superheroes.random();

console.log(superHeroNames);

/************************************************** */

var superHeroList = superheroes.all;

console.log(superHeroList);