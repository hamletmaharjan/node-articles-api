const express = require('express')
const router = express.Router()

const userController = require('../controllers/users');
const userArticleController = require('../controllers/userArticles');

router.get('/', userController.fetchAll);

router.get('/:id', userController.fetchById);

router.post('/', userController.create);

router.put('/:id', userController.update);

router.delete('/:id', userController.delete);

// router.use('/:id/articles', articleRoutes);

router.get('/:id/articles', userArticleController.fetchAll);

router.get('/:id/articles/:articleId', userArticleController.fetchById);

module.exports = router;