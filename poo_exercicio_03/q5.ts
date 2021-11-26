class Jogador {
    
    força : number;
    nivel : number;
    pontosAtual : number;

    constructor(força : number, nivel : number, pontosAtual : number) {
        this.força = força;
        this.nivel = nivel;
        this.pontosAtual = pontosAtual;
    }

    calcAtaque(): number {
        this.pontosAtual = this.força * this.nivel;
        return this.pontosAtual
    }

    
    atacar(adversario : Jogador) :void{}

    
}

let j1 = new Jogador(32, 26, 0);
let j2 = new Jogador(28, 22, 0);
j1.calcAtaque();
console.log(j1);
console.log(j1.calcAtaque());
