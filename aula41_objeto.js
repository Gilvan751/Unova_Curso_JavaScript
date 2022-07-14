let endereco = {
    Rua: 'Vitoria maria',
    Cidade: 'Barra do Garças',
    CEP:'78600-000' 
        
};
function exibirEndereco(endereco){
    for (let chave in endereco)
        console.log(chave, endereco[chave]);
}
    
exibirEndereco(endereco);

let vidaPregressa = {
    Nome: 'Jose',
    Sobrenome: 'Maria da Silva',
    idade: 46,
    Natural: 'Bom Jardim de Goias',
    Filiacao:'Jose Pedro e Maria Felisbina'
}
function exibirVidaPregressa(vidaPregressa) {
    for (let chave in vidaPregressa)
        console.log(chave, vidaPregressa[chave]);
}
exibirVidaPregressa(vidaPregressa);