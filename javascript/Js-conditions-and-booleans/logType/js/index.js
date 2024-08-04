// logType.js

let data;

// Function to log the type of data
function logType(data) {
  switch (typeof data) {
    case "undefined":
      console.log("undefined!");
      break;
    case "number":
      if (isNaN(data)) {
        console.log("not a number!");
      } else {
        console.log("number!");
      }
      break;
    case "string":
      console.log("string!");
      break;
    case "boolean":
      console.log("boolean!");
      break;
    case "bigint":
      console.log("bigint!");
      break;
    case "function":
      console.log("function!");
      break;
    case "object":
      if (data === null) {
        console.log("null!");
      } else if (Array.isArray(data)) {
        console.log("array!");
      } else {
        console.log("object!");
      }
      break;
    default:
      console.log("I have no idea!");
  }
}

// Test different values
logType(undefined); // "undefined!"
logType(null); // "null!"
logType(42); // "number!"
logType(NaN); // "not a number!"
logType("Hello"); // "string!"
logType(true); // "boolean!"
logType(100n); // "bigint!"
logType(function() {}); // "function!"
logType({}); // "object!"
logType([]); // "array!"
logType(Symbol()); // "I have no idea!"
