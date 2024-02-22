const Person = require("../models/person")

// Create and Save a Record of a Model
async function createPerson(req, res) {
  try {
    const { name, age, favoriteFoods } = req.body
    const person = new Person({ name, age, favoriteFoods })
    await person.save()
    res.status(201).json(person)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

// Create Many Records with model.create()
async function createManyPeople(req, res) {
  try {
    const arrayOfPeople = req.body
    const people = await Person.create(arrayOfPeople)
    res.status(201).json(people)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}
async function getAllPeople(req, res) {
  try {
    const people = await Person.find()
    res.status(201).json(people)
  } catch (error) {
    res.status(500).json({ error: err.message })
  }
}
// Use model.find() to Search Your Database
async function findPeopleByName(req, res) {
  try {
    const { name } = req.params
    const people = await Person.find({ name })
    res.status(200).json(people)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

// Use model.findOne() to Return a Single Matching Document
async function findPersonByFood(req, res) {
  try {
    const { food } = req.params
    const person = await Person.findOne({ favoriteFoods: food })
    res.status(200).json(person)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

// Use model.findById() to Search Your Database By _id
async function findPersonById(req, res) {
  try {
    const { personId } = req.params
    const person = await Person.findById(personId)
    res.status(200).json(person)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

// Perform Classic Updates by Running Find, Edit, then Save
async function updatePersonById(req, res) {
  try {
    const { personId } = req.params
    const updateData = req.body // Data to update from request body

    // Find the person by ID and update with the data from request body
    const updatedPerson = await Person.findByIdAndUpdate(personId, updateData)

    if (!updatedPerson) {
      return res.status(404).json({ error: "Person not found" })
    }

    res.status(200).json(updatedPerson)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

// Perform New Updates on a Document Using model.findOneAndUpdate()
async function updatePersonByName(req, res) {
  try {
    const { personName } = req.params
    const updateData = req.body // Data to update from request body

    // Find the person by name and update the age with the data from request body
    const updatedPerson = await Person.findOneAndUpdate(
      { name: personName },
      updateData
    )

    if (!updatedPerson) {
      return res.status(404).json({ error: "Person not found" })
    }

    res.status(200).json(updatedPerson)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

// Delete One Document Using model.findByIdAndRemove
async function deletePersonById(req, res) {
  try {
    const { personId } = req.params
    const deletedPerson = await Person.findByIdAndRemove(personId)
    res.status(200).json(deletedPerson)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

// MongoDB and Mongoose - Delete Many Documents with model.remove()
async function deletePeopleByName(req, res) {
  try {
    const { name } = req.params
    const result = await Person.remove({ name })
    res.status(200).json(result)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

module.exports = {
  createPerson,
  createManyPeople,
  getAllPeople,
  findPeopleByName,
  findPersonByFood,
  findPersonById,
  updatePersonById,
  updatePersonByName,
  deletePersonById,
  deletePeopleByName,
}
