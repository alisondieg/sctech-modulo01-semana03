//O function cria uma função para ser chamada posteriormente no código
const prompt = require("prompt-sync")();

function criarPerfil(nome, sobrenome, cpf, email, cidade = "Não informada"){
    console.log("None: " + nome + "Sobrenome: "+ sobrenome + "CPF: " + cpf + "Email: " + email + "Cidade: " + cidade)
}

criarPerfil("Alison ", "Cordeiro ", "008.493.189-20 ", "alison.diego01@gmail.com ");