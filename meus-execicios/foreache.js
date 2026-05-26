// Aprendendo a usar o forEach

const nomes = [
    {nome: 'Marlon', age: 30,  city: 'Toledo'},
    {nome: 'José',age: 25, city: 'São Paulo'},
    {nome: 'Natanael', age: 35, city: 'Rio de Janeiro'}
]

nomes.forEach(function(item) {
    if (item.city == "Toledo") {
        console.log(`Você está permitido a entrar, ${item.nome}!`)
    } else {
        console.log(`Desculpe, ${item.nome}, mas você não tem permissão para entrar.`)
    }
});