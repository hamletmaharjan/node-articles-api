const express = require('express')
const router = express.Router();

const upload = require('../utils/upload');


const articleController = require('../controllers/articles');

router.get('/', articleController.fetchAll);

router.get('/:id', articleController.fetchById);

router.post('/', upload.single('image'), articleController.create);

router.put('/:id', upload.single('image'), articleController.update);

router.delete('/:id', articleController.delete);

// router.use('/:id', )

module.exports = router;