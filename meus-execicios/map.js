/*
const precos = [20, 30, 50, 10];


const multiplo = precos.map((preco) => {
    return preco * 2
})

console.log(multiplo)
*/

const produtos = [
  { id: 1, nome: "Smartphone Galaxy S21", preco: 3999.99, temDesconto: true, quantidade: 1 },
  { id: 2, nome: "Notebook Dell Inspiron", preco: 4500.00, temDesconto: false, quantidade: 3 },
  { id: 3, nome: "Smart TV LG 55\"", preco: 2799.00, temDesconto: true, quantidade: 5 },
  { id: 4, nome: "Fone de Ouvido Bluetooth JBL", preco: 299.90, temDesconto: false, quantidade: 2 },
  { id: 5, nome: "Câmera DSLR Canon", preco: 3200.00, temDesconto: true, quantidade: 1 },
  { id: 6, nome: "Tablet iPad Air", preco: 4199.00, temDesconto: false, quantidade: 8 },
  { id: 7, nome: "Console PlayStation 5", preco: 4699.00, temDesconto: true, quantidade: 2 },
  { id: 8, nome: "Smartwatch Apple Watch", preco: 2499.00, temDesconto: false, quantidade: 7 },
  { id: 9, nome: "Impressora HP Multifuncional", preco: 599.90, temDesconto: true, quantidade: 5 },
  { id: 10, nome: "Caixa de Som Portátil Sony", preco: 1000.00, temDesconto: false, quantidade: 3 }
];

// APLICANDO DESCONTO DE 10% NOS PRODUTOS QUE TEM DESCONTO USANDO MAP

const novosProdutos = produtos.map(produto => {
    
    const novoPreco = produto.temDesconto === true ? produto.preco * 0.9 : produto.preco
        
    
    return {
        id: produto.id,
        nome: produto.nome,
        preco: novoPreco,
        quantidade: produto.quantidade,
    }
})

console.log(novosProdutos)

// FATURAMENTO DO ESTOQUE SE TODOS OS PRODUTOS FOREM VENDIDOS USANDO REDUCE

const faturamento = produtos.reduce((acumulador, atual) => {
    return acumulador + (atual.preco * atual.quantidade)
},0);

console.log(`O faturamento total do estoque é: R$ ${faturamento}`)

// FILTRANDO OS PRODUTOS QUE TEM DESCONTO USANDO FILTER

const promocao = produtos.filter(produto => produto.temDesconto === true) 


