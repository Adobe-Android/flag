#!/usr/bin/env node
const {bgRed: red, bgWhite: white, bgBlue: blue} = require('chalk');

let fiftySpace = thirtyFiveSpace = " ";

for (i=0; i<49; i++) {
  fiftySpace += fiftySpace[i];
};

for (i=0; i<34; i++) {
  thirtyFiveSpace += thirtyFiveSpace[i];
};

let shortStringOne = " * * * * * * * ";
let shortStringTwo = "  * * * * * *  ";

let shortRowOne = (`${blue(shortStringOne)}${red(thirtyFiveSpace)}`);
let shortRowTwo = (`${blue(shortStringTwo)}${white(thirtyFiveSpace)}`);
let longRowOne = (`${white(fiftySpace)}`);
let longRowTwo = (`${red(fiftySpace)}`);

let star = (String.fromCharCode(9733));
let rep = /\*/gi;
shortRowOne = shortRowOne.replace(rep, star);
shortRowTwo = shortRowTwo.replace(rep, star);

for (i=0; i<3; i++) {
  console.log(shortRowOne);
  console.log(shortRowTwo);
};
console.log(shortRowOne);

for (i=0; i<3; i++) {
  console.log(longRowOne);
  console.log(longRowTwo);
};