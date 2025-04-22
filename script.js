function sendMail() {
    let parms = {
      name: document.getElementById("fullname").value, // Corrected from "name"
      email: document.getElementById("email").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("details").value, // Corrected from "message"
    };
  
    emailjs
      .send("service_aedoazm", "template_jps1zas", parms)
      .then(function(response) {
        alert("Email Sent Successfully!");
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch(function(error) {
        alert("Failed to send email. Error: " + error);
        console.error("FAILED...", error);
      });
  }
  
  function submitForm(event) {
    event.preventDefault(); // Prevent actual submission
  
    // Call sendMail to handle email sending
    sendMail();
  
    // Simulate success and redirect after 2 seconds (optional)
    setTimeout(function() {
      window.location.href = "index.html";
    }, 2000);
  }
  