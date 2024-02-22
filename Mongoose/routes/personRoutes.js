const express = require("express")
const router = express.Router()
const {
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
} = require("../controllers/personController")

router.post("/", createPerson)
router.post("/many", createManyPeople)
router.get("/", getAllPeople)
router.get("/name/:name", findPeopleByName)
router.get("/food/:food", findPersonByFood)
router.get("/:personId", findPersonById)
router.put("/:personId", updatePersonById)
router.put("/name/:personName", updatePersonByName)
router.delete("/:personId", deletePersonById)
router.delete("/name/:name", deletePeopleByName)

module.exports = router
