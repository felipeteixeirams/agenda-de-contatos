const router = require('express').Router()
const Person = require('../models/Person');

router.post('/', async (req, res) => {

    //req.body

    //{name: 'Name', lastName: 'Lastname', cpf: 03403403434, dateOfBirth, email, phones}
    const { name, lastName, cpf, dateOfBirth, email, phones} = req.body;

    if(!name){
        res.status(422).json({ error: `Name is required!`});
    }

    const person = {
        name,
        lastName,
        cpf,
        dateOfBirth,
        email,
        phones
    }

    try{
        //Create data
        await Person.create(person)

        res.status(201).json({message: 'Peaple successfully entered the system!'})

    }catch(error)
    {
        res.status(500).json({error: error})
    }

})

module.exports = router