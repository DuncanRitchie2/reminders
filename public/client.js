// **************************************
// FAKE JSON DATA - 
// client side

const display = document.getElementById('display')


const register= document.getElementById('register')
const signin = document.getElementById('signin')
const readreminder = document.getElementById('getreminder')
const addreminder = document.getElementById('addreminder')
const deletereminder = document.getElementById('deletereminder')
const editreminder = document.getElementById('editreminder')

//  ******  TOO MANY ENDPOINTS!!!!




addreminder.addEventListener('click', async () => {
    let response = await fetch("/addreminders",{
        method:"POST",
        headers: { "content-type" : "application/json" },
        body: JSON.stringify({
            // addReminder: {"user_id":1234, "reminder": "adding a test reminder"}
            addReminder: {"user_id":1234, "reminder": "adding a test reminder"}
        })
    })

    let result = await response.json()
    console.log(result)

})



signin.addEventListener('click', async () => {
    let response = await fetch("/signin", {
        method:"POST",
        headers: { "content-type" : "application/json" },
        body: JSON.stringify({
            isUserRegistered: {"username" : "foo bar name"}
        })
    })

    let result = await response.json()
    console.log("The result from signin is:")
    console.log(result)
})


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




deletereminder.addEventListener('click', async () => {
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



readreminder.addEventListener('click', async () => {

    let response = await fetch(`/readreminder?user_id=3`)
    let data = await response.json()

    console.log(`returned data from usr id 3 , readreminder is  ${data}`)

    }
)



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
}
)

// ***********************************************
// ***********************************************
