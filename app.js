const readReminders = async () => {
    try {


        // READ REMINDERS SQL QUERY
        console.log('read Reminder SQL query')


    } catch (error) {
        console.log('readReminder error')
        console.log(error.sqlMessage)
    }

    // connection.end()
}



const isUserRegistered = async () => {
    try {


        // CHECK IF USER EXISTS
        console.log('is User Registered SQL query')


    } catch (error) {
        console.log('is User Registered error')
        console.log(error.sqlMessage)
    }

    // connection.end()
}




const addReminder = async () => {
    try {


        // ADD REMINDER
        console.log('addReminder SQL query')


    } catch (error) {
        console.log('addReminder error')
        console.log(error.sqlMessage)
    }

    // connection.end()
}



const addUser = async () => {
    try {


        // ADD USER
        console.log('Add user via SQL query')


    } catch (error) {
        console.log('Add user error')
        console.log(error.sqlMessage)
    }

    // connection.end()
}



const editReminder = async () => {
    try {


        // EDIT REMINDER
        console.log('Edit reminder via SQL query')


    } catch (error) {
        console.log('Edit reminder error')
        console.log(error.sqlMessage)
    }

    // connection.end()
}



const deleteReminder = async () => {
    try {


        // EDIT REMINDER
        console.log('delete reminder via SQL query')


    } catch (error) {
        console.log('delete reminder error')
        console.log(error.sqlMessage)
    }

    // connection.end()
}



module.exports = {

    readReminders,
    isUserRegistered,
    addReminder,
    addUser,
    editReminder,
    deleteReminder

}




