// Task 3: Create transaction module with Transaction class
import { assets, getAssetById } from './asset.js';

// Creating the transaction class
class Transaction {
    constructor(id, type, quantity) {
        this.id = id;
        this.type = type;
        this.quantity = quantity;
        this.assets = getAssetById(id);
    }

// Creating the function to let the user do a transaction
    completeTransaction() {
        if (this.type === 'sell') {
            if (this.quantity > this.assets.quantity) {
                throw new Error (`Insufficient quantity for sale of ${this.assets.name}.`);
            }
            this.assets.quantity -= this.quantity;
        } else if (this.type === 'buy') {
            this.assets.quantity += this.quantity;
        } else {
            throw new Error ('Invalid transaction type. Please type buy or sell.');
        }
    }
}
// exporting this transation details
export default Transaction;
