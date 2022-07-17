// Primeira opção
let faixas = [
    {tooltip: 'até 700 reais', minimo: 0, maximo:700},
    {tooltip: 'de 700 até 1000 reais', minimo: 700, maximo:1000},
    {tooltip: '1000 reais ou mais', minimo: 1000, maximo:999999}
];

//Segunda Opção function factor
function criaFaixa(tooltip, minimo, maximo) {
    return {
        tooltip,
        minimo,
        maximo
    }
}

let faixas2 = [
    criaFaixa('a', 1, 100),
    criaFaixa('b', 100, 1000),
    criaFaixa('c', 1000, 10000)
]

//Terceiro modo (function Constructor)
function FaixaPreco(tooltip, minimo, maximo) {
    this.tooltip = tooltip,
    this.minimo = minimo,
    this.maximo = maximo
}
let faixas3 = [
    new FaixaPreco('c', 1, 500),
    new FaixaPreco('d', 600, 1500),
    new FaixaPreco('e', 1500, 15000)
]
console.log(faixas);
console.log(faixas2);
console.log(faixas3);