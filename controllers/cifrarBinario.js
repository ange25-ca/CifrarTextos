
function cifrarBinario(text) {
    let binario = '';
    for (let i = 0; i < text.length; i++) {
        // Obtiene el código ASCII de cada caracter
        let codigo = text.charCodeAt(i);
        // Convierte el código ASCII en binario y completa con ceros a la izquierda si es necesario
        let binarioCaracter = codigo.toString(2).padStart(8, '0');
        // Agrega el binario del caracter a la cadena binaria completa
        binario += binarioCaracter;
    }
    return binario;
}

module.exports = cifrarBinario;