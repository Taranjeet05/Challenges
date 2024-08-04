// Initialize a assign values to 2 variables:
//1. A variable which will hold the value of the meal cost.
//2. A variable which will hold the value of the tip percentage.

const mealCost = 27; // 10 euros
const tipPercentage = 0.2 


// calculate tip amount

let tipAmount = mealCost * tipPercentage;
console.log(tipAmount);

// calculate totalcost

let totalCost = mealCost + tipAmount;
console.log(totalCost);

console.log (`Total cost of your bill is ${totalCost} euros`);

