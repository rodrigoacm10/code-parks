const restoDiv = (a, b) => {
  const div = Math.floor(a / b);
  const resto = a % b;
  if (resto) return `Resultado: ${div} resto: ${resto}`;
  return a / b;
};

function caseOperatorFunc(a, b, operador) {
  switch (operador) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return restoDiv(a, b);
    default:
      return "Operador no válido";
  }
}

const calc = function () {
  try {
    const yesOrNo = prompt("Deseja calcular algo? (s/n)");

    if (yesOrNo == "n") {
      return;
    } else if (yesOrNo != "s") {
      alert("insira um valor correto");
      throw new Error("insira um valor correto");
    }

    const num1 = +prompt("Informe o primeiro valor: ");
    const num2 = +prompt("Informe o segundo valor: ");
    const operador = prompt("Informe o operador do calculo: (+, -, *, /)");

    // switch (operador)

    const result = caseOperatorFunc(num1, num2, operador);
    alert(`O resultado é: ${result}`);
    calc();
  } catch (err) {
    return err;
  } finally {
    alert("fim da execução");
  }
};
calc();
