const bicicleta = {
    marcaBicicleta: 'TSW',
    quadroBicicleta: 'Aluminio',
    guidoBicicleta: 'Policarbono',
    aroBicicleta: 2,
    corBicicleta: 'verde/preto',
    pedal: function () {
        console.log('Estou pedalando...');
    }
}
const novoObjeto = Object.assign({
    guidon:'ar comprimido'
},bicicleta);
console.log(novoObjeto);
const objeto2 = { ...bicicleta };
console.log(objeto2);