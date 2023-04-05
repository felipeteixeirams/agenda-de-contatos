const mongoose = require('mongoose')

const Person = mongoose.model('Person', {
    name: {type: String, required: true},
    lastName: {type: String, required: true},
    cpf: {type: Number, unique: true, required: true},
    dateOfBirth: Date,
    email: {type: String, required: true},
    phones: []
})

module.exports = Person;