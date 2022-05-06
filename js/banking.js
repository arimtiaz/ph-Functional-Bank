document.getElementById('deposit-button').addEventListener('click', function(){
    const depositInput = document.getElementById('deposit-input');
    const depositAmount = depositInput.value;

    // get current deposit
    const depositTotal = document.getElementById('total-deposit');
    depositTotal.innerText = depositAmount;

    // Clear Input Field 
    depositInput.value = ' ';
})