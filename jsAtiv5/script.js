const banco = {
  conta: 1234209,
  saldo: 100,
  tipoDeConta: "corrente",
  agencia: "as",

  buscarSaldo() {
    console.log(this.saldo);
    alert(this.saldo);
    return this.saldo;
  },
  deposito(num) {
    if (typeof num != "number") {
      alert("valor inválido");
      return;
    }
    this.saldo += num;
    console.log(this.saldo);
    alert(this.saldo);
    return this.saldo;
  },
  saque(num) {
    if (typeof num != "number") {
      alert("valor inválido");
      return;
    }
    this.saldo -= num;
    console.log(this.saldo);
    alert(this.saldo);
    return this.saldo;
  },
  numConta() {
    console.log(this.conta);
    alert(this.conta);
  },
};

const bancoFuncs = function () {
  const yesOrNo = prompt("Deseja fazer operações bancárias? (s/n)");

  if (yesOrNo == "n") {
    return;
  } else if (yesOrNo != "s") {
    alert("insira um valor correto");
    return;
  }

  const mov = +prompt(`O que você deseja fazer? 
 1. ver saldo
 2. depositar
 3. sacar
 4. ver número da conta`);
  if (mov == 1) {
    banco.buscarSaldo();
  } else if (mov == 2) {
    const valor = +prompt("Informe o valor: ");
    banco.deposito(valor);
  } else if (mov == 3) {
    const valor = +prompt("Informe o valor: ");
    banco.saque(valor);
  } else if (mov == 4) {
    banco.numConta();
  }

  bancoFuncs();
};
bancoFuncs();
