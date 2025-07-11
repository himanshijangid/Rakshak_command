
document.addEventListener('DOMContentLoaded', function() {
    emailjs.init('l0TYqgAOfHO66dxTj');

    document.getElementById('openPopupBtn').addEventListener('click', function() {
        document.getElementById('popupOverlay').style.display = 'flex';
    });

    document.getElementById('closePopupBtn').addEventListener('click', function() {
        document.getElementById('popupOverlay').style.display = 'none';
    });

    const inquiryForm = document.getElementById('inquiryForm');
    const formStatus = document.getElementById('formStatus');

    inquiryForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent page reload

        const serviceID = 'service_sb40ing';
        const templateID = 'template_z8rs2bb';

        formStatus.style.color = '#333';
        formStatus.textContent = 'Sending...';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                formStatus.style.color = 'green';
                formStatus.textContent = '✅ Thank you! Your inquiry has been submitted.';
                setTimeout(() => {
                    document.getElementById('popupOverlay').style.display = 'none';
                    inquiryForm.reset();
                    formStatus.textContent = '';
                }, 3000);
            }, (err) => {
                formStatus.style.color = 'red';
                formStatus.textContent = '❌ Failed to send. Please try again.';
                console.error(err);
            });
    });
});

