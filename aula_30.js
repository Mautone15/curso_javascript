// trabalhando com array utilizando .reduce

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

//const pessoa = {
//    jose: {
//        idade: 54,
//    },
//    joao: {
//        idade: 15,
//    },
//    maria: {
//        idade: 23
//    }
// }


const pessoas = lista.reduce((acc, objeto) => {
    return{
        ...acc,
        [objeto.nome]: {
            idade: objeto.idade
        }
    }
}, {});

console.log(pessoas);
console.log(pessoas.Gabriel.idade);