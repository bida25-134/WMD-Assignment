// script.js – Lefatshe Mushrooms
// Loaded at the bottom of contact.html before </body>

// Wait for the page to fully load before running
document.addEventListener('DOMContentLoaded', function () {

  // Get the form element by its id
  var form = document.getElementById('order-form');

  // Only run this code if the form exists on the page
  if (!form) return;

  // Listen for the form submit event
  form.addEventListener('submit', function (event) {

    // Stop the page from reloading (default browser behaviour)
    event.preventDefault();

    // Get the values the user typed in
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var product = document.getElementById('product').value;
    var quantity = document.getElementById('quantity').value;

    // Check that all required fields are filled in
    if (name === '' || email === '' || product === '' || quantity === '') {
      alert('Please fill in all required fields before submitting.');
      return;
    }

    // Check that the quantity is a positive number
    if (quantity <= 0) {
      alert('Please enter a valid quantity greater than zero.');
      return;
    }

    // If all checks pass, show a success message
    alert('Thank you, ' + name + '! Your enquiry has been submitted. We will be in touch soon.');

    // Reset the form fields
    form.reset();

  });

});
