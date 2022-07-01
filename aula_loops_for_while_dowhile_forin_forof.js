

/* Laço for */
/* console.log('Estou aprendendo javascript!');
console.log('Estou aprendendo javascript!');
console.log('Estou aprendendo javascript!');
console.log('Estou aprendendo javascript!');
console.log('Estou aprendendo javascript!');

for i in range(5):
    console.log(i); */
/* temos cinco tipos de for
1. for
2. while
3. Do...while
4. For ...in
5. For...of */
//1. for
/* for (let i = 0; i <=5; i++) {
    if (i % 2 != 0) {
        console.log('Estou aprendendo javascript!', i);        
    }
} */

/* //2.while
let i = 5;
while (i >= 1) {
     if (i % 2 != 0) {
        console.log('Estou aprendendo javascript!', i);        
    } i--;
} */
//3.Do....while
/* let i = 0;
do{
    console.log('Digitando...!', i);
    i++;
}while(i < 10) */

//4. For ...in
/* const pessoa = {
    nome: 'Gilvan',
    idade: 51
};
//chave vem da palavra em ingles key-value, chave e um valor
for (let chave in pessoa) {
    console.log(chave, pessoa.nome); //ou console.log(chave,pessoa['nome]);
} */

//5. for...of

/* const cores = ['Vermelho', 'Azul', 'Verde'];
for (let cor of cores) {
    console.log(cor);
} */

//meu exemplo 5
const times = ['Palmeiras','Corinthians','Athletico-PR','Internacional','Atlético-MG','Fluminense'
         ,'Santos','São Paulo','Flamengo','Botafogo','Avaí','Bragantino','Atlético-GO'
    , 'Goiás', 'Ceará', 'Coritiba', 'América-MG', 'Cuiabá', 'Juventude', 'Fortaleza']
         
for (let time of times) {
    console.log(time);
}