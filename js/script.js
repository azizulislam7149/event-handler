document.getElementById('login-button').addEventListener('click',function(event){
event.preventDefault();


const phoneNumber = document.getElementById('phone-number').value ;
const pinNumber =document.getElementById('pin-number').value ;

console.log(phoneNumber, pinNumber);
if(phoneNumber === '01722' && pinNumber === '1010'){
    console.log('you are loged in')
    window.location.href='./home.html'
}
else{
    alert('wrong pin and phone number');
}
})