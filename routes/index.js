const express = require('express');
const router = express.Router();
const cifrarCesar = require('../controllers/cifrarCesar');

// Ruta para mostrar el formulario de registro
router.get('/', (req, res,) => {
  res.render('index', { title: 'CODETEXT' });
});

// Ruta para manejar la solicitud POST desde el formulario
/*router.post('/cifrar', (req, res) => {
  // Obtener el texto ingresado desde el formulario
  const textoIngresado = req.body.textoOriginal;
  
  // Realizar el cifrado utilizando la función cifrarCesar
  const textoCifrado = cifrarCesar(textoIngresado, claveDeCifrado); // Ajusta la clave según sea necesario

  // Enviar el texto cifrado como respuesta al cliente
  res.render('index', { textoCifrado: textoCifrado });
});*/

module.exports = router;

