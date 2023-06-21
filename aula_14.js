//  Aprendendo mais sobre STRING e suasa Funções //

const mensagem = 'jnfdsbsdhf fFDSFKFNSDdfsfs';
const mensagem2 = 'fsdsdfsegfggf';

console.log('tamanho: ', mensagem.length);
console.log('Concat', mensagem.concat(mensagem2));
console.log('Concat +', mensagem + mensagem2);
console.log('ES:', `dsdfsd ${mensagem} ${mensagem2}`);
console.log('Quebrar em array', mensagem.split(' '));
console.log('UP:', mensagem.toUpperCase());
console.log('DOWN:', mensagem.toLowerCase());
console.log('Replace: ', mensagem.replace('fFDSFKFNSDdfsfs', 'JULIO'));
