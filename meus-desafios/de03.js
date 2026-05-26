const estoque = [10, 5, 50]

const soma = estoque.reduce((numeros, quantidade) => numeros + quantidade, 0) 

console.log(soma)