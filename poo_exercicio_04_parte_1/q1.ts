let a : number[] = [4, 7, 2, 3, 8, 1, 5, 6];
var contador = 0;
var soma = 0;

while (contador < a.length){
    var valor = a[contador];
    soma += valor;
    contador ++;
}

console.log(soma);