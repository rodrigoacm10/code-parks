/*
Faça uma função calculadora de dois números com três parâmetros: os dois primeiros serão os números da operação e o terceiro será a entrada que definirá a operação a ser executada. Considera a seguinte definição:
1. Soma
2. Subtração
3. Multiplicação
4. Divisão

Caso seja inserido um número de operação que não exista, o resultado deverá ser 0.
*/

const num1 = +prompt("Insira o primeiro número");
const num2 = +prompt("Insira o segundo número");
const oper = prompt("Qual operador você vai utilizar?");

const calcAndOperator = function (value1, value2, operator) {
  switch (operator) {
    case "+":
      return value1 + value2;
    case "-":
      return value1 - value2;
    case "*":
      return value1 * value2;
    case "/":
      return value1 / value2;
    default:
      return 0;
  }
};
console.log(calcAndOperator(num1, num2, oper));
