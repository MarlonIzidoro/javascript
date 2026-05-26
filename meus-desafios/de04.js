const vendas = [5, 20, 50, 8];

const totalFinal = vendas
  .filter(numeros => numeros > 10) 
  .map(numeros => numeros * 1.10)
  .reduce((numeros, quantidade) => numeros + quantidade, 0);

console.log(totalFinal); // Deve retornar 77
