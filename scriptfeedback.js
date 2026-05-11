const form = document.getElementById('feedbackForm');
const successMessage = document.getElementById('successMessage');

form.addEventListener('submit', function(e){
    e.preventDefault();

    // Simple validation already handled by required

    successMessage.innerText = "✅ Thank you! Your feedback has been submitted.";

    form.reset();

    setTimeout(()=>{
        successMessage.innerText = "";
    },3000);
});