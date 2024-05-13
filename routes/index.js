const express = require('express');
const router = express.Router();
const cifrarCesar = require('../controllers/cifrarCesar');
const cifrarHexa = require('../controllers/cifrarHexa');
const cifarBase64 = require('../controllers/cifrarBase64');
const cifrarBinario = require('../controllers/cifrarBinario');
const intentoCifrado = require('../middlewares/counterMiddleware');
const verificarAutenticacion = require('../middlewares/verifyMiddleware');

// Ruta para mostrar el formulario de registro
router.get('/', (req, res) => {
  // Renderiza la vista index sin el texto cifrado
  res.render('index', { title: 'CODETEXT' });
});


// Ruta para manejar la solicitud POST desde el formulario
router.post('/cifrar',verificarAutenticacion, intentoCifrado, (req, res) => {
  // Obtener el texto ingresado desde el formulario
  const textoOriginal = req.body.textoOriginal;
  const opcion = req.body.opcion;

  let textoCifrado;
  // Ejecutar la función correspondiente según la opción seleccionada
  switch(opcion) {
    case 'Cesar':
      const saltosCesar = req.body.saltosCesar;
      textoCifrado = cifrarCesar(textoOriginal, saltosCesar);
      break;
    case 'Hexa':
      textoCifrado = cifrarHexa(textoOriginal);
      break;
    case 'Base64':
      textoCifrado = cifarBase64(textoOriginal);
      break;
    case 'Binario':
      textoCifrado = cifrarBinario(textoOriginal);
      break;
    // Agrega casos para otras opciones si las tienes
    default:
      textoCifrado = 'Opción no válida para cifrar';
  }

  // Renderiza la vista index con el texto cifrado
  res.render('index', { title: 'CODETEXT', textoOriginal: textoOriginal, textoCifradoResultado: textoCifrado });
});

module.exports = router; 