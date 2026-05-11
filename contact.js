// Feedback form
const feedbackForm = document.getElementById('feedbackForm');
if (feedbackForm) {
    feedbackForm.addEventListener('submit', function(e){
        e.preventDefault();
        document.getElementById('successMessage').innerText =
            "✅ Thank you! Your feedback has been submitted.";
        feedbackForm.reset();
        setTimeout(()=> {
            document.getElementById('successMessage').innerText = "";
        }, 3000);
    });
}

// Contact form
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e){
        e.preventDefault();
        document.getElementById('contactSuccess').innerText =
            "✅ Message sent successfully! We will contact you soon.";
        contactForm.reset();
        setTimeout(()=> {
            document.getElementById('contactSuccess').innerText = "";
        }, 3000);
    });
}