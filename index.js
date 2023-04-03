const express = require('express')
const localhost = '127.0.0.1', port = 3000;
const app = express()


// Ler JSON
app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

// Rota inicial

app.get ('/', function(req, res) {
    res.json({ message: 'Olá pessoar!'})
});


// Entregar uma porta
app.listen(port)