// require dependancies
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

// Pull in methods form app.js
const { readReminder, isUserRegistered, addReminder, addUser, editReminder, deleteReminder} = require('./app')

const app = express()

// define the path where the public files are. 
// This has to be an absolute path
app.use(express.static(path.join(__dirname, "public")))


// To allow HTTP POST requests in Expresss set up bodyParser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())




// GET   /readreminder
app.get("/readreminder", async (req,res) => {
    console.log(req.body)
    const data = await readReminder(req.body.user_id)

    console.log(data)
    res.send(data)

})


// POST   /register
app.post("/register", async (req,res) => {
    const data = await addUser(req.body.addUser)
    console.log(data)
    res.send(data)
})


// GET   /signin
app.get("/signin", async (req,res) => {

    const data = await isUserRegistered(req.body.isUserRegistered)
    console.log(data)  // returns id of user or false
    res.send(data)
})


// POST   /addreminders
app.post("/addreminders", async (req,res) => {

    const data = addReminder(req.body.addReminder)
    console.log(data)

    // We may want to send a part of the data, not all.
    res.send(data)
})



// DELETE  /deletereminders
app.delete("/deletereminders", async (req,res) => {

    const data = deleteReminder(req.body.deleteReminder)
    console.log(data)
    res.send(data)

})



// PUT  /editreminders
app.put("/editreminders", async (req,res) => {

    const data = editReminder(req.body.editReminder)
    console.log(data)
    res.send(data)

})








// setup basic URL where server exists
app.listen(3019, () => {
    console.log('listening to localhost:3019')
})