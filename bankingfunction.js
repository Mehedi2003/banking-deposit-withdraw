//get new ammount value
function getInputValue(newAmount){
    const inputField = document.getElementById(newAmount);
    const inputAmountText = inputField.value;
    const inputAmountNumber = parseFloat(inputAmountText);
    inputField.value = '';
    return inputAmountNumber;
}
// get previous amount value
function updateTotalField(previousamount, newAmount ){
    const previousValue = document.getElementById(previousamount);
    const previousValueText = previousValue.innerText;
    const previousValueNumber = parseFloat(previousValueText);
    const TotalWidtroAndDepoAmount = previousValueNumber  + newAmount;
    previousValue.innerText = TotalWidtroAndDepoAmount;
}
//update balance er jonno
function updatebalance(previousbalance, totalbalance, isadd ){
    const balancetotal= document.getElementById(previousbalance);
    const balancetotaltext = balancetotal.innerText;
    const previosBalanceTotal = parseFloat(balancetotaltext);
    if(isadd == true){
        balancetotal.innerText = previosBalanceTotal + totalbalance;
    }
    else{
        balancetotal.innerText = previosBalanceTotal - totalbalance;
    }
}
///deposit button er jonno using function
document.getElementById('deposite').addEventListener('click',
function(){
    const newdepositamount = getInputValue('mydeposite');
    //update deposit value
    updateTotalField('deposit-total', newdepositamount);
//    update totalbalance after deposit
    updatebalance('balance-total', newdepositamount, true)

});

////withdraw er jonno using function
document.getElementById('withdraw-button').addEventListener('click', function(){
    const newwithdraw = getInputValue('mywithdraw');
    updateTotalField('withdraw-total', newwithdraw);
    // updatebalance after withdraw
    updatebalance('balance-total', newwithdraw, false);
});