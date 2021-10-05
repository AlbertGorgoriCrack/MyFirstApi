const express = require('express');

require('dotenv')

const app = express();

const myController = require('./controllers/ModelHandler');

app.get('/', myController.helloWorld);
app.listen(process.env.PORT || 3000, function () {
console.log("PORT 3000 DISPONIBLE!")
})
