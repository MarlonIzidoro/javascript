var inicio = document.querySelector('#inicio')
var fim = document.querySelector('#fim')
var passo = document.querySelector('#passo')

function contar() {
    var i = Number(inicio.value)
    var f = Number(fim.value)
    var p = Number(passo.value)
    var res = document.querySelector('div#res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('ERRO! Faltam dados!')
    } else {
        res.innerHTML = 'Contando: <br>'
        for (var c = i; c <= f; c += p) {
            res.innerHTML += ` ${c} \u{1F449}`
        }
    }
}
