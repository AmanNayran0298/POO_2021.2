const prompt = require("prompt-sync")();

var txt = prompt("Digite um texto: ");

txt = txt.replace(/a/g, "");
txt = txt.replace(/e/g, "");
txt = txt.replace(/i/g, "");
txt = txt.replace(/o/g, "");
txt = txt.replace(/u/g, "");

console.log(txt);