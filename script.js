/* Expressões com condicionais, if...else, switche ...case */
/* Se a hora estiver entre as 06:00 horas e 12:00 horas vamos exibir Bom dia,
Se a hora estiver entre as 12:0 e as 18:00 horas vamos exibir Boa Tarde e
Se a hora estiver fora desse horario escreva Boa noite */

/* if(condição){
    o codigo a ser executado
}
else if (condição){
    condição a ser executada
}
else {

} */
let hora = prompt('Digite o horário: ');
if (hora >= 6 && hora < 12) { 
    console.log('Bom dia');
}
else if (hora >=12 && hora < 18) {
    console.log('Boa Tarde')
}
else {
    console.log('Boa Noite')
}