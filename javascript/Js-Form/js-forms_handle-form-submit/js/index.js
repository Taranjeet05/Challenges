console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener('submit', function(event) {
  event.preventDefault(); 

  //  object to store form data
  const formData = {
    firstName: form.firstName.value,
    lastName: form.lastName.value,
    age: form.age.value,
    email: form.email.value,
    complaint: form.complaint.value,
    details: form.details.value,
    badness: form.badness.value,
    orderDate: form.orderDate.value,
    tos: form.tos.checked, 
  };

  
  console.log('Form Data:', formData);

  // Reset form
  form.reset();

  // focus on "First Name"
  form.firstName.focus();
});
