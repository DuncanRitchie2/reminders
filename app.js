const mysql = require('mysql')
const { promisify } = require('util')



const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password1",
    database: "reminder_app"
})

const promisifiedQuery = promisify(connection.query).bind(connection)



// Read reminders
const readReminder = async () => {
    try {

        // This is used after adding, editing or deleting a reminder
        // Should read all reminders of the user from sql and 
        // send the entire list to client

        //Mysql Query
        const queryString = "SELECT reminder FROM users JOIN reminders ON users.id=reminders.user_id WHERE user_id=1;"
        let data = await promisifiedQuery(queryString)

        console.log('read Reminder SQL query')
        console.log(data)
        return(data)


    } catch (error) {
        console.log('readReminder error')
        console.log(error.sqlMessage)
    }

    connection.end()
}

// TEST
// readReminder()

// Check if the user is actually siged-up
const isUserRegistered = async (data) => {
    try {

        // isUserRegistered:{"username" : "foo bar name"}
        // If the user exists; send eg {"user_id":1234} to client
        // Else user needs to sign on; send eg {"user_id":null} to client

        console.log(data)

        //Mysql Query
        const queryString = "SELECT * FROM users;"  //TEMP !!
        let data = await promisifiedQuery(queryString)

        console.log('is User Registered SQL query')
        return(data)


    } catch (error) {
        console.log('is User Registered error')
        console.log('The error message is '+error.sqlMessage)
    }

    connection.end()
}



//test
// isUserRegistered({"username" : "foo bar name"})

// Add a reminder
const addReminder = async () => {
    try {
        // Mysql Query
        // const queryString = "INSERT INTO reminders(user_id,reminder) VALUES (user_id,newreminder);"
        const queryString = "INSERT INTO reminders(user_id,reminder) VALUES (2,'test test test test test test');"
        let data = await promisifiedQuery(queryString)

        console.log('addReminder SQL query')
        return(data)


    } catch (error) {
        console.log('addReminder error')
        console.log(error.sqlMessage)
    }

    connection.end()
}



// addReminder()
// readReminder()


const addUser = async () => {
    try {


        // addUser:{"username" : "bob", "email" : "bob@hoskins.com" }
        // Sql should add new user and give back a user_id
        // server should send this user_id to client eg. {"user_id" :1234}
        
        let data = {"user_id" :1234}
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


        // editReminder:{"user_id" : 1234, "reminder_id": 30, "reminder":"this is new edited reminder"}
        // When sql edits a reminder, given only small text database presently
        // server should just re-send the users entire reminder list when query completed
        // this is a 'readReminder' sql query

        // Mysql Query
        // const queryString = "UPDATE reminders set reminder= newReminder where id=? && user_id=?;"
        const queryString = "UPDATE reminders set reminder='The rain in Spain' where id=1 && user_id=1;"
        let data = await promisifiedQuery(queryString)
        
        console.log(data)

        console.log('Edit reminder via SQL query')
        //return(data)


    } catch (error) {
        console.log('Edit reminder error')
        console.log(error.sqlMessage)
    }

    connection.end()
}


// test
// editReminder()
// readReminder()


// Delete a reminder
const deleteReminder = async () => {
    try {


        // deleteReminder:{"user_id" : 1234, "reminder_id": 70 }
        // When sql deletes reminder, given only small text database presently
        // server should just re-send the users entire reminder list when query completed
        // this is a 'readReminder' sql query

        // Mysql Query
        // const queryString = "DELETE FROM reminders WHERE id=? && user_id=?;"
        const queryString = "DELETE FROM reminders WHERE id=1 && user_id=1;"
        let data = await promisifiedQuery(queryString)
        

        console.log('delete reminder via SQL query')

        console.log(data)
        return(data)


    } catch (error) {
        console.log('delete reminder error')
        console.log(error.sqlMessage)
    }

    connection.end()
}


// // test
// readReminder()
// deleteReminder()
// readReminder()


module.exports = {

    readReminder,
    isUserRegistered,
    addReminder,
    addUser,
    editReminder,
    deleteReminder

}




