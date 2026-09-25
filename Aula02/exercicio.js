let precoOriginal = 652.90;
let percentualDesconto = 0.60;

function calcularPrecoFinal(preco, percentual) {
  if (preco > 100) {
    const valorDoDesconto = preco * percentual;
    return preco - valorDoDesconto;
  } else {
    return preco;
  }
}

let precoFinal = calcularPrecoFinal(precoOriginal, percentualDesconto);
console.log("Voce vai pagar " + precoFinal);
