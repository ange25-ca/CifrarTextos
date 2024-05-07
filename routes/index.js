const express = require('express');
const router = express.Router();

// Ruta para mostrar el formulario de registro
router.get('/', (req, res) => {
  res.render('index', { title: 'CODETEXT' });
});

module.exports = router;
