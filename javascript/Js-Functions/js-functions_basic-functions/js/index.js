console.clear();

/*
1: Create the data for a book in an online store. Create variables for the following data:
  - the book title
  - the author
  - the rating
  - the number of sales
*/

// --v-- write your code here --v--
let bookTitle = 'The Lord of the Javascript'
let author = 'Mario';
let rating = 4.2;
let sales = 120;

// --^-- write your code here --^--

/*
2: Log all variables to the console, for example:

Title: The Lord of the Javascript
Author: Mario
Rating: 4.2
Sales: 120

Increase the number of sales and change the rating of the book afterwards.
Then log all variables to the console again.
*/

// --v-- write your code here --v--

// console all variables to the console.

console.log(`Book Title: ${bookTitle}`);
console.log(`Autor: ${author}`);
console.log(`Rating: ${rating}`);
console.log(`Sales: ${sales}`);

// incresing the number of sales and changing the rate of the book.

sales += 100
rating += 0.8
console.log(sales);
console.log(rating);

// --^-- write your code here --^--

/*
3: This code is quite repetitive and hard to read.
 - Write a function called logBookData which console logs all
   variables when it is called.
 - Then replace the console logs above with this function.
 - Now increase the number of sales 2 more times and log the data after each increase.
*/

// --v-- write your code here --v--

function logBookData () {
console.log(`Book Title: ${bookTitle}`);
console.log(`Autor: ${author}`);
console.log(`Rating: ${rating}`);
console.log(`Sales: ${sales}`);
}

logBookData();

sales += 20;
logBookData();

sales += 50;
logBookData();


// --^-- write your code here --^--
