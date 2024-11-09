document.getElementById('btn-cash-out').addEventListener('click',function(event){
    event.preventDefault();

    const cashOutMoney = document.getElementById('inout-cash-out-money').value;
console.log(cashOutMoney);
const cashOutPinNumber = document.getElementById('input-cash-out-pin-number').value;
console.log(cashOutPinNumber);


if(cashOutPinNumber=== '1111'){
    const mainBalance = document.getElementById('account-balance').innerText;
    console.log(mainBalance);
    const numberBalance = parseFloat(mainBalance);
    const numberCashOutMoney = parseFloat(cashOutMoney);
    console.log(numberBalance, numberCashOutMoney);
    const cashLeft = numberCashOutMoney - numberBalance;
    console.log(cashLeft);
    document.getElementById('account-balance').innerText= cashLeft;
}

else{
    alert('wrong pin')
}
})