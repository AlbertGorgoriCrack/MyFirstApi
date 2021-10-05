const express = require('express');

const app = express();

const myController = require('./controllers/ModelHandler');

app.get('/', myController.helloWorld);
app.listen(process.env.PORT || 3000, function () {

})
