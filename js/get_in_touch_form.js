document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("bfl5qS9PKeeMl_SvW"); // ✅ Your Public Key

    document.getElementById('contact-form').addEventListener('submit', function (event) {
      event.preventDefault();
      document.getElementById('status').innerText = "Sending...";

      emailjs.sendForm('service_i0f2fqq', 'template_lmonb7g', this)
        .then(function () {
          document.getElementById('status').innerText = "✅ Message sent successfully!";
          document.getElementById('contact-form').reset();
        }, function (error) {
          document.getElementById('status').innerText = "❌ Failed to send message. Try again.";
          console.error('EmailJS Error:', error);
        });
    });
  });