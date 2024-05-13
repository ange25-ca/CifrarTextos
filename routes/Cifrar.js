
//10/05/2024
const express = require('express');
const router = express.Router();
const cifrarCesar = require('../controllers/cifrarCesar'); 
const cifrarHexa = require('../controllers/cifrarHexa');
const cifarBase64 = require('../controllers/cifrarBase64');
const cifrarBinario = require('../controllers/cifrarBinario');

// Manejador de ruta para manejar la solicitud POST del formulario
router.post('/Cifrar',(req, res) => {
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
            throw new Error('Opción de cifrado no válida para cifrar en codigo cesar');
        }

        if (opcion === 'Hexa'){
            //Cifrar utilizando el cifrado Hexa
            textoCifrado = cifrarHexa(textoOriginal);
        } else {
            //Error por el cifrado del hexadecimal
            throw new Error('Opción de cifrado no válida para cifrar en hexadecimal');
        }

        if (opcion === 'Base64'){
            //Cifra usando base64
            textoCifrado = cifarBase64(textoOriginal);
        }else {
            //Error al cifrar en base64
            throw new Error('Opción de cifrado no válida para cifrar en Base64');
        }

        if(opcion === 'cifrarBinario'){
            //Cifra el texto por medio de cifrarBinario (es una función)
            textoCifrado = cifrarBinario(textoOriginal);
        }else {
            //Error al cifrar en Binario
            throw new Error('Opción decifrado no válida para cifrar en binario');
        } 

        res.render('index',{ textoOriginal: textoOriginal, textoCifradoResultado : textoCifrado}); 
    } catch (error) {
        // Manejar errores
        console.error(error);
        res.status(400).send('Error');
    }
});

module.exports = router;
