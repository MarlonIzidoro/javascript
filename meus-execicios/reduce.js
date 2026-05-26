
const estoque = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const total = estoque.reduce((acumulador, numero) => {
    var soma = acumulador + numero;
    return soma;
},0);   

console.log(total);

const total2 = estoque.reduce((acumulador, numero) => {
    let multiplicacao = acumulador * numero;
    return multiplicacao;
}, 1);

console.log(total2);
