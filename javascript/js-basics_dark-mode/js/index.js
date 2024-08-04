console.clear();

// 1. Query all buttons using their 'data-js' attributes
const bodyElement = document.querySelector('[data-js="body"]');
const darkModeButton = document.querySelector('[data-js="dark-mode-button"]');
const lightModeButton = document.querySelector('[data-js="light-mode-button"]');
const toggleModeButton = document.querySelector('[data-js="toggle-button"]');

// 2. Add event listeners to each button.

darkModeButton.addEventListener("click", () => {
bodyElement.classList.add("dark");
});


lightModeButton.addEventListener("click", () => {
  bodyElement.classList.remove("dark");
});

toggleModeButton.addEventListener("click", () => {
bodyElement.classList.toggle("dark");
});

