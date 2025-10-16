let expenses = [];

function addExpense(description, amount) {
    if (description && !isNaN(amount)) {
        expenses.push({ description, amount: parseFloat(amount) });
        console.log(`✅ Added: ${description} - $${amount}`);
    } else {
        console.log("❌ Invalid input. Provide description and numeric amount.");
    }
}

function deleteExpense(index) {
    if (index >= 0 && index < expenses.length) {
        const removed = expenses.splice(index, 1);
        console.log(`🗑 Removed: ${removed[0].description} - $${removed[0].amount}`);
    } else {
        console.log("❌ Invalid index.");
    }
}

function listExpenses() {
    if (expenses.length === 0) {
        console.log("No expenses added yet.");
        return;
    }

    console.log("📋 Expenses:");
    expenses.forEach((exp, i) => {
        console.log(`${i}. ${exp.description} - $${exp.amount}`);
    });

    const total = expenses.reduce((sum, exp) => sum + exp.amount, 0);
    console.log(`💰 Total: $${total}`);
}

addExpense("Groceries", 50);
addExpense("Movie", 12.5);
listExpenses();
deleteExpense(1);
listExpenses();
