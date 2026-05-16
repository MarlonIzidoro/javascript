var inicio = document.getElementById('inicio')
var pafim = document.getElementById('fim')
var sso = document.getElementById('passo')
var res = document.getElementById('res')

function somar() {
    var i = Number(inicio.value)
    var f = Number(fim.value)
    var p = Number(passo.value)
    res.innerHTML = `Contando: `
    
    If (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossivel contar'
    }