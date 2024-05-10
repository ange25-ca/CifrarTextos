const express = require('express');
//const router = express.Router();
function cifrarCesar(text, key) {
    console.log("Texto Original: ", text);
    const codes = [];
    const alphabetLength = 26; // Longitud del alfabeto en inglés
    for (let i = 0; i < text.length; i++) {
        // Se obtiene el código ASCII del carácter antes del cifrado
        let code = text.charCodeAt(i);
        console.log("Código ASCII del carácter antes del cifrado:", code);
        
        // Se aplica la clave de cifrado
        if (code >= 97 && code <= 122) { // Letras minúsculas
            code = ((code - 97 + key) % alphabetLength) + 97;
        }
        // Se imprime el código ASCII del carácter después del cifrado
        console.log("Código ASCII del carácter después del cifrado:", code);
        codes.push(code);
    }
    // Se convierten los códigos ASCII cifrados a caracteres y se retorna el texto cifrado
    let textoCifradoResultado = String.fromCharCode(...codes);
    console.log("Texto cifrado:", textoCifradoResultado); 
    return textoCifradoResultado;
}

module.exports = cifrarCesar;


