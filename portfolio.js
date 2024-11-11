// Task 2 Create the portfolio Module
// this is the portfolio.js file
import { assets } from './asset.js';

// Creating the function to calculate total portfolio value
export function calculatePortfolioValue() {
  return assets.reduce((total, asset) => total + (asset.price * asset.quantity), 0);
}

// Creating the function to calculate portfolio allocation as percentage of total value
export function getPortfolioAllocation() {
  const totalValue = calculatePortfolioValue();
  return assets.map(asset => ({
    name: asset.name,
    type: asset.type,
    allocation: ((asset.price * asset.quantity) / totalValue * 100).toFixed(2) + '%'
  }));
}
