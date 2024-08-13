console.clear();

function handleUserLogin(onSuccess) {
  onSuccess("Jane Doe", "admin");
}

// The exercise starts here!
handleUserLogin(function(userName, role) {
  console.log(`User logged in successfully! Welcome, ${userName}. Role: ${role}`);
});
