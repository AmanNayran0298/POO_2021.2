const prompt = require("prompt-sync")();

var s = prompt("Digite uma palava: ");

s = s.replace(/a/g , "b");

console.log(s);