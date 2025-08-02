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

     // Validating username: 3 characters long
     if (username.length < 3) {
      isValid = false;
      messages.push("Username must be at least 3 characters long.");
    }
    
     // Email validation: should include '@' and '.'
    if (!email.includes("@") || !email.includes(".")) {
      isValid = false;
      messages.push("Email must contain '@' and '.' characters.");
    }

    // Password validation: at least 8 characters
    if (password.length < 8) {
      isValid = false;
      messages.push("Password must be at least 8 characters long.");
    }

    // Display feedback
    feedbackDiv.style.display = "block"; // ensure it's visible
    if (isValid) {
        //if successful show green
      feedbackDiv.textContent = "Registration successful!";
      feedbackDiv.style.color = "#28a745"; 

    } else {
        //otherwise show red
      feedbackDiv.innerHTML = messages.join("<br>");
      feedbackDiv.style.color = "#dc3545"; 
    }
  });
});