document.getElementById('deposite').addEventListener('click', function(){
    const depositInput = document.getElementById('mydeposite');
    const newAmountText = depositInput.value;
    const newAmountNumber = parseFloat(newAmountText);
    //console.log(totalamount);
    //update deposit total
    const depositetotal = document.getElementById('deposit-total');
    const previousDepositText = depositetotal.innerText;
    const previousdipositeamountNumber = parseFloat(previousDepositText);
    const newdepositalamount = previousdipositeamountNumber + newAmountNumber ;
    depositetotal.innerText = newdepositalamount;
    //update account balance
    const balancetotal= document.getElementById('balance-total');
    const balancetotaltext = balancetotal.innerText;
    const previosBalanceTotal = parseFloat(balancetotaltext);
    const newBalanceTotal = previosBalanceTotal + newdepositalamount
    balancetotal.innerText = newBalanceTotal;
    // clear the deposit input field
    depositInput.value = '';
    
});
// withdrawhandeler
document.getElementById('withdraw-button').addEventListener('click', function(){
  
    const withdrawInput = document.getElementById('mywithdraw');
    const newwithdrawAmountText = withdrawInput.value;
    const newWithdeawAmount = parseFloat(newwithdrawAmountText);
    const WithdrawTotal = document.getElementById('withdraw-total');
    const previousWitadrawTotalText = WithdrawTotal.innerText;
    const previousWithdrawAmmount = parseFloat(previousWitadrawTotalText);
    const TotalWithdraw = previousWithdrawAmmount + newWithdeawAmount;
    WithdrawTotal.innerText = TotalWithdraw;
    ///update Balance
    const balancetotal = document.getElementById('balance-total')
    const previousBalanceTotalText = balancetotal.innerText;
    const PreviousBalanceTotalNumber = parseFloat(previousBalanceTotalText);
    const NowafterWithdrawBalance = PreviousBalanceTotalNumber - TotalWithdraw;
    balancetotal.innerText = NowafterWithdrawBalance;
    // clear the deposit input field
    withdrawInput.value = '';
});