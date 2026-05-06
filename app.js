//How to run the program 
const express = require("express")
const app = express()
const fruits = require("./routes/fruits")
const cors = require("cors")

app.get("/", (req, res) => {
    res.send("Hello from the fruits api")
})

app.use(cors()) // To allow cross origin connections to happen, essentially making the app less secure, but allows to update data 
app.use(express.json()) //
app.use("/fruits", fruits) // .use allows to create a function that points all of the routes that 

module.exports = app