const CryptoJS = require("crypto-js");

const chaveSecreta = "minhaChaveSecreta3003";

function criptografar(texto) {
    return CryptoJS.AES.encrypt(texto, chaveSecreta).toString();
}

function descriptografar(textoCifrado) {
    const bytes = CryptoJS.AES.decrypt(textoCifrado, chaveSecreta);
    return bytes.toString(CryptoJS.enc.Utf8);
}

const mensagemOriginal = "Julia Mistieri 3003";

const mensagemCifrada = criptografar(mensagemOriginal);
console.log("Mensagem Criptografada: ", mensagemCifrada);

const mensagemDescriptografada = descriptografar(mensagemCifrada);
console.log("Mensagem Descriptografada: ", mensagemDescriptografada);