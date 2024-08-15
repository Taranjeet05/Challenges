import { countries } from "./utils/countries.js";
import { Country } from "./components/Country/Country.js";

const container = document.querySelector('[data-js="card-container"]');
const queryInput = document.querySelector('[data-js="query-input"]');

queryInput.addEventListener("input", (event) => {
  container.innerHTML = "";

  const searchString = event.target.value;

  // Task 2: Find all matching countries
  const foundCountries = countries.filter(country => country.name.startsWith(searchString));

  if (foundCountries.length > 0) {
    foundCountries.forEach(country => {
      const countryElement = Country(country);
      container.append(countryElement);
    });
  }
});

