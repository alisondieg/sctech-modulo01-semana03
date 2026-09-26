//Uma arrow function (função de seta) é uma forma mais curta e limpa de escrever expressões de função em JavaScript
//Ela substitui a palavra-chave function por uma seta => (formada por um sinal de igual e um de maior) posicionada após os parâmetros
//Esqueleto da Arrow functions 


const saudacao = () => {}

const somar = (a, b) => {
    return a + b;
}

console.log(somar(2, 5));

//são as mesmas coisas

console.log(soma(2, 6));

//O classico Hello world com Arrow function
const saudar = () => "Hello world!";
console.log(saudar());