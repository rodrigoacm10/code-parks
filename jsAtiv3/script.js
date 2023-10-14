const caseOperatorFunc = function (a, b, operador) {
  switch (operador) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      const div = Math.floor(a / b);
      const resto = a % b;
      if (resto) return `Resultado: ${div} resto: ${resto}`;
      return a / b;
    default:
      return "Operador no válido";
  }
};

const calc = function () {
  const yesOrNo = prompt("Deseja saber a média de três notas? (s/n)");

  if (yesOrNo == "n") {
    return;
  } else if (yesOrNo != "s") {
    alert("insira um valor correto");
    return;
  }

  const num1 = +prompt("Informe o primeiro valor: ");
  const num2 = +prompt("Informe o segundo valor: ");
  const operador = prompt("Informe o operador do calculo: (+, -, *, /)");

  // switch (operador)

  const result = caseOperatorFunc(num1, num2, operador);
  alert(`O resultado é: ${result}`);
  calc();
};
calc();
