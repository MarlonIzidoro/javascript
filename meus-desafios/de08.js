const classificarTriangulo = (a, b, c) => {
  // 1. REGRA DE EXISTÊNCIA: A soma de dois lados SEMPRE tem que ser maior que o terceiro
  if (a + b <= c || a + c <= b || b + c <= a) {
    return "Não é um triângulo válido";
  }

  // 2. CLASSIFICAÇÃO (Sua lógica perfeita entra aqui)
  if (a === b && b === c) {
    return "Equilátero";
  } else if (a === b || b === c || a === c) {
    return "Isósceles";
  } else {
    return "Escaleno"; // Se passou por tudo, só sobrou ser escaleno!
  }
}

console.log(classificarTriangulo(3, 3, 3));  // "Equilátero"
console.log(classificarTriangulo(3, 4, 3));  // "Isósceles"
console.log(classificarTriangulo(3, 4, 5));  // "Escaleno"
console.log(classificarTriangulo(1, 1, 10)); // "Não é um triângulo válido" 🚀(Agora sim!)

