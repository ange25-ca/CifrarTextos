const express = require('express');
const router = express.Router();
const cifrarCesar = require('../controllers/cifrarCesar');

// Ruta para mostrar el formulario de registro
router.get('/', (req, res) => {
  // Renderiza la vista index sin texto cifrado
  res.render('index', { title: 'CODETEXT' });
});

// Ruta para manejar la solicitud POST desde el formulario
router.post('/cifrar', (req, res) => {
  // Obtener el texto ingresado desde el formulario
  const textoOriginal = req.body.textoOriginal;
  const SaltosCesar = req.body.saltosCesar;
  
  // Realizar el cifrado utilizando la función cifrarCesar
  const textoCifrado = cifrarCesar(textoOriginal, SaltosCesar);

  // Renderiza la vista index con el texto cifrado
  res.render('index', { title: 'CODETEXT', textoCifradoResultado: textoCifrado });
});


module.exports = router; 
// let textoCifrado; // Inicializamos la variable aquí

// router.post('/Cifrar', (req, res) => {
//     try {
//         // Validar la entrada
//         const opcion = req.body.opcion;
//         const saltosCesar = parseInt(req.body.SaltosCesar);
//         const textoOriginal = req.body.textoOriginal;

//         if (!opcion || isNaN(saltosCesar) || !textoOriginal) {
//             throw new Error('Datos de entrada inválidos');
//         }

//         if (opcion === 'Cesar') {
//             // Cifrar utilizando el cifrado César
//             textoCifrado = cifrarCesar(textoOriginal, saltosCesar);
//         } else {
//             throw new Error('Opción de cifrado no válida');
//         }

//         // Renderizar una vista con el texto cifrado
//         res.render('index', { textoCifradoResultado: textoCifrado });
//     } catch (error) {
//         // Manejar errores
//         console.error(error);
//         res.status(400).send('Error al procesar la solicitud');
//     }
// });
