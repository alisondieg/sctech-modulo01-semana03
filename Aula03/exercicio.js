function media (nota1, nota2, nota3){
    return ((nota1 + nota2 + nota3) / 3)
}
const resultado = media(6, 6, 9);
console.log(resultado);




//Segunda opção do mesmo codigo mas agora em Arrow function

const media2 = (nota1, nota2, nota3) => ((nota1 + nota2 + nota3) / 3);
console.log(media2(6, 6, 9));
