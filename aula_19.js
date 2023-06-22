// Funções: como declarar,executar,enviar parametros e receber respostas

function calcular() {
    console.log('calcular')
}

const calcular2 = function() {
    console.log('calcular 2');
    return 5435;
}

const calcular3 = (funcao) => { 
    console.log('calcular3')
    return funcao()
}


console.log('resultado: ', calcular3(calcular2))
