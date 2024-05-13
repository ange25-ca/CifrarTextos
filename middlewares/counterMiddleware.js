const express = require('express');
const app = express();

// Obtiene la ip
let intentosCifrado = {};

// Middleware para el logueo del usuario
function intentoCifrado(req, res, next) {
// Verifica si el usuario está autenticado
  if (req.isAuthenticated()) {
    return next();
  }
  
  const ip = req.ip; //Toma la ip

  // Verifica si existe un contador de intentos para esta dirección IP
  if (intentosCifrado[ip] === undefined) {
    intentosCifrado[ip] = 0; //inica el contador de la ip en 1
  } else {
    // Si existe, incrementa el contador en 1
    intentosCifrado[ip]++;
  }

  // Verifica si se ha excedido el límite de intentos se le da al usuario 3 intentos
  const limiteIntentos = 3;
  if (intentosCifrado[ip] > limiteIntentos) {
    // si se pasa, le pide registarse
    return res.redirect('/registro');
  }
  // Si no se ha excedido el límite de intentos, pasa al siguiente middleware
  next();
}

module.exports = intentoCifrado;
