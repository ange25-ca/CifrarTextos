//controllerr/cifrarBase64.js 


function cifarBase64(text) {
    // Codifica la cadena de entrada en Base64
    return Buffer.from(text).toString('base64');
}

module.exports = cifarBase64