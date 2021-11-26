class Circulo{
    r : number;

    calcularArea(): number {
        return (this.r ** 2) * 3.14 ;
    }

    calcularPerimetro(): number{
        return (this.r * 3.14 * 2)
    }
}

let circulo : Circulo;
circulo = new Circulo();

circulo.r = 7;

console.log(circulo.calcularArea());
console.log(circulo.calcularPerimetro());