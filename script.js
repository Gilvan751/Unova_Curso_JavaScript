/* const resultado = fizzBuzz(7);
console.log(resultado);

function fizzBuzz(entrada) {
    if (typeof entrada != 'number')
        return "Não é um número";
    if (entrada % 3 === 0 && entrada % 5 === 0)
        return 'FizzBuzz';
    if (entrada % 3 === 0)
        return 'Fizz';
    if (entrada % 5 === 0)
        return 'Buzz';
    return entrada;
    
}; */
const divisor = fazerAcontecer(23);
console.log(divisor);

function fazerAcontecer(valor) { 
    if (typeof valor != 'number')
        return 'Não é um número, entre com um valor numerico! ';
    if (valor % 2 === 0 && valor % 3 === 0)
        return 'FazerAcontecer';
    if (valor % 2 === 0)
        return 'Fazer';
    if (valor % 3 === 0)
        return 'Acontecer';
    return valor;
    
};