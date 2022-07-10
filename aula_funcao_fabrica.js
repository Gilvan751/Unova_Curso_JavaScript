function criarCelular(marcaCelular, tamanhoTela, capacidadeBateria) {
    return {
    marcaCelular,
    tamanhoTela,
    capacidadeBateria,
    liga () {
        console.log('Fazendo uma ligação...')
    }
    }
}

const celular1 = criarCelular('LG', 5, 6, 6000);
console.log(celular1);
//Quando a chave e o parametro são o mesmo apenas uma serve marcaCelular,