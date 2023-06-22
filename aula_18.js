// aprendendo sobre TRY, Catch e Finally

function calcular(valor) {
    if (valor === 0){
        throw new Error('Não pode ser 0');
    }
    return valor / 2;
}

try {
    const resultado = calcular(0);
    console.log('resultado', resultado);
} catch (error){
    console.log(error.message)
} finally {
    console.log('chegou no finally')
}

console.log('continua')