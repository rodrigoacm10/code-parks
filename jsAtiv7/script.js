// Objeto Material: Livro
let livro = {
  titulo: "O Senhor dos Anéis",
  autor: "J.R.R. Tolkien",
  paginas: 1000,

  abrir: function () {
    console.log("Livro aberto na primeira página.");
  },

  virarPagina: function () {
    console.log("Página virada.");
  },

  fechar: function () {
    console.log("Livro fechado.");
  },
};

// Objeto Material: Carro
let carro = {
  modelo: "Tesla Model 3",
  cor: "Prata",
  velocidadeAtual: 0,

  ligar: function () {
    console.log("Carro ligado.");
  },

  acelerar: function (velocidade) {
    this.velocidadeAtual += velocidade;
    console.log("Carro acelerando para " + this.velocidadeAtual + " km/h.");
  },

  frear: function () {
    console.log("Carro freando.");
  },
};

// Objeto Abstrato: Conta Bancária
let contaBancaria = {
  numeroConta: "123456",
  saldo: 1000,
  titular: "João Silva",

  consultarSaldo: function () {
    console.log("Saldo atual: R$ " + this.saldo);
  },

  depositar: function (valor) {
    this.saldo += valor;
    console.log(
      "Depósito de R$ " + valor + " realizado. Novo saldo: R$ " + this.saldo
    );
  },

  sacar: function (valor) {
    if (valor <= this.saldo) {
      this.saldo -= valor;
      console.log(
        "Saque de R$ " + valor + " realizado. Novo saldo: R$ " + this.saldo
      );
    } else {
      console.log("Saldo insuficiente para realizar o saque.");
    }
  },
};

// Objeto Abstrato: Agenda
let agenda = {
  contatos: [],
  nomeAgenda: "Minha Agenda",
  quantidadeContatos: 0,

  adicionarContato: function (contato) {
    this.contatos.push(contato);
    this.quantidadeContatos++;
    console.log("Contato adicionado à agenda.");
  },

  removerContato: function (contato) {
    let index = this.contatos.indexOf(contato);
    if (index !== -1) {
      this.contatos.splice(index, 1);
      this.quantidadeContatos--;
      console.log("Contato removido da agenda.");
    } else {
      console.log("Contato não encontrado na agenda.");
    }
  },

  buscarContato: function (nome) {
    for (let i = 0; i < this.contatos.length; i++) {
      if (this.contatos[i].nome === nome) {
        console.log("Contato encontrado: " + JSON.stringify(this.contatos[i]));
        return;
      }
    }
    console.log("Contato não encontrado na agenda.");
  },
};

// Exemplos de uso
livro.abrir();
carro.ligar();
contaBancaria.depositar(500);
agenda.adicionarContato({ nome: "Maria", telefone: "123456789" });
