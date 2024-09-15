// var generateName = require("sillyname");
import generateName from 'sillyName';
var sillyName = generateName();

console.log(`My Name is ${sillyName}.`);

import {randomSuperhero} from 'superheroes';

console.log("\n My Favourite Super Hero is "+randomSuperhero()+"!")