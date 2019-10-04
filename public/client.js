console.log("Hello from client.js!")


// client side


// ASSIGN VARIABLES TO DOM ELEMENTS

const display = document.getElementById('display')
const register= document.getElementById('register')
const signInButton1 = document.getElementById('in')
const signUpButton1 = document.getElementById('up')
const signInButton2 = document.getElementById('in1')
const signUpButton2 = document.getElementById('up1')
const addReminderInput = document.getElementById('new-reminder-input')
const addReminderDate = document.getElementById('new-reminder-date')
const addReminderButton = document.getElementById('new-reminder-submit')
const deleteReminderButtons = document.getElementsByClassName('reminder-delete-button')
const numOfUser = document.getElementById('num')
const editreminder = document.getElementById('editreminder')

const remindersContainer = document.getElementById('reminders-container')
const reminderInputs = document.getElementsByClassName('reminder-input')
const noRemindersContainer = document.getElementById('no-reminders-container')

const submit=document.getElementById('submit')
const inputEmail=document.getElementById('inputEmail')
const inputUsername=document.getElementById('inputUsername')

let user_id = 2;




// CLIENT-SIDE FUNCTIONS

const signUp = async () => {
    let response = await fetch("/register", {
        method:"POST",
        headers: { "content-type" : "application/json" },
        body: JSON.stringify(
            {addUser: {"username" : inputUsername.value, "email" : inputEmail.value }
        })
    })

    let result = await response.json()
    if (result.message = "ER_DUP_ENTRY"){
        alert('Error, username is taken')
    }
    // console.table(result)
}

submit.addEventListener("click",signUp);

const getTotal = async () => {
    let data = await fetch("http://localhost:3019/total");
    let response = await data.json();
    numOfUser.textContent = response.total
}

if (numOfUser) {
    getTotal();
}


const signIn = async () => {
    let response = await fetch(`/signin?username=${username}`)
    let data = await response.json()
    console.log(`sign in username ${data}`)
    // should get a user_id back
}

const displayReminders = (reminderObjects) => {
    // Clear any pre-existing reminders.
    remindersContainer.innerHTML = "";

    // If reminders are returned, we create DOM elements for each of them, and we hide the no-reminders-container div.
    if (reminderObjects[0]) {
        noRemindersContainer.style.display = "none";

        reminderObjects.map((reminderObject) => {
            console.table(reminderObject);

            // This is the HTML we are producing:
                // <div class="reminder-container">
                //     <input class="reminder-input" value="Buy milk" type="text"/>
                //     <input class="reminder-date" value="2019-10-01" type="date" />
                //     <button class="reminder-delete-button" key=1>Delete</button>
                // </div>

            let div = document.createElement("div");
            div.className = "reminder-container";

            let reminderInput = document.createElement("input");
            let reminderDate = document.createElement("input");
            let reminderDeleteButton = document.createElement("button");

            reminderInput.className = "reminder-input";
            reminderInput.value = reminderObject.reminder;
            reminderInput.type = reminderObject.type = "text";
            reminderInput.addEventListener("keyup",(e)=>{
                if (e.keyCode === 13) {
                    console.log("You pressed enter!")
                    const editedReminderObject = {
                        user_id: user_id,
                        reminder_id: reminderObject.id,
                        reminder: reminderInput.value,
                        date_added: reminderDate.value
                    }
                    console.log(editedReminderObject)
                    editReminder(editedReminderObject)
                }
            })

            reminderDate.className = "reminder-date";
            reminderDate.value = (reminderObject.date_added ? reminderObject.date_added.substr(0,10) : "");
            reminderDate.type = reminderObject.type = "date";

            reminderDeleteButton.className = "reminder-delete-button";
            reminderDeleteButton.key = reminderObject.id;
            reminderDeleteButton.textContent = "Delete";
            reminderDeleteButton.addEventListener("click",() => {
                console.log("Trying to delete!")
                deleteReminder(reminderObject.id)
            })

            div.appendChild(reminderInput);
            div.appendChild(reminderDate);
            div.appendChild(reminderDeleteButton);

            console.log(div)
            remindersContainer.appendChild(div);
        })
    }

    // If there are no reminders, display no-reminders-container div.
    else {
        noRemindersContainer.style.display = "initial";
    }
    
}

const readReminders = async () => {
    console.log("Reading reminders!")
    let response = await fetch(`/readreminder?user_id=${user_id}`)
    let data = await response.json()
    
    console.log(`returned data from user_id 3, readreminder is ${data}`)

    displayReminders(data)
}

const getNewReminderFromInput = () => {
    if (addReminderInput.value) {
        const reminderObject = {
            "user_id": user_id, 
            "reminder": addReminderInput.value, 
            "date_added": addReminderDate.value
        }
        addReminderInput.value = ""
        addReminderDate.value = ""
        console.log(reminderObject)
        addReminder(reminderObject)
    }
    else {
        console.log("Please type a new reminder in!")
    }
}

const addReminder = async (reminderObject) => {
    console.log("Adding a reminder!")
    let response = await fetch("/addreminders",{
        method:"POST",
        headers: { "content-type" : "application/json" },
        body: JSON.stringify({
            addReminder: reminderObject
        })
    })

    let result = await response.json()
    console.log(result)
    readReminders();
}

const editReminder = async (reminderObject) => {
    console.log("Editing a reminder!")
    let response = await fetch("/editreminders", {
        method:"PUT",
        headers: { "content-type" : "application/json" },
        body: JSON.stringify({
            editReminder: {"user_id" : user_id, "reminder_id": reminderObject.reminder_id, "reminder": reminderObject.reminder, "date_added": reminderObject.date_added}
        })
    })

    let result = await response.json()

    if (result.message === "Edited reminder ok") {
        readReminders()
    }
    else {
        console.log("Editing failed!")
    }
}

const deleteReminder = async (id) => {
    console.log("Deleting a reminder!")
    let response = await fetch("/deletereminders", {
        method:"DELETE",
        headers: { "content-type" : "application/json" },
        body: JSON.stringify({
            deleteReminder: {"user_id" : user_id, "reminder_id": id}
        })
    })

    let result = await response.json()

    if (result.message === "Deleted reminders ok") {
        readReminders()
    }
    else {
        console.log("Deleting failed!")
    }
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

if (addReminderButton) {
    addReminderButton.addEventListener('click', getNewReminderFromInput)
}

for (let i = 0; i < deleteReminderButtons.length; i++) {
    deleteReminderButtons[i].addEventListener('click', deleteReminder)
}

if (register) {
    register.addEventListener('click', signUp)
}

if (remindersContainer) {
    console.log("This page has a reminder-container!")
    readReminders()
}