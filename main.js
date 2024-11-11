// Task 4 Create the Main Application
import { calculatePortfolioValue, getPortfolioAllocation } from './portfolio.js';
import { Transaction } from './transaction.js';

// Display initial portfolio value and allocation
console.log("Initial Portfolio Value: $" + calculatePortfolioValue());
console.log("Portfolio Allocation:");
console.table(getPortfolioAllocation());

// Simulate transactions
try {
  const buyAAPL = new Transaction(1, 'buy', 3);  // Buy 3 more AAPL stocks
  console.log(buyAAPL.getTransactionDetails());
  
  const sellTSLA = new Transaction(3, 'sell', 1);  // Sell 1 TSLA stock
  console.log(sellTSLA.getTransactionDetails());
  
  const sellBND = new Transaction(4, 'sell', 100);  // Sell 100 bonds
  console.log(sellBND.getTransactionDetails());
} catch (error) {
  console.error(error.message);
}

// Display updated portfolio value and allocation after transactions
console.log("Updated Portfolio Value: $" + calculatePortfolioValue());
console.log("Updated Portfolio Allocation:");
console.table(getPortfolioAllocation());

