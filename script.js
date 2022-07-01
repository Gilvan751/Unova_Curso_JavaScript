//tipos de referencias : Funções
// para nomear uma função temos que colocar   vebo ++ substantivo
// verbo + substantivo == resetaCor, alterarTamanho,
//   reseta+Cor
let corSite = 'Azul';
// function resetaCor() {
//     corSite = '';
// };
// console.log(corSite);

// resetaCor();
// console.log(corSite);
//esse primeiro caso é sem valor argumento

// function resetaCor(cor, tonalidade) {
//     corSite = cor + tonalidade;
// };
// console.log(corSite);
// resetaCor('Vermelho ', ' claro');
// console.log(corSite);
let length = 25;
let cor = 'green';
let revisaTamanho = 60;

function alterarTamanho(length, cor) { 
    revisaTamanho = length + ' ' + cor;
};
console.log(revisaTamanho);
alterarTamanho(90, 'black');
console.log(revisaTamanho);
