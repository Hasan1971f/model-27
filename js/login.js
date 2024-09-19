// document.get element by id('btn-login').addEventListner('click', function)

// step 1 set event handelers
document.getElementById('btn-login').addEventListener('click', function (event) {
    // step 2 prevent default behavior reloading browser
    event.preventDefault()   
    console.log('login button clicked')

    // step 3 get the phone number
    const phoneNumber = document.getElementById('phone number').value
    console.log(phoneNumber)

})