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

// fetch("http://localhost:3030/addreminders")
//   .then(response => response.json())
//   .then(data => {
//     display.textContent = data.data
//   })




//   fetch("http://localhost:3030/signin")
//   .then(response => response.json())
//   .then(data => {
//     display.textContent = data.data
//   })


//   fetch("http://localhost:3030/editreminders")
//   .then(response => response.json())
//   .then(data => {
//     display.textContent = data.data
//   })


//   fetch("http://localhost:3030/deletereminders")
//   .then(response => response.json())
//   .then(data => {
//     display.textContent = data.data
//   })


//   fetch("http://localhost:3030/getreminders")
//   .then(response => response.json())
//   .then(data => {
//     display.textContent = data.data
//   })


//   fetch("http://localhost:3030/register")
//   .then(response => response.json())
//   .then(data => {
//     display.textContent = data.data
//   })




addreminder.addEventListener('click', () => {
    fetch("/addreminders",{
        method:"POST",
        headers: { "content-type" : "application/json" },
        body: JSON.stringify({
            addReminder: {"user_id":1234, "reminder": "adding a test reminder"}
        })
    })

}
)



signin.addEventListener('click', () => {
    fetch("/signin", {
        method:"POST",
        headers: { "content-type" : "application/json" },
        body: JSON.stringify({
            isUserRegistered: {"username" : "foo bar name"}
        })
    })
}
)


editreminder.addEventListener('click', () => {
    fetch("/editreminders", {
        method:"PUT",
        headers: { "content-type" : "application/json" },
        body: JSON.stringify({
            editReminder: {"user_id" : 1234, "id_reminder": 70, "reminder":"the old reminder is changed to this reminder"}
        })
    })
}
)



deletereminder.addEventListener('click', () => {
    fetch("/deletereminders", {
        method:"DELETE",
        headers: { "content-type" : "application/json" },
        body: JSON.stringify({
            deleteReminder: {"user_id" : 1234, "reminder_id": 70 }
        })
    })
}
)



getreminder.addEventListener('click', () => {
    fetch("/getreminder", {
        method:"POST",
        headers: { "content-type" : "application/json" },
        body: JSON.stringify({
            readReminder: {"user_id" : 1234 }
        })
    })
}
)



register.addEventListener('click', test_addUser = () => {
    fetch("/register", {
        method:"POST",
        headers: { "content-type" : "application/json" },
        body: JSON.stringify({
            addUser: {"username" : "bob", "email" : "bob@hoskins.com" }
        })
    })
}
)

// ***********************************************
// ***********************************************
