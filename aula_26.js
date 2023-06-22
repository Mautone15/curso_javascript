// trabalhando com o array utilizando .map

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

const converterObjeto = (objeto) => {
    return {
        ...objeto,
        idade: `${objeto.nome} + ${objeto.idade}`
    }
}

console.log(lista.map(converterObjeto));