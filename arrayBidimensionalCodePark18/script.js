// Nesta atividade, você deve criar um código em JavaScript com uma matriz bidimensional para armazenar informações sobre animais e as suas características.

// Cada linha deve representar um animal e cada coluna terá as diferentes informações sobre ele, como nome, espécie e idade.

const animals = [];

const validNum = function (num) {
  if (!(typeof num === "number" && !isNaN(num)))
    throw new Error("insira um valor válido");
};

const addAnimal = function () {
  try {
    const name = prompt("Informe o nome do animal:");
    const especie = prompt("Infrome a espécie do animal:");
    const age = +prompt("informe a idade do animal:");
    validNum(age);
    const contRegristre = prompt("Continuar registrando animais? (s/n)");

    animals.push([name, especie, age]);

    if (contRegristre === "s") {
      return addAnimal();
    } else if (contRegristre === "n") {
      return;
    } else {
      throw new Error("Não entendemos o seu comando! Encerraremos o registro.");
    }
  } catch (err) {
    alert(err);
    console.error(err);
    addAnimal();
  }
};
addAnimal();

console.log(animals);
