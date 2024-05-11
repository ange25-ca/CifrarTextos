const express = require('express');

function cifrarCesar(texto, clave) 
{
    const codigos = [];
    const longitudAlfabeto = 27;  
    for (let i = 0; i < texto.length; i++) 
    {
      let codigoCifrado = texto.charCodeAt(i) + (clave % longitudAlfabeto);
      if (texto[i] >= 'a' && texto[i] <= 'z') {
        if (codigoCifrado > 122) {
          codigoCifrado -= 27;
        } else if (codigoCifrado < 97) {
          codigoCifrado += 27;
        }
      } else if (texto[i] >= 'A' && texto[i] <= 'Z') 
        {
        if (codigoCifrado > 90) {
          codigoCifrado -= 27;
        } else if (codigoCifrado < 65) 
        {
          codigoCifrado += 27;
        }
      }
      codigos.push(codigoCifrado);
    }
    return String.fromCharCode(...codigos);
}
 
module.exports = cifrarCesar;