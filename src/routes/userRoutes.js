const express = require('express')
const router = express.Router()
require('dotenv').config();

const userController = require('../controllers/users');

router.get('/', userController.fetchAll);

router.get('/:id', userController.fetchById);

router.post('/', userController.create);

router.put('/:id', userController.update);

router.delete('/:id', userController.delete);

module.exports = router;