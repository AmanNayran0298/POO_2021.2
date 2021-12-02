class Conta {
	numero: String;
	saldo: number;

	constructor(numero: String, saldoInicial: number) {
		this.numero = numero;
		this.saldo = saldoInicial;
	}

	sacar(valor: number): void {
		this.saldo = this.saldo - valor;
	}

	depositar(valor: number): void {
		this.saldo = this.saldo + valor;
	}

	transferir(contaDestino: Conta, valor: number): void {
		this.sacar(valor);
		contaDestino.depositar(valor);
	}

}

let contas2: Conta[] = [];
let c1: Conta = new Conta("1",111);

contas2[0] = c1;
console.log(contas2[0].saldo);

contas2[1] = new Conta("2", 222);
console.log(contas2[1].saldo);

contas2.push(new Conta("3", 333));
console.log(contas2[2].saldo);

class Banco {
	contas: Conta[] = [];
	
	inserir(conta: Conta): void {
		this.contas.push(conta);
	}
	
	consultar(numero: String): Conta {
		let contaConsultada: Conta;
		for (let conta of this.contas) {
			if (conta.numero == numero) {
				contaConsultada = conta;
				break;
			}
		}
		return contaConsultada;
	}

	consultarPorIndice(numero: String): number {
		let indice: number = -1;
		for (let i: number = 0; i < this.contas.length; i++) {
			if (this.contas[i].numero == numero) {
				indice = i;
				break;
			}
		}
		return indice;
	}

	alterar(conta: Conta): void {
		let indice: number = this.consultarPorIndice(conta.numero);
		if (indice != -1) {
			this.contas[indice] = conta;
		}
	}

	excluir(numero: string): void {
		let indice: number = this.consultarPorIndice(numero);
		
		if (indice != -1) {
			for (let i: number = indice; i < this.contas.length; i++) {
				this.contas[i] = this.contas[i+1];
			}
			this.contas.pop();
		} 
	}

	depositar(numero: String, valor: number): void {
		let contaConsultada = this.consultar(numero);

		if (contaConsultada != null) {
			contaConsultada.depositar(valor);
		}
	}

	sacar(numero: String, valor: number): void {
		let contaConsultada = this.consultar(numero);

		if (contaConsultada != null) {
			contaConsultada.sacar(valor);
		}
	}

	totalContas() : number {
		return this.contas.length
	}

    totalDin() : number{
        var dinFinal = this.contas[0].saldo
        for(let i :number = 1; i < this.contas.length; i++){
            dinFinal += this.contas[i].saldo
    }return dinFinal;
}
    media() : number{
        var mediaSaldo = (this.totalDin() / this.totalContas())
        return mediaSaldo
    }
}

let banco: Banco = new Banco();

banco.inserir(c1);
banco.inserir(new Conta("2",220));
banco.inserir(new Conta("3",330));

console.log(banco.consultar("1").saldo);
console.log(banco.consultar("2").saldo);


banco.alterar(new Conta("3", 3000));
banco.depositar("3", 210);
console.log(banco.consultar("3").saldo);

banco.excluir("1");
console.log(banco.totalContas());

banco.media();
console.log(banco.media());