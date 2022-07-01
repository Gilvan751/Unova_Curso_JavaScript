//tipos de referencias : Funções que realiza uma tarefa não devolve nada

function dizerNome() {
    console.log('Gilvan');
 };
dizerNome();

//faz uma operação e retorna algo
function MultiplicaPorDois(valor) { 
    return valor * 5;
};

let resultado = MultiplicaPorDois(9);
console.log(resultado);