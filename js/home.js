document.getElementById('btn-addmoney').addEventListener('click', function(event){
event.preventDefault();

const addmoney = document.getElementById('inout-add-money').value ;


const pinNumber = document.getElementById('input-pin-number').value;

if(pinNumber === '1234'){


const balance =document.getElementById('account-balance').innerText


const addMoneyNumber = parseFloat(addmoney);
const balancenumber = parseFloat(balance);
const updateBalance =addMoneyNumber + balancenumber;
console.log(updateBalance);
document.getElementById('account-balance').innerText = updateBalance ;
}
else{
    alert('wrong pin number')
}
})