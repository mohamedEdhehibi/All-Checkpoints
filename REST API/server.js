const express = require("express")
const mongoose = require("mongoose")
const User = require("./models/User")
require("dotenv").config()

const app = express()
const PORT = process.env.PORT || 3001

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err))

// Middleware
app.use(express.json())

// Routes

// GET all users
router.get("/", async (req, res) => {
  try {
    const users = await User.find()
    res.json(users)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// POST a new userr
router.post("/", async (req, res) => {
  try {
    const user = new User(req.body)
    await user.save()
    res.status(201).json(user)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
})

// PUT edit a user by ID
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params
    const user = await User.findByIdAndUpdate(id, req.body)
    res.json(user)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
})

// DELETE remove a user by ID
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params
    const user = await User.findByIdAndDelete(id)
    res.json(user)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
})

// Start server
app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
)
