document.addEventListener("DOMContentLoaded", () => {
  // Form and feedback div selection
  const form = document.getElementById("registration-form");
  const feedbackDiv = document.getElementById("form-feedback");

  form.addEventListener("submit", function (event) {
    // Include event.preventDefault to prevent normal submission
    event.preventDefault(); 


  // Retrieve and trim input values by id
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim(); 

    // Validation logic

     let isValid = true;
     const messages = [];

