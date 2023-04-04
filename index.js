const express = require('express')
const mongoose = require('mongoose')
const app = express()
const hostname = '127.0.0.1', port = 3000;

/**
 * Ler JSON
 */
app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

/**
 * Rota da API
 */
const personRoutes = require('./routes/personRoutes')

app.use('/person', personRoutes)


/**
 * Rota inicial
 */
app.get ('/', function(req, res) {
    res.json({ message: 'Olá pessoar!'})
});


/**
 * Entregar uma porta
 */

const BD_PASSWORD = 'zPqgZBhqYrGjubSm';
const BD_USER = 'felipeteixeira';

mongoose
    .connect(`mongodb+srv://${BD_USER}:${BD_PASSWORD}@clusterapi.uwe76.mongodb.net/?retryWrites=true&w=majority`
    )
    .then(
        app.listen(port, hostname, ()=> {
            console.log(`Connected at MongoDB!`)
        })
    )
    .catch((error)=> console.log(error))