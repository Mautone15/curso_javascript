// trabalhando com array utilizando .flatMap

const lista = [
    {
        nome: 'Gabriel',
        idade: 25,
        cartoes: ['3244', '5435']

    },
    {
        nome: 'Anderson',
        idade: 21,
        cartoes: ['342', '43']
    },
    {
        nome: 'Heitor',
        idade: 13,
        cartoes: ['456', '234']
    },
    {
        nome: 'Larissa',
        idade: 16,
        cartoes: ['4534', '54']
    },
    {
        nome: 'Gerson',
        idade: 65,
        cartoes: ['234', '432']
    },
    {
        nome: 'Arthur',
        idade: 9,
        cartoes: ['54', '223']
    },
    {
        nome: 'Daniela',
        idade: 50,
        cartoes: ['3455', '343']
    },
    {
        nome: 'Marcela',
        idade: 32,
        cartoes: ['67', '434']
    },
    {
        nome: 'Lucas',
        idade: 3,
        cartoes: ['543', '567']
    },
]

const cartoes = lista.flatMap((cartao) => cartao.cartoes);

console.log(cartoes);