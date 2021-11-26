class Produto {
    codigo : String;
    descriçao : String;
    valor : number;
    quantidadeMinima : number;
    quantidade : number;

    constructor(codigo : String, descriçao : String, valor: number, quantidadeMinima : number){
        this.codigo = codigo;
        this.descriçao = descriçao;
        this.valor = valor;
        this.quantidadeMinima = quantidadeMinima;
        
    }

    baixar(quantidade : number){
        if (quantidade < this.quantidadeMinima){
            return "Não é possivel reduzir essa quantidade!";
        } else{
            quantidade --
        }
    }

    repor(quantidade : number){
        quantidade++
    }

    reajuste(taxa : number){}
    
}

let p01 = new Produto("01", "arroz", 18.5, 12);

console.log(p01)