// Create initial values
let monthlyIncome = 0;
let expenses = []; // An array of expense objects
let expenseTotal = 0;
let balance = 0;

// Store element references in variables
let monthlyBudget = document.getElementById("monthlyBudget");
let incomeInput = document.getElementById("incomeInput");
let updateBudgetButton = document.getElementById("updateBudgetButton");

let nameInput = document.getElementById("nameInput");
let amountInput = document.getElementById("amountInput");
let addExpenseButton = document.getElementById("addExpenseButton");

let expenseList = document.getElementById("expenseList"); //Div element
let totalExpenses = document.getElementById("totalExpenses");
let remainingBalance = document.getElementById("remainingBalance");

// write a function that will update the monthy income and display it
function updateBudget(event) {
    console.log("updateBudget fired!");
    event.preventDefault();
    monthlyIncome = parseInt(incomeInput.value); //parse string input into number
    monthlyBudget.innerText = "$" + monthlyIncome;
    // update the remaining balance
    updateBalance();
}

// Add updateBudget to update budget button as onclick handler

updateBudgetButton.onclick = updateBudget;JSON

//build a helper function that will update the remaining balance
function updateBalance() {
    console.log("updateBalance fired");
    balance = monthlyIncome - expenseTotal;
    remainingBalance.innerText = "$" + balance;
    // update the color of the text based on the value
    if (balance < 0) {
        remainingBalance.classList.add("red");
        remainingBalance.classList.remove("green");
    } else {
        remainingBalance.classList.remove("red");
        remainingBalance.classList.add("green");
    }
}

// build a function that will create a new expense and display that expense in the expense list
function addExpense(event) {
    console.log("addExpense fired!");
    event.preventDefault();
    // build a new expense object
    let expense = {
        name: nameInput.value,
        amount: parseInt(amountInput.value) // store as number
    };
    //add the expense to expense array
    expenses.push(expense);
    // Add expense to the app interface
    let newExpense = document.createElement("p");
    newExpense.innerText = expense.name + ": $" + expense.amount;
    expenseList.appendChild(newExpense);
    // TODO recalculate the total of expenses
    updateExpenseTotal();
}

//add addexpense as onclick handler 
addExpenseButton.onclick = addExpense;

//build a function that calculates total expenses
function updateExpenseTotal() {
    console.log("updateExpenseTotal fired!");
    // reset the total expenses 
    expenseTotal = 0;
    for (let i = 0; i < expenses.length; i++) {
        let currentExpense = expenses[i];
        expenseTotal = expenseTotal + currentExpense.amount;
    }
    //display new total in app
    totalExpenses.innerText = "$" + expenseTotal;
    //update remaining balance
    updateBalance();
}

