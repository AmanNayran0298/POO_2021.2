const prompt= require("prompt-sync")();

var i = 0;
var num = 0;
var cont = 0;
var soma = 0;

while(cont !== -1){
    
    num = Number(prompt("Digite um número: "));
    soma += num
    i++
    cont = Number(prompt("Quer continuar?(-1 p/ não): "));

    if(cont === -1) {
        break;
    }
}

var media = soma/i;

console.log("Soma: ",soma);
console.log("Média: ",media);