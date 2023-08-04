// Você deve criar três listas em JavaScript:

// 1. para guardar os nomes de dez pessoas;
// 2. para guardar as suas idades;
// 3. para guardar as suas cores favoritas.

// Em seguida, imprima essas listas. Depois, faça algumas modificações, alterando uma cor e uma idade. Ao terminar, imprima novamente todas as informações das três listas.

// O CÓDIGO BUSCA DEIXAR O USUÁRIO PODER ESCOLHER OS NOMES, AS IDADES, E AS CORES FAVORITAS, DE CADA PESOA. DEIXANDO O CÓDIGO COMPLETAMENTE AUTONOMO! DEIXANDO ASSIM UMA RESPOSTA MAIS COMPLETA PARA A ATIVIDADE.

const persons = [];
const ages = [];
const colors = [];

const validNum = function (person) {
  const num = +prompt(`Informe a idade de ${person}:`);

  if (typeof num === "number" && !isNaN(num)) {
    return num;
  } else {
    return "Idade não identificada.";
  }
};

const listPersons = function (num) {
  const person = prompt(`Informe o nome da pessoa número ${num}:`);
  const age = validNum(person);
  const color = prompt(`Informe a cor favorita de ${person}:`);

  persons.push(person);
  ages.push(age);
  colors.push(color);
};

const modficList = function () {
  const modf = prompt("Você gostaria de modificar alguma informação? (s/n)");

  if (modf === "s") {
    const personName = prompt(
      "Informe qual o nome da pessoa que você busca modificar a informação?"
    );
    const listType = prompt(
      "Qual lista você gostaria de modificar, nome, idade ou cor?"
    );
    const modification = prompt("Gostaria substituir a informação, por qual?");

    const index = persons.findIndex((el) => el === personName);

    if (listType === "nome") {
      persons.splice(index, 1, modification);
    } else if (listType === "idade") {
      ages.splice(index, 1, modification);
    } else if (listType === "cor") {
      colors.splice(index, 1, modification);
    } else {
      console.log("tá errado");
    }

    return modficList();
  } else {
    return;
  }
};

for (let i = 1; i <= 10; i++) {
  listPersons(i);
}

console.log(`Os nomes são:`);
persons.forEach((el) => console.log(el));
console.log(`As idades respectivamente são:`);
ages.forEach((el) => console.log(el));
console.log(`As cores preferisdas respectivamente são:`);
colors.forEach((el) => console.log(el));

modficList();

console.log("------------------");
console.log(`Os nomes são:`);
persons.forEach((el) => console.log(el));
console.log(`As idades respectivamente são:`);
ages.forEach((el) => console.log(el));
console.log(`As cores preferisdas respectivamente são:`);
colors.forEach((el) => console.log(el));
