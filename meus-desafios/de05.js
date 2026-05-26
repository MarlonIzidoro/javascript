const dadosMisturados = [2, "abacaxi", 3, "teste", 4];

const resultadoFinal = dadosMisturados
  .filter(item => typeof item === 'number')
  .map(item => item * 2)
  .reduce((acc, item) => acc + item, 0);

  console.log(resultadoFinal);