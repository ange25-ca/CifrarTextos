

// const express = require('express');
// const router = express.Router();
  
// //Función para cifrar el texto utilizando el cifrado César
// function cifrarCesar(text, key) {
//   const codes = [];
//   for (let i = 0; i < text.length; i++) {
//     // Se obtiene el código ASCII del carácter y se le suma la clave de cifrado
//     codes.push((text.charCodeAt(i) + key));
//   }
//   // Se convierten los códigos ASCII cifrados a caracteres y se retorna el texto cifrado
//   let textoCifradoResultado = String.fromCharCode(...codes);
//   return textoCifradoResultado;
// }


// module.exports = router;


//************************************************* */
//Cifrado de texto en cesar
//Text = texto plano ingresado
//Key = son aquellos saltos que dara
/*function cifrarCesar(text, key){
    //Se obtiene la información para almacenarla en un array
    const codes = [];
    for(let i = 0; i <= text.length; i++){
        //Permite obtener el codigo Ascii
        codes.push((text.charCodeAt(i)+ key));
    }
    //Lo almacena en la varible codes
    let textCifrado = String.fromCharCode(...codes);
    return textCifrado;
}*/



//   function cifrarCesar(text, key) {
//     const codes = [];
//     for (let i = 0; i < text.length; i++) {
//       // Se obtiene el código ASCII del carácter y se le suma la clave de cifrado
//       let code = text.charCodeAt(i) + key;
//       // Ajustar el código ASCII para que esté dentro del rango válido
//       code = (code - 32) % 95 + 32; // 32 es el primer caracter imprimible y 95 es el número de caracteres imprimibles ASCII
//       codes.push(code);
//     }
//     // Se convierten los códigos ASCII cifrados a caracteres y se retorna el texto cifrado
//     let result = String.fromCharCode(...codes);
//     return result;
// }