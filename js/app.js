// Calling all elements and keep store
const calculateEventListen = getElementId('calculate');
const saveEventListen = getElementId('save-button');
const incomeInput = getElementId('income');
const foodInput = getElementId('food');
const rentInput = getElementId('rent');
const clotheInput = getElementId('clothe');
const totalExpenses = getElementId('total-expenses');
const balance = getElementId('balance');
const percentageInput = getElementId('percentage');
const savingAmount = getElementId('saving-amount');
const remainingBalance = getElementId('remaining-balance');
const popupOne = getElementId("error-show-one");
const popupTwo = getElementId("error-show-two");
// Get Elements id using the function
function getElementId(elementId) {
    return document.getElementById(elementId);
}
// Expenses Calculate Event Handler
calculateEventListen.addEventListener('click', () => {
    getConvertValue(foodInput.value, rentInput.value, clotheInput.value, incomeInput.value);
});
// Save Event Handler
saveEventListen.addEventListener('click', () => {
    getSaving(incomeInput.value, percentageInput.value);
});
/* Expenses area calculation function*/
function getConvertValue(food, rent, clothe, income) {
    // validation error handling
    if (isNaN(parseFloat(food)) || isNaN(parseFloat(rent)) || isNaN(parseFloat(clothe))|| isNaN(parseFloat(income))) {
        return alert(`It's not a Number`);
    }
    else if (parseFloat(food) < 0) {
        return alert(`Food's less the zero`);
    }
    else if (parseFloat(rent) < 0) {
        return alert(`Rent's less the zero`);
    }
    else if (parseFloat(clothe) < 0) {
        return alert(`Clothe's less the zero`);
    }
    else if (parseFloat(income) < 0) {
        return alert(`Income's less the zero`);
    }
    // calculation process
    const totalCost = parseFloat(food) + parseFloat(rent) + parseFloat(clothe);
    if (totalCost > parseFloat(income)) {
        return alert(`Your expenses is high`);
    } else {
        totalExpenses.innerText = totalCost;
        balance.innerText = parseFloat(income) - parseFloat(totalExpenses.innerText);
    }
    foodInput.value = '';
    rentInput.value = '';
    clotheInput.value = '';
}
/* Saving area calculation function*/
function getSaving(income, percentage) {
    if (isNaN(parseInt(income)) || isNaN(parseInt(percentage))) {
        popupOne.classList.toggle("show");
        setTimeout(() => popupOne.classList.remove("show"), 4000);
        return;
    } else if (parseFloat(income) < 0 || parseFloat(percentage) < 0) {
        return alert(`It's less the zero percentage value`);  
    }
    const saveAmount = parseFloat(income) * (parseFloat(percentage) / 100);
    if (saveAmount > parseFloat(balance.innerText)) {
        popupTwo.classList.toggle("show");
        setTimeout(() => popupTwo.classList.remove("show"), 5000);
        return;
    }else {
        savingAmount.innerText = saveAmount;
        remainingBalance.innerText = parseFloat(balance.innerText) - saveAmount;
    }
    percentageInput.value = '';
}