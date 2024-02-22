const express = require("express")
const app = express()
const PORT = 3000

app.set("view engine", "ejs")
app.use(express.static("public"))
app.use(checkWorkingHours)

app.get("/", (req, res) => {
  res.render("home")
})

app.get("/services", (req, res) => {
  res.render("services")
})

app.get("/contact", (req, res) => {
  res.render("contact")
})

function checkWorkingHours(req, res, next) {
  const datenow = new Date()
  const dayOfWeek = datenow.getDay()
  const hourOfDay = datenow.getHours()

  if (dayOfWeek >= 1 && dayOfWeek <= 5 && hourOfDay >= 9 && hourOfDay < 17) {
    next()
  } else {
    res.send(
      "The web application is only available from Monday to Friday,  9h to 17h."
    )
  }
}

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
