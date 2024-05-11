
//10/05/2024
const express = require('express');
const router = express.Router();
const cifrarCesar = require('../controllers/cifrarCesar'); 
const cifrarHexa = require('../controllers/cifrarHexa');

// Manejador de ruta para manejar la solicitud POST del formulario
router.post('/Cifrar', (req, res) => {
    try {
        // Validar la entrada
        const opcion = req.body.opcion;
        const SaltosCesar = parseInt(req.body.saltosCesar);
        const textoOriginal = req.body.textoOriginal;

        if (!opcion || isNaN(saltosCesar) || !textoOriginal) {
            throw new Error('Datos de entrada inválidos');
        }

        let textoCifrado;

        if (opcion === 'Cesar') {
            // Cifrar utilizando el cifrado César
            textoCifrado = cifrarCesar(textoOriginal, SaltosCesar);
        } else {
            // Implementar otras opciones de cifrado aquí si es necesario
            throw new Error('Opción de cifrado no válida');
        }
        // Renderizar una vista con el texto cifrado
        res.render('index', { textoOriginal: textoOriginal, textoCifradoResultado: textoCifrado }); // Aquí se cambia a textoCifradoResultado

        if (opcion === 'Hexa'){
            //Cifrar utilizando el cifrado Hexa
            textoCifrado = cifrarHexa(textoOriginal);
        } else {
            //Error por el cifrado del cesár
            throw new Error('Opción de cifrado no válida');
        }
        res.render('index',{ textoOriginal: textoOriginal, textoCifradoResultado : textoCifrado}); 


    } catch (error) {
        // Manejar errores
        console.error(error);
        res.status(400).send('Error');
    }
});

module.exports = router;
