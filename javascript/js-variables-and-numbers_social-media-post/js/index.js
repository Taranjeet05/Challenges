console.clear();

/*
1. Create the data for a small social media post. Create a const variable for each data point listed below.:
	- a title
	- a text
	- the number of likes
	- the user who created the post
	- a boolean called isReported
*/

// --v-- write your code here --v--
const postTitle = 'Hello world !';
const postText = 'Great time to learn more about javascript in a bootcamp with experinced teachers';
let postLikes = 500;
const postUser = 'Taranjeet_Singh'
const isReported = true;

// --^-- write your code here --^--

/*
2. Log all variables to the console. Increase the likes by one and log the amount of likes again. Adapt your code from 1.1 if necessary.
*/

// --v-- write your code here --v--
console.log(postTitle);
console.log(postText);
console.log(postLikes);
console.log(postUser);
console.log(isReported);
// --^-- write your code here --^--

// Increses the likes by one and log the amount of likes again.

postLikes ++
console.log(postLikes);