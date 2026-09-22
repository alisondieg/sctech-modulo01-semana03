const prompt = require('prompt-sync')();

for (let exercicio = 5; exercicio > 0; exercicio--) {
  console.log(exercicio);
}
console.log("Já");

let soma = 0;
let numero = 1;
while (numero <= 10) {
  soma += numero;
  numero++;
}
console.log("Dá " + soma);

const numeroSecreto = 7;
let palpite;
while (palpite != numeroSecreto) {
  palpite = Number(prompt("Adivinhe o numero de 1 a 10: "));
  if (palpite == numeroSecreto) {
    console.log("Você acertou");
  } else {
    console.log("Tente novamente");
  }
}
