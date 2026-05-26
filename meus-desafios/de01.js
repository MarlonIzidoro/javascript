function quebraDeRecordes(pontuacoes) {
    let recordeMaximo = pontuacoes[0];
    let recordeMinimo = pontuacoes[0];
    let contagemMaximo = 0;
    let contagemMinimo = 0; 
    
    for(i = 1; i < pontuacoes.length; i++) {
        if(pontuacoes[i] > recordeMaximo) {
            recordeMaximo = pontuacoes[i]
            contagemMaximo++
        }
    }
    return [contagemMaximo, contagemMinimo]; 
}

const jogos = [10, 5, 20, 20, 4, 5, 2, 25, 1];
console.log(quebraDeRecordes(jogos)); // Deve retornar [2, 4]

