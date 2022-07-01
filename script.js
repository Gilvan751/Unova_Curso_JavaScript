

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
const pessoa = {
    nome: 'Gilvan',
    idade: 51
};
//chave vem da palavra em ingles key-value, chave e um valor
for (let chave in pessoa) {
    console.log(chave, pessoa.nome); //ou console.log(chave,pessoa['nome]);
}