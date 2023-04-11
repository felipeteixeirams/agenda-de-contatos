const router = require('express').Router()
const Person = require('../models/Person');


// Post - Inserting a new peaple
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

        res.status(201).json({message: 'Person successfully registered!'})

    }catch(error)
    {
        res.status(500).json({error: error})
    }

})

// Read - Reading all records
router.get('/', async(req, res) => {

    try{
        const peaple = await Person.find()

        res.status(200).json(peaple)
    }catch(error){
        res.status(500).json({ error: error })
    }
})

router.get('/:id', async (req, res) => {

    //extratc data of request, with url = req.params
    const id = req.params.id

    try{
        const person = await Person.findOne({_id: id})

        res.status(200).json(person)
    }catch(error){
        res.status(500).json({error: error})
    }
})

//Update - Update the data (PUT or PATCH)
router.patch('/:id', async (req, res) => {
    const id = req.params.id

    const { name, lastName, cpf, dateOfBirth, email, phones } = req.body

    const person = {
        name,
        lastName,
        cpf,
        dateOfBirth,
        email,
        phones
    }

    try{

        const updatedPerson = await Person.updateOne({ _id: id }, person)

        if(updatedPerson.matchedCount === 0) {
            res.status(422).json({ message: 'Person not found!' })
        }

        res.status(200).json(person)
    }catch(error){
        res.status(500).json({ error: error })
    }
})

//Delete - remove a person
router.delete('/:id', async (req, res) =>{
    const id = req.params.id

    const person = await Person.findOne({ _id: id })

    if(!person){
        res.status(422).json({ message: 'Person not found!' })
        return
    }

    try {
        await Person.deleteOne({ _id: id })

        res.status(200).json({ message: 'Person successfully excluded!'})
    }catch(error){
        res.status(500).json({ error: error })
    }
})

module.exports = router