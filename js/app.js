// Get Elements id using the function
function getElementId(elementId) {
   return document.getElementById(elementId);
}
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


/* Expenses area calculation function*/
function getConvertValue(food, rent, clothe, income) {
    totalExpenses.innerText = parseFloat(food) + parseFloat(rent) + parseFloat(clothe);
    balance.innerText = parseFloat(income) - parseFloat(totalExpenses.innerText);
}
// Expenses Calculate Event Handler
document.getElementById('calculate').addEventListener('click', () => {
    getConvertValue(food.value, rent.value, clothe.value, income.value);
});


/* Saving area calculation function*/
function getSaving(income, percentage) {
    const saveAmount = parseFloat(income) * (parseFloat(percentage) / 100);
    savingAmount.innerText = saveAmount;
    remainingBalance.innerText = parseFloat(balance.innerText) - saveAmount;
}

// Save Event Handler
document.getElementById('save-action').addEventListener('click', () => {
    getSaving(income.value, percentage.value);
})