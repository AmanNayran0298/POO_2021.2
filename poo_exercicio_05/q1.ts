class Calculadora {
    private operador1: number;
    private operador2: number;

    constructor(operador1: number, operador2: number) {
        this.operador1 = operador1;
        this.operador2 = operador2;
    }

    soma(): void{
        console.log(this.operador1 + this.operador2)
    }

    subtração(): void{
        console.log(this.operador1 - this.operador2)
    }

}

const test = new Calculadora(1, 2);

test.subtração();
test.soma();