// Trabalhando com objetos simples

const Gabriel = {
    idade: 35,
    peso: 80,
    nome: 'Gabriel',
    genero: 'Masculino',
    nacionalidade: 'Brasileiro',
    endereco: 'Rua josé Virgilio',
    numero: 340,
    pais: 'Brasil',
    temFilhos: true,
}

const exibirInformacoes = (pessoa) => {
    console.log ('Dados:', pessoa);
}

exibirInformacoes (Gabriel)