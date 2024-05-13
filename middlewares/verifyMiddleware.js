const express = require('express');
const router = express.Router();
const intentoCifrado = require('./counterMiddleware');
const  {authenticate} = require('./authMiddleware'); // Importa tu middleware de autenticación

// Middleware para verificar si el usuario está autenticado
function verificarAutenticacion(req, res, next) {
  if (req.isAuthenticated()) {
    // Si el usuario está autenticado, pasa al siguiente middleware
    return next();
  } else {
    // Si el usuario no está autenticado, aplica el middleware de limitación de intentos
    return intentoCifrado(req, res, next);
  }
}

module.exports = verificarAutenticacion;
