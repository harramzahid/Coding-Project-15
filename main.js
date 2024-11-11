// Task 4, creaying main application
import { calculatePortfolioValue, getPortfolioAllocation } from './portfolio.js';
import { Transaction } from './transaction.js';

// Function to display portfolio value
function displayPortfolioValue() {
    const portfolioValueDiv = document.getElementById('portfolioValue');
    portfolioValueDiv.textContent = "$" + calculatePortfolioValue();
}

// Function to display portfolio allocation
function displayPortfolioAllocation(tableBodyId) {
    const allocationTableBody = document.querySelector(tableBodyId);
    const allocation = getPortfolioAllocation();
    allocationTableBody.innerHTML = '';  // Clear existing rows

    allocation.forEach(asset => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${asset.name}</td><td>${asset.type}</td><td>${asset.allocation}</td>`;
        allocationTableBody.appendChild(row);
    });
}

// Function to display transactions
function displayTransactions(transactions) {
    const transactionsDiv = document.getElementById('transactions');
    transactionsDiv.innerHTML = '';  // Clear existing transactions

    transactions.forEach(transaction => {
        const p = document.createElement('p');
        p.textContent = transaction.getTransactionDetails();
        transactionsDiv.appendChild(p);
    });
}

// Display initial portfolio value and allocation
displayPortfolioValue();
displayPortfolioAllocation('#allocationTable tbody');

// Simulate transactions and display their details
const transactions = [];
try {
    const buyAAPL = new Transaction(1, 'buy', 5);  // Buy 5 more AAPL stocks
    const sellTSLA = new Transaction(3, 'sell', 1);  // Sell 1 TSLA stock
    const sellBND = new Transaction(4, 'sell', 50);  // Sell 50 bonds

    transactions.push(buyAAPL, sellTSLA, sellBND);
} catch (error) {
    console.error(error.message);
}

displayTransactions(transactions);

// Display updated portfolio value and allocation after transactions
const updatedPortfolioValueDiv = document.getElementById('updatedPortfolioValue');
updatedPortfolioValueDiv.textContent = "$" + calculatePortfolioValue();

displayPortfolioAllocation('#updatedAllocationTable tbody');
