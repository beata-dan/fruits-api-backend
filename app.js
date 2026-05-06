//How to run the program 
const express = require("express")
const app = express()
const fruits = require("./routes/fruits")

app.get("/", (req, res) => {
    res.send("Hello from the fruits api")
})

app.use(express.json()) //
app.use("/fruits", fruits) // .use allows to create a function that points all of the routes that 

module.exports = app