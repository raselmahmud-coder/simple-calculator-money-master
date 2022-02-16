const income = document.getElementById('income');
const food = document.getElementById('food');
const rent = document.getElementById('rent');
const clothe = document.getElementById('clothe');
const totalExpenses = document.getElementById('total-expenses');
const balance = document.getElementById('balance');
const calculate = document.getElementById('calculate').addEventListener('click', () => {
    const foodValue = parseFloat(food.value);
    const rentValue = parseFloat(rent.value);
    const clotheValue = parseFloat(clothe.value);
    const totalCost = foodValue + rentValue + clotheValue;
    totalExpenses.innerText = totalCost;
    // after cost remain balance
    const incomeValue = parseFloat(income.value);
    const afterExpenses = incomeValue - totalCost;
    balance.innerText = afterExpenses;
});

/* Saving area calculation */
const percentage = document.getElementById('percentage');
const savingAmount = document.getElementById('saving-amount');
const remainingBalance = document.getElementById('remaining-balance');
document.getElementById('save-action').addEventListener('click', () => {
    const incomeToNum = parseFloat(income.value);
    const percentageToNum = parseFloat(percentage.value) / 100;
    const saveAmount = incomeToNum * percentageToNum;
    savingAmount.innerText = saveAmount;
// remaining balance
    const balanceToNum = parseFloat(balance.innerText);
    const remainBal = balanceToNum - saveAmount;
    remainingBalance.innerText = remainBal;
})