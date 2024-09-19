// document.get element by id('btn-login').addEventListner('click', function)

// step 1 set event handelers
// document.getElementById('btn-login').addEventListener('click', function (event) {
//     // step 2 prevent default behavior reloading browser
//     event.preventDefault()   
  
//     // step 3 get the phone number
//     const phoneNumber = document.getElementById('phone number').value
//     const pinNumber = document.getElementById('pin-number').value
//     console.log(phoneNumber, pinNumber)
//     //  step 4 validit  phone and pin
//     // this is temporary
//     if (phoneNumber === '5' && pinNumber === '1234') {
//         console.log('You are log in')
//         // step 5 allow user to  use the website
//     }
//     else{
//         alert('wrong phone number or pin')
//     }
    
// })

document.getElementById('btn-login').addEventListener('click', function (event) {
  event.preventDefault()

//   get phone mumber and pin
   const phoneNumber = document.getElementById('phone number').value
   const pinNumber = document.getElementById('pin-number').value
// console.log( phoneNumber, pinNumber )
//  badway to validate
if (phoneNumber === '5' && pinNumber === '1234') {
    console.log('you are logged in')
}
else{
    alert('wrong phone number or pin')
}
  
})