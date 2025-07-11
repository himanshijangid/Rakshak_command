

  document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("l0TYqgAOfHO66dxTj"); // Your Public Key

    document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault();
      document.getElementById('status').innerText = "Sending...";

      emailjs.sendForm('service_sb40ing', 'template_weeuc1b', this)
        .then(function() {
            document.getElementById('status').innerText = "✅ Message sent successfully!";
            document.getElementById('contact-form').reset();
        }, function(error) {
            document.getElementById('status').innerText = "❌ Failed to send message. Try again.";
            console.error('EmailJS Error:', error);
        });
    });
  });


  

