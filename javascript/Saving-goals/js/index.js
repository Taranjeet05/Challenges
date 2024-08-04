let startingBalance = 1000;   // starting saving balance 

let monthlyContribution = 500;  // Amount saved each month

let numberOfMonths = 12;     // Number of Months


// calculate total saving after the specified number of months

let totalSaving = startingBalance + (monthlyContribution * numberOfMonths);

console.log(`After ${numberOfMonths} months of saving you will have ${totalSaving} in your account.`);
