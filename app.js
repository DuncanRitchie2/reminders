const mysql = require('mysql')
const { promisify } = require('util')



// const connection = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "password1",
//     database: "joinus"
// })

// const promisifiedQuery = promisify(connection.query).bind(connection)



// Read reminders
const readReminders = async () => {
    try {

        // This is used when adding, editing or deleting a reminder
        // Should read all reminders od the user from sql and 
        // send the entire list to client
        // eg 
        // readReminders:{ "user_id":1234,
        // "reminder_id":30, "reminder":"foo bar foo",
        // "reminder_id":45, "reminder":"boil eggs",
        // "reminder_id":65, "reminder":"dog for walk"}
        

        // Mysql Query
        //const queryString = "SELECT * FROM users"
        //let data = await promisifiedQuery(queryString)


        let data = { "user_id":1234,
         "reminder_id":30, "reminder":"foo bar foo",
         "reminder_id":45, "reminder":"boil eggs",
         "reminder_id":65, "reminder":"dog for walk"}

         console.log('read Reminder SQL query')

        return(data)

        


    } catch (error) {
        console.log('readReminder error')
        console.log(error.sqlMessage)
    }

    connection.end()
}




// Check if the user is actually siged-up
const isUserRegistered = async () => {
    try {

        // isUserRegistered:{"username" : "foo bar name"}
        // If the user exists; send eg {"user_id":1234} to client
        // Else user needs to sign on; send eg {"user_id":null} to client


        let data = {"username" : "foo bar name"}

        //let data = {"user_id":null}


        console.log('is User Registered SQL query')
        return(data)


    } catch (error) {
        console.log('is User Registered error')
        console.log(error.sqlMessage)
    }

    connection.end()
}



// Add a reminder
const addReminder = async () => {
    try {


        let data = {"user_id" : 1234, "id_reminder": 70, "reminder":"reminder text here"}
        console.log('addReminder SQL query')
        return(data)


    } catch (error) {
        console.log('addReminder error')
        console.log(error.sqlMessage)
    }

    connection.end()
}



const addUser = async () => {
    try {


        // addUser:{"username" : "bob", "email" : "bob@hoskins.com" }
        // Sql should add new user and give back a user_id
        // server should send this user_id to client eg. {"user_id" :1234}
        let data = {"username" : "bob", "email" : "bob@hoskins.com" }
        console.log('Add user via SQL query')
        return(data)


    } catch (error) {
        console.log('Add user error')
        console.log(error.sqlMessage)
    }

    connection.end()
}



const editReminder = async () => {
    try {


        // editeReminder:{"user_id" : 1234, "reminder_id": 30, "reminder":"this is new edited reminder"}
        // When sql edits a reminder, given only small text database presently
        // server should just re-send the users entire reminder list when query completed
        // this is a 'readReminder' sql query

        let data = {"user_id" : 1234, "reminder_id": 30, "reminder":"this is new edited reminder"}
        console.log('Edit reminder via SQL query')
        return(data)


    } catch (error) {
        console.log('Edit reminder error')
        console.log(error.sqlMessage)
    }

    connection.end()
}


// Delete a reminder
const deleteReminder = async () => {
    try {


        // deleteReminder:{"user_id" : 1234, "reminder_id": 70 }
        // When sql deletes reminder, given only small text database presently
        // server should just re-send the users entire reminder list when query completed
        // this is a 'readReminder' sql query

        let data = {"user_id" : 1234, "reminder_id": 70 }
        console.log('delete reminder via SQL query')
        return(data)


    } catch (error) {
        console.log('delete reminder error')
        console.log(error.sqlMessage)
    }

    connection.end()
}



module.exports = {

    readReminders,
    isUserRegistered,
    addReminder,
    addUser,
    editReminder,
    deleteReminder

}




