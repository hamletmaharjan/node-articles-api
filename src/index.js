const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
// const bodyParser = require('body-parser');


const routes = require('./routes.js');

const port = process.env.APP_PORT;

app.use(cors());
app.use(express.json());
app.use(express.static('uploads'));

// API Routes
app.use('/api', routes);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})