const mongoose = require('mongoose')

const Person = mongoose.model('Person', {
    name: String,
    lastName: String,
    cpf: Number,
    dateOfBirth: Date,
    email: String,
    phones: []
})

module.exports = Person;