const mongoose = require('mongoose')

const Addreess = mongoose.model('Addreess', {
    cep: Number,
    street: String,
    number: Number,
    city: String,
    state: String
})

module.exports = Addreess;