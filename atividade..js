const prompt = require("prompt-sync")();

const { atualizar, listar } = require("./feria.js");



while (true) {
  console.log(
    "O que deseja fazer?\n1 - adicionar\n2 - listar\n3 - Sair\n"
  );
  let opcao = Number(prompt());

  switch (opcao) {
    case 1:
      adicionar();
      break;
    case 2:
      listar();
      break;
    case 3:
      exit();
      break;
    case 4:
      console.log("Opção inválida");
      break;const { atualizar, listar } = require("./feria.js");

  }
}






