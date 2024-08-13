console.clear();

function handleUserLogin(onSuccess, onError, userName) {
  if (userName === "Jane Doe") {
    onSuccess(userName, "admin");
  } else {
    onError(`Unknown user "${userName}"`);
  }
}

// The exercise starts here!
handleUserLogin(
  function(userName, role) {
    console.log(`User logged in successfully! Welcome, ${userName}. Role: ${role}`);
  },
  function(errorMessage) {
    console.log(`Error: ${errorMessage}`);
  },
  "Jane Doe" // You can change this to test the error scenario
);
