console.clear();

function handleUserLogin(onSuccess) {
  onSuccess("Jane Doe");
}

// The exercise starts here!
handleUserLogin(function(userName) {
  console.log('User logged in successfully! Welcome, ' + userName);
});
