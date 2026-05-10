var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são ${hora} horas.`)
if (hora <= 12){
    console.log('Agora é de manha!')
} else if (hora >= 13 && hora < 18){
    console.log('Agora é de tarde!')
} else if (hora >= 18 && hora < 25) {
    console.log('Agora é de noite!')
} else {
    console.log('Não existi essa hora!')
}