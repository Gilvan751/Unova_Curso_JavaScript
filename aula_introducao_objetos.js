const celular = {
    marcaCelular: 'Asus',
    tamanhoTela: {
        Vertical: 155,
        horizontal: 75
    },
    capacidadeBateria: 5000,
    liga: function () {
        console.log('Fazendo uma ligação...')
    }
}

celular.marcaCelular = 'lg';
console.log(celular.marcaCelular);
