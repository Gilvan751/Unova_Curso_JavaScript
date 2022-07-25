const nomes = ['Paulo', 'Fernanda', 'Fatima', 'João', 'José', 'Hamilcar'];
// Esse numero retirar a array do inicio shitf()
const inicio = nomes.shift();
console.log(inicio);
console.log(nomes);
// Esse numero retirar a array do meio splice()
const meio = nomes.splice(3, 1);
console.log(meio);
console.log(nomes);
// Esse numero retirar a array do final pop()
const final = nomes.pop();
console.log(final);
console.log(nomes);