// Calling all elements and keep store
const income = getElementId('income');
const food = getElementId('food');
const rent = getElementId('rent');
const clothe = getElementId('clothe');
const totalExpenses = getElementId('total-expenses');
const balance = getElementId('balance');
const percentage = getElementId('percentage');
const savingAmount = getElementId('saving-amount');
const remainingBalance = getElementId('remaining-balance');
// Get Elements id using the function
function getElementId(elementId) {
   return document.getElementById(elementId);
}
/* Expenses area calculation function*/
function getConvertValue(food, rent, clothe, income) {
    // validation error handling
    if (isNaN(parseFloat(food)) || isNaN(parseFloat(rent)) || isNaN(parseFloat(clothe))|| isNaN(parseFloat(income))) {
        return alert(`It's not a Number ${food} ${rent} ${clothe} ${income}`);
    }else if (parseFloat(food) < 0 || parseFloat(rent) < 0 || parseFloat(clothe) < 0 || parseFloat(income) < 0) {
        return alert(`it's less the zero`);
    }
    // calculation process
    const totalCost = parseFloat(food) + parseFloat(rent) + parseFloat(clothe);
    if (totalCost > parseFloat(income)) {
        return alert(`Your expenses is high`);
    } else {
        totalExpenses.innerText = totalCost;
        balance.innerText = parseFloat(income) - parseFloat(totalExpenses.innerText);
    }
}
// Expenses Calculate Event Handler
document.getElementById('calculate').addEventListener('click', () => {
    getConvertValue(food.value, rent.value, clothe.value, income.value);
});
/* Saving area calculation function*/
function getSaving(income, percentage) {
    if (isNaN(parseInt(income)) || isNaN(parseInt(percentage))) {
        return alert(`it's not a number in the saving input`);
    } else if (parseFloat(income) < 0 || parseFloat(percentage) < 0 || parseFloat(percentage) > 100) {
        return alert(`It's less the zero percentage`);  
    }
    const saveAmount = parseFloat(income) * (parseFloat(percentage) / 100);
    if (saveAmount > parseFloat(balance.innerText)) {
        return alert(`Sorry! remaining balance is not enough`);
    } else {
        savingAmount.innerText = saveAmount;
        remainingBalance.innerText = parseFloat(balance.innerText) - saveAmount;
    }
}
// Save Event Handler
document.getElementById('save-action').addEventListener('click', () => {
    getSaving(income.value, percentage.value);
})