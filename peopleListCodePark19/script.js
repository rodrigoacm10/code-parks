// Crie uma lista encadeada em que cada elemento representa uma pessoa.

// Ela precisa conter informações como nome, idade e referência ao filho dela.

const peoples = [];

const validNum = function (num) {
  if (!(typeof num === "number" && !isNaN(num)))
    throw new Error("insira um valor válido");
};

const addPerson = function () {
  try {
    const name = prompt("Informe o nome:");
    const age = +prompt("informe a idade:");
    validNum(age);
    const child = prompt("Infrome o filho:");
    const contRegristre = prompt("Continuar registrando pessoas? (s/n)");

    peoples.push({ name, age, child });

    if (contRegristre === "s") {
      return addPerson();
    } else if (contRegristre === "n") {
      return;
    } else {
      throw new Error("Não entendemos o seu comando!");
    }
  } catch (err) {
    alert(err);
    console.error(err);
    addPerson();
  }
};
addPerson();

console.log(peoples);

peoples.forEach((people) => {
  const index = peoples.findIndex((el) => el === people);

  console.log(
    `Pessoa ${index + 1}: Nome: ${people.name}, Idade: ${people.age}, Filho: ${
      people.child
    }`
  );
});
