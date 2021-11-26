class SituacaoFinanceira {
    valorCredito: number;
    valorDebito: number;
    saldo: number;
  
    calcularSaldo(): number{
      return this.saldo = this.valorCredito - this.valorDebito;
    }
  }
  
  let sf: SituacaoFinanceira;
  sf = new SituacaoFinanceira();
  sf.valorCredito = 590;
  sf.valorDebito = 80;

  console.log(sf.calcularSaldo());