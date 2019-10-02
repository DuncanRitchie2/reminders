// require dependancies
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

// Pull in methods form app.js
const { readReminders, isUserRegistered, addReminder, addUser, editReminder, deleteReminder} = require('.app')

const app = express()

// define the path where the public files are. 
// This has to be an absolute path
app.use(express.static(path.join(__dirname, "public")))


// To allow HTTP POST requests in Expresss set up bodyParser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())




// GET   /getreminder
app.get("/getreminder", async (req,res) => {

    //readReminder(req.body.readReminder)
    console.log(req.body)
    res.send("Read reminder GET request")

})


// POST   /register
app.post("/register", async (req,res) => {

    //addUser(req.body.addUser)
    console.log(req.body)
    res.send("add user POST request")

})


// GET   /signin
app.get("/signin", async (req,res) => {

    //isUserRegistered(req.body.isUserRegistered)
    console.log(req.body)
    res.send("Is user registered GET request")
})


// POST   /addreminders
app.post("/addreminders", async (req,res) => {

    //addReminder(req.body.addReminder)
    console.log(req.body)
    res.send("Add reminder POST request")
})



// DELETE  /deletereminders
app.delete("/deletereminders", async (req,res) => {

    // deleteReminder(req.body.reminderToDelete)
    console.log(req.body)
    res.send("DELETE reminder DELETE request")

})



// PUT  /editreminders
app.put("/editreminders", async (req,res) => {

    // editReminder(req.body.reminderToDelete)
    console.log(req.body)
    res.send("Edit reminder PUT request")

})








// setup basic URL where server exists
app.listen(3019, () => {
    console.log('listening to localhost:3019')
})