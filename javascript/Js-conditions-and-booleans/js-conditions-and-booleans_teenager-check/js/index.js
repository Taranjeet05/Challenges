const input = document.querySelector('[data-js="age-input"]');
const button = document.querySelector('[data-js="age-button"]');

button.addEventListener("click", () => {
  // Number(x) converts the string from the input to a number
  // Beware: input values are *always* strings!
  const age = Number(input.value);

  // Exercise:
  // Use conditions and the logical AND operator to write
  // "You are a teen." or "You are not a teen." into the console.

  if (age >= 13 && age <= 19) {
    console.log(`You are a teenager.`);
  } else {
    console.log(`You are not a teenager.`);
  }
});
