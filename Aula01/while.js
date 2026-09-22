const prompt = require('prompt-sync')();

let cont = 0;

while (cont <= 5){
    console.log(cont);
    cont++;
}


//Exemplo prático do uso de while
let idade = prompt("Digite sua idade: ");
idade = Number(idade);
while (Number.isNaN(idade)) {
    idade = prompt("Digite sua idade, apenas numeros: ");
    idade = Number(idade);
}
console.log("Muito bem, você digitou corretmente sua idade!")