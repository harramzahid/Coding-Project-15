// Task 1 Create the Asset Module
// for this one we are creating the objects to go into the module
const assets = [
    { id: 1, name: "AAPL", type: "stock", price: 150, quantity: 10 },
    { id: 2, name: "GOOGL", type: "stock", price: 2800, quantity: 5 },
    { id: 3, name: "TSLA", type: "stock", price: 1200, quantity: 2 },
    { id: 4, name: "BND", type: "bond", price: 100, quantity: 100 }
  ];
  
  // Function to get asset details by id
  export function getAssetById(id) {
    return assets.find(asset => asset.id === id);
  }
  // then we export the company assets we created
  export { assets };
  
