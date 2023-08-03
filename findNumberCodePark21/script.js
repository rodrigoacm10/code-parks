const arrNum = [15, 8, 10, 25, 12, 30, 5, 2, 18, 7];

const finNum20 = function (arr) {
  try {
    const index = arr.findIndex((num) => num === 20);
    console.log();
    if (!(index === -1)) {
      console.log(
        `O array contém o número procurado, ele fica na posição ${index} do array! Aqui está o número: ${arr[index]}`
      );
    } else {
      throw new Error("O array não contém o número 20!");
    }
  } catch (err) {
    alert(err);
    console.error(err);
  }
};

finNum20(arrNum);
