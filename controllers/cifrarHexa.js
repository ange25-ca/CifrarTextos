const express = require('express');

// Función para convertir texto a hexadecimal
function cifarHexa(text) {
    let hexadecimalString = "";
    for (let i = 0; i < text.length; i++) {
        let hexChar = text[i].charCodeAt(0).toString(16);
        hexadecimalString += hexChar;
    }
    return hexadecimalString;
}

module.exports = cifarHexa;