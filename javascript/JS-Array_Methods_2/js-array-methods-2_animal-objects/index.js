console.clear();

const animals = [
  {
    name: "cat",
    weight: 4,
    continents: [
      "Europe",
      "Asia",
      "Africa",
      "Australia",
      "North-America",
      "South-America",
    ],
  },
  {
    name: "dog",
    weight: 10,
    continents: [
      "Europe",
      "Asia",
      "Africa",
      "Australia",
      "North-America",
      "South-America",
    ],
  },
  { name: "elephant", weight: 4000, continents: ["Africa", "Asia"] },
  {
    name: "rabbit",
    weight: 2,
    continents: [
      "Europe",
      "Asia",
      "Africa",
      "Australia",
      "North-America",
      "South-America",
    ],
  },
  { name: "lion", weight: 200, continents: ["Africa"] },
  { name: "tiger", weight: 150, continents: ["Asia"] },
  {
    name: "horse",
    weight: 500,
    continents: [
      "Europe",
      "Asia",
      "Africa",
      "Australia",
      "North-America",
      "South-America",
    ],
  },
  { name: "giraffe", weight: 600, continents: ["Africa"] },
  { name: "zebra", weight: 300, continents: ["Africa"] },
  {
    name: "penguin",
    weight: 12,
    continents: ["Africa", "Australia", "Antarctica", "South-America"],
  },
  {
    name: "polar bear",
    weight: 450,
    continents: ["North-America", "Asia", "Arctic"],
  },
  { name: "panda", weight: 120, continents: ["Asia"] },
  { name: "koala", weight: 13, continents: ["Australia"] },
  { name: "kangaroo", weight: 70, continents: ["Australia"] },
  {
    name: "monkey",
    weight: 20,
    continents: ["South-America", "Asia", "Africa"],
  },
  { name: "sloth", weight: 8, continents: ["South-America"] },
  { name: "hippo", weight: 1500, continents: ["Africa"] },
  { name: "rhino", weight: 2000, continents: ["Asia", "Africa"] },
];

// Hint: Besides the array method, check out the string method `startsWith()`.
const firstAnimalStartingWithLetterG = animals.find(animal =>
  animal.name.startsWith("g")
);

// Find the index of the first animal with a name longer than five characters
const indexOfAnimalWithNameLongerFive = animals.findIndex(
  animal => animal.name.length > 5
);

// Sort animals alphabetically by name
const animalsSortedAlphabetically = animals
  .slice()
  .sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0));

// Sort animals by weight, starting with the lowest
const animalsSortedByWeightStartingWithLowest = animals
  .slice()
  .sort((a, b) => a.weight - b.weight);

// Sort animals by weight, starting with the highest
const animalsSortedByWeightReversed = animals
  .slice()
  .sort((a, b) => b.weight - a.weight);

// Check if any animal has a weight greater than 500
const animalWithWeightMoreThanFivehundredExists = animals.some(
  animal => animal.weight > 500
);

// Filter for animals in Europe and check if all weigh less than 100
const allAnimalsInEuropeWeighLessThanOnehundred = animals
  .filter(animal => animal.continents.includes("Europe"))
  .every(animal => animal.weight < 100);

// Calculate the total weight of all animals in Africa
const weightOfAllAnimalsInAfrica = animals
  .filter(animal => animal.continents.includes("Africa"))
  .reduce((total, animal) => total + animal.weight, 0);

// Calculate the average weight of animals in Africa
const africanAnimals = animals.filter(animal =>
  animal.continents.includes("Africa")
);
const averageWeightOfAllAnimalsInAfrica =
  africanAnimals.reduce((total, animal) => total + animal.weight, 0) /
  africanAnimals.length;

export {
  firstAnimalStartingWithLetterG,
  indexOfAnimalWithNameLongerFive,
  animalsSortedAlphabetically,
  animalsSortedByWeightStartingWithLowest,
  animalsSortedByWeightReversed,
  animalWithWeightMoreThanFivehundredExists,
  allAnimalsInEuropeWeighLessThanOnehundred,
  weightOfAllAnimalsInAfrica,
  averageWeightOfAllAnimalsInAfrica,
};
