class Conta {
    numero : String;
    saldo : number;

    constructor(numero : String, saldoInicial : number){
        this.numero = numero;
        this.saldo = saldoInicial;
    }

    sacar(valor : number) : boolean{
        this.saldo = this.saldo - valor;
        if (this.saldo >= 0){
            return true;
        } else {
            return false;
        }
    }

    depositar(valor: number) : void{
        this.saldo = this.saldo + valor;
    } 

    consultarSaldo(): number {
        return this.saldo;
    }

    transferir(contaDestino: Conta, valor: number): boolean {
        this.sacar(valor);
        if (this.saldo >= 0){
            contaDestino.depositar(valor);
            return true;
        } else {
            return false;
        }
    }
}

let c1 = new Conta("1", 390);
let c2 = new Conta("2", 180);
let c3 = new Conta("3", 120);

console.log(c1.sacar(500));
console.log(c1.transferir(c2, 90));
console.log(c3.sacar(100));
console.log(c3.transferir(c1, 5));