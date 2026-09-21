//Cria uma entrada do usuario
//Tem que colocar na pasta com cmd ou terminal, npm install prompt-sync

const prompt = require('prompt-sync')();
let idade = prompt("Digite sua idade: ");
let mensagem;

if (idade >= 18) {
    mensagem = "Adulto";
} else {
    mensagem = "Menor de idade";
}

console.log(mensagem)
