// **************************************
// FAKE JSON DATA - 
// client side


//  ******  TOO MANY ENDPOINTS!!!!

fetch("http://localhost:3030/addreminders")
  .then(response => response.json())
  .then(data => {
    display.textContent = data.data
  })




  fetch("http://localhost:3030/signin")
  .then(response => response.json())
  .then(data => {
    display.textContent = data.data
  })


  fetch("http://localhost:3030/editreminders")
  .then(response => response.json())
  .then(data => {
    display.textContent = data.data
  })


  fetch("http://localhost:3030/deletereminders")
  .then(response => response.json())
  .then(data => {
    display.textContent = data.data
  })


  fetch("http://localhost:3030/getreminders")
  .then(response => response.json())
  .then(data => {
    display.textContent = data.data
  })


  fetch("http://localhost:3030/register")
  .then(response => response.json())
  .then(data => {
    display.textContent = data.data
  })




const test_addReminder = () => {
    fetch("http://localhost:3019/addreminders",{
        method:"POST",
        headers: { "content-type" : "application/json" },
        body: JSON.stringify({
            addReminder: {"user_id":1234, "reminder": "adding a test reminder"}
        })
    })

}



const test_isUserRegistered = () => {
    fetch("http://localhost:3019/signin", {
        method:"GET",
        headers: { "content-type" : "application/json" },
        body: JSON.stringify({
            isUserRegistered: {"username" : "foo bar name"}
        })
    })
}


const test_editReminder = () => {
    fetch("http:/localhost:3019/editreminders", {
        method:"PUT",
        headers: { "content-type" : "application/json" },
        body: JSON.stringify({
            editReminder: {"user_id" : 1234, "id_reminder": 70, "reminder":"the old reminder is changed to this reminder"}
        })
    })
}



const test_deleteReminder = () => {
    fetch("http:/localhost:3019/deletereminders", {
        method:"DELETE",
        headers: { "content-type" : "application/json" },
        body: JSON.stringify({
            deleteReminder: {"user_id" : 1234, "reminder_id": 70 }
        })
    })
}



const test_readReminder = () => {
    fetch("http:/localhost:3019/getreminders", {
        method:"GET",
        headers: { "content-type" : "application/json" },
        body: JSON.stringify({
            readReminder: {"user_id" : 1234 }
        })
    })
}




const test_addUser = () => {
    fetch("http:/localhost:3019/register", {
        method:"POST",
        headers: { "content-type" : "application/json" },
        body: JSON.stringify({
            addUser: {"username" : "bob", "email" : "bob@hoskins.com" }
        })
    })
}


// ***********************************************
// ***********************************************
