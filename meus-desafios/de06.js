const usuarios = [
  { nome: "Ana", idade: 22, ativo: true },
  { nome: "Carlos", idade: 15, ativo: true },
  { nome: "Bruna", idade: 30, ativo: false },
  { nome: "Diego", idade: 19, ativo: true }
];

const usuariosFiltrados = usuarios
  .filter(u => u.idade >= 18 && u.ativo === true)
  .map(u => u.nome);

console.log(usuariosFiltrados); // Deve retornar ["Ana", "Diego"]
