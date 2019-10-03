// **************************************
// FAKE JSON DATA - 
// client side

const display = document.getElementById('display')


const register= document.getElementById('register')
const signin = document.getElementById('signin')
const getreminder = document.getElementById('getreminder')
const addreminder =document.getElementById('addreminder')
const deletereminder = document.getElementById('deletereminder')
const editreminder = document.getElementById('editreminder')

//  ******  TOO MANY ENDPOINTS!!!!




addreminder.addEventListener('click', () => {
    let responce = await fetch("/addreminders",{
        method:"POST",
        headers: { "content-type" : "application/json" },
        body: JSON.stringify({
            // addReminder: {"user_id":1234, "reminder": "adding a test reminder"}
            addReminder: {"user_id":1234, "reminder": "adding a test reminder"}
        })
    })

    let result = await responce.json()
    console.log(result)

})



signin.addEventListener('click', () => {
    let responce = await fetch("/signin", {
        method:"POST",
        headers: { "content-type" : "application/json" },
        body: JSON.stringify({
            isUserRegistered: {"username" : "foo bar name"}
        })
    })

    let result = await responce.json()
    console.log(result)
})


editreminder.addEventListener('click', () => {
    let responce = await fetch("/editreminders", {
        method:"PUT",
        headers: { "content-type" : "application/json" },
        body: JSON.stringify({
            editReminder: {"user_id" : 1234, "id_reminder": 70, "reminder":"the old reminder is changed to this reminder"}
        })
    })

    let result = await responce.json()
    console.table(result)

})




deletereminder.addEventListener('click', () => {
    let responce = await fetch("/deletereminders", {
        method:"DELETE",
        headers: { "content-type" : "application/json" },
        body: JSON.stringify({
            deleteReminder: {"user_id" : 1234, "reminder_id": 70 }
        })
    })

    let result = await responce.json()
    console.table(result)
})



readReminder.addEventListener('click', () => {

    let response = await fetch(`http://localhost:3000/readreminder?user_id=3`)
    let data = await response.json()

    console.log(`returned data from usr id 3 , readreminder is  ${data}`)

    }
)



register.addEventListener('click', () => {
    let responce = await fetch("/register", {
        method:"POST",
        headers: { "content-type" : "application/json" },
        body: JSON.stringify(
            {addUser: {"username" : "bob", "email" : "bob@hoskins.com" }
        })
    })

    let result = await responce.json()
    console.table(result)
}
)

// ***********************************************
// ***********************************************
