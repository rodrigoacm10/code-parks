// O nome vai ser uma string
// O salario vai ser um float
// A idade vai ser um inteiro
// O diplma vai ser uma bolean

const pessoas = [];

const addPessoa = function () {
  const yesOrNo = prompt("Deseja cadastrar uma pessoa? (s/n)");

  if (yesOrNo == "n") {
    return;
  } else if (yesOrNo != "s") {
    alert("insira um valor correto");
    return;
  }

  const nome = prompt("Qual o nome da pessoa?");
  const salario = +prompt(`Qual o salário de ${nome}?`);
  const idade = +prompt(`Qual a idade de ${nome}?`);
  let diploma = prompt(`${nome} possui diploma? (s/n)`);

  if (diploma == "s") {
    diploma = true;
  } else if (diploma == "n") {
    diploma = false;
  }

  pessoas.push({
    name: nome,
    salary: salario,
    age: idade,
    degree: diploma,
  });
  console.log(pessoas);
};
addPessoa();
