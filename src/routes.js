const express = require('express')
const router = express.Router()

const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
// const articleRoutes = require('../routes/articleRoutes');


router.get('/', (req, res) => {
	// console.log(req.body);
  	res.send('Hello Worldkkk')
});
router.post('/s', (req, res) => {
  	res.send('Hello Worldkkk')
});

router.use('/users', userRoutes);
router.use('/auth', authRoutes);

module.exports = router;


