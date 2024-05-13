const express = require('express');
const router = express.Router();
const regisMovimiento = require('../database/tables/historial'); // Importa la función para registrar movimientos
const cifrarCesar = require('../controllers/cifrarCesar'); 
const cifrarHexa = require('../controllers/cifrarHexa');
const cifarBase64 = require('../controllers/cifrarBase64');
const cifrarBinario = require('../controllers/cifrarBinario');
const verificarAutenticacion = require('../middlewares/verifyMiddleware'); // Importa el middleware de verificación de autenticación

// Ruta para mostrar el formulario de registro
router.get('/', (req, res) => {
  // Renderiza la vista index sin el texto cifrado
  res.render('index', { title: 'CODETEXT' });
});

// Ruta para manejar la solicitud POST desde el formulario
router.post('/cifrar', verificarAutenticacion, async (req, res) => {
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

  // Llama a la función para registrar el movimiento
  try {
    const usuario_id = req.user ? req.user.id : null; // Obtener el ID del usuario si está autenticado
    await regisMovimiento(usuario_id, textoOriginal, opcion, textoCifrado);
    console.log('Movimiento registrado correctamente');
  } catch (error) {
    console.error('Error al registrar movimiento', error);
  }

  // Renderiza la vista index con el texto cifrado
  res.render('index', { title: 'CODETEXT', textoOriginal: textoOriginal, textoCifradoResultado: textoCifrado });
});

module.exports = router;
