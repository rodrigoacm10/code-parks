/*
Desenvolva um programa que recebe do usuário nome completo e ano de nascimento que seja entre 1922 e 2021. A partir dessas informações, o sistema mostrará o nome do usuário e a idade que completou, ou completará, no ano atual (2022).

Caso o usuário não digite um número ou apareça um inválido no campo do ano, o sistema informará o erro e continuará perguntando até que um valor correto seja preenchido.
*/

const tetsValid = function (value) {
  if (
    typeof value !== "number" ||
    isNaN(value) ||
    value < 1922 ||
    value > 2021
  ) {
    alert("Insira um valor coerente");
    birthYear = +prompt("Qual ano você nasceu");
    tetsValid(birthYear);
  }
};

const name = prompt("Informe seu nome");
let birthYear = +prompt("Qual ano você nasceu");

tetsValid(birthYear);

console.log(
  `Olá, ${name}! Em 2023, você completou ou completará ${
    2023 - birthYear
  } anos.`
);
