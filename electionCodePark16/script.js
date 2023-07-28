const candidatos = {
  voto: [
    {
      candidato: "candidato X",
      numero: 889,
      votos: 0,
    },
    {
      candidato: "candidato Y",
      numero: 847,
      votos: 0,
    },
    {
      candidato: "candidato Z",
      numero: 515,
      votos: 0,
    },
    {
      candidato: "brancos",
      numero: 0,
      votos: 0,
    },
    {
      candidato: "nulos",
      numero: "number",
      votos: 0,
    },
  ],
};

const init = function () {
  voto = +prompt(`Para quem vai seu voto? 
  - candidato_X => 889
  - candidato_Y => 847
  - candidato_Z => 515
  - branco => 0 `);
  votedIn = +validVote(voto);
  confirmation = prompt(`Terminar eleiçõa? (s/n)`);
  return [voto, votedIn, confirmation];
};

const validVote = function (voto) {
  const analiseVote = candidatos.voto.findIndex((num) => num.numero === voto);

  if (analiseVote !== -1) {
    return analiseVote;
  } else {
    return 4;
  }
};

const repeatConfirmation = function (confirmation, voto, votedIn) {
  if (confirmation == "n" && typeof voto == "number" && !isNaN(voto)) {
    candidatos.voto[votedIn].votos++;
    [voto, votedIn, confirmation] = init();
    repeatConfirmation(confirmation, voto, votedIn);
  } else if (confirmation == "s") {
    candidatos.voto[votedIn].votos++;
  } else if (typeof voto != "number" || isNaN(voto)) {
    alert("inserir valor coerente");
    [voto, votedIn, confirmation] = init();
    repeatConfirmation(confirmation, voto, votedIn);
  }
};

const election = function () {
  let [voto, votedIn, confirmation] = init();
  repeatConfirmation(confirmation, voto, votedIn);

  const result = candidatos.voto.reduce(
    (acc, el) => (acc += `${el.candidato}: ${el.votos}, `),
    ""
  );

  const votosEleito = Math.max(
    ...candidatos.voto.reduce(function (acc, el) {
      acc.push(el.votos);
      return acc;
    }, [])
  );

  console.log(candidatos.voto);

  console.log(`O resultado geral da eleição foi -> ${result}`);
  console.log(
    `O vencedor foi o ${candidatos.voto[votedIn].candidato} com ${votosEleito} votos`
  );
};
election();
