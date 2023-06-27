// trabalhando com array utilizando .some e .every

const lista = [
    {
        nome: 'Gabriel',
        idade: 25
    },
    {
        nome: 'Anderson',
        idade: 21
    },
    {
        nome: 'Heitor',
        idade: 13
    },
    {
        nome: 'Larissa',
        idade: 16
    },
    {
        nome: 'Gerson',
        idade: 65
    },
    {
        nome: 'Arthur',
        idade: 9
    },
    {
        nome: 'Daniela',
        idade: 50
    },
    {
        nome: 'Marcela',
        idade: 32
    },
    {
        nome: 'Lucas',
        idade: 3
    },
]

const resultadoSome = lista.some((objeto) => objeto.idade > 50);
const resultadoEvery = lista.every((objeto) => objeto.idade >= 2);



console.log('resultado: ', resultadoSome);
console.log('resultadoEvery:', resultadoEvery)
