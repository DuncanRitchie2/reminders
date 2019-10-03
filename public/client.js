console.log("Hello from client.js!")


// client side


// ASSIGN VARIABLES TO DOM ELEMENTS

const display = document.getElementById('display')
const register= document.getElementById('register')
const signInButton1 = document.getElementById('in')
const signUpButton1 = document.getElementById('up')
const signInButton2 = document.getElementById('in1')
const signUpButton2 = document.getElementById('up1')
const addReminderButton = document.getElementById('new-reminder-submit')
const deleteReminderButtons = document.getElementsByClassName('reminder-delete-button')
const numOfUser = document.getElementById('num')
const editreminder = document.getElementById('editreminder')
const reminderInputs = document.getElementsByClassName('reminder-input')

let user_id = 3;



// CLIENT-SIDE FUNCTIONS

const getTotal = async () => {
    let data = await fetch("http://localhost:3019/total");
    let response = await data.json();
    numOfUser.textContent = response.total
}
getTotal();

const signIn = async () => {
    let response = await fetch(`/signin?username=${username}`)
    let data = await response.json()
    console.log(`sign in username ${data}`)
    // should get a user_id back
}

const readReminders = async () => {
    let response = await fetch(`/readreminder?user_id=${user_id}`)
    let data = await response.json()
    // reload local reminders list
    console.log(`returned data from usr id 3 , readreminder is  ${data}`)
}


const addReminder = async () => {
    console.log("Adding a reminder!")
    let response = await fetch("/addreminders",{
        method:"POST",
        headers: { "content-type" : "application/json" },
        body: JSON.stringify({
            
            addReminder: {"user_id":1234, "reminder": "adding a test reminder"}
        })
    })

    let result = await response.json()
    console.log(result)
}

const editReminder = async () => {
    console.log("Editing a reminder!")
    let response = await fetch("/editreminders", {
        method:"PUT",
        headers: { "content-type" : "application/json" },
        body: JSON.stringify({
            editReminder: {"user_id" : 1234, "id_reminder": 70, "reminder":"the old reminder is changed to this reminder"}
        })
    })

    let result = await response.json()
    console.table(result)
}

const deleteReminder = async () => {
    console.log("Deleting a reminder!")
    let response = await fetch("/deletereminders", {
        method:"DELETE",
        headers: { "content-type" : "application/json" },
        body: JSON.stringify({
            deleteReminder: {"user_id" : 1234, "reminder_id": 70 }
        })
    })

    let result = await response.json()
    console.table(result)
}


// ADD EVENT LISTENERS

if (signInButton1) {
    signInButton1.addEventListener('click', signIn)
}

if (signInButton2) {
    signInButton2.addEventListener('click', signIn)
}

if (reminderInputs[0]) {
    for (let i = 0; i < reminderInputs.length; i++) {
        reminderInputs[i].addEventListener('click',editReminder)
    }
}

addReminderButton.addEventListener('click', addReminder)


for (let i = 0; i < deleteReminderButtons.length; i++) {
    deleteReminderButtons[i].addEventListener('click', deleteReminder)
}




if (register) {
    register.addEventListener('click', async () => {
        let response = await fetch("/register", {
            method:"POST",
            headers: { "content-type" : "application/json" },
            body: JSON.stringify(
                {addUser: {"username" : "bob", "email" : "bob@hoskins.com" }
            })
        })

        let result = await response.json()
        console.table(result)
    })
}
