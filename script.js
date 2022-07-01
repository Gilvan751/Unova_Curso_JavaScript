/* Falsy
undefined
null
0
false
''
Nan 
Truthy
false ||'Raphael

retorna 'Raphael
false ||1
retorna 1
*/
let corPersonalizada = '';
let corPadrao = 'Azul';
let corPerfil = corPersonalizada || corPadrao;
console.log(corPerfil);
