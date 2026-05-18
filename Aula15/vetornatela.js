let valores = [8, 1, 7, 4, 2, 9]

/*
valores.sort() // Coloca os valores em ordem crescente

for ( let pos = 0; pos<valores.length; pos++) {
    console.log(`O valor na posição ${pos} é ${valores[pos]}.`)
}
*/

for (let pos in valores) {
    console.log(`O valor na posição ${pos} é ${valores[pos]}.`)
} /* Simplificação do código acima, usando o for in para percorrer
os índices do vetor. */