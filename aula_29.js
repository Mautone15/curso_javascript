// trabalhando com array utilizando .find

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

const novaPessoa = lista.find((pessoa) => pessoa.idade > 30);

console.log(novaPessoa);