const path = require('path')
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const Person = require('./models/Person')
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
const personRoutes = require('./routes/personRoutes')

app.use('/person', personRoutes)

/**
 * Rota inicial
*/
app.get('', async(req, res) => {

    try{

        res.status(200).json({ message: "Welcome, this is API implements CRUD, record a object Json with properts 'name'(string), 'lastName'(string), 'cpf'(number), 'dateOfBirth'(data), 'email'(string) and 'phones'(array)", endpoint: "Use the /person endpoint with the 'get' verb to get all records or use the 'post' verb to register one new record, to obtain, update or delete a record use the id of the record in the /person/id endpoint.'"})

    }catch(error){
        res.status(500).json({ error: error })
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
            console.log(`Connected at MongoDB!`)
            console.log(`Access: http://${process.env.BD_HOST}:${process.env.BD_PORT}`)
        })
    )
    .catch((error)=> console.log(error))