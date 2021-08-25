const vetor = [];

var par = 0;
var impar = 0;

for(var i = 1; i <= 20; i++) {

    vetor.push(i);
    console.log(vetor);

    if(i % 2 === 0) {
        par+=1;
    } else {
        impar+=1;
    }
}

console.log("Pares: ", par);
console.log("Ímpares: ", impar);