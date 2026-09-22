const prompt = require('prompt-sync')();
let idade;
do {
idade = prompt("Digite sua idade, apenas numeros: ");
idade = Number(idade);
} while (Number.isNaN(idade));