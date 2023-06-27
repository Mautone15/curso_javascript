// trabalhando com array utilizando .forEach

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

// for(leti = 0; i < lista.length; i++ ) {
//    console.log(lista[i])
// }

let soma = 0;

const somaIdade = (objeto) => {
    soma += objeto.idade
}

lista.forEach(somaIdade);

console.log('Soma: ', soma)