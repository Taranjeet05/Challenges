import { Wheel } from "./components/Wheel/Wheel.js";
import { SpinButton } from "./components/SpinButton/SpinButton.js";
import { Machine } from "./components/Machine/Machine.js";
import { Result } from "./components/Result/Result.js";
import { getMaxCount } from "./utils/symbols.js"; // Import the getMaxCount function

console.clear();

const root = document.body;

// Assemble the machine… (nothing to change here)
const machine = Machine();
const wheel1 = Wheel();
const wheel2 = Wheel();
const wheel3 = Wheel();
machine.append(wheel1, wheel2, wheel3);
const spinButton = SpinButton();
const result = Result();
root.append(machine, spinButton, result);

// Spin the machine on button click…
// This time the function is already defined as an async function. 🫡
//                                      ↙️
spinButton.addEventListener("click", async () => {
  try {
    spinButton.disabled = true; 
    result.setSpinning();       

    /**
     * Hint 1:
     * The wheel elements have a spin method that returns a promise.
     * That promise resolves with the symbol that the wheel stopped on.
     * You can call it like this: `wheel1.spin()`, `wheel2.spin()` and
     * `wheel3.spin()`.
     */
    const [symbol1, symbol2, symbol3] = await Promise.all([
      wheel1.spin(),
      wheel2.spin(),
      wheel3.spin(),
    ]);

    /**
     * Hint 2:
     * You can use Promise.all to wait for all promises to resolve.
     */

    // Store the symbols in an array
    const symbols = [symbol1, symbol2, symbol3];

    /**
     * Hint 3:
     * `utils/symbols.js` exports a `getMaxCount` function that returns the
     * maximum number of times any symbol appears in an array of symbols.
     * e.g. `['🍉', '🍉', '🍇']` => 2
     */
    const maxCount = getMaxCount(symbols);

    let points;

    /**
     * Hint 4:
     * Three identical symbols are worth 100 points.
     * Two identical symbols are worth 10 points.
     * Every other combination is worth 0 points.
     */
    if (maxCount === 3) {
      points = 100; 
    } else if (maxCount === 2) {
      points = 10;  
    } else {
      points = 0;   
    }

    /**
     * Hint 5:
     * You can use `result.setResult(newPoints)` to update the result display
     * and keep track of the score.
     */
    result.setResult(points); 
  } catch (error) {
    /**
     * Hint 7:
     * On occasion, the spin function will throw an error. You can use a
     * try/catch block for the whole event handler function body to handle
     * the error.
     * Use `result.setMachineChoked()` inside the catch block to let the user
     * know what happened and to subtract some points from the score.
     */
    result.setMachineChoked(); 
  } finally {
    /**
     * Hint 8:
     * Be careful where you put the `spinButton.disabled = false` statement
     * and make sure it is always executed after the wheels have stopped,
     * even if an error was thrown.
     */
    spinButton.disabled = false; 
  }
});

/**
 * Bonus hint:
 * You can change the symbols that appear on the wheels by changing the
 * `baseSymbols` array in `utils/symbols.js`. Have fun!
 */
