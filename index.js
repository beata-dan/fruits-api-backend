// Run the program 
const app = require("./app")
const port = 3000

app.listen(port, () => {
    console.log(`Simple api listening on port ${port}`)
})



// This line of code and the created files replace the following:

// const express = require("express")
// const app = express() // This uses a constructor to create an express app 
// const port = 3000

// app.get('/', (req, res) => {
//     res.send({"Welcome": "Hello World"})
// })

// app.get("/query", (req, res) => {
//     res.send(req.query)
// })

// app.get("/param/:id", (req, res) => {
//     res.send(req.params)
// })

