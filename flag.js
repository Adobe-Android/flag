#!/usr/bin/env node

const red = string => `\u001b[41m${string}\u001b[49m`
const white = string => `\u001b[47m${string}\u001b[49m`
const blue = string => `\u001b[44m${string}\u001b[49m`

let shortRowOne = (`${blue(" * * * * * * * ")}${red("                                   ")}`);
let shortRowTwo = (`${blue("  * * * * * *  ")}${white("                                   ")}`);
let longRowOne = (`${white("                                                  ")}`);
let longRowTwo = (`${red("                                                  ")}`);

let star = (String.fromCharCode(0x2606));
let rep = /\*/gi;
shortRowOne = shortRowOne.replace(rep, star);
shortRowTwo = shortRowTwo.replace(rep, star);

console.log(shortRowOne);
console.log(shortRowTwo);
console.log(shortRowOne);
console.log(shortRowTwo);
console.log(shortRowOne);
console.log(shortRowTwo);
console.log(shortRowOne);
console.log(longRowOne);
console.log(longRowTwo);
console.log(longRowOne);
console.log(longRowTwo);
console.log(longRowOne);
console.log(longRowTwo);