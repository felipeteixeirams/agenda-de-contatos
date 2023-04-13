const path = require('path')
const express = require('express')
const mongoose = require('mongoose')
const app = express()
require('dotenv').config()

const viewsPath = path.join(__dirname, './public')

app.set('views', viewsPath)
app.use(express.static(viewsPath))

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
const personRoutes = require('./src/routes/personRoutes')

app.use('/person', personRoutes)

/**
 * Rota inicial
*/
app.get('', async(req, res) => {
    try{
        res.render('index')
    }catch(error){
        res.status(500).json({error: error})
    }
})

/**
 * Entregar uma porta
 */

mongoose
    .connect(`mongodb+srv://${process.env.BD_USER}:${process.env.BD_PASSWORD}@clusterapi.uwe76.mongodb.net/?retryWrites=true&w=majority`
    )
    .then(
        app.listen(process.env.BD_PORT, process.env.BD_HOST, ()=> {
            console.log(`Connected: http://${process.env.BD_HOST}:${process.env.BD_PORT}`)
        })
    )
    .catch((error)=> console.log(error))