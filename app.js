const mysql = require('mysql')
const { promisify } = require('util')

// ******************** CHECK THIS *******************
// make sure the local mysql setup corresponds to this
// e.g. password should not typically be 'password' for
// the mysql server

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "reminder_app"
})

//  connection.query(' query passed here')  
// is the non-promisified form
// but we want to uses promises so we promisify it and 
// --> Unclear on why we need bind but its what previous code
// snippets suggest

const promisifiedQuery = promisify(connection.query).bind(connection)



// Methods for:
// runTotal, addUser
// readReminder, isUserRegistered, addReminder, editReminder, deleteReminder


// gets total number of users
const runTotal = async () =>{
    try{
        let total = await promisifiedQuery('SELECT count(*) as num FROM users');
        return(total)
    } catch (error) {
        console.log(error.sqlMessage);
    }
    connection.end()
}


// Read reminders
const readReminder = async (user_id) => {
    try {

        // user_id =3

        // This is used after adding, editing or deleting a reminder
        // Should read all reminders of the user from sql and 
        // send the entire list to client

        //Mysql Query
        const queryString = `SELECT reminders.id, reminder, date_added FROM reminders JOIN users ON users.id=reminders.user_id WHERE user_id=${user_id};`
        let data = await promisifiedQuery(queryString)

        console.log('read Reminder SQL query')
        console.log(data) // returns and array of [{ id: 6, reminder: 'blah reminders' },{ id: 44, reminder: 'hello world' },{ id: 55, reminder: 'walk dog' }]
        return(data)


    } catch (error) {
        console.log('readReminder error')
        console.log(error.sqlMessage)
    }

    // connection.end()
}

// TEST
// readReminder()

// Check if the user is actually siged-up

const isUserRegistered = async (usernameGiven) => {
    
    try {
        
        console.log(usernameGiven)
        
        //Mysql Query
        const queryString = `SELECT id FROM users WHERE username='${usernameGiven}';`
        
        let data = await promisifiedQuery(queryString)

        console.log(`is ${usernameGiven} Registered SQL query`)
        console.log(data[0])

        if(data[0] !== undefined){
            console.log(`user ${usernameGiven} given exists in database`)
            console.log(data[0].id)
            return data[0].id
        }
        else{
            console.log('user dosnt exist in database, client needs to ask to register')
            console.log(false)
            return false
        }
    


    } catch (error) {
        console.log('is User Registered error')
        console.log('The error message is '+error.sqlMessage)
    }

    // connection.end()
}



//test
// isUserRegistered()


// Add a reminder
const addReminder = async (addReminder) => {
    try {
        // addReminder = {"user_id":3, "reminder": "adding a test reminder ********", "date_added": "2019-10-04"}
        let user_id = addReminder.user_id
        let reminder = addReminder.reminder
        let date_added = addReminder.date_added
        // Mysql Query
        const queryString = `INSERT INTO reminders(user_id,reminder,date_added) VALUES ('${user_id}','${reminder}','${date_added}');`
        let data = await promisifiedQuery(queryString)

        console.log('addReminder SQL query')


    } catch (error) {
        console.log('addReminder error')
        console.log(error.sqlMessage)
    }

    // connection.end()
}



// addReminder()
// readReminder()


const addUser = async (addUser) => {
    try {
        // addUser = {username:'fgggggggggg', email:'pppppppppp@ee.com'}
        let newUserName = addUser.username
        let newEmail = addUser.email
         //Mysql Query
        const queryString = `INSERT INTO users (username, email) VALUES ('${newUserName}', '${newEmail}');`
        let data = await promisifiedQuery(queryString)

        // addUser:{"username" : "bob", "email" : "bob@hoskins.com" }
        // Sql should add new user and give back a user_id
        // server should send this user_id to client 
        
        console.log('Add user via SQL query')
        console.log(data.affectedRows)
        return(data.affectedRows)


    } catch (error) {
        console.log('Add user error')
        return(error.code)
    }

    // connection.end()
}

// test
// addUser()


const editReminder = async (editReminder) => {

    try {

        // let editReminder = {"user_id" : 3, "reminder_id": 10, "reminder":"Duncan is ace!", "date_added": "2019-01-01"}

        let user_id = editReminder.user_id
        let reminder_id = editReminder.reminder_id
        let reminder = editReminder.reminder
        let date_added = editReminder.date_added

        // When sql edits a reminder, given only small text database presently
        // server should just re-send the users entire reminder list when query completed
        // this is a 'readReminder' sql query

        // Mysql Query
        // const queryString = "UPDATE reminders set reminder= newReminder where id=? && user_id=?;"
        const queryString = `UPDATE reminders set reminder='${reminder}', date_added='${date_added}' where id=${reminder_id} && user_id=${user_id};`
        // const queryString = `UPDATE reminders set reminder='Hello a third time', date_added='2002-01-01' where id=17 && user_id=2;`
        let data = await promisifiedQuery(queryString)
        
        console.log(data)

        console.log('Edit reminder via SQL query')
        //return(data)


    } catch (error) {
        console.log('Edit reminder error')
        console.log(error.sqlMessage)
    }

    // connection.end()
}


// test
// editReminder()
// readReminder()


// Delete a reminder
const deleteReminder = async (deleteReminder) => {
    try {

        let user_id = deleteReminder.user_id
        let reminder_id = deleteReminder.reminder_id

        // deleteReminder:{"user_id" : 1234, "reminder_id": 70 }

        // When sql deletes reminder, given only small text database presently
        // server should just re-send the users entire reminder list when query completed
        // this is a 'readReminder' sql query

        // Mysql Query
        
        const queryString = `DELETE FROM reminders WHERE id=${reminder_id} && user_id=${user_id};`
        let data = await promisifiedQuery(queryString)
        
        console.log('delete reminder via SQL query')
        console.log(data)


    } catch (error) {
        console.log('delete reminder error')
        console.log(error.sqlMessage)
    }

    // connection.end()
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
    deleteReminder,
    runTotal
}




