const express = require('express');
const app = express();
// const bodyParser = require('body-parser');


const routes = require('./routes.js');

const port = 5000;

app.use(express.json());

// API Routes
app.use('/api', routes);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})