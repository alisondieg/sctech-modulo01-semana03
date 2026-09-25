//O function cria uma função para ser chamada posteriormente no código
const prompt = require("prompt-sync")();

function criarPerfil(nome, sobrenome, cpf, email, cidade = "Não informada"){ // Cidade não infoprmada caso o usuário não informa, caso inform ele vai colocar o informado no lugar
    console.log("None: " + nome + "Sobrenome: "+ sobrenome + "CPF: " + cpf + "Email: " + email + "Cidade: " + cidade)
}

criarPerfil("Alison ", "Cordeiro ", "008.493.189-20 ", "alison.diego01@gmail.com ");


function teste() {
    let secreto = 10;
    console.log("Interno: " + secreto);
}


/*
teste();
console.log(secreto); //Vai dar erro porque a variavel secreto só existe dentro da funcion


O de baixo vai ser visto em Array
function maiorDeIdade(dataNascimento, anoAtual) { // DD/MM/AAAA
    let anoNascimento = dataNascimento.split("/")[2];
    return anoAtual - anoNascimento >= 18;
}

if(maiorDeIdade("13/08/1993", "2026")){
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}
*/