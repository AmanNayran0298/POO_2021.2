class Retangulo{
    l1 : number;
    l2 : number;

    calcularPerimetro(): number {
        return (this.l1 * 2) + (this.l2 * 2);
    }

}

let TestaRetangulo : Retangulo;
TestaRetangulo = new Retangulo();

TestaRetangulo.l1 = 10;
TestaRetangulo.l2 = 20;

console.log(TestaRetangulo.calcularPerimetro());
      