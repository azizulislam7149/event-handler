document.getElementById('show-cash-out-display').addEventListener('click',function(){
    document.getElementById('cash-out-display-form').classList.remove('hidden');
    document.getElementById('add-money-form').classList.add('hidden');
})
document.getElementById('show-add-money-display').addEventListener('click',function(){
document.getElementById('add-money-form').classList.remove('hidden');
document.getElementById('cash-out-display-form').classList.add('hidden');

})