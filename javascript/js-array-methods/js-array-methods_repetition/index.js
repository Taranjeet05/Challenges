const recipes = [
  {
    title: "Crepes",
    duration: 60,
    ingredients: ["butter", "flour", "eggs", "milk", "salt"],
    servings: 3,
  },
  {
    title: "Scrambled Eggs",
    duration: 20,
    ingredients: ["eggs", "milk", "salt"],
    servings: 2,
  },
  {
    title: "Vegan Salmon",
    duration: 60 * 24 * 3, // 3 days
    ingredients: [
      "carrots",
      "olive oil",
      "nori sheets",
      "liquid smoke",
      "soy sauce",
    ],
    servings: 10,
  },
  {
    title: "Carrot Cake",
    duration: 120,
    ingredients: ["carrots", "flour", "eggs", "salt", "milk", "sugar"],
    servings: 10,
  },
];

/*
 1: `map` exercises
*/

//  1:  array of all recipe titles
const onlyTitles = recipes.map(recipe => recipe.title);

//  2:  array of titles with durations in minutes appended
const titlesWithDuration = recipes.map(
  recipe => `${recipe.title} (${recipe.duration}min)`
);

//  3:  array of time per for each recipe
const timePerServing = recipes.map(recipe => recipe.duration / recipe.servings);

// Extra Task: Join all titles into a single string, separated by commas
const allTitlesInOneString = recipes.map(recipe => recipe.title).join(', ');

/*
 2: `filter` exercises
*/

//  1:  recipes that take 60 minutes or less
const recipesThatOnlyTake60minutesOrLess = recipes.filter(recipe => recipe.duration <= 60);

//  2:  recipes with more than 2 servings
const allRecipesWithMoreThan2Servings = recipes.filter(recipe => recipe.servings > 2);

//  3:  recipes with titles longer than 12 characters
const allRecipesWithTitlesLongerThan12Characters = recipes.filter(recipe => recipe.title.length > 12);

export {
  onlyTitles,
  titlesWithDuration,
  timePerServing,
  allTitlesInOneString,
  recipesThatOnlyTake60minutesOrLess,
  allRecipesWithMoreThan2Servings,
  allRecipesWithTitlesLongerThan12Characters,
};

console.log(onlyTitles); 
console.log(titlesWithDuration); 
console.log(timePerServing); 
console.log(allTitlesInOneString); 
console.log(recipesThatOnlyTake60minutesOrLess); 
console.log(allRecipesWithMoreThan2Servings); 
console.log(allRecipesWithTitlesLongerThan12Characters); 