console.log("Hello from client.js!")


// client side


// ASSIGN VARIABLES TO DOM ELEMENTS

const signInFromSignUpButton=document.getElementById("sign-in-from-sign-up-button");
const signUpFromSignInButton=document.getElementById("sign-up-from-sign-in-button");
const signInFromHomeButton=document.getElementById("sign-in-from-home-button");
const signUpFromHomeButton=document.getElementById("sign-up-from-home-button");
const splash=document.getElementById('sign-cont');
const signInDiv=document.getElementById("signInDiv");
const signUpDiv=document.getElementById("signUpDiv");

const signInButton=document.getElementById("sign-in-button");
const signUpButton=document.getElementById("sign-up-button");

// const display = document.getElementById('display')

// const register= document.getElementById('register')
const usernameInput = document.getElementById('sign-in-username-input')
// const signInButton1 = document.getElementById('in')
// const signUpButton1 = document.getElementById('up')
// const signInButton2 = document.getElementById('in1')
// const signUpButton2 = document.getElementById('up1')

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
const inputEmail=document.getElementById('sign-up-email-input')
const inputUsername=document.getElementById('sign-up-username-input')

let user_id = 2;




// CLIENT-SIDE FUNCTIONS

// Displaying the number of users on the splash page.

const getTotal = async () => {
    let data = await fetch("http://localhost:3019/total");
    let response = await data.json();
    numOfUser.textContent = response.total
}

if (numOfUser) {
    getTotal();
}

// Sign-up function

const signUp = async () => {
    const addUserObject = {"username" : inputUsername.value, "email" : inputEmail.value}

    let response = await fetch("/register", {
        method:"POST",
        headers: { "content-type" : "application/json" },
        body: JSON.stringify(
            {addUser: addUserObject}

            // {addUser: {"username" : inputUsername.value, "email" : inputEmail.value }}
        )
    })

    let result = await response.json()
    console.table(result)

    if (result.message === "Added new user ok") {
        console.log("Signup successful!")
        alert('Username added! Please go to sign-in!')
    }
    // else {
    //     console.log("Signup failed!")
    // }
    if (result.message === "ER_DUP_ENTRY"){
        alert('Error, username is taken')
    }
// }

// submit.addEventListener("click",signUp);

//const getTotal = async () => {
//    let data = await fetch("http://localhost:3019/total");
//    let response = await data.json();
//    numOfUser.textContent = response.total

}

if (signUpButton) {
    signUpButton.addEventListener("click",signUp);
}

// Sign-in function

const signIn = async () => {
    const username = usernameInput.value;

    let response = await fetch(`/signin?username=${username}`)
    let data = await response.json()
    console.log(data);
    console.log(`sign in user has id ${data.id}`)
    // should get a user_id back


    // We need to enter user_id into local storage so that dashboard functions can access it.
}

if (signInButton) {
    signInButton.addEventListener("click",signIn);
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
                    // reminderInput.focus()
                }
            })

            reminderDate.className = "reminder-date";
            reminderDate.value = (reminderObject.date_added ? reminderObject.date_added.substr(0,10) : "");
            reminderDate.type = reminderObject.type = "date";
            reminderDate.addEventListener("keyup",(e)=>{
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
                    // reminderDate.focus();
                }
            })

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

// if (signInButton1) {
//     signInButton1.addEventListener('click', signIn)
// }

// if (signInButton2) {
//     signInButton2.addEventListener('click', signIn)
// }

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

// if (register) {
//     register.addEventListener('click', signUp)
// }

if (remindersContainer) {
    console.log("This page has a reminder-container!")
    readReminders()
}


// FUNCTIONS TOGGLING DIVS DISPLAYING ON INDEX.HTML

signInDiv.style.display="none";
signUpDiv.style.display="none";

signInFromSignUpButton.addEventListener("click",()=>{
    signInDiv.style.display="flex";
    signUpDiv.style.display="none";
    splash.style.display="none";
})

signUpFromSignInButton.addEventListener("click",()=>{
    signUpDiv.style.display="flex";
    signInDiv.style.display="none";
    splash.style.display="none";
})

signInFromHomeButton.addEventListener("click",()=>{
    signInDiv.style.display="flex";
    signUpDiv.style.display="none";
    splash.style.display="none";
})

signUpFromHomeButton.addEventListener("click",()=>{
    signUpDiv.style.display="flex";
    signInDiv.style.display="none";
    splash.style.display="none";
})
