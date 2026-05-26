const classificarNota = nota => {
  if (nota >= 9) {
    return "A";
  } else if (nota >= 7) {
    return "B";
  } else if (nota >= 5) {
    return "C";
  } else {
    return "D";
    console.log("Sua nota é muito baixa, estude mais!")
  }
}

console.log(classificarNota(9.5)); // Deve retornar "A"
console.log(classificarNota(7.2)); // Deve retornar "B"
console.log(classificarNota(4.8)); // Deve retornar "D"
