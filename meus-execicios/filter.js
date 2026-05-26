// FILTER SERVE PARA FILTRAR ELEMENTOS DE UM ARRAY COM BASE EM UMA CONDIÇÃO, RETORNANDO UM NOVO ARRAY COM OS ELEMENTOS QUE ATENDEM A ESSA CONDIÇÃO.

const numeros = [1,2,3,4,5,6,7,8,9,10];

const pares = numeros.filter((numero) => {
    return numero % 2 === 0
})

console.log(pares)