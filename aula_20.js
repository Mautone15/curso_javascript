// ESCOPO LEXICO
const idade = 27;

const exibirIdade = () => {
    console.log(idade);
}

const exibirExibirIdade = () => {
    exibirIdade();
    console.log(idade);
}

exibirExibirIdade();