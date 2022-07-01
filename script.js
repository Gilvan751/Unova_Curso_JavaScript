/* let a = prompt('Digite o Primeiro Numero: ')
let b = prompt('Digite o Segundo Numero: ')

function MaiorMenorNumero(a, b) {
    if (a > b) {
        console.log("O numero maior é: ", a);
    }
    else {
        console.log("O numero maior é: ", b);
    }
}
MaiorMenorNumero(a, b); */
//Uma outra maneira de fazer é da seguinte forma
let valorMaior = MaiorMenorNumero(789,789);
console.log("O maior valor é ",valorMaior);
function MaiorMenorNumero(a,b) {
    return a > b ? a : b;
}