const calcMedia = function () {
  const yesOrNo = prompt("Deseja saber a média de três notas? (s/n)");

  if (yesOrNo == "n") {
    return;
  } else if (yesOrNo != "s") {
    alert("insira um valor correto");
    return;
  }

  const nota1 = +prompt("insira a primeira nota (0 - 10):");
  const nota2 = +prompt("insira a segunda nota (0 - 10):");
  const nota3 = +prompt("insira a terceira nota (0 - 10):");
  const media = [nota1, nota2, nota3].reduce((acc, num) => (acc += num), 0) / 3;
  console.log(media);

  calcMedia();
};
calcMedia();
