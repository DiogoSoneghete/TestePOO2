const express = require('express');
const router = express.Router();
const usuarioService = require('../services/UsuarioService');

router.get('/', usuarioService.getAllUsuarios);
router.get('/:id', usuarioService.getUsuarioById);
router.post('/', usuarioService.createUsuario);
router.put('/:id', usuarioService.updateUsuario);
router.delete('/:id', usuarioService.deleteUsuario);

module.exports = router;
