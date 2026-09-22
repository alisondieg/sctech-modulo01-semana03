let teste = "nivel zero";

{
    let segredo = 123;
    console.log(teste);
    console.log(segredo);

}

console.log(teste); // Pode porque existe a variavel teste fora do bloco
// console.log(segredo); //Não pode porque não existe a variavel segredo fora do bloco

//Tem que crier uma variavel fora do bloco para poder usar depois de novo fora do bloco
// Variavel dentro do bloco só pode ser usada dentro do bloco


//EXEMPLO

let idade = 15;
let mensagem;

if (idade >= 18) {
    mensagem = "Adulto";
} else {
    mensagem = "Menor de idade";
}

console.log(mensagem)