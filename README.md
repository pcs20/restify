# restify

#ENCODE
const cripto = require('crypto'); // modulo crypto

/**
 * @description Criptografa o token
 * 
 * @param {string} token Token para acessar serviço do acessoseguro
 * 
 * @return Retorna o token (base64) encriptografado
 */
module.exports = function encode(token) {
    const algoritmo = 'aes-192-cbc'; // crifra 
    const senha = 'alma$&*'; // chave
    const chave = cripto.scryptSync(senha, 'salt', 24); // chave + salta de 24bytes porque cifra tem 192 bits
    const buf = Buffer.alloc(16, 0); //vetor de iniciação
    const cifra = cripto.createCipheriv(algoritmo, chave, buf);
    let criptografado = '';

    return new Promise(resolve => {
        cifra.write(JSON.stringify(token));
        cifra.on('readable', () => {
            let chunk;
            while (null !== (chunk = cifra.read())) {
                criptografado += chunk.toString('base64'); // converte para formato hex
            }
        });
        cifra.end(() => {
            resolve(criptografado);
        });
    });
};

#DECODE
const cripto = require('crypto'); // modulo crypto

/**
 * @description decriptografa o token
 * 
 * @param {string} token Token para acessar serviço do acessoseguro
 * 
 * @return Retorna o token (utf8) decriptografado
 */
module.exports = function decode(token) {
    const algoritmo = 'aes-192-cbc'; // crifra 
    const senha = 'alma$&*'; // chave
    const chave = cripto.scryptSync(senha, 'salt', 24); // chave + salta de 24bytes porque cifra tem 192 bits
    const buf = Buffer.alloc(16, 0); //vetor de iniciação
    const decipher = cripto.createDecipheriv(algoritmo, chave, buf); // começa decript

    let decrypted = '';
    let criptrografa = token;
    return new Promise((resolve) => {
        decipher.write(criptrografa, 'base64'); // resultado decrip
        decipher.on('readable', () => {
            while (null !== (chunk = decipher.read())) {
                decrypted += chunk.toString('utf8'); // converte para utf8
            }
        });
        decipher.end(() => {
            resolve(decrypted)
        });
    });
};
