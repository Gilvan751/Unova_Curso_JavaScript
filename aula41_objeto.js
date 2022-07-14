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