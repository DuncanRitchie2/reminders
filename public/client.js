console.log("Hello from client.js!")

// **************************************
// FAKE JSON DATA - 
// client side

const display = document.getElementById('display')
const register= document.getElementById('register')
const signin = document.getElementById('signin')
const readreminder = document.getElementById('getreminder')
const addreminder = document.getElementById('new-reminder-submit')
const deleteReminderButtons = document.getElementsByClassName('reminder-delete-button')
const editreminder = document.getElementById('editreminder')
const numOfUser = document.getElementById('num')

let user_id = 3;

//  ******  TOO MANY ENDPOINTS!!!!

const getTotal = async () => {
    let data = await fetch("http://localhost:3019/total");
    let response = await data.json();
    numOfUser.textContent = response.total
}
getTotal();

addreminder.addEventListener('click', async () => {
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

})




if (signin) {
    signin.addEventListener('click', async () => {

        let response = await fetch(`/signin?username=${username}`)
        let data = await response.json()
        // 
        console.log(`sign in username ${data}`)
        // should get a user_id back
        }
    )
}



if (editreminder) {
    editreminder.addEventListener('click', async () => {
        let response = await fetch("/editreminders", {
            method:"PUT",
            headers: { "content-type" : "application/json" },
            body: JSON.stringify({
                editReminder: {"user_id" : 1234, "id_reminder": 70, "reminder":"the old reminder is changed to this reminder"}
            })
        })

        let result = await response.json()
        console.table(result)

    })
}



for (let i = 0; i < deleteReminderButtons.length; i++) {
    deleteReminderButtons[i].addEventListener('click', async () => {
        console.log("Deleting a thing!")
        let response = await fetch("/deletereminders", {
            method:"DELETE",
            headers: { "content-type" : "application/json" },
            body: JSON.stringify({
                deleteReminder: {"user_id" : 1234, "reminder_id": 70 }
            })
        })

        let result = await response.json()
        console.table(result)
    })
}



if (readreminder) {
    readreminder.addEventListener('click', async () => {

        let response = await fetch(`/readreminder?user_id=${user_id}`)
        let data = await response.json()
        // reload local reminders list
        console.log(`returned data from usr id 3 , readreminder is  ${data}`)

        }
    )
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


// ***********************************************
// ***********************************************