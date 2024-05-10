const express = require('express');
//const router = express.Router();
// function cifrarCesar(text, key) {
//     console.log("Texto Original: ", text);
//     console.log("Saltos Cesar:", key)
//     const alphabet = "abcdefghijklmnopqrstuvwxyz";
//     let textoCifrado = "";
//     for (let i = 0; i < text.length; i++) 
//       {
//         let char = text[i];
//         if (char >= 'a' && char <= 'z') {
//             let index = alphabet.indexOf(char);
//             // Aplicamos la clave de cifrado al índice
//             let encryptedIndex = (index + key) % alphabet.length;
//             // Convertimos el índice cifrado de nuevo a un carácter
//             textoCifrado += alphabet[encryptedIndex];
//         } else {
//             // Mantenemos los caracteres que no son letras sin cifrar
//             textoCifrado += char;
//         }
//     }
//     console.log("Texto cifrado:", textoCifrado);
//     return textoCifrado;
// }
// module.exports = cifrarCesar;


function cifrarCesar(texto, clave) {
    const codigos = [];
    const longitudAlfabeto = 26; // Longitud del alfabeto inglés
    for (let i = 0; i < texto.length; i++) {
      let codigoCifrado = texto.charCodeAt(i) + (clave % longitudAlfabeto);
      if (texto[i] >= 'a' && texto[i] <= 'z') {
        if (codigoCifrado > 122) {
          codigoCifrado -= 26;
        } else if (codigoCifrado < 97) {
          codigoCifrado += 26;
        }
      } else if (texto[i] >= 'A' && texto[i] <= 'Z') {
        if (codigoCifrado > 90) {
          codigoCifrado -= 26;
        } else if (codigoCifrado < 65) {
          codigoCifrado += 26;
        }
      }
      codigos.push(codigoCifrado);
    }
    return String.fromCharCode(...codigos);
 }
 
 // Ejemplo de uso:
 //console.log(cifrarCesar("abc", 10)); // Debería devolver "klm"
 
 
module.exports = cifrarCesar;