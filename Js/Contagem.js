// Seleciona o botão Contagem
const btnContagem = document.querySelector("#btn-contagem");
// Adiciona o manipulador de eventos para o botão Contagem
btnContagem.addEventListener("click", () => {
  const limite = parseInt(prompt("Digite o limite da contagem:"));
  const resultContagem = document.querySelector("#result-contagem");

  // Calcula o resultado da Contagem
  let i = 0;
  let resultado = "";
  while (i <= limite) {
    resultado += i + " ";
    i++;
  }

  resultContagem.textContent = "Contagem: " + resultado;
});

