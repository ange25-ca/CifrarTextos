const express = require('express');
const router = express.Router();
const cifrarCesar = require('../controllers/cifrarCesar');

// router.post('/', async (req, res) => {
//   const { opcion, saltosCesar, textoOriginal } = req.body;

//   if (opcion === "Cesar") {
//     // Asegúrate de que saltosCesar no sea nulo, indefinido y sea convertible a un número entero
//     const parsedSaltosCesar = parseInt(saltosCesar);
//     // Llamar a la función cifrarCesar con los valores proporcionados y almacenar el resultado
//     const textoCifradoResultado = cifrarCesar(textoOriginal, parsedSaltosCesar);
//   } else if (opcion === "Hexa") {
//     // Lógica para cifrado en hexadecimal
//   } else if (opcion === "Base64") {
//     // Lógica para cifrado en Base64
//   } else if (opcion === "Binario") {
//     // Lógica para cifrado en binario
//   } else {
//     // Lógica para otra opción o manejar errores
//   }
// });

//       //res.render(textoCifradoResultado);
// });
// router.post('/', async (req, res) => {
//   const { opcion, saltosCesar, textoOriginal } = req.body;
//   let result = ''; // Declaración de la variable result

//   if (opcion === "Cesar") {
//        // Asegúrate de que saltosCesar no sea nulo, indefinido y que sea convertible a un número entero
//        const parsedSaltosCesar = parseInt(saltosCesar);
//        if (!isNaN(parsedSaltosCesar)) {
//          // Llamada a la función cifrarCesar con los valores proporcionados
//          result = cifrarCesar(textoOriginal, parsedSaltosCesar);}
//   } else if (opcion === "Hexa") {
//     // Lógica para cifrado en hexadecimal
//   } else if (opcion === "Base64") {
//     // Lógica para cifrado en Base64
//   } else if (opcion === "Binario") {
//     // Lógica para cifrado en binario
//   } else {
//     // Lógica para otra opción o manejar errores
//   }

//   // Renderizado de la vista y pasando el texto cifrado como datos
//   res.render('index', { textoCifradoResultado: result });
// });
// router.post('/', async (req, res) => {
//   const { opcion, saltosCesar, textoOriginal } = req.body;
//   let result = ''; // Declaración de la variable result

//   if (opcion === "Cesar") {
//        // Asegúrate de que saltosCesar no sea nulo, indefinido y que sea convertible a un número entero
//        const parsedSaltosCesar = parseInt(saltosCesar);
//        if (!isNaN(parsedSaltosCesar)) {
//          // Llamada a la función cifrarCesar con los valores proporcionados
//          result = cifrarCesar(textoOriginal, parsedSaltosCesar);}
//   } else if (opcion === "Hexa") {
//     // Lógica para cifrado en hexadecimal
//   } else if (opcion === "Base64") {
//     // Lógica para cifrado en Base64
//   } else if (opcion === "Binario") {
//     // Lógica para cifrado en binario
//   } else {
//     // Lógica para otra opción o manejar errores
//   }

//   // Renderizado de la vista y pasando el texto cifrado como datos
//   res.render('./index', { textoCifradoResultado: result});
// });

module.exports = router;