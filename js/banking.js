// function doubleIt(num){
//     const result = num*2;
//     return result;
// }
// const first =doubleIt(5);
// const second =doubleIt(7);
// function doubleIt(num){
// const result =num*2
// return result;
// }
// const fiveDouble = doubleIt(5);
// const sevenDouble = doubleIt(7);
function getInputValue(inputId) {
    // debugger;
    const inputfield = document.getElementById(inputId);
    const inputAmountText = inputfield.value;
    const amountValue = parseFloat(inputAmountText);
    // clear input field
    inputfield.value = '';

    return amountValue;

}
function updateTotalField(totalFieldId, amount) {
    //   debugger;
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);

    totalElement.innerText = previousTotal + amount;
}
function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
}
function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);
    const previousBalanceTotal = getCurrentBalance();
    // balanceTotal.innerText = previousBalanceTotal + depositAmount;
    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceTotal + amount;
    }
    else {
        balanceTotal.innerText = previousBalanceTotal - amount;
    }
}



document.getElementById('deposit-button').addEventListener('click', function () {




    // const depositInput = document.getElementById('deposit-input');
    // const depositAmountText = depositInput.value;
    // const depositAmount = parseFloat(depositAmountText);
    // const depositAmount = getInputValue('deposit-input');

    //get and update  deposit total
    // const depositTotal = document.getElementById('deposit-total');
    // const depositTotalText = depositTotal.innerText;
    // const previousDepositTotal = parseFloat(depositTotalText);
    // depositTotal.innerText = previousDepositTotal + depositAmount;
    // const previousDepositTotal = updateTotalField('deposit-total', depositAmount);

    // update balence

    // const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);
    // balanceTotal.innerText = previousBalanceTotal + depositAmount;
    // const previousBalanceTotal = updateBalance(depositAmount, true);
    // // clear input field
    // depositInput.value = '';
    const depositAmount = getInputValue('deposit-input');
    if (depositAmount > 0) {
        updateTotalField('deposit-total', depositAmount);
        updateBalance(depositAmount, true);
    }
});
//handel withdraw button
document.getElementById('withdraw-button').addEventListener('click', function () {

    // const withdrawInput = document.getElementById('withdraw-input');
    // const withdrawAmountText = withdrawInput.value;
    // const withdrawAmount = parseFloat(withdrawAmountText);
    // const withdrawAmount = getInputValue('withdraw-input');

    //get and update withdraw total
    // const withdrawTotal = document.getElementById('withdraw-total');
    // const previousWithdrawTotalText = withdrawTotal.innerText;
    // const previousWithdrawTotal = parseFloat(previousWithdrawTotalText);

    // withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;
    // const previousWithdrawTotal = updateTotalField('withdraw-total', withdrawAmount);

    //update balance after withdraw
    // const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);
    // balanceTotal.innerText = previousBalanceTotal - withdrawAmount;
    // const previousBalanceTotal = updateBalance(withdrawAmount, false);

    // clear input field
    // withdrawInput.value = '';
    const withdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if (withdrawAmount > 0 && withdrawAmount < currentBalance) {
        updateTotalField('withdraw-total', withdrawAmount);
        updateBalance(withdrawAmount, false);
    }
    if (withdrawAmount > currentBalance) {
        console.log('you can not withdraw more than what you have in your account');
    }



});