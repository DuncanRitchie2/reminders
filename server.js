// require dependancies
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

// Pull in methods form app.js
const { readReminder, isUserRegistered, addReminder, addUser, editReminder, deleteReminder,runTotal} = require('./app')

const app = express()

// define the path where the public files are. 
// This has to be an absolute path
app.use(express.static(path.join(__dirname, "public")))


// To allow HTTP POST requests in Expresss set up bodyParser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get("/total", async (req, res) =>{
    const total = await runTotal();

    res.send({
        total:total[0].num
    });
});





// Setup RESTful api  GET, POST PUT and DELETE for
// each type of fetch api is given its own endpoint
// it then takes in the request, selects whats needed
// from the request data and via a method
// (held in app.js module), gives the responce back


// GET   /readreminder
app.get("/readreminder", async (req,res) => {
    console.log(req.body)
    const data = await readReminder(req.query.user_id)
    console.log(data)
    res.send(data)  // returns an array of [{reminder: 'aaaaa'},{reminder:'bbbbbb'},{reminder:'ccccccc'}]

})


// POST   /register
app.post("/register", async (req,res) => {
    const data = await addUser(req.body.addUser)   // addUser = {username:'fffffffff', email:'xxxxx@qqqq.com'}
    console.log(data) // 1 if row added
    res.send({message: data})
})


// GET   /signin
app.get("/signin", async (req,res) => {

    const data = await isUserRegistered(req.body.isUserRegistered)
    console.log(data)  
    res.send(data)  // returns id of user or false
})


// POST   /addreminders
app.post("/addreminders", async (req,res) => {

    const data = addReminder(req.body.addReminder)
    console.log(data)

    // We may want to send a part of the data, not all.
    res.send({message: 'Added reminders ok'})
})



// DELETE  /deletereminders
app.delete("/deletereminders", async (req,res) => {

    const data = deleteReminder(req.body.deleteReminder)
    console.log(data)
    res.send({message: 'Deleted reminders ok'})

})



// PUT  /editreminders
app.put("/editreminders", async (req,res) => {

    const data = editReminder(req.body.editReminder)
    console.log(data)
    res.send({message: 'Edited reminder ok'})

})








// setup basic URL where server exists
app.listen(3019, () => {
    console.log('listening to localhost:3019')
})