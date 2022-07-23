const marcas = [
    {id:01, nome:'a'},
    {id:2, nome:'b'}
];

console.log(marcas.find(marca => marca.nome === 'a'));


// se for apenas um parametro podemos retirar as chaves bem como o return e deixar tudo em uma unica linha
// se tiver mais de um parametro ai deixa os parentes