class triangulo {
    constructor(public a : number,
                public b : number, 
                public c : number) {}

    verifica() : boolean {
        let sub = (this.b - this.c);
        let soma = (this.b + this.c);
        if(sub < this.a && this.a < soma){
            return true
        } else {
            return false
        }
    }

    ehIsosceles() : boolean {
        if (this.verifica() == true && this.a == this.b && this.a != this.c){
            return true
        } else{
            return false
        }
    }

    ehEquilatero() : boolean{
        if (this.verifica() == true && this.a == this.b && this.a == this.c){
            return true
        } else {
            return false
        }
    }

    ehEscaleno() : boolean{
        if (this.verifica() == true && this.a != this.b && this.a != this.c){
            return true
        } else {
            return false
        }
    }
}

let t1 = new triangulo(3, 3, 3);
let t2 = new triangulo(5, 7, 6);

console.log(t1.ehIsosceles());
console.log(t1.ehEquilatero());
console.log(t1.ehEscaleno());
console.log(t2.ehEscaleno());
