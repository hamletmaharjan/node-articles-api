const express = require('express')
const router = express.Router()

const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const articleRoutes = require('./routes/articleRoutes');

const verification = require('./middlewares/verification');


router.get('/', (req, res) => {
	// console.log(req.body);
  	res.send('Hello Worldkkk')
});
router.post('/s', (req, res) => {
  	res.send('Hello Worldkkk')
});


router.use('/auth', authRoutes);
router.use('/users', verification.verifyToken, userRoutes);
router.use('/articles', verification.verifyToken, articleRoutes);

module.exports = router;


