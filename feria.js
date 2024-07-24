//ferias.js




const ferias = [];
let estado = "menu";
let atividade = {};
console.log(
  "Escolha uma opção:\n1. adicionar atividade\n2.adicionar dia\n3. listar atividades \n4. sair"
);
process.stdin.on("data", function (data) {
  let input = data.toString().trim();

  if (estado === "menu") {
    if (input === "1") {
      estado = "adicionar_atividade";
      console.log("Digite a atividade realizada no dia:");


    } else if (input === "2") {
      estado = "adicionar_data";
      console.log("Digite a data da atividade:");


    } else if (input === "3") {
      if (clinica.length === 0) {
        console.log("Nenhum dia salvo.");
      } else {
        console.log("esses sao os dias salvos:");
        for (let ferias of clinica) {
          console.log(
            `Nome: ${dia.data}, atividade: ${dia.atividade}, dia: ${dia.tarefa}`
          );
        }
      }
      console.log(
        "Escolha uma opção:\n1. Adicionar paciente\n2. Cancelar  consulta\n3. Listar Pacientes\n4. Atualizar consulta \n5. sair"
      )
      module.exports = {
        adicionar,
        listar,
      };

    }
  }




});