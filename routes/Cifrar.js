
//10/05/2024
const express = require('express');
const router = express.Router();
const cifrarCesar = require('../controllers/cifrarCesar'); 
const regisMovimiento = require('../database/tables/historial');
const cifrarHexa = require('../controllers/cifrarHexa');
const cifarBase64 = require('../controllers/cifrarBase64');
const cifrarBinario = require('../controllers/cifrarBinario');

// Manejador de ruta para manejar la solicitud POST del formulario
router.post('/Cifrar', async (req, res) => {
    try {
        // Validar la entrada
        const opcion = req.body.opcion;
        const SaltosCesar = parseInt(req.body.saltosCesar);
        const textoOriginal = req.body.textoOriginal;

        if (!opcion || !textoOriginal) {
            throw new Error('Datos de entrada inválidos');
        }

        let textoCifrado;

        // Realizar cifrado según la opción seleccionada
        switch(opcion) {
            case 'Cesar':
                textoCifrado = cifrarCesar(textoOriginal, SaltosCesar);
                break;
            case 'Hexa':
                textoCifrado = cifrarHexa(textoOriginal);
                break;
            case 'Base64':
                textoCifrado = cifarBase64(textoOriginal);
                break;
            case 'cifrarBinario':
                textoCifrado = cifrarBinario(textoOriginal);
                break;
            default:
                throw new Error('Opción de cifrado no válida');
        }

        // Llamar a la función para registrar el movimiento
        const usuario_id = req.user ? req.user.id : null; // Obtener el ID del usuario si está autenticado
        await regisMovimiento(usuario_id, textoOriginal, opcion, textoCifrado);

        // Renderizar la vista con los resultados del cifrado
        //res.render('index', { textoOriginal: textoOriginal, textoCifradoResultado: textoCifrado });
    } catch (error) {
        // Manejar errores
        console.error(error);
        res.status(400).send('Error');
    }
});

module.exports = router;
