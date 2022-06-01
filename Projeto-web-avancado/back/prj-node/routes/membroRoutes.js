const membroController = require('../controllers/membroController');
const express = require('express');
// // objeto responsável para fazer as rotas
const router = express.Router();

// // Fazendo as rotas
router.post('/', membroController.salvar); //se ele receber um post, vai para a raiz e usar no postControlle a função salvar
router.get('/', membroController.listar);
// router.get('/:codigo', postController.buscarPorCodigo);
// router.put('/:codigo', postController.atualizar);
// router.delete('/:codigo', postController.apagar);

module.exports = router;