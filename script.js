// operador logigo e (&&)
//retorna true se os dois operandos sao verdadeiro
/* let maiorDeIdade = true;
let possuiCarteiraDeTrabalho = true;
let podeAplicar = maiorDeIdade || possuiCarteiraDeTrabalho;
console.log(podeAplicar) */
/* console.log(true && true);
console.log(false && true); */

//operador logico ou (||)
//retorna true se apenas um e verdadeiro

let maiorDeIdade = false;
let possuiCarteiraDeTrabalho = true;
let podeAplicar = maiorDeIdade || possuiCarteiraDeTrabalho;
console.log(podeAplicar)

// operador not (!)
let candidoRecusado = !podeAplicar;
console.log(candidoRecusado);