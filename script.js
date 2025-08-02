document.addEventListener("DOMContentLoaded", () => {
  // Form and feedback div selection
  const form = document.getElementById("registration-form");
  const feedbackDiv = document.getElementById("form-feedback");

  form.addEventListener("submit", function (event) {
    // Include event.preventDefault to prevent normal submission
    event.preventDefault(); 
