function getElementValueById(elementId){
    const inputField= document.getElementById(elementId);
    const inputFieldString =inputField.value ;
    const inputFieldValue =parseFloat(inputFieldString);
    return inputFieldValue;
}
function updateValueById(elementId,value){
    const updateValue = document.getElementById(elementId);
    updateValue.innerText=value;
}
document.getElementById('calculate-btn').addEventListener('click',function(){
   
   const income =getElementValueById('income-field');
   const foodExpenses  = getElementValueById('food-field');
   const clothExpenses = getElementValueById('cloth-field');
   const rentExpenses  = getElementValueById('rent-field');
   const totalExpenses = foodExpenses+rentExpenses+clothExpenses;
   const availableBalance = income-totalExpenses;
   updateValueById('total-expeneses',totalExpenses);
   updateValueById('balance',availableBalance);
 
   
})
document.getElementById('savings-btn').addEventListener('click',function(){
    const savings  = getElementValueById('savings-field');
    const availableBalanceAmount =document.getElementById('balance');
    const availableBalanceString =availableBalanceAmount.innerText
    const availableBalance =parseFloat(availableBalanceString);

    const totalSavings = availableBalance*(savings/100);
    
    updateValueById('saving-tag',totalSavings);


    const remainingBalance = availableBalance-totalSavings;
    updateValueById('balance-tag',remainingBalance);
    

})